import React from 'react';

import {render} from 'react-dom';

import css from './styles/style.styl';

import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

import {Router, Route, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './store';
import {sentry_url, logException} from './data/config';
import Raven from 'raven-js';
Raven.config(sentry_url, {
  tags: {
    git_commit: 'asdasdasda',
    userlevel: 'Editor'
  }
}).install();

// logException(new Error('download failed!'), {
//   email: 'sago2k8@gmail.com'
// })

// console.log(window.user.doesNotExist);
// console.log(store.doesNot.nope())
// Raven.captureMessage('something bad happened!');
// Raven.showReportDialog();
const router = (
  <Provider store={store}>
    <Router history = {history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}>
        </IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render( router, document.getElementById('root'));