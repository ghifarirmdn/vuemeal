<template>
  <div class="flex gap-1 justify-center mt-10">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      :key="letter"
      v-for="letter of letters"
    >
      {{ letter }}
    </router-link>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import MealItem from "../components/MealItem.vue";

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter);

watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});

onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>

<style></style>
