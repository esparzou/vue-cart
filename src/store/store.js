import Vue from 'vue'
import Vuex from 'vuex'

import shop from '@/api/shop'

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    products: [],

  },

  getters:{
    allProducts: state => state.products,
  },
  
  actions: {
    fetchProducts({commit}) {
      shop.getProducts( (products) => {
        commit('setProducts', products);
     });
    }    
  },

  mutations: {
    setProducts (state, products) {
      state.products = products;
    } 
  }
})


