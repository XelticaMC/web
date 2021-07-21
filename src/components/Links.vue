<template>
	<div class="menu">
		<section>
			<RouterLink class="item" to="/rule" active-class="active">
				<span class="icon">
					<i class="bi bi-exclamation-diamond"></i>
				</span>
				利用規約
			</RouterLink>
			<a class="item" href="https://map.craft.xeltica.work" target="_blank" rel="noopener noreferrer">
				<span class="icon">
					<i class="bi bi-geo-alt"></i>
				</span>
				ウェブマップ
				<span class="icon ml-1">
					<i class="bi bi-box-arrow-up-right"></i>
				</span>
			</a>
			<!-- <li><RouterLink to="">ギャラリー</RouterLink></li> -->
			<RouterLink class="item" to="/plugins" active-class="active">
				<span class="icon">
					<i class="bi bi-plug"></i>
				</span>
				導入プラグイン
			</RouterLink>
			<a class="item" href="https://wiki.craft.xeltica.work" active-class="active">
				<span class="icon">
					<i class="bi bi-journal-text"></i>
				</span>
				Wiki
				<span class="icon ml-1">
					<i class="bi bi-box-arrow-up-right"></i>
				</span>
			</a>
		</section>
		<section>
			<h1>その他</h1>
				<a class="item" href="https://twitter.com/XelticaMC">
					<span class="icon">
						<i class="bi bi-twitter"></i>
					</span>
					XelticaMC 公式Twitter
				</a>
				<a class="item" href="https://twitter.com/@adxlw">
					<span class="icon">
						<i class="bi bi-twitter"></i>
					</span>
					XelticaのTwitter
				</a>
		</section>
	</div>
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
