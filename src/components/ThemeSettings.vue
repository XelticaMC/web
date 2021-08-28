<template>
	<div class="menu">
		<section>
			<h1>テーマ</h1>
			<label class="item input-check">
				<input type="radio" value="auto" v-model="theme">
				<span>自動</span>
			</label>
			<label class="item input-check">
				<input type="radio" value="day" v-model="theme">
				<span>ライト</span>
			</label>
			<label class="item input-check">
				<input type="radio" value="night" v-model="theme">
				<span>ダーク</span>
			</label>
		</section>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Theme, theme } from '../scripts/theme';
export default defineComponent({
	name: 'ThemeSettings',
	computed: {
		theme: {
			get() { return theme.value; },
			set(value: Theme) { theme.value = value; },
		}
	},
})
</script>

<style lang="scss" scoped>
h2, h3 {
	font-size: 1rem;
	margin: 0;
}
</style>
