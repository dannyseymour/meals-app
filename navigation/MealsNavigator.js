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
import { createDrawerNavigator} from "react-navigation-drawer";
import FiltersScreen from "../screens/FiltersScreen";

const defaultStackNavOptions ={
  headerTitle: 'A Screen',
  headerStyle: {
    backgroundColor: Platform.OS ==='android' ? Colors.primaryColor : 'white'
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS ==='android' ? 'white' : Colors.primaryColor
};

const FavoritesNavigator = createStackNavigator({
      Favorites: FavoritesScreen,
      MealDetails: MealDetailScreen
    },
    {
      defaultNavigationOptions: defaultStackNavOptions }

);

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealsScreen
  },
  MealDetails: MealDetailScreen,
},
    {
      defaultNavigationOptions: defaultStackNavOptions}
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
        screen: FavoritesNavigator,
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
      tabBarOptions:{
        labelStyle: {
          fontFamily: 'open-sans-bold'
        },
        activeTintColor: Colors.accentColor
      }
    });
const FiltersNavigator = createStackNavigator({
  Filters: FiltersScreen
},{

  defaultNavigationOptions: defaultStackNavOptions});

const MainNavigator = createDrawerNavigator({
  MealsFavs: {
    screen: MealsFavTabNavigator,
    navigationOptions:{
      drawerLabel: 'Meals'
    }
  },
  Filters: FiltersNavigator,
},
    {
      contentOptions:{
        activeTintColor: Colors.accentColor,
        labelStyle: {
          fontFamily: 'open-sans-bold'
        }
      }
    });

export default createAppContainer(MainNavigator);



