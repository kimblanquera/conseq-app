export interface AuthResponse {
    access_token: string,
    expires_in: number,
    token_type: string,
    refresh_token: string,
    scope: string
}

export interface ExchangeRequestBody {
    grant_type: string,
    client_id: string,
    client_secret: string,
    redirect_uri: string,
    code: string
}

export interface RefreshRequestBody {
    grant_type: string,
    client_id: string,
    client_secret: string,
    refresh_token: string
}