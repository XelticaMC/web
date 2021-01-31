<template>
	<ul>
		<li><RouterLink to="/docs/rule">ルール</RouterLink></li>
		<!-- <li><RouterLink to="/worlds">ワールド紹介</RouterLink></li> -->
		<li><a href="https://map.craft.xeltica.work" target="_blank" rel="noopener noreferrer">ウェブマップ</a></li>
		<!-- <li><RouterLink to="">スキンアップローダー</RouterLink></li> -->
		<!-- <li><RouterLink to="">ギャラリー</RouterLink></li> -->
		<!-- <li><RouterLink to="">ランキング</RouterLink></li> -->
		<!-- <li><RouterLink to="">Wiki</RouterLink></li> -->
	</ul>
	<section>
		<h2>機能紹介</h2>
		<ul>
			<li>
				便利系
				<ul>
					<li>工事中</li>
					<!-- <li><RouterLink to="/plugins/japanize">日本語変換</RouterLink></li> -->
					<!-- <li><RouterLink to="/plugins/inventory-cleaner">インベントリ整理</RouterLink></li> -->
					<!-- <li><RouterLink to="/plugins/dynmap">マップ</RouterLink></li> -->
					<!-- <li><RouterLink to="/plugins/discordsrv">Discord連携</RouterLink></li> -->
					<!-- <li><RouterLink to="/plugins/for-be">統合版向け便利コマンド</RouterLink></li> -->
					<!-- <li><RouterLink to="/plugins/link-account">Java版↔統合版アカウント紐付け</RouterLink></li> -->
				</ul>
			</li>
			<li>
				お楽しみ系
				<ul>
					<li>工事中</li>
					<!-- <li><RouterLink to="/plugins/nickname">ニックネーム</RouterLink></li> -->
					<!-- <li><RouterLink to="/plugins/sit">座る/泳ぐ/寝る</RouterLink></li> -->
				</ul>
			</li>
			<li>
				管理用
				<ul>
					<li>工事中</li>
					<!-- <li><RouterLink to="/plugins/luckperms">LuckPerms</RouterLink></li> -->
					<!-- <li><RouterLink to="/plugins/plugman">PlugMan</RouterLink></li> -->
					<!-- <li><RouterLink to="/plugins/modifyworld">ModifyWorldUpdate</RouterLink></li> -->
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
