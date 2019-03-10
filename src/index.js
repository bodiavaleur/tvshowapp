import React from 'react';
import './resets.css';
import ReactDOM from 'react-dom';
import TvShowApp from './TvShowApp';
import * as serviceWorker from './serviceWorker';
import { store } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <TvShowApp />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
