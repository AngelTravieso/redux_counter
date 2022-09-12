import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';

import store from './app/store';
import { ReduxCounterApp } from './ReduxCounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <ReduxCounterApp />
    </Provider>
  </React.StrictMode>
)
