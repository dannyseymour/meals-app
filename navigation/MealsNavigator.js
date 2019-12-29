import React from 'react';
import {createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import {Platform} from "react-native";
import Colors from "../constants/Colors";
import { createBottomTabNavigator} from "react-navigation-tabs";
import FavoritesScreen from "../screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealsScreen
  },
  MealDetails: MealDetailScreen,
},
    {
      defaultNavigationOptions: {
        headerTitle: 'Meals',
      headerStyle: {
        backgroundColor: Platform.OS ==='android' ? Colors.primaryColor : 'white'
      },
      headerTintColor: Platform.OS ==='android' ? 'white' : Colors.primaryColor
    }}
    );
const tabScreenConfig = {
      MealsStack: {
        screen: MealsNavigator,
        navigationOptions: {
          tabBarLabel: 'Meals',
          tabBarIcon: (tabInfo) =>{
            return <Ionicons name={'ios-restaurant'} size={25} color={tabInfo.tintColor}/>
          }
        },
        tabBarColor: Colors.primaryColor,
      },
      Favorites: {
        screen: FavoritesScreen,
        navigationOptions:{
          tabBarIcon: (tabInfo) =>{
            return <Ionicons name={'ios-star'} size={25} color={tabInfo.tintColor}/>
          }
        },
        tabBarColor: Colors.accentColor,
      },

    };


const MealsFavTabNavigator =  Platform.OS === 'android' ? createMaterialBottomTabNavigator(
    tabScreenConfig,
    {
      activeTintColor: 'white',
      shifting: true
    }
) : createBottomTabNavigator( tabScreenConfig,
    {
      tabBarOptions:{activeTintColor: Colors.accentColor}
    });

export default createAppContainer(MealsFavTabNavigator);



