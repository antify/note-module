<script setup lang='ts'>
const showSkeleton = ref(true);
</script>

<template>
  <AntSkeleton
    v-model="showSkeleton"
    rounded
    class="h-40"
  />
</template>
