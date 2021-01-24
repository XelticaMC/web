<template>
	<div class="container">
		<Header v-if="showHeader" />
		<div class="view">
			<RouterView />
		</div>
		<footer>
				<p>(C)2021 Xeltica</p>
				<p><small class="revision" v-text="revision" /></p>
		</footer>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import Header from './components/Header.vue';
import revision from './revision';


export default defineComponent({
	name: 'Main',
	components: {
		Header,
	},
	setup() {
		const route = useRoute();
		return {
			revision,
			showHeader: computed(() => route.path !== '/'),
		}
	},
});
</script>

<style lang="scss" scoped>
.container {
		position: relative;
		background: var(--containerBg);
		padding-bottom: 16px;
		box-shadow: 0 0 32px rgba(0, 0, 0, 0.8);
		min-height: 100%;
		box-sizing: border-box;
}

.view {
	padding: 0 32px;
	@media screen and (max-width: 768px) {
		padding: 0 16px;
	}
}

.revision {
	opacity: 0.5;
}
</style>
