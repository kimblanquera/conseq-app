import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AuthResponse, ExchangeRequestBody } from '../models/auth-response';
import { environment } from 'src/environments/environment';
import { EXCHANGE_CODE, EXCHANGE_GRANT } from '../api/auth.api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly http: HttpClient, private readonly cookieService: CookieService) {}

  get token(): string | undefined {
    const accessToken: string = this.cookieService.get('token');
    if (accessToken) {
      return JSON.parse(window.atob(window.atob(JSON.parse(accessToken)))) as string;
    }
    return undefined;
  }

  get isLoggedIn(): boolean {
    return this.token ? true : false;
  }

  async exchangeCode(code: string) {
    if (code) {
      const requestBody: ExchangeRequestBody = {
        grant_type: EXCHANGE_GRANT,
        client_id: environment.client_id,
        client_secret: environment.client_secret,
        redirect_uri: environment.redirect_uri,
        code: code
      }

      const result = await this.http.post(EXCHANGE_CODE, requestBody, {
        headers: {
          'Accept': '*/*',
          'Access-Control-Allow-Origin': 'http://localhost:4200'
        }
      }).toPromise()

      if(result) {
        console.log(result);
      }
    }
    
  }

  saveAuthResponse(authResponseData: AuthResponse): void {
    const token: string = authResponseData?.access_token;
    const refreshToken: string = authResponseData.refresh_token;

    const encodedToken: string = window.btoa(window.btoa(JSON.stringify(token.replace(/\"/g, ''))));
    const date: Date = new Date(0);
    date.setUTCSeconds(authResponseData.expires_in);

    this.cookieService.set('expiry', date.toString());

    this.cookieService.set('token', JSON.stringify(encodedToken), date, '/');

    if (refreshToken) {
      this.cookieService.set('refreshToken', refreshToken.replace(/\"/g, ''));
    }
    this.startRefreshTokenTimer(date);
  }

  private refreshTokenTimeout: ReturnType<typeof setTimeout> = setTimeout(() => null, 0);

  startRefreshTokenTimer(expiry: Date) {
    let timeout: number = expiry.getTime() - Date.now() - 60 * 1000;
    timeout = timeout - 10000;
    this.refreshTokenTimeout = setTimeout(() => this.getRefreshToken(), timeout);
  }

  stopRefreshTokenTimer() {
    clearTimeout(this.refreshTokenTimeout);
  }

  getRefreshToken() {
    const refreshToken: string = this.cookieService.get('refreshToken');
    if (refreshToken?.length) {

    }
  }

}
