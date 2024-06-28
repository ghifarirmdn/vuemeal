<template>
  <div :key="meal.idMeal" class="bg-white shadow rounded-xl">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl w-full object-cover h-48"
      />
    </router-link>

    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa at, esse
        deleniti facilis, accusantium non similique in, minima nulla id omnis
        odit. Assumenda vitae, laborum architecto accusamus quisquam ab sequi?
      </p>
      <div class="flex justify-between items-center">
        <YoutubeButton :href="meal.strYoutube" msg="Youtube" />
      </div>
    </div>
  </div>
</template>

<script setup>
import YoutubeButton from "./YoutubeButton.vue";

const { meal } = defineProps({
  meal: Object,
});
</script>
