<template>
	<div class="root">
		<Main class="main" @sidebarActivated="sidebarOpened = true" />
		<div class="backdrop" :class="{ active: sidebarOpened }" @click="sidebarOpened = false"/>
		<Sidebar class="sidebar" :class="{ active: sidebarOpened }" />
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Main from './Main.vue';
import Sidebar from './Sidebar.vue';

export default defineComponent({
	name: 'App',
	components: {
		Main,
		Sidebar,
	},
	setup() {
		return {
			sidebarOpened: ref(false),
		}
	},
});
</script>

<style lang="scss" scoped>
.root {
	display: flex;
	min-height: 100vh;
	justify-content: center;
	position: relative;

	> .main {
		max-width: 800px;
	}

	@media screen and (max-width: 1024px) {
		> .sidebar {
			position: fixed;
			top: 0;
			bottom: 0;
			height: auto;
			background: var(--bg);
			overflow: auto;
			right: -320px;
			margin: 0;
			transition: all 0.2s ease;
			z-index: 2;

			&.active {
				right: 0;
				box-shadow: 0 0 32px black;
			}
		}

		> .backdrop {
			pointer-events: none;
			position: fixed;
			inset: 0;
			z-index: 1;
			transition: all 0.2s ease;
			background: transparent;

			&.active {
				pointer-events: auto;
				background: rgba(0, 0, 0, 0.5);
			}
		}
	}
}
</style>

<style src="./style.scss"></style>
