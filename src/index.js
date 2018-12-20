import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import store from './store';

import './index.scss';

const withProvider = (children) => (
  <Provider store={store}>
    {children}
  </Provider>
);

render(withProvider(
  <App/>
), document.getElementById('root'));
