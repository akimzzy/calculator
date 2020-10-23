<template>
  <div class="bg-dark w-35 h-9.5v flex flex-col rounded-md overflow-hidden">
    <div class="flex-30 p-5 bg-darkk rounded-b-3xl flex flex-col">

      <div class="flex-1 text-white text-right text-3xl overflow-x-auto">{{current}}</div>

      <div class="flex justify-between">
        <small class="text-blue text-xl">{{previous}}</small>
        <small class="text-blue ">{{sign}}</small>
      </div>

    </div>

    <div class="flex-70 p-5 grid grid-cols-50 grid-rows-60 gap-3 justify-center items-center">
      <button v-bind:class="[btnClass]"  @click="clear">C</button>
      <button v-bind:class="[btnClass]" @click="negate">+/-</button>
      <button v-bind:class="[btnClass]" @click="del">DEL</button>
      <button  @click="pressedSign('/')"  v-bind:class="[btnSign]" >/</button>
      <button v-bind:class="[btnClass]" @click="pressed('7')">7</button>
      <button v-bind:class="[btnClass]" @click="pressed('8')">8</button>
      <button v-bind:class="[btnClass]" @click="pressed('9')">9</button>
      <button  @click="pressedSign('*')"  v-bind:class="[btnSign]" >*</button>
      <button v-bind:class="[btnClass]" @click="pressed('4')">4</button>
      <button v-bind:class="[btnClass]" @click="pressed('5')">5</button>
      <button v-bind:class="[btnClass]" @click="pressed('6')">6</button>
      <button  @click="pressedSign('-')"  v-bind:class="[btnSign]" >-</button>
      <button v-bind:class="[btnClass]" @click="pressed('1')">1</button>
      <button v-bind:class="[btnClass]" @click="pressed('2')">2</button>
      <button v-bind:class="[btnClass]" @click="pressed('3')">3</button>
      <button v-bind:class="[btnSign]"  @click="pressedSign('+')" class="sign">+</button>
      <button v-bind:class="[zero]" @click="pressed('0')" class="span-2">0</button>
      <button v-bind:class="[btnClass]" @click="pressed('.')">.</button>
      <button  @click="calc"  v-bind:class="[btnSign]" >=</button>
    </div>
  </div>





<!-- <div class="calculator">
    <div class="screen">

      <div class="main-screen">{{current}}</div>

      <div class="bottom-screen">
        <small>{{previous}}</small>
        <small>{{sign}}</small>
      </div>

    </div>

    <div class="buttons">
      <button @click="clear">C</button>
      <button @click="negate">+/-</button>
      <button @click="del">DEL</button>
      <button @click="pressedSign('/')" class="sign">/</button>
      <button @click="pressed('7')">7</button>
      <button @click="pressed('8')">8</button>
      <button @click="pressed('9')">9</button>
      <button @click="pressedSign('*')" class="sign">*</button>
      <button @click="pressed('4')">4</button>
      <button @click="pressed('5')">5</button>
      <button @click="pressed('6')">6</button>
      <button @click="pressedSign('-')" class="sign">-</button>
      <button @click="pressed('1')">1</button>
      <button @click="pressed('2')">2</button>
      <button @click="pressed('3')">3</button>
      <button @click="pressedSign('+')" class="sign">+</button>
      <button @click="pressed('0')" class="span-2">0</button>
      <button @click="pressed('.')">.</button>
      <button @click="calc" class="sign">=</button>

    </div>
  </div> -->




</template>



<script>

export default {

  data() {
    const current = '0'
    const sign = null
    const previous = '0'
    const btnClass = ["h-full", "w-full", "rounded-full", "bg-darkk", "text-lightt", "text-xs", "border-none", "cursor-pointer", "flex", "justify-center", "items-center"]
    const zero = ["h-full", "w-full", "rounded-full", "bg-darkk", "text-lightt", "text-xs", "border-none", "cursor-pointer", "flex", "justify-center", "items-center", "col-span-2"]
    const btnSign = ["h-full", "w-full", "rounded-full", "bg-darkk", "text-blue", "text-xs", "border-none", "cursor-pointer", "flex", "justify-center", "items-center"]

    return { current, sign, previous, btnClass, zero, btnSign };
  },

  methods: {


    clear() {
      this.current = '0'
      this.previous = '0'
      this.sign = null
    },



    negate() {

      if(this.current === `0`) {
        return this.current = `-`
      }

      if(this.current === `-`) {
        return this.current = `0`
      }

      if(this.current === `0.`) {
        return this.current = `-${this.current}`
      }

      if(this.current === `-0.`) {
        return this.current = `0.`
      }

      this.current = `${this.current * -1}` 

    },


    del() {
      if(this.current.length !== 0 && this.current !== '0') {
        this.current = this.current.slice(0, -1)
      }
      if(this.current.length === 0) {
        this.current = '0'
      }
    },

    pressed(val){

      


      if(this.current === `0`) {
        this.current = ``
      }

      if(val === '.') {
        if(this.current === '-') {
          return this.current = `-0${val}`
        }

        if(this.current === '') {
          return this.current = `0${val}`
        }

        this.current = !this.current.includes(val) ? `${this.current}${val}` : `${this.current}`

      } else {
        this.current = `${this.current}${val}`
      }
    },

    pressedSign(val){  
      
      if(this.sign !== null) {
        if(this.sign === '+') {
          this.current = `${Number(this.previous) + Number(this.current)}`
        } else if (this.sign === '-') {
          this.current = `${Number(this.previous) - Number(this.current)}`
        } else if (this.sign === '/') {
          this.current = `${Number(this.previous) / Number(this.current)}`
        } else if (this.sign === '*') {
          this.current = `${Number(this.previous) * Number(this.current)}`
        }
      }

      this.previous = this.current
      this.current = '0'
      this.sign = val
    },

    calc(){

      if(this.sign !== null) {
        if(this.sign === '+') {
          this.current = `${Number(this.previous) + Number(this.current)}`
        } else if (this.sign === '-') {
          this.current = `${Number(this.previous) - Number(this.current)}`
        } else if (this.sign === '/') {
          this.current = `${Number(this.previous) / Number(this.current)}`
        } else if (this.sign === '*') {
          this.current = `${Number(this.previous) * Number(this.current)}`
        }
        this.previous = '0'
        this.sign = null
      }

    }
  }
}


</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  button{
    
  }

</style>









