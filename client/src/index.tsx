import * as React from 'react';
import * as ReactDOM from 'react-dom';

import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import AppRouter from './routers';
import './styles/styles.scss';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app')!);