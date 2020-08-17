<script>
export default {
  functional: true,
  render(h, { children }) {

    return h('header', {
      attrs: {
        class: ['header']
      }
    }, children)
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  align-items: center;
}
</style>