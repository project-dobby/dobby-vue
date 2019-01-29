import Vue from 'vue';
import Vuex from 'vuex';
import counter from './module/counter';

Vue.use(Vuex);

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	modules: {
		counter
	}
	// strict: debug,
	// plugins: debug ? [createLogger()] : []
})