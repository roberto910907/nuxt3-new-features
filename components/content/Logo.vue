<script setup>
defineProps({
  imageSrc: {
    type: String,
    default: ''
  },
  imageClass: {
    type: String,
    default: 'mx-auto'
  },
  imageAlt: {
    type: String,
    default: ''
  },
  width: {
    type: Number,
  },
  height: {
    type: Number,
  }
})
</script>

<template>
  <img :src="imageSrc" :alt="imageAlt" :width="width" :height="height" :class="imageClass" />
</template>
