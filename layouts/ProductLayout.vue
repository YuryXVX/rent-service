<template>
  <div class="page">
    <HeaderComponent class="page__header">
      <header-content />
   </HeaderComponent>
    <div class="page__container">
     <Nuxt />
    </div>
  </div>
</template>

<style lang="scss">
:root {
  --main-color: #012345;
  --secondary-color: #F84AB3;
  --button-color: #4959FF;
  --bg-color: #F3F4F7;
  --text-color: #677B8F;
  --radius-container: 48px;
  --raduis-card: 32px;
}

.page {
  max-width: 1312px;
  margin: 0 auto;
  &__container {
    border-radius: var(--radius-container);
    background-color: var(--bg-color);

    padding: 56px;
  }
}
</style>