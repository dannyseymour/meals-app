import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MealList from "../components/MealList";
import { useSelector } from 'react-redux';
import FiltersScreen from "./FiltersScreen";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";


const FavoritesScreen = props => {
  const favMeals = useSelector(state=> state.meals.favoriteMeals);
  return (
      <MealList listData={favMeals} navigation={props.navigation}/>
  );
};

FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}
                               title={"Menu"}>
      <Item title="Menu" iconName='ios-menu' onPress={() => {
        navData.navigation.toggleDrawer();
      }}/>
    </HeaderButtons>
  }
};

export default FavoritesScreen;
