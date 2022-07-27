<template>
	<div class="menu">
		<section>
			<RouterLink class="item" to="/rule" active-class="active">
				<span class="icon"><i class="bi bi-exclamation-diamond-fill"/></span>
				利用規約
			</RouterLink>
			<a class="item" href="https://map.craft.xeltica.work" target="_blank" rel="noopener noreferrer">
				<span class="icon"><i class="bi bi-geo-alt-fill"/></span>
				ウェブマップ
				<span class="icon ml-1"><i class="bi bi-box-arrow-up-right"/></span>
			</a>
			<a class="item" href="https://wiki.craft.xeltica.work" active-class="active">
				<span class="icon"><i class="bi bi-journal-bookmark-fill"/></span>
				Wiki
				<span class="icon ml-1"><i class="bi bi-box-arrow-up-right"/></span>
			</a>
			<a class="item" href="https://blog.craft.xeltica.work" active-class="active">
				<span class="icon"><i class="bi bi-newspaper"/></span>
				スタッフブログ
				<span class="icon ml-1"><i class="bi bi-box-arrow-up-right"/></span>
			</a>
		</section>
		<section>
			<a class="item" href="https://twitter.com/XelticaMC">
				<span class="icon"><i class="bi bi-twitter"/></span>
				公式ツイッター
				<span class="icon ml-1"><i class="bi bi-box-arrow-up-right"/></span>
			</a>
			<a class="item" href="https://www.youtube.com/channel/UCpSZRpL1o31P6CqAcGcuiMQ">
				<span class="icon"><i class="bi bi-youtube"/></span>
				YouTube
				<span class="icon ml-1"><i class="bi bi-box-arrow-up-right"/></span>
			</a>
			<a class="item" href="https://soundcloud.com/xelticamc">
				<span class="icon"><i class="bi bi-music-note-beamed"/></span>
				SoundCloud
				<span class="icon ml-1"><i class="bi bi-box-arrow-up-right"/></span>
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
