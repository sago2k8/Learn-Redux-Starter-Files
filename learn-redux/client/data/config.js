import Raven from 'raven-js';

const sentry_key = 'd67d04b7dac140538241694cd544dbfe';
const sentry_app = '173117';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
