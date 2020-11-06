import React from "react";
import { Provider } from "react-redux";
import store from "./src/config/store.js";
import Routes from "./src/Routes";

export default class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.disableYellowBox = true;
  }

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
