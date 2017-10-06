<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>Fry</p>
    <Foo></Foo>
    <sayhello></sayhello>
  </div>
</template>


<script>
  import Foo from './components/Foo'//在使用组件的时候我们需要手动import引用，而
                                    //假如这个组件是在全局注册的话，则可以直接使用
                                    //例如上面的sayhello组件，在main.js中被全局注册
  export default {
    components:{
      "Foo":Foo,
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
