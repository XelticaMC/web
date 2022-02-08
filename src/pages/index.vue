<template>
	<article class="ic0acan3">
		<h1>
			<a href="https://blog.craft.xeltica.work" target="_blank" rel="noreferrer noopener">ニュース</a>
		</h1>
		<p class="dimmed" v-if="posts == null || posts.length === 0">取得中…</p>
		<div class="menu mb-4">
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
		<section>
			<img :src="imagePath" class="fluid shadow-4" style="border-radius: var(--radius)" />
			<h1 class="mt-3 text-center">
				集え、全てのマインクラフター。
			</h1>
			<div class="caution" v-if="caution">
				<RouterLink :to="caution.link">{{ caution.name }}</RouterLink>
			</div>
			<p>XelticaMC は、<strong>気楽にマルチプレイができる</strong>マイクラの生活サーバーです。</p>
			<p>
				家を立てて生活したり、建築スキルで競ったり、闘技場を作って戦ったり、
				遠出して珍しいアイテムを探したり、はたまた本サーバーの機能で遊んだり、...。
			</p>
			<p>どんな遊び方もできるマイクラだからこそ、そのどんな遊び方も受け入れるサーバーを目指しています。</p>
		</section>
		<section>
			<div class="row">
				<div class="col-4 col-12-sm">
					<div class="vstack feature text-center">
						<div class="circle bg-pink text-white">
							<i class="bi-heart-fill"></i>
						</div>
						<h1>安心、安全。</h1>
						<p>建築エリアは敵, 爆破, ロスト無し。<br>安心して建築できます。</p>
					</div>
				</div>
				<div class="col-4 col-12-sm">
					<div class="vstack feature text-center">
						<div class="circle bg-green text-white">
							<i class="bi-question-circle-fill"></i>
						</div>
						<h1>充実サポート。</h1>
						<p>専用Discordサーバーで質問すれば、<br />鯖民やスタッフが答えます。Wikiも充実しており、情報を探すのにうってつけです。</p>
					</div>
				</div>
				<div class="col-4 col-12-sm">
					<div class="vstack fill feature text-center">
						<div class="circle bg-blue text-white">
							<i class="bi-lightning-charge"></i>
						</div>
						<h1>やりこみ要素</h1>
						<p>様々なやりこみ要素を用意しています。また、定期的にイベントを開催する予定です。</p>
					</div>
				</div>
			</div>
		</section>
		<section>
			<h2><i class="bi-arrow-repeat"></i> 対応バージョン</h2>
			<table class="table">
				<tbody>
					<tr>
						<td>Java版</td>
						<td>1.17.1</td>
					</tr>
					<tr>
						<td>統合版</td>
						<td>1.17.0-1.17.10</td>
					</tr>
				</tbody>
			</table>
			<p class="text-dimmed" style="font-size: 0.8rem">
				※統合版への対応は不安定であり、思わぬ不具合がある可能性があります。ご留意ください。
			</p>
		</section>
		<section>
			<h2><i class="bi-person-fill"></i> ロール</h2>
			<p>
				本サーバーでは荒らし対策のため、<b class="_wakaba">わかば</b>、<b class="_citizen">市民</b>という2つのプレイヤーロールがあります。
				初参加プレイヤーは全てわかばです。<b class="_wakaba">わかば</b>にはいくつかの機能制限がありますが、
				<b class="_citizen">市民</b>への昇格プロセスを行うことで制限を突破できます！
			</p>
			<p>市民に昇格する方法については、<a href="/docs/citizen">昇格システム</a>をお読みください！</p>
		</section>
		<section>
			<h2><i class="bi-door-open-fill"></i> 参加する！</h2>
			<p>もし興味がありましたら、<RouterLink to="/docs/rule">利用規約</RouterLink>をお読み頂いた上でぜひ入ってみてください。観光だけでも楽しいかもしれません。</p>

			<button class="btn primary mb-2" v-if="!showAddrs" @click="showAddrs = !showAddrs" :class="{active: showAddrs}">
				<i class="bi-check2"></i> 利用規約を読んだ
			</button>
			<table class="table addrs" v-else>
				<tbody>
					<tr>
						<td>アドレス</td>
						<td>
							play.craft.xeltica.work
							<button class="copy-button" @click="copy('play.craft.xeltica.work')">コピー</button>
						</td>
					</tr>
					<tr>
						<td>ポート(Java版)</td>
						<td>
							25565
							<button class="copy-button" @click="copy('25565')">コピー</button>
						</td>
					</tr>
					<tr>
						<td>ポート(統合版)</td>
						<td>
							19132
							<button class="copy-button" @click="copy('19132')">コピー</button>
						</td>
					</tr>
				</tbody>
			</table>

			<p>細かい遊び方は、<RouterLink to="/docs/walkthrough">あるきかた</RouterLink>をご確認ください！</p>

		</section>
		<section>
			<h2><i class="bi-share-fill"></i> シェア</h2>
			<p>
				サーバーで起きた出来事を自由にシェアしてください。
				<strong style="color: var(--accent)">#XelticaMC</strong> ハッシュタグの使用をおすすめしています。
			</p>
		</section>
		<Discord />
	</article>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

import Address from '../components/Address.vue';
import Discord from '../components/Discord.vue';
import MinecraftStats from '../components/MinecraftStats.vue';
import Links from '../components/Links.vue';

import day from '../assets/day.jpg';
import night from '../assets/night.jpg';
import { osTheme, theme } from '../scripts/theme';
import { posts, fetchPosts, isFetching, hasError } from '../scripts/blog';

import 'vue3-carousel/dist/carousel.css';

type Caution = {
	title: string;
	link: string;
};

const caution: Caution | null = null;

export default defineComponent({
	name: 'Index',
	components: {
		Carousel,
		Slide,
		Pagination,
		Navigation,

		Address,
		Discord,
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

.feature {
	align-items: center;
	padding: 0 1rem;
	> .circle {
		width: 96px;
		height: 96px;
		font-size: 48px;
		line-height: 1;
		border-radius: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 8px;
	}
	> h1 {
		font-size: 1rem;
		font-weight: bold;
		margin: 0;
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

.ic0acan3 {
	> section {
		margin-bottom: 2rem;
	}
}
</style>

<style lang="scss">
.carousel__pagination {
	padding: 0;
	margin: 0;
	> .carousel__pagination-item {
		.carousel__pagination-button {
			background: var(--accent);
			opacity: 0.4;
			width: 12px;
			height: 12px;
			border-radius: 12px;
			margin: 8px;
			&--active {
				opacity: 1;
			}
		}
	}
}
.carousel__viewport, .carousel__prev, .carousel__next {
	box-shadow: 0 0 8px black;
}

.carousel__prev, .carousel__next {
	background: var(--accent);
	width: 48px;
	height: 48px;
	border-radius: 100%;
	svg {
		width: 32px;
		height: 32px;
	}
}

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
