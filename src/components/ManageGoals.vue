<template>
<div>
  <h2> manage Goals</h2>
  <input type="text" ref="goal">
  <button @click="setGoal">set goal </button>
  <error-alert v-if="inputIsInvalid">
    <h2>Input Is Invalid!</h2>
    <p> Please enter at least a few characters</p>
    <button @click="confirmError">Okay</button>
  </error-alert>
</div>
</template>

<script>

import ErrorAlert from "@/components/ErrorAlert";
export default {
  components: {ErrorAlert},
  data(){
    return{
     inputIsInvalid: false
    };
  },
 methods:{
   setGoal(){
     const enteredValue = this.$refs.goal.value;
     if(enteredValue===''){
      this.inputIsInvalid = true;
     }
   },
   confirmError(){
     this.inputIsInvalid = false;
   }
 }
}
</script>

<style scoped>

</style>