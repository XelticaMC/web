<template>
	<article>
		<h1>水泳イベント'21 ランキング</h1>
		<p>8月9日から大好評開催中の水泳イベント'21のランキングを確認できます。常に最新情報が反映されます。</p>
		<div v-if="isFetching" class="alert">取得中</div>
		<div v-else-if="hasError" class="alert bg-danger">
			<i class="icon bi bi-x-circle"></i>
			エラー
		</div>
		<div class="vstack" v-else>
			<Ranking :data="ranking['swimming_pc']"  />
			<Ranking :data="ranking['swimming_phone']"  />
		</div>
	</article>
</template>

<script lang="ts">
//
import { useHead } from '@vueuse/head';
import {  defineComponent } from 'vue';

import Ranking from '../../components/Ranking.vue';
import { ranking, isFetching, hasError } from '../../scripts/ranking';

export default defineComponent({
	name: 'SwimmingEvent21',
	components: {
		Ranking,
	},
	setup() {
		useHead({
			title: '水泳イベントランキング - XelticaMC'
		});
		return {
			ranking,
			isFetching,
			hasError,
		};
	}
})
</script>

<style lang="scss" scoped>
	button {
		display: block;
		width: 100%;
		padding: 8px 16px;
		border: 2px solid var(--tableBorder);
		background: var(--tableBg);
		color: var(--fg);
		height: 2rem;
		cursor: pointer;

		&:hover {
			filter: brightness(105%);
		}

		&:active {
			filter: brightness(90%);
		}
	}
</style>
