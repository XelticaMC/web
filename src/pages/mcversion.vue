<template>
	<article>
		<h1>Java版と統合版の違い</h1>
		<h2>クイックチェック</h2>
		<button v-if="platform !== null" @click="reset">Q1. 選び直す</button>
		<template v-else>
			<p>Q1. どの端末でマイクラをしていますか？</p>
			<div class="_vstack">
					<button @click="platform = 'mobile'">スマートフォン</button>
					<button @click="platform = 'mobile'">タブレット</button>
					<button @click="platform = 'pc'">パソコン</button>
					<button @click="platform = 'console'">Nintendo Switch</button>
					<button @click="platform = 'console'">PS4</button>
					<button @click="platform = 'console'">Xbox</button>
					<button @click="platform = 'unsupported'">その他</button>
			</div>
		</template>
		<template v-if="platform === 'pc'">
			<button v-if="is !== null" @click="reset">Q2. 選び直す</button>
			<template v-else>
				<p>Q2. ゲームの起動後、「Minecraft」という文字の下に、小さくJava Editionと書いてありますか？</p>
				<div class="_vstack">
						<button @click="is = 'java'">はい</button>
						<button @click="is = 'bedrock'">いいえ</button>
				</div>
			</template>
		</template>
		<template v-if="isBedrock">
			<p>お使いのバージョンは、<strong>統合版です！</strong></p>
			<p v-if="platform === 'console'">
				メモ: ゲーム機用のバージョンでは、そのままではXelticaMCにログインできない可能性があります。
				<a href="https://novablog.work/be-join-any-server/">この記事</a>を参考に設定を行うことで入れるかもしれません。
			</p>
		</template>
		<template v-if="is === 'java'">
			<p>お使いのバージョンは、<strong>Java版です！</strong></p>
		</template>

		<template v-if="platform === 'unsupported'">
			<p>残念ながら、お使いのバージョンではXelticaMCを遊ぶことはできません。</p>
		</template>
		<h2>詳しく</h2>
		<p>
			Java版と言われているものは、元々パソコン向けに開発され、単に「Minecraft」と呼ばれていたエディションのマインクラフトのことです。
			Java言語を用いて開発されているため、今では交錯するマインクラフトのエディションを呼び分ける為に、Java版と呼称されています。
		</p>
		<p>統合版と言われているものは、元々はスマートフォン向けに開発されていた「Minecraft Pocket Edition」、通常MCPEのことです。</p>
		<p>
			遊んだことがある方はわかるかもしれませんが、Java版は比較的重たいゲームとなっています。シンプルな見た目の割に、
			そこそこ良いグラフィックボードを要するくらいには…。
		</p>
		<p>
			MCPEは、当時はかなり非力だったスマートフォンでもマインクラフトを動作させるために、C++言語を用いて1から作り直されました。
			2017年に発表されたBetter Together Updateを機に、Nintendo SwitchやPS4などを対象としたConsole EditionとこのMCPEが統一され、
			一般的に<strong>統合版</strong>や<strong>Bedrock版</strong>と呼ばれるエディションが誕生しました。
		</p>
		<p>
			...以上の経緯があり、Java版と統合版は、一見同じようなゲームに見えて、中身が全然異なっています。
			そのため、普通はこの二つの間でマルチプレイを行うことができないのですが、偉大なプログラマーが、この二つの歴史の違うマインクラフトで
			マルチプレイを実現するプラグインを開発しました。それがGeyserMCとfloodgateです。
			詳しくは<RouterLink to="how-it-works">仕組み</RouterLink>に書いています。
		</p>


	</article>
</template>

<script lang="ts">
//
import { useHead } from '@vueuse/head';
import { computed, defineComponent, ref } from 'vue';
export default defineComponent({
	name: 'McVersion',
	setup() {
		const platform = ref<string | null>(null);
		const is = ref<string | null>(null);
		useHead({
			title: 'Java版と統合版の違い - XelticaMC'
		});
		return {
			platform, is,
			isBedrock: computed(() =>
				platform.value === 'mobile' ||
				platform.value === 'console' ||
				is.value === 'bedrock'
			),
			reset: () => {
			  platform.value = null;
				is.value = null;
			},
		};
	}
})
</script>

<style lang="scss" scoped>
	button {
		display: block;
		width: 100%;
		padding: 8px 16px;
		border: 2px solid var(--tableBorder);
		background: var(--tableBg);
		color: var(--fg);
		height: 2rem;
		cursor: pointer;

		&:hover {
			filter: brightness(105%);
		}

		&:active {
			filter: brightness(90%);
		}
	}
</style>
