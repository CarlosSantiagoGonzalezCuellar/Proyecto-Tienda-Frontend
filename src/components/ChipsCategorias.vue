<template>
    <div id="contenido">
        <div id="chips">
            <div v-for="categoria in categorias" :key="categoria.id">
                <v-chip class="ma-2" color="#6A76AB" outlined @click="productosSegunCategoria(categoria.id)">
                    {{ categoria.catNombre }}
                </v-chip>
            </div>
        </div>

        <h1 class="text-center">CATEGORIA: {{ categoriaEspecifica }}</h1>

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

                    <v-card-title>{{ categoriaEspecifica }}</v-card-title>

                    <v-card-actions>
                        <v-btn color="#6A76AB" class="boton" @click="añadirCarrito(producto.id)">
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

                                                <div>Categoria: {{ categoriaEspecifica }}</div>
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
import store from '../store/store';
import tiendaService from '../services/tiendaService';

export default {
    name: 'ChipsCategorias',
    mounted() {
        this.obtenerCategorias()
    },
    data() {
        return {
            categorias: null,
            productos: null,
            categoriaEspecifica: null,
            productoCarrito: null
        }
    },
    methods: {
        /**
         * Metodo para hacer el llamado a la API y obtener las categorias
         */
        async obtenerCategorias() {
            let categories = await tiendaService.getCategories();
            this.categorias = categories.data;
        },

        /**
         * Metodo para hacer el llamado a la API y obtener los productos
         * de la categoria segun su id y el nombre de una categoria especifica
         * @param {int} idCategoria Id de la categoria a buscar
         */
        async productosSegunCategoria(idCategoria) {
            let products = await tiendaService.getProductsOfCategory(idCategoria);
            this.productos = products.data;

            let category = await tiendaService.getCategoryId(idCategoria);
            this.categoriaEspecifica = category.data[0].catNombre;
        },

        /**
         * Metodo para hacer el llamado a la API y obtener un producto
         * segun su id y guardar ese objeto en el local storage
         * @param {int} idProducto Id del producto a buscar
         */
        async añadirCarrito(idProducto){
            let product = await tiendaService.getProductId(idProducto);
            this.productoCarrito = product.data[0];
            store.dispatch('productoAñadido', this.productoCarrito)
        }
    }
}
</script>

<style scoped>
#chips {
    display: flex;
    align-items: center;
    justify-content: start;
}

#productos {
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.boton {
    margin-right: 5px;
}
</style>