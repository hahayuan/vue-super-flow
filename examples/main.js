import Vue from 'vue'
import App from './App'
import SuperFlow from '../packages/index'
import ElementUI from 'element-ui'                      // 引入element-ui
import 'element-ui/lib/theme-chalk/index.css'           // element-ui的css样式要单独引入

Vue.use(SuperFlow)
Vue.use(ElementUI)   // 这种方式引入了ElementUI中所有的组件

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
