<template>
   <div>
      <h1>Lista de Productos</h1>
      <ul>
         <product-item v-for="product in products"
                       :key="product.id"
                       :product="product">
         </product-item>  
      </ul>
   </div>
</template>

<script>
  
   import ProductItem from './ProductItem.vue'
   
   import store from '@/store/store'
   import { mapGetters } from 'vuex';

   export default {
      components: {
         ProductItem
      },
      computed: {
         ...mapGetters({
            allProducts: 'allProducts',
         }),
         products() {
            return this.allProducts;
         }

      },
      created() {
         store.dispatch('fetchProducts');   
      }  
   }

</script>

<style lang="scss" scoped>

</style>