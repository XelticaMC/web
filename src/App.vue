<template>
	<div class="root">
		<Main class="main" />
		<div class="backdrop" :class="{ active: sidebarOpened }" @click="sidebarOpened = false"/>
		<Sidebar class="sidebar" :class="{ active: sidebarOpened }">
			<template #extop>
				<button class="close" @click="sidebarOpened = false">
					<i-ic-close/>
				</button>
			</template>
		</Sidebar>
	</div>
	<button class="sidebar-button" @click="sidebarOpened = true">
		<i-ic-menu />
	</button>
</template>

<script lang="ts">
import { useHead } from '@vueuse/head';
import { defineComponent, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import Main from './Main.vue';
import Sidebar from './Sidebar.vue';

export default defineComponent({
	name: 'App',
	components: {
		Main,
		Sidebar,
	},
	setup() {
		const sidebarOpened = ref(false);
		const route = useRoute();
    useHead({
      title: 'XelticaMC',
    });
		watch(route, () => {
			sidebarOpened.value = false;
		}, { deep: true });
		return {
			sidebarOpened,
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
	transition: opacity 0.5s ease;
	opacity: 1;

	> .main {
		max-width: 800px;
		width: 100%;
	}

	> .sidebar {
		> .close {
			display: none;
		}
	}

	@media screen and (max-width: 1024px) {
		> .sidebar {
			position: fixed;
			top: 0;
			bottom: 0;
			height: auto;
			background: var(--bg);
			overflow: auto;
			box-shadow: none;
			right: -320px;
			margin: 0;
			transition: all 0.2s ease;
			z-index: 2;

			> .close {
				display: block;
				margin-left: auto;
				font-size: 24px;
				border: none;
				background: none;
				color: var(--accent);
				outline: none;
			}

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

.sidebar-button {
	position: fixed;
	right: -1px;
	top: 64px;
	width: 64px;
	height: 64px;
	background: var(--bg);
	border-radius: 16px 0 0 16px;
	outline: none;
	border: none;
	color: var(--accent);
	box-shadow: 0 0 16px #00000030;
	font-size: 24px;

	&:hover {
		filter: brightness(120%);
	}

	&:active {
		filter: brightness(60%);
	}
}

@media screen and (min-width: 1024px) {
	.sidebar-button {
		display: none;
	}
}
</style>

<style src="./style.scss"></style>
