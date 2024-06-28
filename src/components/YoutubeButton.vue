<template>
  <a
    :href="href"
    target="_blank"
    class="px-3 py-2 rounded-md text-white bg-red-500 hover:bg-red-600 transition-colors"
    >{{ msg }}</a
  >
</template>

<script setup>
const props = defineProps({
  href: String,
  msg: String,
});
</script>
