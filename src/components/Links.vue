<template>
	<div class="menu">
		<section>
			<RouterLink class="item" to="/rule" active-class="active">
				<span class="icon"><i class="bi bi-exclamation-diamond"/></span>
				利用規約
			</RouterLink>
			<a class="item" href="https://map.craft.xeltica.work" target="_blank" rel="noopener noreferrer">
				<span class="icon"><i class="bi bi-geo-alt"/></span>
				ウェブマップ
				<span class="icon ml-1"><i class="bi bi-box-arrow-up-right"/></span>
			</a>
			<RouterLink class="item" to="/plugins" active-class="active">
				<span class="icon"><i class="bi bi-plug"/></span>
				導入プラグイン
			</RouterLink>
			<a class="item" href="https://wiki.craft.xeltica.work" active-class="active">
				<span class="icon"><i class="bi bi-journal-text"/></span>
				Wiki
				<span class="icon ml-1"><i class="bi bi-box-arrow-up-right"/></span>
			</a>
			<a class="item" href="https://blog.craft.xeltica.work" active-class="active">
				<span class="icon"><i class="bi bi-newspaper"/></span>
				Wiki
				<span class="icon ml-1"><i class="bi bi-box-arrow-up-right"/></span>
			</a>
			<div class="item disabled">
				<span class="icon"><i class="bi bi-camera"/></span>
				ゼルスタグラム
				<span class="icon ml-1"><i class="bi bi-box-arrow-up-right"/></span>
			</div>
			<a class="item" href="https://twitter.com/XelticaMC">
				<span class="icon"><i class="bi bi-twitter"/></span>
				@XelticaMC
				<span class="icon ml-1"><i class="bi bi-box-arrow-up-right"/></span>
			</a>
			<a class="item" href="https://twitter.com/@adxlw">
				<span class="icon"><i class="bi bi-twitter"/></span>
				@Xeltica
				<span class="icon ml-1"><i class="bi bi-box-arrow-up-right"/></span>
			</a>
		</section>
		<section>
			<h1>スペシャル</h1>
			<RouterLink class="item" to="/special/swimming-event21" active-class="active">
				水泳大会ランキング
			</RouterLink>
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
