import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        listaProductos: [],
    },
    getters: {
        enviarProducto(state){
            return state.listaProductos;
        }
    },
    mutations: {
        mutandoProductoAñadido(state, productoRecibido){
            state.listaProductos.push(productoRecibido);
        },
        mutandoProductoEliminado(state, producto){
            let item = state.listaProductos.find(i => i.id === producto.id);

            if (item) {
                state.listaProductos = state.listaProductos.filter(i => i.id !== producto.id)
            }
        }
    },
    actions: {
        productoAñadido(context, productoRecibido){
            context.commit('mutandoProductoAñadido', productoRecibido);
        },
        productoEliminado(context, producto){
            context.commit('mutandoProductoEliminado', producto);
        }
    },
})