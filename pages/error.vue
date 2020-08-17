<template>
  <div>
    <h1>An error has occurred</h1>
    <p>Please refresh the page</p>
    <button-component @click="$router.push('/')">Reload page</button-component>
  </div>
</template>

<script>
export default {
  layout: 'ProductLayout',
}
</script>