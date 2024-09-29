<template>
  <div class="wrapper">
    <InputBin></InputBin>
    <Show></Show>
  </div>
</template>


<script setup>
  import Show from './components/Show.vue';
  import IuputBin from './components/InputBin.vue'
  import {ref} from 'vue'
</script>
<style>
  .wrapper{
    width: 40rem;
    height: 20rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-flow: column wrap;
    align-content: center;
  }
</style>