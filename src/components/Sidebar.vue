<template>
	<div class="sidebar" v-if="!drawerMode">
		<SidebarInner />
	</div>
	<div class="drawer-container" :class="{active: open}" v-else>
		<div class="backdrop" />
		<div class="drawer">
    <header>
      <button class="close" @click="onClose">
        <i class="bi bi-arrow-left" style="font-size: 1.5rem"></i>
      </button>
    </header>
    <div class="body">
			<SidebarInner />
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SidebarInner from "./SidebarInner.vue";

export default defineComponent({
	name: "Sidebar",
	components: {
		SidebarInner,
	},
	props: {
		drawerMode: {
			type: Boolean,
			required: false,
			default: false,
		},
		open: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
	emits: ['onClose'],
	setup(_, {emit}) {
		return {
			onClose: () => emit('onClose'),
		};
	},
});
</script>

<style lang="scss" scoped>
.sidebar {
	position: sticky;
	top: 96px;
	max-width: 300px;
	width: 100%;
	height: max-content;
	box-sizing: border-box;
}
</style>
