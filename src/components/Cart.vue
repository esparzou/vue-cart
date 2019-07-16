<template>
   <div>
      <h1>Carrito de la Compra</h1>
      <ul>
         <li v-for="product in cartProducts" :key="product.id">
            {{product.title}} - {{product.price}} - {{product.quantity}}
         </li>
      </ul>
      <h3>Total: {{ total }}</h3>
   </div>
</template>

<script>

   import { mapGetters } from 'vuex';

   export default {

      computed: {
         ...mapGetters({
            cartProducts: 'cartProducts',
            total: 'cartTotal'
         }),

      }, 
   }
</script>

<style lang="scss" scoped>

</style>