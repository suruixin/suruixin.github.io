import Vue from 'vue';
import Vuex from 'vuex';
import state from './lib/state'
import mutations from './lib/mutations'
Vue.use(Vuex)

const store = new Vuex.Store({
	state,
	mutations
});

export default store
