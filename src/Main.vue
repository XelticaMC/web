<template>
	<div class="container">
		<Navigation />
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
import { defineComponent } from 'vue';

import Navigation from './components/Navigation.vue';
import revision from './revision';

export default defineComponent({
	name: 'Main',
	components: {
		Navigation,
	},
	setup(_, ctx) {
		return {
			revision,
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
}

.revision {
	opacity: 0.5;
}
</style>
