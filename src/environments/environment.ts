// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  client_id: 'sandbox-consequencekim2021-1e80ec',
  client_secret: '446bed0e-ec33-4140-952e-34d3d66a914e',
  auth_api: 'auth.truelayer-sandbox.com',
  api: 'api.truelayer-sandbox.com',
  redirect_uri: `http://localhost:4200/auth`,
  domain: 'http://localhost:4200',
  data_api: '/api/truelayer/accounts/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
