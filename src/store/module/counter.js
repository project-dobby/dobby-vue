const initialState = {
  index: 0,
};

// getters
const getters = {};

// actions
const actions = {
  increment({ commit }) {
    commit('increment');
  },
  decrement({ commit }) {
    commit('decrement');
  },
};

// mutations
const mutations = {
  increment(state) {
    state.index += 1;
  },
  decrement(state) {
    state.index -= 1;
  },
};

export default {
  namespaced: true,
  initialState,
  getters,
  actions,
  mutations,
};
