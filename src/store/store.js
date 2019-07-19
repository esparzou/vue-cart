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
    productIsInStock () {
      return (product) => {
        return product.inventory > 0;
      }
    },

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
    },

    addProductCart(context, product) {      
        const cartItem = context.state.cart.find( (item) => item.id === product.id );
        const productItem = context.state.products.find( (item) => item.id === product.id );
        if(productItem.inventory > 0) {
          context.commit('incrementItemQuantity', cartItem);
          context.commit('decrementProductInventory', productItem);
        }
        
    },

    restProductCart(context, product) {
      const cartItem = context.state.cart.find( (item) => item.id === product.id );
      const productItem = context.state.products.find( (item) => item.id === product.id );
      if(cartItem.quantity > 1) {
        context.commit('decrementItemQuantity', cartItem);
        context.commit('incrementProductInventory', productItem);
      }  
    },

    removeProductToCart(context, {index, product}) {
      context.commit('deleteItem', index);
      context.commit('restoreInventory', product);
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

    incrementProductInventory(state, product) {
      product.inventory++;
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

    decrementItemQuantity(state, cartItem) {
      cartItem.quantity--;
    },

    deleteItem(state, index) {
      state.cart.splice(index, 1);
    },

    restoreInventory(state, product) {
      const productItem = state.products.find( (item) => item.id === product.id );
      productItem.inventory += product.quantity;
    },
    
  }
})


