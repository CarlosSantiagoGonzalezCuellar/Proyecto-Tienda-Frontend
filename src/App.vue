<template>
  <v-app>

    <v-app-bar app absolute color="#6A76AB" dark>

      <template>
        <v-tabs>
          <v-tab :to="{ path: '/inicio' }"><v-icon>mdi-home</v-icon> Inicio</v-tab>
          <v-tab :to="{ path: '/categorias' }"><v-icon>mdi-sitemap</v-icon> Categorias</v-tab>
          <v-tab :to="{ path: '/productos' }"><v-icon>mdi-shopping</v-icon> Productos</v-tab>
        </v-tabs>
      </template>
      <v-spacer></v-spacer>

      <v-col cols="12" sm="6" md="3">
        <v-autocomplete v-model="value" :items="items" dense placeholder="Buscar"></v-autocomplete>
      </v-col>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon :to="{ name: 'carritoCompras' }">
        <v-icon>mdi-cart</v-icon>
      </v-btn>

    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view>
        </router-view>
      </v-container>
    </v-main>

    <v-footer padless>
      <v-card flat tile color="#6A76AB" class="white--text text-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          © Todo el contenido presente en este sitio web, incluyendo
          pero no limitándose a textos, gráficos, imágenes, diseño, código, software y
          cualquier otro material relacionado con el sitio web están protegidos por
          derechos de autor. Todos los derechos están reservados
          y cualquier uso no autorizado del contenido de este sitio web
          puede violar leyes de derechos de autor. Queda prohibida
          la reproducción, distribución, modificación, exhibición, transmisión o venta de
          cualquier contenido o material de este sitio web sin previa autorización escrita
          del propietario de los derechos de autor.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Red Medica Vital</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
// import axios from 'axios';
import tiendaService from './services/tiendaService';

export default {
  name: 'App',
  mounted() {
    this.obtenerProductos()
  },
  data() {
    return {
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      productos: null,
      items: [],
      values: [],
      value: null,
    }
  },

  methods: {
    /**
     * Funcion que hace el llamado a la API y
     * obtiene el nombre de los productos agregandolos a la lista items
     */
    async obtenerProductos() {
      let products = await tiendaService.getProducts();
      this.productos = products.data;

      this.productos.forEach(element => {
        this.items.push(element.proNombre)
      });
    },
  }
}
</script>

<style>
* {
  font-family: "Lucida Sans";
}
</style>