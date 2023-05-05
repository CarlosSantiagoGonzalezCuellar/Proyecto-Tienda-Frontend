import apiTienda from './index.js';

const relative_path_product = '/product';
const relative_path_category = '/category';

export default {
    /**
     * Metodo para obtener la url base de la api Tienda y
     * complementarla para obtener los productos
     * @returns URL completa para obtener productos
     */
    getProducts(){
        return apiTienda.get(relative_path_product + "/1");
    },

    /**
     * Metodo para obtener la url base de la api Tienda y
     * complementarla con un id para obtener un producto en
     * especifico
     * @param {int} idProducto Id del producto a obtener
     * @returns URL completa para obtener un producto segun su id
     */
    getProductId(idProducto){
        return apiTienda.get(relative_path_product + "/1?id=" + idProducto);
    },

    /**
     * Metodo para obtener la url base de la api Tienda y
     * complementarla para obtener las categorias
     * @returns URL completa para obtener categorias
     */
    getCategories(){
        return apiTienda.get(relative_path_category + "/1");
    },

    /**
     * Metodo para obtener la url base de la api Tienda y
     * complementarla con un id para obtener una categoria en
     * especifico
     * @param {int} idCategoria Id de la categoria a obtener
     * @returns URL completa para obtener una categoria segun su id
     */
    getCategoryId(idCategoria){
        return apiTienda.get(relative_path_category + "/1?id=" + idCategoria);
    },

    /**
     * Metodo para obtener la url base de la api Tienda y
     * complementarla con un id para obtener los productos
     * de una categoria en especifico
     * @param {int} idCategoria Id de la categoria a obtener
     * @returns URL completa para obtener productos de
     * una categoria segun su id
     */
    getProductsOfCategory(idCategoria){
        return apiTienda.get(relative_path_category + "?id=" + idCategoria);
    },
}