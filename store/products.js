import { getVehicles } from '@/api/request'


export const state = () => ({
  products: [],
  type: [],
  isError: false,
})

export const mutations = {
  setProduts (state, payload) {
    state.products = payload
  },

  setType(state, payload) {
    state.type = payload
  },

  setIsError(state, payload) {
    state.isError = payload
  }
}

export const actions = {
  async fetch ({ commit }) {
    try {
      const products = await getVehicles()
      const type = products.map(({ type }) => type)
      
      commit('setProduts', products)
      commit('setType', [...new Set(type)])

    } catch(err) {
      commit('setIsError', true)
    }
  }
}

export const getters = {
  products: ({products}) => products,
  types: ({ type }) => type,
  isError: ({isError}) => isError
}