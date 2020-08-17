<script>
export default {
  name: 'ProductsList',
  props: { products: { type: Array, default: () => [] }},

  computed: {
    productList () {
      return this.products.map(product => {
        return this.$createElement('li', {
          class: ['product__item'],
          on: { click: () => this.$router.push(`/product/${product.id}`) }
        }, [
          this.$scopedSlots.default({ product })
        ])
      })
    }
  },

  render (h) {
    const products = [ this.productList ]
    return h('ul', {
      class: ['product__list']
    }, products)
  }
}
</script>

<style lang="scss" scoped>
.product {
  &__list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__item {
    margin: 1%;
    cursor: pointer;
    border-radius: var(--raduis-card);
    user-select: none;

    transition: box-shadow .3s;

    &:hover {
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
  }
}
</style>