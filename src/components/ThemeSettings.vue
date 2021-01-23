<template>
	<h2>設定</h2>
	<h3>テーマ</h3>
	<ul style="list-style: none; margin: 0; padding: 0">
		<li>
			<label>
				<input type="radio" value="auto" v-model="theme"> 自動
			</label>
		</li>
		<li>
			<label>
				<input type="radio" value="day" v-model="theme"> ライト
			</label>
		</li>
		<li>
			<label>
				<input type="radio" value="night" v-model="theme"> ダーク
			</label>
		</li>
	</ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Theme, theme } from '../theme';
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
