<template>
   <div>
      <h3>Producto</h3>
      {{product.title}} - {{product.price}} - {{product.inventory}}
      <button @click="addProductToCart(product)">Add</button>
   </div>
</template>

<script>

   import { mapGetters, mapActions } from 'vuex';

   export default {
      props: ['product'],
      methods: {
         addProductToCart(product) {
            this.$store.dispatch('addProductToCart', product);
         }
      },
      
   }
</script>

<style lang="scss" scoped>

</style>