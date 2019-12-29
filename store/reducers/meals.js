
import {MEALS} from '../../data/dummy-data'
const initialState = {
  meals : MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
};

const MealsReducer = (state = initialState, action) =>{
  return state;
};

export default MealsReducer;
