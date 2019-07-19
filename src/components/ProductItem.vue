<template>
   <div>
      <h3>Producto</h3>
      {{product.title}} - {{product.price | currency}} - {{product.inventory}}
      <button @click="addProductToCart(product)"
              :disabled="!productIsInStock(product)"> 
              Add
      </button>
   </div>
</template>

<script>

   import { mapGetters, mapActions } from 'vuex';

   export default {
      props: ['product'],
      methods: {
         addProductToCart(product) {
            this.$store.dispatch('addProductToCart', product);
         },

      },
      computed: {
         ...mapGetters(['productIsInStock'])
      }
      
   }
</script>

<style lang="scss" scoped>

</style>