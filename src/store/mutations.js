export const setSearchedMeals = (state, meals) => {
  state.searchedMeals = meals || [];
};

export const setMealsByLetter = (state, meals) => {
  state.mealsByLetter = meals || [];
};

export const setMealsByIngredients = (state, meals) => {
  state.mealsByIngredient = meals || [];
};
