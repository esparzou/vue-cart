<template>
  <div id="app">
    <products-list></products-list>
    <cart></cart>
  </div>
</template>

<script>

import ProductsList from './components/ProductsList.vue'
import Cart from './components/Cart.vue'

export default {

  components: {
    ProductsList,
    Cart
  }
}
</script>

<style lang="scss">

</style>
