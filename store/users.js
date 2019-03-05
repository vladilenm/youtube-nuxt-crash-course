export const state = () => ({
  users: []
})

export const mutations = {
  setUsers(state, users) {
    state.users = users
  }
}

export const actions = {
  async fetch({commit}) {
    const users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
    commit('setUsers', users)
  }
}

export const getters = {
  users: s => s.users
}
