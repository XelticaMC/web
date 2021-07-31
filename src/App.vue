<template>
	<div class="background"></div>
	<header>
		<div class="navbar hstack shadow-4 acrylic" :class="{'px-1': isMobile}" style="background: var(--panel);">
			<button class="btn flat" @click="menuOpened = !menuOpened" v-if="isMobile">
				<i class="bi bi-list" style="font-size: 2rem"></i>
			</button>
			<h1 class="navbar-title" :style="isMobile && 'font-size: 1.5rem'">
				<RouterLink to="/" v-if="path !== '/'">XelticaMC</RouterLink>
				<template v-else>XelticaMC</template>
			</h1>
		</div>
	</header>
	<div class="x-root container">
		<div class="x-main hstack fill dense">
			<Sidebar class="fw mr-2" :drawerMode="isMobile" :open="menuOpened" @onClose="menuOpened = false" />
			<div class="div">
				<div class="card ghost">
					<div class="body">
						<RouterView />
					</div>
				</div>
				<footer class="x-footer text-center">
					<p>(C)2021 XelticaMC Team</p>
					<p>
						MinecraftはMicrosoft Corporationの登録商標です。<br/>
						本サーバーはMicrosoftおよびMojang Studiosとは関係無く、非公式に運営しています。<br/>
						公式へのお問い合わせはご遠慮ください。<br/>
					</p>
				</footer>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { useHead } from '@vueuse/head';
import { computed, defineComponent, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import Main from './Main.vue';
import Sidebar from './components/Sidebar.vue';

export default defineComponent({
	name: 'App',
	components: {
		Main,
		Sidebar,
	},
	setup() {
		const mobile = 800;

		const sidebarOpened = ref(false);
		const isMobile = ref(document.body.clientWidth <= 800);
		const menuOpened = ref(false);
		const route = useRoute();
		const path = computed(() => route.path);
		watch(route, () => {
			menuOpened.value = false;
		});
		const ro = new ResizeObserver((r) => {
			const { width } = r[0].contentRect;
			isMobile.value = width <= mobile;
			console.log(width);
		})
		ro.observe(document.body);

    useHead({
      title: 'XelticaMC',
    });
		watch(route, () => {
			sidebarOpened.value = false;
		}, { deep: true });
		return {
			sidebarOpened,
			path,
			isMobile,
			menuOpened,
		}
	},
});
</script>

<style lang="scss">
body {
	--primary: var(--green) !important;
	--primary-d: var(--green-d) !important;
	--primary-l: var(--green-l) !important;
	font-feature-settings: "pkna";
}
</style>

<style lang="scss" scoped>
header > .navbar {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 500;
}
.x-root {
	margin-top: 64px;
}

.x-footer {
	color: var(--dimmed);
	padding: 64px 0;
}

.x-main {
	width: max-content;
	margin: 0 auto;
}

.body {
	max-width: 960px;
}
</style>
