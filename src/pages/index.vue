<template>
	<article class="_vstack">
		<section class="hero">
			<h1>XelticaMC</h1>
			<p>始めよう、本当のBetter Togetherを。</p>
			<Carousel wrapAround class="carousel">
				<Slide v-for="slide in slides" :key="slide">
					<img :src="slide" :alt="slide" class="slide" />
				</Slide>

				<template #addons>
					<Pagination />
				</template>
			</Carousel>
			<p>XelticaMC は、<strong>気楽にマルチプレイができる</strong>マイクラの生活サーバーです。</p>
			<p>
				家を立てて生活したり、建築スキルで競ったり、闘技場を作って戦ったり、
				遠出して珍しいアイテムを探したり、はたまた本サーバーの機能で遊んだり、...。
			</p>
			<p>何でもできるマイクラだからこそ、遊び方はあなた次第です！</p>
		</section>
		<section>
			<h2>本当のクロスプレイ</h2>
			<p>本来一緒に遊ぶことのできない<strong>Java版</strong>と<strong>統合版</strong>によるクロスプレイを実現。</p>
			<p>
				今まで持っているマイクラのエディションが違うために遊べなかった友達とも、<br/>XelticaMCでなら遊べます！
				<RouterLink to="how-it-works">仕組み</RouterLink>
			</p>

			<table>
				<tbody>
					<tr>
						<td>Java版</td>
						<td>1.16.4, 1.16.5</td>
					</tr>
					<tr>
						<td>統合版</td>
						<td>1.16.100〜v1.16.201</td>
					</tr>
				</tbody>
			</table>
			<p class="_caption">
				<RouterLink to="/mcversion">
					「Java版」「統合版」の意味がわからない方へ
				</RouterLink>
			</p>
		</section>
		<section>
			<h2>参加する！</h2>
			<p>興味が湧いてきたら、ぜひ入ってみてください。観光だけでも楽しいかもしれません。</p>
			<dl class="addrs">
				<dt>アドレス</dt>
				<dd>play.craft.xeltica.work</dd>
				<dt>ポート(Java版)</dt>
				<dd>25565</dd>
				<dt>ポート(統合版)</dt>
				<dd>19132</dd>
			</dl>
		</section>
		<Discord />
	</article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

import Address from '../components/Address.vue';
import Discord from '../components/Discord.vue';
import MinecraftStats from '../components/MinecraftStats.vue';
import Links from '../components/Links.vue';

import title from '../assets/title.jpg';

import 'vue3-carousel/dist/carousel.css';

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
		return {
			title,
			slides: [
				'press/wheat.jpg',
				'press/town.jpg',
				'press/cow.jpg',
				'press/birch.jpg',
				'press/turtle.jpg',
				'press/bear.jpg',
			],
		};
	},
});
</script>

<style lang="scss" scoped>
section {
	h1 {
		font-size: 2rem;
	}
	&.hero {
		padding-top: 64px;
		padding-bottom: 32px;
	}
}

section + section {
	padding-top: 16px;
	border-top: 1px solid var(--divider);
}

.slide {
	pointer-events: none;
}

.carousel {
	max-width: 480px;
	margin: 32px auto;
}

.addrs {
	dt {
		width: 140px;
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
</style>
