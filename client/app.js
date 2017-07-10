//within app.js
require('angular-cookie');
require('ng-token-auth');
const angular = require('angular');
angular
  .module('ArtistApp', ['ng-token-auth'])
  .config(function($authProvider) {
    $authProvider.configure({
      apiUrl: '/',
      tokenValidationPath: '/auth/validate_token',
      signOutUrl: '/auth/sign_out',
      emailRegistrationPath:   '/auth',
      accountUpdatePath:       '/auth',
      accountDeletePath:       '/auth',
      passwordResetPath:       '/auth/password',
      passwordUpdatePath:      '/auth/password',
      passwordResetSuccessUrl: window.location.href,
      emailSignInPath:         '/auth/sign_in',
      storage:                 'cookies',
      forceValidateToken:      false,
      validateOnPageLoad:      true,
      tokenFormat: {
      "access-token": "{{ token }}",
      "token-type":   "Bearer",
      "client":       "{{ clientId }}",
      "expiry":       "{{ expiry }}",
      "uid":          "{{ uid }}"
    },
    cookieOps: {
      path: "/",
      expires: 9999,
      expirationUnit: 'days',
      secure: false,
      domain: 'domain.com'
    },
    createPopup: function(url) {
        return window.open(url, '_blank', 'closebuttoncaption=Cancel');
      },
      parseExpiry: function(headers) {
        // convert from UTC ruby (seconds) to UTC js (milliseconds)
        return (parseInt(headers['expiry']) * 1000) || null;
      },
      handleLoginResponse: function(response) {
        return response.data;
      },
      handleAccountUpdateResponse: function(response) {
        return response.data;
      },
      handleTokenValidationResponse: function(response) {
        return response.data;
      }
    });
  });
