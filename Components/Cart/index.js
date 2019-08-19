import React, { Component } from "react";

import { Container, Content, Card, CardItem, Button, Text } from "native-base";
import { FlatList } from "react-native";
import { connect } from "react-redux";
import { clearCart } from "../../store/actionCreators";
import CartItem from "./CartItem";

class Cart extends Component {
  static navigationOptions = { title: "Cart" };

  calculateSubtotal(cart) {
    let subTotal = 0;
    cart.forEach(cartItem => {
      subTotal += cartItem.item.price * cartItem.quantity;
    });
    subTotal = Math.round(1000 * subTotal) / 1000;

    return subTotal.toFixed(3);
  }

  render() {
    return (
      <Container>
        <Content style={{ backgroundColor: "#F5F4F5" }}>
          <FlatList
            data={this.props.cart}
            renderItem={({ item }) => <CartItem item={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </Content>

        <Card>
          <CardItem style={{ justifyContent: "space-between" }}>
            <Text>Subtotal:</Text>
            <Text>{this.calculateSubtotal(this.props.cart)} K.D</Text>
          </CardItem>
          <CardItem style={{ justifyContent: "space-around" }}>
            <Button
              bordered
              success
              onPress={() => this.props.navigation.navigate("Restaurants")}
            >
              <Text>ADD ITEMS</Text>
            </Button>

            <Button
              success
              onPress={() => {
                this.props.clearCart();
                alert("You just checkout");
              }}
            >
              <Text>CHECKOUT</Text>
            </Button>
          </CardItem>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  cartCount: state.cartCount
});

const mapDispatchToProps = dispatch => ({
  clearCart: () => {
    dispatch(clearCart());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
