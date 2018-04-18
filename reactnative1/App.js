import Expo from "expo";
import React from "react";
import App from "./js/App";

export default class App1 extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: true
    };
  }
  
  render() {
    if (!this.state.isReady) {
      return <Expo.Components.AppLoading />;
    }
    return <App />;
  }
}
