<template>
    <div>
        <h1 class="text-center">PRODUCTOS</h1>
        <label for=""><v-icon>mdi-filter</v-icon> Filtrar:</label>
        <v-select :items="items" label="Filtrar" solo class="select">
        </v-select>
        <div id="productos" class="row">
            <div v-for="producto in productos" :key="producto.id" class="mb-2 col-md-4">
                <v-card class="mx-auto my-12" max-width="374" elevation="10">
                    <template slot="progress">
                        <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                    </template>

                    <v-img height="250" :src="producto.proImagen"></v-img>

                    <v-card-title>{{ producto.proNombre }}</v-card-title>

                    <v-card-text>

                        <div class="my-4 text-subtitle-1">
                            $ {{ producto.proPrecio }}
                        </div>

                        <div>{{ producto.proDescripcion }}
                        </div>
                    </v-card-text>

                    <v-divider class="mx-4"></v-divider>

                    <v-card-title>{{ producto.catNombre }}</v-card-title>

                    <v-card-actions>
                        <v-btn color="#6A76AB" class="boton"  @click="añadirCarrito(producto.id)">
                            <v-icon color="white">mdi-cart-plus</v-icon>
                        </v-btn>
                        <v-dialog transition="dialog-top-transition" max-width="600">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn color="#6A76AB" v-bind="attrs" v-on="on"><v-icon
                                        color="white">mdi-eye</v-icon></v-btn>
                            </template>
                            <template v-slot:default="dialog">
                                <v-card>
                                    <v-toolbar color="#6A76AB" dark>{{ producto.proNombre }}</v-toolbar>
                                    <v-card-text>
                                        <div>
                                            <div>
                                                <v-img height="250" :src="producto.proImagen"></v-img>
                                            </div>
                                            <div>
                                                <div>Codigo: {{ producto.proCodigo }}
                                                </div>
                                                <div>Descripción: {{ producto.proDescripcion }}
                                                </div>
                                                <div class="my-4 text-subtitle-1">
                                                    Precio: ${{ producto.proPrecio }}
                                                </div>

                                                <div>Categoria: {{ producto.catNombre }}</div>
                                            </div>
                                        </div>
                                    </v-card-text>
                                    <v-card-actions class="justify-end">
                                        <v-btn color="#6A76AB" class="boton" @click="añadirCarrito(producto.id)">
                                            <v-icon color="white">mdi-cart-plus</v-icon>
                                        </v-btn>
                                        <v-btn text @click="dialog.value = false">Cerrar</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </template>
                        </v-dialog>
                    </v-card-actions>
                </v-card>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import store from '../store/store';

export default {
    name: 'CardsProductos',
    mounted() {
        this.obtenerProductos(),
            this.obtenerCategorias()
    },
    data() {
        return {
            productos: null,
            items: [],
            categorias: null,
            productoEspecifico: null,
            productoCarrito: null
        }
    },
    methods: {
        obtenerProductos() {
            /**
             * Metodo para hacer el llamado a la API y obtener las productos
             */
            axios.get('http://127.0.0.1:8000/api/product/1')
                .then(res => {
                    this.productos = res.data;
                    console.log(this.productos);
                })
                .catch(function (error) {
                    console.log(error);
                })
        },

        /**
         * Metodo para hacer el llamado a la API y obtener las categorias
         * donde se extrae el nombre de ellas y son guardados en la lista categorias
         */
        obtenerCategorias() {
            axios.get('http://127.0.0.1:8000/api/category/1')
                .then(res => {
                    this.categorias = res.data;
                    console.log(this.categorias);
                    this.categorias.forEach(element => {
                        this.items.push(element.catNombre)
                    });
                })
                .catch(function (error) {
                    console.log(error);
                })
        },

        /**
         * Metodo para hacer el llamado a la API y obtener un producto
         * segun su id y guardar ese objeto en el local storage
         * @param {int} idProducto Id del producto a buscar
         */
        añadirCarrito(idProducto){
            axios.get(`http://127.0.0.1:8000/api/product/1?id=${idProducto}`)
                .then(res => {
                    this.productoCarrito = res.data[0];
                    store.dispatch('productoAñadido', this.productoCarrito)
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
}
</script>

<style scoped>
#productos {
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.select {
    width: 20%;
}

.boton {
    margin-right: 5px;
}
</style>