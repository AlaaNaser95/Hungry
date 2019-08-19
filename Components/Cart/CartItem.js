import React, { Component } from "react";

import { View } from "react-native";
import {
  Card,
  CardItem,
  Left,
  Thumbnail,
  Body,
  Button,
  Icon,
  Text
} from "native-base";
import NumericInput from "react-native-numeric-input";
import { Alert } from "react-native";
import { connect } from "react-redux";
import { changeQuantity, removeFromCart } from "../../store/actionCreators";
import Toast from "react-native-simple-toast";

class CartItem extends Component {
  calculateTotalForItem(itemPrice, quantity) {
    let total = itemPrice * quantity;
    total = Math.round(1000 * total) / 1000;
    return total.toFixed(3);
  }

  render() {
    let item = this.props.item;

    return (
      <Card>
        <CardItem header>
          <Left>
            {item.item.image ? (
              <Thumbnail
                source={{
                  uri: item.item.image
                }}
              />
            ) : (
              <Thumbnail source={require("../../assets/noImage.png")} />
            )}
            <Body>
              <Text style={{ fontWeight: "bold" }}>{item.item.dish}</Text>
            </Body>
          </Left>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <NumericInput
              totalWidth={100}
              totalHeight={40}
              rounded
              initValue={item.quantity}
              minValue={1}
              iconStyle={{ color: "orange" }}
              onChange={value => this.props.changeQuantity(item.item, value)}
            />
            <Button
              transparent
              onPress={() =>
                Alert.alert(
                  "",
                  `Are you sure to remove \"${item.item.dish}\" from cart?`,
                  [
                    {
                      text: "Remove",
                      onPress: () => {
                        this.props.removeItem(item.item);
                        Toast.show("Item successfully removed");
                      }
                    },
                    {
                      text: "Cancel",
                      style: "cancel"
                    }
                  ]
                )
              }
            >
              <Icon
                name="remove-circle"
                style={{ paddingTop: 10, color: "red" }}
              />
            </Button>
          </View>
        </CardItem>
        <CardItem>
          <Left>
            <Text note>Item Price: </Text>
            <Text>{item.item.price.toFixed(3)} K.D</Text>
          </Left>

          <Text note>Total: </Text>
          <Text>
            {this.calculateTotalForItem(item.item.price, item.quantity)}
            K.D
          </Text>
        </CardItem>
      </Card>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  changeQuantity: (item, quantity) => {
    dispatch(changeQuantity(item, quantity));
  },
  removeItem: item => {
    dispatch(removeFromCart(item));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(CartItem);
