<template>
  <div class="card">
    <div class="card__image-wrap">
      <slot name="product-image" />
    </div>
    <div class="card__description">
      <span class="card__title">
        <slot name="product-title" />
      </span>
      <span class="card__text">
        <slot name="product-text" />
      </span>
      <span class="card__price">
        <slot name="product-price" />$/h</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>


<style lang="scss" scoped>
.card {
  width: 373px;
  min-height: 164px;

  display: flex;
  justify-content: space-between;

  padding: 24px 32px;

  border-radius: var(--raduis-card);

  background-color: #ffffff;

  box-sizing: border-box;

  &__image-wrap {
    width: 88px;
    height: 88px;

    border-radius: 24px;

    flex-shrink: 0;

    img {
      width: 100%;
      height: auto;

      border-radius: inherit;
    }
  }

  &__description {
    width: 197px;

    margin-top: 16px;

    display: flex;
    flex-direction: column;

    justify-content: space-between;
  }

  &__title {
    font-size: 16px;
    line-height: 14px;
    font-weight: bold;
    
    color: var(--main-color);
  }

  &__text {
    font-weight: 300;
    font-size: 12px;
    line-height: 148%;

    color:var(--text-color);
  }

  &__price {
    font-size: 14px;
    line-height: 148%;
    font-weight: bold;
    color: var(--secondary-color);
  }
}
</style>