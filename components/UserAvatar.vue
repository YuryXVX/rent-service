<script>
export default {
  name: 'UserAvatar',
  functional: true,

  props: {
    image: { type: String, default: undefined },
    rounded: { type: Boolean, default: false }
  },

  render(h, { props }) {
    const { image, rounded } = props
    const img = [h('img', {
      domProps: { src: image },
      class: ['user-avatar__image']
    })]

    return h('div', {
      attrs: {
        class: rounded ? ['user-avatar user-avatar--rounded'] : ['user-avatar']
      }
    }, img)
  }
}
</script>

<style lang="scss" scoped>
.user-avatar {
  --avatar-size: 56px;

  width: var(--avatar-size);
  height: var(--avatar-size);

  &--rounded {
    border-radius: 50%;
  }

  img {
    width: var(--avatar-size);
    height: var(--avatar-size);
    border-radius: inherit;
  }
}
</style>