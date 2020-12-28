import axios from "axios";
// la partie provider
export default axios.create({
    baseURL:'https://e-shop-product-default-rtdb.firebaseio.com/'
})