<template>
   <div>
      <h1>Carrito de la Compra</h1>
      <ul>
         <li v-for="(product, index) in cartProducts" :key="product.id">
            {{product.title}} - {{product.price}} - {{product.quantity}}
            <button @click="addItem(product)">+</button>
            <button @click="restItem(product)">-</button>
            <button @click="removeItem({index, product})">X</button>
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
      methods: {

         addItem(product) {
            this.$store.dispatch('addProductCart', product);
         },
         restItem(product) {
            this.$store.dispatch('restProductCart', product);
         },
         removeItem({index, product}) {
            this.$store.dispatch('removeProductToCart', {index, product});
         }
      }
   }
</script>

<style lang="scss" scoped>

</style>