<template>
	<div class="container">
		<Header v-if="showHeader" />
		<div class="view">
			<RouterView />
		</div>
		<footer>
				<p>(C)2021 Xeltica</p>
		</footer>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import Header from './components/Header.vue';

export default defineComponent({
	name: 'Main',
	components: {
		Header,
	},
	setup() {
		const route = useRoute();
		return {
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

footer {
	text-align: center;
	border-top: 1px solid var(--divider);
	margin-top: 16px;
}
</style>
