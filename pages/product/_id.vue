<template>
  <section>
    {{ product }}
    <img :src="product.image" />
  </section>
</template>

<script>
export default {
  layout: 'ProductLayout',

  async fetch({store, redirect}) {
    await store.dispatch('products/fetch')
  },
  
  computed: {
    product () {
      const products = this.$store.getters['products/products']
      const product = products.find(({ id }) => id === this.$route.params.id)
      return product
    }
  }
}
</script>