<template>
	<ul>
		<li><RouterLink to="/rule">利用規約</RouterLink></li>
		<li><a href="https://map.craft.xeltica.work" target="_blank" rel="noopener noreferrer">ウェブマップ</a></li>
		<!-- <li><RouterLink to="">ギャラリー</RouterLink></li> -->
		<li><RouterLink to="/plugins">導入プラグイン</RouterLink></li>
		<li><a href="https://wiki.craft.xeltica.work">Wiki</a></li>
	</ul>
	<section>
		<h2>その他</h2>
		<ul>
				<li><a href="https://twitter.com/XelticaMC">XelticaMC 公式Twitter</a></li>
				<li><a href="https://twitter.com/@adxlw">XelticaのTwitter</a></li>
		</ul>
	</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	name: 'Links',
})
</script>

<style lang="scss" scoped>
h2 {
	font-size: 1rem;
	margin: 0;
}
ul {
	margin: 0;
	padding: 0;
	list-style: none;
	> li::before {
		content: '・';
	}
}

.disabled {
	opacity: 0.5;
	cursor: pointer;
}

li > ul {
	margin-left: 16px;
}
</style>
