<template>
	<div class="alert" v-if="!data">
		取得中…
	</div>
	<article v-else>
		<h2 v-text="data.displayName" />
		<table class="table">
			<thead>
				<tr>
					<th>順位</th>
					<th>名前</th>
					<th>スコア</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(r, i) in data.rankingRecord" :key="r.key">
					<th v-text="`${i + 1}位`" />
					<th v-text="r.key" />
					<th v-text="r.value" />
				</tr>
			</tbody>
		</table>
	</article>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Ranking } from "../scripts/ranking";

export default defineComponent({
	name: "Ranking",
	components: {

	},
	props: {
		data: {
			type: Object as PropType<Ranking>,
			required: true,
		},
	},
	setup({data}) {
	},
});
</script>
