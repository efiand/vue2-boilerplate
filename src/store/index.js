import Vue from 'vue';
import Vuex from 'vuex';
import getDataFromApi from '@/services/api.js';

Vue.use(Vuex);

export default new Vuex.Store({
	actions: {
		async getData({ commit }) {
			const data = await getDataFromApi();

			commit('setData', data);
		}
	},
	mutations: {
		setData(state, data) {
			state.appData = data;
		}
	},
	state: {
		appData: null
	}
});
