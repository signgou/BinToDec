<template>
  <div class="banner">
    Binary To Decimal  
  </div>
  <div class="transform">
    <input type="text" v-model="Bin"  placeholder="Please input a binary number" />  
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
    border-radius: 10px;
    font-size: 0.7rem;
    transition: all 1s;
    box-shadow: 0 0 2px 2px rgb(88, 81, 81);
  }
  input:focus{
    outline: none;
  }
}
@media screen and (min-width : 1200px) {
    .transform input{
      width: 20rem;
      height: 2rem;
      font-size: 1rem;
    }
    .banner{
      font-size: 3rem;
    } 
}
</style>