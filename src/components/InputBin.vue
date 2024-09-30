<template>
  <div class="banner">
    Binary To Decimal  
  </div>
  <div class="transform">
    <input v-model="Bin"  placeholder="Please input a binary number" />  
  </div>
</template>
            
<script setup>
import { useB2DStore } from '@/stores/B2D';
import useBinRef from '@/hooks/useBinRef'
import { watch } from 'vue';

let Bin = useBinRef("");
const store = useB2DStore();
watch(Bin,(newValue)=>{
  store.binNum = newValue;
})

</script>
          
<style lang="less" scoped>
.banner{
    display:flex;
    justify-content: center;
    font-size: 1rem;
}
.transform{
  display: flex;
  justify-content: center;
  input{
    width: 10rem;
    border-radius: 15px;
    font-size: 1rem;
  }
}
@media screen and (min-width : 1200px) {
    .transform input{
      width: 20rem;
      height: 2rem;
    }
    .banner{
      font-size: 3rem;
    }
    
}
</style>