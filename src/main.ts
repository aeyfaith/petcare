import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

// Vue.use(VueRouter);

// const routes =[
//     {path:"/", components: Homepage},
//     {path:"/Service", components: Service}
// ];
// const router = new VueRouter({
//     mode: "history",
//     routes
// });
// // const router = VueRouter({routes})
// // new Vue ({
// //     router,

// // })
// new Vue ({
//     router,
//     render: h =>h(App),
// }).$mount('#app')

// Create the Vue app
const app = createApp(App)
app.use(router)
app.mount('#app')

// createApp(App).mount('#app')


