import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  url: string = "https://auth.truelayer-sandbox.com/?response_type=code&client_id=sandbox-consequencekim2021-1e80ec&scope=info%20accounts%20balance%20cards%20transactions%20direct_debits%20standing_orders%20offline_access&redirect_uri=http://localhost:4200/auth&providers=uk-ob-all%20uk-oauth-all%20uk-cs-mock";

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.pipe(takeUntil(this.destroy$)).subscribe((params: ParamMap) => {
      if(params.has("code")) {
        const code: string | undefined = params.get("code")?.toString();
      }
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

}
