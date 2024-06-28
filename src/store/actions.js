import axiosClient from "../axiosClient";

export const searchMeals = async ({ commit }, keyword) => {
  await axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
    console.log(data);
    commit("setSearchedMeals", data.meals);
  });
};

export const searchMealsByLetter = async ({ commit }, letter) => {
  await axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
    console.log(data);
    commit("setMealsByLetter", data.meals);
  });
};

export const searchMealsByIngredient = async ({ commit }, ingredient) => {
  await axiosClient.get(`filter.php?i=${ingredient}`).then(({ data }) => {
    console.log(data);
    commit("setMealsByIngredients", data.meals);
  });
};
