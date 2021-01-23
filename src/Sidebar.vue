<template>
	<div class="sidebar">
		<MinecraftStats />
		<iframe
			class="widget"
			src="https://discord.com/widget?id=759661786105905152&theme=dark"
			height="500"
			allowtransparency="true"
			frameborder="0"
			sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
		></iframe>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MinecraftStats from "./components/MinecraftStats.vue";

export default defineComponent({
	name: "Sidebar",
	components: {
		MinecraftStats,
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
	}
}
</style>
