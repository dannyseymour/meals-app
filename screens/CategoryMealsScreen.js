import React from 'react';
import {Button, View, Text, FlatList, StyleSheet} from 'react-native';
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const CategoryMealScreen = props => {

  const renderMealItem = (itemData) =>{
    return(
       <MealItem title={itemData.item.title} duration={itemData.item.duration}
                 complexity={itemData.item.complexity}
                 affordability={itemData.item.affordability}
                 image={itemData.item.imageUrl}
                 onSelectMeal={()=>{
                   props.navigation.navigate({routeName: 'MealDetails', params:{
                   mealId: itemData.item.id,
                     }
                   })}}/>)
  };
  const catId = props.navigation.getParam('categoryId');
  const displayMeals = MEALS.filter(meal=> meal.categoryIds.indexOf(catId) >= 0);

  return (
      <View style={styles.screen}>
       <FlatList data={displayMeals} renderItem={renderMealItem}
       style={{width: '100%'}}/>
      </View>
  );
};

CategoryMealScreen.navigationOptions = (navigationData) => {
 const catId = navigationData.navigation.getParam('categoryId')
  const selectedCategory = CATEGORIES.find(cat=> cat.id===catId);
 return {
   headerTitle: selectedCategory.title,

 };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealScreen;
