<template>
	<div class="vstack">
		<MinecraftStats />
		<Links />
		<ThemeSettings />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MinecraftStats from "./MinecraftStats.vue";
import Links from "./Links.vue";
import ThemeSettings from "./ThemeSettings.vue";

export default defineComponent({
	name: "SidebarInner",
	components: {
		MinecraftStats,
		Links,
		ThemeSettings,
	},
	props: {
		drawerMode: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
	setup() {

	},
});
</script>
