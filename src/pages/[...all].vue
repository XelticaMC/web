<template>
	<div>
		<img :src="twilight" alt="">
		<h2>Not Found</h2>
		<p>大変申し訳ありませんが、お探しのページは見つかりませんでした。</p>
		<p>リンクが切れている、あるいはURLを間違えている可能性があります。</p>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import twilight from '../assets/twilight.jpg';

export default defineComponent({
	name: 'Fallback',
	setup() {
		return {
			twilight,
		};
	}
});
</script>

<style lang="scss" scoped>
	div {
		text-align: center;

		img {
			max-width: 100%;
			max-height: 480px;
			box-shadow: 0 2px 8px black;
			box-sizing: border-box;
		}
	}
</style>
