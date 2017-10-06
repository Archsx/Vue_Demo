// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.component('sayhello',{
  template:'<p>Hello {{name}}</p>',
  data:function(){
      return {
        name:'Jack Ma'
      }
  }
})//这个是全局注册的
import Hello from './components/Hello'
Vue.component('Hello',Hello)//这也是注册全局组件的一种方式
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  // template: '<p>Hello Vue</p>',这里直接替换了index.html当中的id为app的div,而不是放在div里面，注意这里是直接替换
  components: { App },
  // components:{
  //   "App":App
  // }这才是完整写法，上面是语法糖
})
