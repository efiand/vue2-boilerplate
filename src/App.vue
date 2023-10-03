<template>
	<div>
		<Component :is="layout">
			<RouterView :appData="appData" />
		</Component>
	</div>
</template>

<script>
	import '@/assets/css/fonts.css';
	import '@/assets/css/global.css';
	import '@/assets/css/helpers.css';
	import { mapState } from 'vuex';

	export default {
		name: 'App',

		data() {
			return {};
		},

		computed: {
			...mapState(['appData']),

			layout() {
				const layout = this.$route.meta.layout || 'TheLayout';
				return () => import(`@/layouts/${layout}.vue`);
			}
		},

		beforeCreate() {
			this.$store.dispatch('getData');
		},

		watch: {
			$route() {
				const { redirect = null } = this.$route.query;
				if (redirect) {
					this.$router.push(redirect);
				}

				document.title = this.$route.meta.title;
			}
		}
	};
</script>
