import React from 'react';
import ReactDOM from 'react-dom';
import Note from './util/note';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById("root");
  let store = configureStore();
  ReactDOM.render(<Root store={store} />, root);
});
