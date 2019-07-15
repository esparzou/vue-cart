<template>
   <div>
      <h3>Producto</h3>
      {{product.title}} - {{product.price}} - {{product.inventory}}
   </div>
</template>

<script>

   export default {
      props: ['product'],
      
   }
</script>

<style lang="scss" scoped>

</style>