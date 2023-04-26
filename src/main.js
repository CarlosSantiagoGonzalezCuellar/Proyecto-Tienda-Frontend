import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store/store';

import VueRouter from 'vue-router';

//Importacion de componentes
import inicioApp from './components/InicioApp';
import cardsProductos from './components/CardsProductos';
import carritoCompras from './components/CarritoCompras';
import chipsCategorias from './components/ChipsCategorias';

//Creacion de componentes
Vue.component('inicioApp', inicioApp);
Vue.component('cardsProductos', cardsProductos);
Vue.component('carritoCompras', carritoCompras);
Vue.component('chipsCategorias', chipsCategorias);

//Uso de vue-router
Vue.use(VueRouter);

//Definicion de rutas
const routes = [
  {path:'/', component:inicioApp},
  {path:'/inicio', component:inicioApp},
  {path:'/productos', component:cardsProductos},
  {path:'/carrito', component:carritoCompras, name:'carritoCompras'},
  {path:'/categorias', component:chipsCategorias},
]

//Creacion objeto router
const router = new VueRouter({
  routes,
  mode:'history'
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
