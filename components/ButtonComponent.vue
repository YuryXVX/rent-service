<script>
export default {
  props: {
    icon: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  },
  render(h) {
    const { icon } = this.$props

    return h('button', {
      class: icon ? ['custom__button custom__button--icon'] : ['custom__button'],
      on: {
        click: () => this.$emit('click')
      }
    }, [this.$slots.default])
  }
}
</script>

<style lang="scss" scoped>
.custom__button {
  border: none;
  padding: 0;
  margin: 0;
  background-color: var(--button-color);

  padding: 17px 32px;
  border-radius: 12px;

  transition: opacity .3s;

  cursor: pointer;

  &--icon {
    width: 48px;
    height: 48px;
    padding: 12px;
    border-radius: 16px;
  }

  &:hover,
  &:focus {
    opacity: .8;
  }

  &:active {
    opacity: 1;
  }
}
</style>