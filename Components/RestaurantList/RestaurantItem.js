import React, { Component } from "react";
import { Card, CardItem, Left, Thumbnail, Body, Icon, Text } from "native-base";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

class RestaurantItem extends Component {
  render() {
    const { navigate } = this.props.navigation;
    let item = this.props.item;
    return (
      <TouchableWithoutFeedback
        onPress={() => navigate("Menu", { restaurantObject: item })}
      >
        <Card>
          <CardItem header>
            <Left>
              {item.logo ? (
                <Thumbnail
                  source={{
                    uri: item.logo
                  }}
                />
              ) : (
                <Thumbnail source={require("../../assets/noImage.png")} />
              )}
              <Body>
                <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                <Text note>{item.cusine}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Icon style={{ color: "green" }} name="stopwatch" />
            <Text>{item.delivery}</Text>
          </CardItem>
        </Card>
      </TouchableWithoutFeedback>
    );
  }
}

export default RestaurantItem;
