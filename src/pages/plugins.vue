<template>
	<section>
		<h2>導入プラグイン</h2>
		<table v-if="plugins">
		<thead>
			<tr>
				<th />
				<th>名前</th>
				<th>バージョン</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="plugin in plugins" :key="plugin.name">
				<td class="indicator" :class="plugin.enabled ? 'enabled' : 'disabled'">●</td>
				<td v-text="plugin.name" />
				<td v-text="plugin.version" />
			</tr>
		</tbody>
		</table>
		<div v-else-if="hasError" class="error">
			取得に失敗しました。
			<button @click="fetchPlayers">再試行</button>
		</div>
		<div v-else class="loading">
			取得中…
		</div>
	</section>
</template>

<script lang='ts'>
import { useHead } from '@vueuse/head';
import { defineComponent } from 'vue';

import { plugins, isFetching, hasError } from '../plugins';

export default defineComponent({
	name: 'Plugins',

	setup() {
		useHead({
			title: '導入プラグイン - XelticaMC'
		});
		return {
			plugins,
			isFetching,
			hasError,
		};
	}
});
</script>

<style lang="scss" scoped>
.error {
	color: red;
	font-weight: bold;
}

table {
	width: 100%;
}

.indicator {
	&.disabled { color: #f44336; }
	&.enabled { color: #4CAF50; }
}

.loading {
	font-style: oblique;
	opacity: 0.7;
}
</style>
