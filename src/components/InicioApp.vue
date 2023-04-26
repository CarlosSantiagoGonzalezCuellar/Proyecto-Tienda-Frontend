<template>
    <div>
        <h1 class="text-center">BIENVENIDOS A LA TIENDA RMV!!</h1>
        <div class="carru">
            <template>
                <v-carousel class="carrusel">
                    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" reverse-transition="fade-transition"
                        transition="fade-transition"></v-carousel-item>
                </v-carousel>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InicioApp',
    data() {
        return {
            items: [
                {
                    src: 'https://www.rdstation.com/blog/wp-content/uploads/sites/2/2017/09/tienda-virtual.png',
                },
                {
                    src: 'https://1.bp.blogspot.com/-kmumYAs4jEo/YKXCWufbEYI/AAAAAAAAP4o/6X912pAGnWo-dPLCO3ju4UVgoB78y_xXQCLcBGAsYHQ/s810/Tienda%2BVirtual%2BAdobeStock_365528663.jpg',
                },
                {
                    src: 'https://www.multiplicalia.com/wp-content/uploads/2020/04/tienda-virtual-1.jpg',
                },
                {
                    src: 'https://mglobalmarketing.es/wp-content/uploads/2020/11/Guia-para-crear-una-tienda-virtual.jpg',
                },
            ],
        }
    },
}
</script>

<style scoped>
.carrusel {
    width: 80%;
    margin: 30px;
}

.carru {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>