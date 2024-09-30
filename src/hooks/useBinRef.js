import { customRef } from 'vue'

export default function (value) {
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue) {
          if(newValue){
            if(newValue.length>8){
              alert("输入长度不要大于8");
            }
            else{
              if(newValue[newValue.length-1]!='0' && newValue[newValue.length-1]!='1'){
                alert("输入的数字只能包括0或1！！");
              }
              else{
                value = newValue;
              }
            }
          }
          else{
            value = "";
          }
          trigger();
      }
    }
  })
}