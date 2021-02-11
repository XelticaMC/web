<template>
	<NotFound v-if="isError" />
	<template v-else-if="doc">
		<header>
			<h1 v-text="doc.title" />
			<aside>
				<time class="time" v-if="updatedAt" :datetime="updatedAt.toISOString()" v-text="updatedAt.toLocaleDateString()"/>
				<template v-if="cont">
					<a class="icon" v-for="c in cont" :key="c.id" :href="c.url" target="_blank" rel="noopener noreferrer">
						<img :src="c.avatarUrl" :alt="c.name" />
					</a>
				</template>
			</aside>
		</header>
		<article v-html="doc.body" />
		<footer>
			<a :href="url">このドキュメントをGitHubで改善する</a>
		</footer>
	</template>
</template>

<script lang="ts">
import { useHead } from '@vueuse/head';
import { computed, defineComponent, onMounted, ref, watch, watchEffect } from 'vue';

import NotFound from '../../components/NotFound.vue';
import { Document, getDocument } from '../../utils/getDocument';

type CacheData = {
	doc?: Document;
	cont?: Contributor[];
	updatedAt?: Date;
};

const cache: Record<string, CacheData> = {};

type GitHubCommitsApiResponse = Array<{
	commit: {
		author: {
			name: string;
			email: string;
			date: string;
		},
	},
	author: {
		id: string;
		avatar_url: string;
		html_url: string;
	}
}>;

type Contributor = {
	id: string;
	url: string;
	name: string;
	avatarUrl: string;
};

export default defineComponent({
	name: 'Docs',
	components: {
		NotFound,
	},
	props: {
		path: {
			type: String,
			required: true,
		},
	},
	setup(props) {
		const doc = ref<Document | undefined>(undefined);
		const updatedAt = ref<Date | undefined>(undefined);
		const cont = ref<Contributor[] | undefined>(undefined);
		const isError = ref<boolean>(false);
		const isGitHubError = ref<boolean>(false);
		const url = computed(() => `https://github.com/XelticaMC/web/edit/master/public/docs/${props.path}.md`);
		const getContributors = async (path: string) => {
			if (!cache[path]) cache[path] = {};
			isGitHubError.value = false;
			cont.value = cache[path].cont;
			updatedAt.value = cache[path].updatedAt;
			try {
				const res: GitHubCommitsApiResponse = await (await fetch(`https://api.github.com/repos/XelticaMC/Web/commits?path=/public/docs/${path}.md`)).json();
				const mapped: Contributor[] = res.map(r => ({
					id: r.author.id,
					url: r.author.html_url,
					avatarUrl: r.author.avatar_url,
					name: r.commit.author.name,
				}));
				// 重複を除く
				const conts = Array.from(new Set(mapped.map(m => m.id))).map(id => mapped.find(m => m.id === id)!);
				cache[path].cont = cont.value = conts;
				cache[path].updatedAt = updatedAt.value = new Date(res[0].commit.author.date);
			} catch {
				isGitHubError.value = true;
			}
		};
		const loadPage = async (path: string) => {
			isError.value = false;
			if (!cache[path]) cache[path] = {};
			doc.value = cache[path].doc;
			try {
				cache[path].doc = doc.value = await getDocument(path);
			} catch {
				doc.value = undefined;
				isError.value = true;
			}
		};
		watch(() => props, ({path}) => {
			loadPage(path);
			getContributors(path);
		}, {
			deep: true,
		});

		onMounted(() => {
			 loadPage(props.path);
			 getContributors(props.path);
		});

		const title = computed(() => (doc.value?.title || '') + ' - XelticaMC');

    useHead({
      // Can be static or computed
      title,
    })

		return {
			doc, isError, url, cont, updatedAt,
		};
	}
});
</script>

<style lang="scss" scoped>
	div {
		text-align: center;

		img {
			max-width: 100%;
			max-height: 480px;
			box-shadow: 0 2px 8px black;
			box-sizing: border-box;
		}
	}

	header {
		border-bottom: 1px solid var(--divider);
		margin-bottom: 16px;
		> aside {
			display: flex;
			align-items: center;
			margin-bottom: 8px;
			> time {
				font-size: 14px;
				margin-right: 8px;
				opacity: 0.7;
				&::before {
					content: '更新日: ';
				}
			}
			> .icon {
					width: 24px;
					height: 24px;
				> img {
					width: 100%;
					height: 100%;
					margin-right: 4px;
					border-radius: 100%;
					box-shadow: none;
				}
			}
		}
	}

	footer {
		border-top: 1px solid var(--divider);
		margin-top: 16px;
		padding-top: 16px;
	}
</style>
