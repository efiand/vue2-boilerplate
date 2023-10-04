import '@/assets/scss/index.scss';
import App from './App.vue';
import Vue from 'vue';
import router from './router/index.js';
import store from './store/index.js';

Vue.config.productionTip = false;

new Vue({
	render(cb) {
		return cb(App);
	},
	router,
	store
}).$mount('#app');
