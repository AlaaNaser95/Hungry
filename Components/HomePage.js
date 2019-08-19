import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Button, Container, Text, Icon } from "native-base";

class HomePage extends Component {
  static navigationOptions = { header: null };
  render() {
    return (
      <Container style={styles.container}>
        <Text style={styles.logo}>HUNGRY</Text>
        <Button
          light
          rounded
          bordered
          style={styles.navigationButton}
          onPress={() => {
            this.props.navigation.replace("Restaurants");
          }}
        >
          <Text>Find Restaurants</Text>
          <Icon name="arrow-forward" />
        </Button>
      </Container>
    );
  }
}
export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4511e",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    fontSize: 70,
    color: "#FFF"
  },
  navigationButton: {
    marginTop: 50
  }
});
