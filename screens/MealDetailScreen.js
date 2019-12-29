import React from 'react';
import {View, Text, Image, StyleSheet, Button, ScrollView} from 'react-native';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import CategoryMealScreen from "./CategoryMealsScreen";
import { HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import DefaultText from "../components/DefaultText";


const ListItem = props =>{
  return <View style={styles.listItem}>
    <DefaultText>{props.children}</DefaultText>
  </View>
}

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal=>meal.id===mealId);
  return (
      <ScrollView>
        <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
        <View style = {styles.details}>
          <DefaultText>{selectedMeal.duration}m</DefaultText>
          <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
          <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
        </View>
        <Text style={styles.title}>Ingredients</Text>
        {selectedMeal.ingredients.map(ingredient => <ListItem key={ingredient}>{ingredient}</ListItem>)}
        <Text style={styles.title}>Steps</Text>
        {selectedMeal.steps.map(step => <ListItem key={step}>{step}</ListItem>)}

      </ScrollView>
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
  details:{
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  title:{
    fontFamily:'open-sans-bold',
    fontSize: 22,
    textAlign: 'center'
  },
  image:{
    width: '100%',
    height: 200
  },
  listItem:{
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  }
});

export default MealDetailScreen;
