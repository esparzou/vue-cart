import Vue from 'vue'
import Vuex from 'vuex'

import shop from '@/api/shop'

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    products: [],
    cart: [],
  },

  getters:{
    /** Products **/
    allProducts: state => state.products,

    /** Cart **/
    cartProducts: state => state.cart,
    cartTotal(state, getters) {
      return getters.cartProducts.reduce((total, product) => {
        return total + product.price * product.quantity}
      , 0);
   },
  },
  
  actions: {

    /** Products **/
    fetchProducts({commit}) {
      shop.getProducts( (products) => {
        commit('setProducts', products);
     });
    },

    /** Cart **/
    addProductToCart(context, product) {
      if(product.inventory > 0) {
        const cartItem = context.state.cart.find( (item) => item.id === product.id );
        if(!cartItem) {
          context.commit('pushProductToCart', product); 
        } else {
          context.commit('incrementItemQuantity', cartItem)
        }
        context.commit('decrementProductInventory', product);
      }
    }

  },

  mutations: {

    /** Products **/
    setProducts (state, products) {
      state.products = products;
    },

    decrementProductInventory(state, product) {
      product.inventory--;
    },

    /** Cart **/
    pushProductToCart(state, product) {
      state.cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1,
      })

    },

    incrementItemQuantity(state, cartItem) {
      cartItem.quantity++;
    },


  }
})


