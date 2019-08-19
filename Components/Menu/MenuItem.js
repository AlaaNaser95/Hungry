import React, { Component } from "react";

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
import Toast from "react-native-simple-toast";
import { connect } from "react-redux";
import { addOneItemToCart } from "../../store/actionCreators";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

class MenuItem extends Component {
  calculateTotalForItem(itemPrice, quantity) {
    let total = itemPrice * quantity;
    total = Math.round(1000 * total) / 1000;
    return total.toFixed(3);
  }

  render() {
    let item = this.props.item;

    return (
      <TouchableWithoutFeedback
        style={{ margin: 0 }}
        onPress={() => {
          this.props.addOneItemToCart(item);
          Toast.show("Item successfuly added");
        }}
      >
        <Card>
          <CardItem header>
            <Left>
              {item.image ? (
                <Thumbnail
                  source={{
                    uri: item.image
                  }}
                />
              ) : (
                <Thumbnail source={require("../../assets/noImage.png")} />
              )}
              <Body>
                <Text>{item.dish}</Text>
                <Text note>{item.description}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body
              style={{
                alignItems: "flex-end"
              }}
            >
              <Button success bordered rounded>
                <Text>{item.price.toFixed(3)} K.D</Text>
                <Icon name="cart" />
              </Button>
            </Body>
          </CardItem>
        </Card>
      </TouchableWithoutFeedback>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addOneItemToCart: item => {
    dispatch(addOneItemToCart(item));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(MenuItem);
