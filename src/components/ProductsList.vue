<template>
   <div>
      <h1>Lista de Productos</h1>
      <ul>
         <product-item v-for="product in allProducts"
                       :key="product.id"
                       :product="product">
         </product-item>  
      </ul>
   </div>
</template>

<script>
  
   import ProductItem from './ProductItem.vue'

   import { mapGetters } from 'vuex';

   export default {
      components: { ProductItem },
      computed: {
         ...mapGetters({
            allProducts: 'allProducts',
         }),
      },
      created() {
         this.$store.dispatch('fetchProducts');   
      }  
   }

</script>

<style lang="scss" scoped>

</style>