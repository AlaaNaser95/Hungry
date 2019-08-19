import React, { Component } from "react";

import { Container, Content, Icon, Text } from "native-base";
import { SectionList } from "react-native";
import IconBadge from "react-native-icon-badge";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { connect } from "react-redux";
import MenuItem from "./MenuItem";

class Menu extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.cartCount != this.props.cartCount) {
      this.props.navigation.setParams({ cartCount: this.props.cartCount });
    }
  }

  componentWillMount() {
    this.props.navigation.setParams({ cartCount: this.props.cartCount });
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("restaurantObject", "restaurant").name,
      headerRight: (
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Cart")}>
          <IconBadge
            MainElement={
              <Icon name="cart" style={{ fontSize: 40, color: "black" }} />
            }
            BadgeElement={
              <Text style={{ color: "#FFFFFF", fontSize: 10 }}>
                {navigation.state.params.cartCount}
              </Text>
            }
            IconBadgeStyle={{ backgroundColor: "green" }}
          />
        </TouchableWithoutFeedback>
      )
    };
  };

  render() {
    let sections = this.props.navigation.getParam(
      "restaurantObject",
      "restaurant"
    ).menu;

    return (
      <Container>
        <Content padder style={{ backgroundColor: "#F5F4F5" }}>
          <SectionList
            sections={sections}
            renderSectionHeader={({ section }) => (
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {section.category}
              </Text>
            )}
            renderItem={({ item }) => <MenuItem item={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  cartCount: state.cartCount
});

export default connect(mapStateToProps)(Menu);
