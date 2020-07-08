import * as Api from '~/api/index'

export const state = () => ({
  user: null
})

export const mutations = {
  setUser (state, payload) {
    state.user = payload
  }
}

export const actions = {
  async nuxtServerInit ({ dispatch }, { $storage }) {
    const _token = $storage.getUniversal('_token')
    if (_token) {
      await dispatch('getUser')
    }
  },
  async login () {
    const _token = await Api.login()
    this.$storage.setUniversal('_token', _token)
  },
  logout () {
    this.$storage.setUniversal('_token', null)
  },
  async getUser ({ commit }) {
    const _token = this.$storage.getUniversal('_token')

    const user = await Api.getUser(_token)
    if (user) {
      commit('setUser', user)
      return true
    } else {
      this.$storage.setUniversal('_token', null)
      commit('setUser', null)
      return false
    }
  }
}
