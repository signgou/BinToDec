<template>
  <div class="show">
    <div v-show="decNum">该二进制数的十进制为{{ decNum }}</div>
    <div v-show="!decNum">欢迎使用B2D系统</div>
  </div>
</template>

<script setup>
import { useB2DStore } from '@/stores/B2D';
import { storeToRefs } from 'pinia';
  const store=useB2DStore();
  const {decNum} = storeToRefs(store);
  
</script>

<style lang="less" scoped>
.show{
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  transition: all 1s;
  @media screen and (min-width : 1200px) {
    font-size: 2rem;
    height: 10rem;
  }
}
</style>