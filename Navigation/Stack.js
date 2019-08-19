import { createStackNavigator, createAppContainer } from "react-navigation";
import Cart from "../Components/Cart";
import Menu from "../Components/Menu";
import RestaurantList from "../Components/RestaurantList";
import HomePage from "../Components/HomePage";
const stack = createStackNavigator(
  {
    HomePage: { screen: HomePage },
    Restaurants: { screen: RestaurantList },
    Menu: { screen: Menu },
    Cart: { screen: Cart }
  },
  {
    initialRouteName: "HomePage",
    headerLayoutPreset: "center",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTitleStyle: {
        fontSize: 25,
        fontWeight: "normal"
      },
      headerTintColor: "white"
    }
  }
);

const AppContainer = createAppContainer(stack);

export default AppContainer;
