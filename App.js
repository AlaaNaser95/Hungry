import React, { Component } from "react";
import { StyleSheet } from "react-native";
import AppContainer from "./Navigation/Stack";
import { createStore } from "redux";
import reducer from "./store/reducers";
import { Provider } from "react-redux";
import { AppLoading } from "expo";
import * as Font from "expo-font";
const store = createStore(reducer);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
export default App;
