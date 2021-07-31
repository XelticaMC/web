<template>
	<section>
		<h2>導入プラグイン</h2>
		<div v-if="plugins && plugins.length > 0" class="vgroup">
			<div v-for="plugin in plugins" :key="plugin.name" class="card item">
				<div class="body">
					<h1 style="font-size: 1rem">
						{{plugin.name}}
						<span :class="plugin.enabled ? 'text-green' : 'text-red'" v-text="plugin.enabled ? '有効' : '無効'"/>
					</h1>
					<p v-text="plugin.version" class="text-dimmed" />
				</div>
			</div>
		</div>
		<div v-else-if="hasError" class="text-red">
			<p>取得に失敗しました。</p>
			<button class="btn" @click="fetchPlugins">再試行</button>
		</div>
		<div v-else class="loading text-dimmed">
			取得中…
		</div>
	</section>
</template>

<script lang='ts'>
import { useHead } from '@vueuse/head';
import { defineComponent } from 'vue';

import { plugins, isFetching, fetchPlugins, hasError } from '../plugins';

export default defineComponent({
	name: 'Plugins',

	setup() {
		useHead({
			title: '導入プラグイン - XelticaMC'
		});
		return {
			plugins,
			isFetching,
			fetchPlugins,
			hasError,
		};
	}
});
</script>

<style lang="scss" scoped>

table {
	width: 100%;
}

.loading {
	font-style: oblique;
	opacity: 0.7;
}

.card.item:not(:last-child) > .body {
	padding-bottom: 0;
}
</style>
