import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import CategoryMealScreen from "./CategoryMealsScreen";
import { HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'


const MealDetailScreen = props => {
  const mealId = props.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal=>meal.id===mealId);
  return (
      <View style={styles.screen}>
        <Text>{selectedMeal.title}</Text>
        <Button title="Go Back" onPress={()=>{
          props.navigation.pop()
        }} />
        <Button title="Go Home" onPress={()=>{
          props.navigation.popToTop()
        }} />
      </View>
  );
};
MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam('mealId')
  const selectedMeal = MEALS.find(meal => meal.id=== mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton} title={'favorite'}>
      <Item title='Favorite' iconName='ios-star' onPress={() =>{
        console.log('mark as favorite');
      }}
      />
    </HeaderButtons>
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MealDetailScreen;
