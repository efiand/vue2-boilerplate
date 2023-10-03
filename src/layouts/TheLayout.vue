<template>
	<div class="page">
		<TheHeader />

		<slot></slot>

		<TheFooter />
	</div>
</template>

<script>
	import TheFooter from '@/components/TheFooter.vue';
	import TheHeader from '@/components/TheHeader.vue';

	export default {
		name: 'TheLayout',

		components: {
			TheHeader,
			TheFooter
		}
	};
</script>
