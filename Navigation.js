import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Add from "./screens/AddRequest";
import Show from "./screens/ShowRequest";
import Home from "./screens/Home";

const HomeScreen = createStackNavigator({
  Home
});
const AddScreen = createStackNavigator({
  Add: {
    screen: Add,
    path: "Add"
  },
  Show: {
    screen: Show,
    path: "Show"
  }
});

const tabNavigator = createBottomTabNavigator({
  HomeScreen,
  AddScreen
});

export default createAppContainer(tabNavigator);
