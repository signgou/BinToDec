<template>
  <el-input v-model="Bin"  placeholder="Please input" />         
</template>
            
<script setup>
import {ElInput} from 'element-plus'
import { ref } from 'vue';

let Bin = ref('');
</script>
          
<style>
  .el-input{
    display: flex;
    align-items: center;
    justify-content: center;
  }      
</style>