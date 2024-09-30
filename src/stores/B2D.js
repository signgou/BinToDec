import {defineStore} from 'pinia'
import { defineCustomElement, ref } from 'vue'

export const useB2DStore = defineStore("B2D",{
  state(){
    return{
      binNum:"",
    }
  },
  getters:{
    decNum(state){
      if(state.binNum)return Number("0b"+state.binNum).toString(10);
    }
  },
})