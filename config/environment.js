/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'sadhana-cli',
    podModulePrefix: 'sadhana-cli/pods',
    environment: environment,
    baseURL: '/',
    defaultLocationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    cordova: {
      rebuildOnChange: false,
      emulate: false
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.APP.API_HOST = 'http://localhost:3000'
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  ENV['simple-auth-devise'] = {
    resourceName: 'user',
    identificationAttributeName: 'email',
    serverTokenEndpoint: ENV.APP.API_HOST + '/users/sign_in'
  };

  ENV['simple-auth'] = {
    crossOriginWhitelist: [ENV.APP.API_HOST],
    authorizer: 'simple-auth-authorizer:devise',
    routeAfterAuthentication: 'practices'
  }

  ENV.contentSecurityPolicy = {
    'connect-src': "'self' " + ENV.APP.API_HOST,
    'img-src': "'self' http://s3.amazonaws.com"
  }

  return ENV;
};
