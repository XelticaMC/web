<template>
	<ul>
		<li><RouterLink to="/docs/rule">ルール</RouterLink></li>
		<!-- <li><RouterLink to="/worlds">ワールド紹介</RouterLink></li> -->
		<li><a href="https://map.craft.xeltica.work" target="_blank" rel="noopener noreferrer">ウェブマップ</a></li>
		<!-- <li><RouterLink to="">スキンアップローダー</RouterLink></li> -->
		<!-- <li><RouterLink to="">ギャラリー</RouterLink></li> -->
		<!-- <li><RouterLink to="">ランキング</RouterLink></li> -->
		<!-- <li><RouterLink to="">Wiki</RouterLink></li> -->
		<li><RouterLink to="/plugins">導入プラグイン</RouterLink></li>
	</ul>
	<section>
		<h2>機能紹介</h2>
		<ul>
			<li>
				<b>便利系</b>
				<ul>
					<li><RouterLink to="/docs/plugins/jp">日本語変換</RouterLink></li>
					<li><RouterLink to="/docs/plugins/cleaner">インベントリ整理</RouterLink></li>
					<li><RouterLink to="/docs/plugins/maps">マップ</RouterLink></li>
					<li><RouterLink to="/docs/plugins/discord">Discord連携</RouterLink></li>
					<li><RouterLink to="/docs/plugins/geyser">統合版向け便利コマンド</RouterLink></li>
					<li><RouterLink to="/docs/plugins/link-account">Java版↔統合版 リンク</RouterLink></li>
				</ul>
			</li>
			<li>
				<b>お楽しみ系</b>
				<ul>
					<li><RouterLink to="/docs/plugins/nickname">ニックネーム</RouterLink></li>
					<li><RouterLink to="/docs/plugins/hat">帽子</RouterLink></li>
					<li><RouterLink to="/docs/plugins/sit">座る/泳ぐ/寝る</RouterLink></li>
				</ul>
			</li>
			<li>
				<b>セキュリティ</b>
				<ul>
					<li><RouterLink to="/docs/plugins/lwc">チェスト保護(LWC)</RouterLink></li>
					<li><RouterLink to="/docs/plugins/coreprotect">荒らし復元</RouterLink></li>
				</ul>
			</li>
			<li>
				<b>管理用</b>
				<ul>
					<li><RouterLink to="/docs//plugins/luckperms">LuckPerms</RouterLink></li>
					<li><RouterLink to="/docs//plugins/plugman">PlugMan</RouterLink></li>
				</ul>
			</li>
		</ul>
	</section>
	<section>
		<h2>その他</h2>
		<ul>
				<li><a href="https://misskey.io/@ebi">XelticaのMisskey</a></li>
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
