import React, { Component } from 'react';
import List from './components/list_container';
import configureStore from "./store/store";
import styles from './stylesheets/main.css'

import { Provider } from "react-redux";

class App extends Component {
  render() {

    let store = configureStore()

    return <Provider store={store}>
        <div className = 'list-container'>
          <List />
          <List />
          <List />
        </div>
      </Provider>;
  }
}

export default App;
