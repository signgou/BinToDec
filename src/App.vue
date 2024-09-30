<template>
  <div class="wrapper">
    <InputBin></InputBin>
    <Show></Show>
  </div>
</template>


<script setup>
  import Show from './components/Show.vue';
  import IuputBin from './components/InputBin.vue'
</script>
<style>
  .wrapper{
    width: 100%;
    height: 20rem;
    margin: 5rem auto;
    display: flex;
    justify-content: space-around;
    flex-flow: column wrap;
    align-content: center;
    gap:1rem;
  }
</style>