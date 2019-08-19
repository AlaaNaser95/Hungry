import React, { Component } from "react";
import { connect } from "react-redux";
import { FlatList } from "react-native";
import { Container, Content, Icon, Text } from "native-base";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import IconBadge from "react-native-icon-badge";
import RestaurantItem from "./RestaurantItem";
import content from "../../Content.json";

class RestuarantList extends Component {
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
      title: "HUNGRY",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 30,
        textTransform: "uppercase",
        letterSpacing: 1
      },
      headerRight: (
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Cart")}>
          <IconBadge
            MainElement={
              <Icon name="cart" style={{ fontSize: 40, color: "black" }} />
            }
            BadgeElement={
              <Text style={{ color: "#FFFFFF", fontSize: 10 }}>
                {navigation.getParam("cartCount", 0)}
              </Text>
            }
            IconBadgeStyle={{ backgroundColor: "green" }}
          />
        </TouchableWithoutFeedback>
      )
    };
  };

  render() {
    return (
      <Container>
        <Content padder style={{ backgroundColor: "#F5F4F5" }}>
          <FlatList
            data={content}
            renderItem={({ item }) => (
              <RestaurantItem item={item} navigation={this.props.navigation} />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  cartCount: state.cartCount
});

export default connect(mapStateToProps)(RestuarantList);
