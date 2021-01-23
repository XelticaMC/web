<template>
	<h2>Discord</h2>
	<p>Discord サーバーを用意しています。参加していなくても遊べますが、重要なお知らせや情報交換ができるので、何倍も楽しめます！是非入ってください！もちろん、登録は無料です！</p>
	<a class="discord-button" href="https://discord.gg/vJWJQtzVcB">参加する！</a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	name: 'Discord',
})
</script>

<style lang="scss" scoped>
	.widget {
		display: block;
		/* max-width: 360px; */
		width: 100%;
	}

	.discord-button {
		display: flex;
		align-items: center;
		justify-content: center;
		width: max-content;
		height: max-content;
		text-decoration: none;
		padding: 8px 16px;
		border-radius: 8px;
		font-weight: bold;
		color: white;
		background: #7289DA;
	}
</style>
