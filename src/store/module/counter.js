const state = {
	index: 0
};

// getters
const getters = {}

// actions
const actions = {
	increment({ commit }) {
		commit('increment');
	},
	decrement({ commit }) {
		commit('decrement');
	}
};

// mutations
const mutations = {
		increment(state) {
			state.index++
		},
		decrement(state) {
			state.index--
		}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}