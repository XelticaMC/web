<template>
	<article>
		<h1>水泳イベント'21 ランキング</h1>
		<p>イベント最終日のため、ランキングを非公開としています。</p>
	</article>
</template>

<script lang="ts">
import { useHead } from '@vueuse/head';
import {  defineComponent } from 'vue';

import Ranking from '../../components/Ranking.vue';
import { ranking, isFetching, hasError } from '../../ranking';

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
