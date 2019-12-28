import React from 'react';
import {createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import {Platform} from "react-native";
import Colors from "../constants/Colors";

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealsScreen
  },
  MealDetails: MealDetailScreen,
},
    {
      defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS ==='android' ? Colors.primaryColor : 'white'
      },
      headerTintColor: Platform.OS ==='android' ? 'white' : Colors.primaryColor
    }}
    );

export default createAppContainer(MealsNavigator);



