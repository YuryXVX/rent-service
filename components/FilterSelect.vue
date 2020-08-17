<template>
  <div class="filter">
    <div class="filter__activator" @click="isOpen = !isOpen">
      <span class="filter__title">Rent</span>
      <button class="filter__type"
      :class="{'filter__type--active': isOpen}">{{ type ||  'whatever'}}</button>
    </div>

    <div class="filter__content" v-if="isOpen">
      <button v-for="(type, index) in filterTypes" :key="`${index}`"
      @click="getFilterType(type)" class="filter__button">{{ type }}</button>
      <button @click="getFilterType('')" class="filter__button">whatever</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterSelect',

  props: {
    filterTypes: { type: Array, required: true}
  },

  data: () => {
    return {
      type: 'whatever',
      isOpen: false
    }
  },

  methods: {
    getFilterType (type) {
      this.$emit('type', type)
      this.type = type
      this.isOpen = false
    }
  }
}
</script>

<style lang="scss" scoped>
.filter {
  width: 300px;

  position: relative;
  &__title {
    color: var(--main-color);
    font-size: 40px;

    font-weight: 500;
    line-height: 120%;

    position: relative;
  }

  &__type {
    color: var(--button-color);
    background-color: transparent;
    border: none;
    font-weight: 500;
    line-height: 120%;
    font-size: 40px;

    cursor: pointer;

    display: flex;
    align-items: center;

    padding: 0;
    margin: 0;

    margin-left: 10px;

    &::after {
      content: '';

      display: block;
      width: 8px;
      height: 8px;

      border: .1rem solid var(--button-color);
      border-top: none;
      border-left: none;
      transform: rotate(45deg);

      transition: transform .3s;

      margin-left: 20px;
    }


    &--active {
      &::after {
        transform: rotate(-134deg);
      }
    }
  }

  &__activator {
    display: flex;
  }

  &__content {
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    display: flex;
    flex-direction: column;

    background-color: #ffffff;
    z-index: 100;

    padding: 5px 0;

    & > button {
      border: none;
      background-color: transparent;

      padding: 10px;
      text-transform: uppercase;

      cursor: pointer;
      user-select: none;
      
      transition: background .3s;
      &:hover,
      &:focus {
        background-color: #cccccc;
        opacity: .8;
      }

      &:active {
        opacity: 1; 
      }
    }
  }
}
</style>