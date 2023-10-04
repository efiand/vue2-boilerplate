<template>
	<div>
		<Component :is="layout">
			<RouterView />
		</Component>
	</div>
</template>

<script>
	export default {
		name: 'App',

		computed: {
			layout() {
				const layout = this.$route.meta.layout || 'TheLayout';
				return () => import(`@/layouts/${layout}.vue`);
			}
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
