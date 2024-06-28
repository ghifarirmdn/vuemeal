<template>
  <header
    class="bg-white shadow h-16 flex justify-between items-stretch fixed w-full top-0 z-10"
  >
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center h-full px-5"
    >
      Home
    </router-link>
    <div class="flex items-center gap-1">
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center transition-colors px-2 h-full hover:bg-purple-100"
        >Search Meals</router-link
      >
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center transition-colors px-2 h-full hover:bg-purple-100"
        >Meals By Letter</router-link
      >
      <!-- <router-link
        :to="{ name: 'ingredients' }"
        class="inline-flex items-center transition-colors px-2 h-full hover:bg-purple-100"
        >Meals By ingredient</router-link
      > -->
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style></style>
