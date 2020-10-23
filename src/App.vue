<template>
  <div id="app" class=" h-10v flex items-center justify-center">
    <Calculator />
  </div>
</template>

<script>
import Calculator from './components/Calculator.vue'

export default {
  name: 'App',
  components: {
    Calculator
  }
}
</script>

<style>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "poppins";
}

body {
  background-color: #000;
  letter-spacing: 2px;
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 2rem; */
  font-size: 75%;
}

</style>
