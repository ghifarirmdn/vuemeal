<template>
  <div class="flex flex-col p-8"></div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import axiosClient from "../axiosClient";

const ingredients = ref([]);

onMounted(async () => {
  const res = axiosClient
    .get("/list.php?i=list")
    .then((res) => {
      console.log(res.data);
      ingredients.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>
