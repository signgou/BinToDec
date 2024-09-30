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
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  @media screen and (min-width : 1200px) {
    font-size: 2rem;
  }
}
</style>