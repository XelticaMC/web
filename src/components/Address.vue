<template>
	<div class="addr">
		<div class="box"><slot/></div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
});
</script>

<style lang="scss" scoped>
.addr {
	display: flex;
	justify-content: center;
	align-items: center;

	.header {
		border: 2px solid var(--tableBorder);
		border-right: none;
		background: var(--tableBg);
		padding: 8px;
		width: max-content;
	}

	.box {
		border: 2px solid var(--tableBorder);
		background: var(--tableBg);
		padding: 8px;
		width: max-content;
	}
}
</style>
