<template>
	<article class="ic0acan3">
		<section id="hero" class="text-center">
			<img :src="imagePath" class="fluid shadow-4 mt-4" style="border-radius: var(--radius)" />
			<h1 class="mt-3 text-150" style="white-space: nowrap">
				集まれ、<wbr/>すべてのクラフター。
			</h1>
			<div class="caution" v-if="caution">
				<RouterLink :to="caution.link">{{ caution.name }}</RouterLink>
			</div>
			<p>家を建てて、生活する。ご近所さんと仲良くする。未知の世界で冒険する。</p>
			<p>毎日が退屈でつまらない？あなたも<strong>XelticaMC</strong>で生活してみませんか？</p>
		</section>

		<section class="row features">
			<div class="col-6 col-12-sm">
				<div class="card bg-pink text-white feature">
					<div class="body">
						<h1><i class="bi-heart-fill"></i> 安心、安全</h1>
						<p>建築エリアは敵、爆破、ロスト無し。安心安全のワールド設定で、建築に集中できます！</p>
					</div>
				</div>
			</div>
			<div class="col-6 col-12-sm">
				<div class="card bg-green text-white feature">
					<div class="body">
						<h1><i class="bi-question-circle-fill"></i> 充実サポート</h1>
						<p>専用Discordサーバーで質問すれば、鯖民やスタッフが答えます。Wikiも充実しており、情報を探すのにうってつけです。</p>
					</div>
				</div>
			</div>
			<div class="col-6 col-12-sm">
				<div class="card bg-blue text-white feature">
					<div class="body">
						<h1><i class="bi-lightning-charge-fill"></i> やりこみ要素</h1>
						<p>様々なやりこみ要素があります。また、定期的にイベントをやってます！</p>
					</div>
				</div>
			</div>
			<div class="col-6 col-12-sm">
				<div class="card bg-yellow text-black feature">
					<div class="body">
						<h1><i class="bi bi-universal-access-circle"></i> クロスプレイ</h1>
						<p>Java版と統合版のクロスプレイを実現。端末を超えて、友達と遊べます！</p>
					</div>
				</div>
			</div>
		</section>

		<section id="world">
			<h2><i class="bi-geo-alt"></i> 個性豊かなワールド</h2>
			本サーバーには、目的ごとにいくつかのワールドがあります。

			<h3><i class="bi-building"></i> メインワールド</h3>
			<p>みんなが生活するワールドです。</p>
			<p>自由建築区に家を建てて、生活をしよう。</p>
			<p>また、広い土地に自分だけの「自治体」を宣言したり、誰かの自治体に参加して、一緒に街づくりを楽しめます。</p>

			<h3><i class="bi-boxes"></i> 共有ワールド</h3>
			<p>鯖民が資材を共有し合うワールドです。</p>
			<p>共有畑・共有牧場・共有拠点が設置されており、誰でも使えるアイテムとブロックがあります。</p>
			<p>序盤の生活基盤を整えるためにご活用ください。もし慣れてきたら、余ったアイテムを共有してくれるとありがたいです。</p>
			<p>また、共有ワールドでは、申請することでTTを作成・設置できます。</p>

			<h3><i class="bi-tree"></i> 資源ワールド</h3>
			<p>毎月定期的にリセットされる、手つかずなワールドです。</p>
			<p>建築資材や鉱石などを探す場合は、こちらをご利用ください！</p>
			<p>Minecraftの最新アップデートに合わせてワールドも新しくなるので、新要素にすぐに触れられます！</p>
			<p></p>

			<h3><i class="bi-boxes"></i> サンドボックス</h3>
			<p>クリエイティブモードで自由に建築！お家の試作から、レッドストーンの実験まで、幅広くお使いいただけます。</p>
			<p>もう一つのサンドボックス「アートワールド」では、より高レベルなクリエイティブ建築をお楽しみいただけます。</p>

			<p><a href="https://wiki.craft.xeltica.work/ja/worlds" target="_blank" rel="noreferrer noopener" class="btn info"><i class="bi-arrow-right"></i> ワールドについて詳しく…</a></p>
		</section>

		<section id="municipality">
			<h2><i class="bi-building"></i> 自治体システム</h2>
			<p>
				<strong>メインワールド</strong>には、現在20を超える自治体が存在します。<br/>
				海に沈んだ町、田舎風の町、地獄のような町と…、個性豊かな自治体があなたを待っています。
			</p>
			<p>
				誰かの自治体に参加することも、自分だけの自治体を作ることもできます！
			</p>
			<p>
				なお、多くの建国サーバーにあるような「戦争」システムは<strong>本サーバーにはありません</strong>。
				平和にゆっくり街づくりをしたい…、そんなあなたにオススメです！
			</p>
			<p><a href="https://wiki.craft.xeltica.work/ja/cities" target="_blank" rel="noreferrer noopener" class="btn info"><i class="bi-arrow-right"></i> 自治体システムについて詳しく…</a></p>
		</section>

		<section id="version">
			<h2><i class="bi-arrow-repeat"></i> 対応バージョン</h2>
			<p>本サーバーは、<strong>Java版および統合版、どちらからでもご参加いただけます！</strong><br/>ただし、統合版への対応は不安定であり、思わぬ不具合がある可能性があります。ご留意ください。</p>
			<table class="table">
				<tbody>
					<tr>
						<th>Java版</th>
						<td>1.19.2</td>
					</tr>
					<tr>
						<th>統合版</th>
						<td>1.19.20 - 1.19.60</td>
					</tr>
				</tbody>
			</table>
		</section>

		<section>
			<h2><i class="bi-door-open"></i> 参加する！</h2>
			<p>興味が湧いてきましたか？</p>
			<p>参加するには、まずは<strong>XelticaMC 公式Discordサーバー</strong>へご参加ください。</p>
			<p>
				参加には、<a href="https://discord.com" target="_blank" rel="noreferrer noopener">Discord</a>への無料登録が必要です。<br/>
				<a class="btn primary discord" href="https://discord.gg/3zuQwTASye">参加する！</a>
			</p>

			<p>あとは、<strong>本サーバーの<a :href="RULE_URL">サーバールール</a>をお読み頂いた上で</strong>、ぜひご参加ください！</p>
			<table class="table addrs">
				<tbody>
					<tr>
						<th>アドレス</th>
						<td class="copy-cell" role="button" @click="copy('play.craft.xeltica.work')">
							play.craft.xeltica.work
							<span class="copy-button">コピー</span>
						</td>
					</tr>
					<tr>
						<th>ポート(Java版)</th>
						<td class="copy-cell" role="button" @click="copy('25565')">
							25565
							<span class="copy-button">コピー</span>
						</td>
					</tr>
					<tr>
						<th>ポート(統合版)</th>
						<td class="copy-cell" role="button" @click="copy('19132')">
							19132
							<span class="copy-button">コピー</span>
						</td>
					</tr>
				</tbody>
			</table>

			<p>サーバーの入り方・遊び方については、<RouterLink to="/docs/walkthrough"><strong>あるきかた</strong></RouterLink>をご確認ください！</p>
			<p>ご参加、お待ちしております！！</p>
		</section>

		<section>
			<h2><i class="bi-share"></i> シェア</h2>
			<p>
				サーバーでの面白い出来事がありましたら、是非SNSにシェアしてください…！
				<strong style="color: var(--accent)">#XelticaMC</strong> ハッシュタグの使用をおすすめしています。
			</p>
			<div class="hstack wrap">
				<a href="https://twitter.com/search?q=%23XelticaMC&src=typed_query&f=live" target="_blank" rel="noreferrer noopener" class="btn primary" style="--primary: #1DA1F2">
					<i class="bi-search"></i> Twitter
				</a>
				<a href="https://misskey.io/tags/XelticaMC" target="_blank" rel="noreferrer noopener" class="btn primary" style="--primary: #86b300">
					<i class="bi-search"></i> Misskey
				</a>
				<a href="https://www.instagram.com/explore/search/keyword/?q=%23XelticaMC" target="_blank" rel="noreferrer noopener" class="btn primary" style="--primary: #E4405F">
					<i class="bi-search"></i> Instagram
				</a>
			</div>
		</section>

		<h2>スタッフブログ</h2>
		<section class="vstack slim" v-if="posts == null || posts.length === 0">
			<div class="skeleton" style="height: 24px" :style="{width: `${Math.floor(Math.random() * 70) + 30}%`}" />
			<div class="skeleton" style="height: 24px" :style="{width: `${Math.floor(Math.random() * 70) + 30}%`}" />
			<div class="skeleton" style="height: 24px" :style="{width: `${Math.floor(Math.random() * 70) + 30}%`}" />
			<div class="skeleton" style="height: 24px" :style="{width: `${Math.floor(Math.random() * 70) + 30}%`}" />
			<div class="skeleton" style="height: 24px" :style="{width: `${Math.floor(Math.random() * 70) + 30}%`}" />
		</section>
		<template v-else>
			<div class="menu">
				<section>
					<a
						class="item"
						:href="post.link"
						target="_blank"
						rel="noreferrer noopener"
						v-for="post in posts"
						:key="post.id"
					>
						<span class="icon"><i class="bi bi-chevron-right"/></span>
						{{post.title}}
					</a>
				</section>
			</div>
			<a href="https://blog.craft.xeltica.work" target="_blank" rel="noreferrer noopener">もっと見る</a>
		</template>
	</article>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

import Address from '../components/Address.vue';
import MinecraftStats from '../components/MinecraftStats.vue';
import Links from '../components/Links.vue';

import day from '../assets/day.jpg';
import night from '../assets/night.jpg';
import { osTheme, theme } from '../scripts/theme';
import { posts, fetchPosts, isFetching, hasError } from '../scripts/blog';
import { RULE_URL } from '../scripts/consts';

type Caution = {
	title: string;
	link: string;
};

const caution: Caution | null = null;

export default defineComponent({
	name: 'Index',
	components: {
		Address,
		MinecraftStats,
		Links,
	},

	setup() {
		const imagePath = computed(() => {
			const t = theme.value === 'auto' ? osTheme.value : theme.value;
			return t === 'day' ? day : night;
		});

		fetchPosts();

		return {
			imagePath,
			caution,
			showAddrs: ref(false),
			RULE_URL,
			slides: [
				'press/wheat.jpg',
				'press/town.jpg',
				'press/cow.jpg',
				'press/birch.jpg',
				'press/turtle.jpg',
				'press/bear.jpg',
			],
			copy(content: string) {
				if (navigator.clipboard) {
					navigator.clipboard.writeText(content);
					alert('クリップボードにコピーしました！');
				} else {
					alert('お使いの端末では、残念ながら利用できません。\n手動コピーをお願いします！');
				}
			},
			posts,
			isFetching,
			hasError,
		};
	},
});
</script>

<style lang="scss" scoped>
.slide {
	pointer-events: none;
}

.carousel {
	max-width: 480px;
	margin: 32px auto;
}

.features {
	> * {
		height: 100%;
	}
	h1 {
		margin-bottom: var(--margin);
	}
}

.copy-button {
	border-radius: 6px;
	background: var(--tone-0);
	border: 1px solid var(--primary);
	color: var(--primary);
	padding: 2px;
	font-size: 9px;
	font-weight: bold;
	margin-left: 8px;
	cursor: pointer;
	&:active {
		filter: brightness(0.8);
	}
}

.copy-cell {
	cursor: pointer;
	user-select: none;
}

.ic0acan3 {
	> section {
		margin-bottom: 2rem;
	}
}
</style>

<style lang="scss">
.caution {
	border: 2px solid red;
	color: red;
	text-align: center;
	padding: 8px 0;

	> a {
		color: inherit;
		text-decoration: underline;
	}
}
</style>
