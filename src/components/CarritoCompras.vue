<template>
    <div>
        <h1 class="text-center">CARRITO DE COMPRAS</h1>
        <template>
            <v-simple-table>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-left">
                                ID
                            </th>
                            <th class="text-left">
                                Codigo
                            </th>
                            <th class="text-left">
                                Nombre
                            </th>
                            <th class="text-left">
                                Descripcion
                            </th>
                            <th class="text-left">
                                Imagen
                            </th>
                            <th class="text-left">
                                Precio
                            </th>
                            <th class="text-left">
                                Opciones
                            </th>
                        </tr>
                    </thead>
                    <tbody v-for="(producto, index) in datosProductoCarrito" :key="index">
                        <tr>
                            <td>{{ producto.id }}</td>
                            <td>{{ producto.proCodigo }}</td>
                            <td>{{ producto.proNombre }}</td>
                            <td>{{ producto.proDescripcion }}</td>
                            <td><v-img height="80" width="80" :src="producto.proImagen"></v-img></td>
                            <td>{{ producto.proPrecio }}</td>
                            <td>
                                <v-btn color="#6A76AB" class="boton" @click="eliminarProducto(producto)">
                                    <v-icon color="white">mdi-minus</v-icon>
                                </v-btn>
                            </td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </template>
    </div>
</template>

<script>
import store from '../store/store';

export default {
    name: 'CarritoCompras',
    computed: {
        datosProductoCarrito(){
            return this.$store.getters.enviarProducto;
        }
    }, methods: {
        /**
         * Function para la alteracion del local storage al eliminar un producto
         * @param {Object} producto objeto con los datos del producto a eliminar
         */
        eliminarProducto(producto){
            store.dispatch('productoEliminado', producto)
        }
    }
}
</script>