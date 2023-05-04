import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TodoStore } from './store/todoStore';
import { Provider } from 'mobx-react';

const store = new TodoStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



