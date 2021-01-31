<template>
	<div>
		<h2>Not Found</h2>
		<p>大変申し訳ありませんが、お探しのページは見つかりませんでした。</p>
		<p>リンクが切れている、あるいはURLを間違えている可能性があります。</p>
		<img :src="twilight" alt="" class="image">
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
			width: 100%;
			max-width: 400px;
			max-height: 480px;
			box-shadow: 0 2px 8px black;
			box-sizing: border-box;
		}
	}
</style>
