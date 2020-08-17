<template>
  <div>
    <section class="headers">
      <filter-select :filter-types="types"  @type="filterTypeHandler"/>
      <div>
        <span>Add new</span>
        <button-component @click="logger" icon>+</button-component>
      </div>
    </section>
    <CardList :products="filteredProducts">
      <template slot-scope="props">
        <Card>
          <template #product-image>
            <img :src="props.product.preview" /> 
          </template>
          <template #product-title>
           {{ props.product.name }}
          </template>
          <template #product-text>
           {{ props.product.description }}
          </template>
          <template #product-price> 
            {{ props.product.rent }}
          </template>
        </Card>
      </template>
    </CardList>
  </div>
</template>

<script>
export default {
  layout: 'ProductLayout',

  // async fetch({store, redirect}) {
  //   await store.dispatch('products/fetch')
  // },

  async asyncData ({ store, redirect }) {
    await store.dispatch('products/fetch')

    const products = store.getters['products/products']
    const types = store.getters['products/types']

    if(store.getters['products/isError']) {
      redirect('/error')
    }
    return { products, types }
  },

  data: () => {
    return {
      type: '',
    }
  },

  computed: {
    filteredProducts () {
      if(this.type === '') return this.products
      return this.products.filter(({ type }) => type === this.type)
    }
  },

  methods: {
    filterTypeHandler(type) {
      this.type = type
    },
    logger () {
      console.log('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.headers {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1%;
}
</style>