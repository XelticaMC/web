<template>
	<div class="sidebar _vstack">
		<slot name="extop"/>
		<MinecraftStats />
		<hr>
		<Links />
		<hr>
		<ThemeSettings />
		<hr>
		<iframe
			class="widget"
			src="https://discord.com/widget?id=759661786105905152&theme=dark"
			allowtransparency="true"
			frameborder="0"
			sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
		></iframe>
		<hr>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MinecraftStats from "./components/MinecraftStats.vue";
import Links from "./components/Links.vue";
import ThemeSettings from "./components/ThemeSettings.vue";

export default defineComponent({
	name: "Sidebar",
	components: {
		MinecraftStats,
		Links,
		ThemeSettings,
	},
	setup() {},
});
</script>

<style lang="scss" scoped>
.sidebar {
	position: sticky;
	top: 0;
	max-width: 320px;
	width: 100%;
	background: var(--containerBg);
	padding: 16px;
	margin: 0 16px;
	box-shadow: 0 0 32px rgba(0, 0, 0, 0.8);
	min-height: 100vh;
	height: max-content;
	box-sizing: border-box;

	> .widget {
		width: 100%;
		min-height: 500px
	}
}
</style>
