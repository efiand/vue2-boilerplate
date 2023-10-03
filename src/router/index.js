import Vue from 'vue';
import VueRouter from 'vue-router';
import { capitalize } from '@/common/helpers.js';
import routes from '@/router/routes.js';

Vue.use(VueRouter);

const router = new VueRouter({
	base: '/',
	mode: 'history',
	routes: routes.map((route) => ({
		...route,
		component() {
			return import(`@/views/${capitalize(route.component || route.name)}View.vue`);
		}
	})),
	scrollBehavior() {
		return { x: 0, y: 0 }; // eslint-disable-line
	}
});

export default router;
