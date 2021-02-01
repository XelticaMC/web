<template>
	<NotFound v-if="isError" />
	<template v-else-if="doc">
		<header>
			<h1 v-text="doc.title" />
		</header>
		<article v-html="doc.body" />
		<footer>
			<a :href="url">このドキュメントをGitHubで改善する</a>
		</footer>
	</template>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch, watchEffect } from 'vue';

import NotFound from '../../components/NotFound.vue';
import { Document, getDocument } from '../../utils/getDocument';

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
		const doc = ref<Document | null>(null);
		const isError = ref<boolean>(false);
		const url = computed(() => `https://github.com/XelticaMC/web/edit/master/public/docs/${props.path}.md`);
		const loadPage = async (path: string) => {
			isError.value = false;
			doc.value = null;
			try {
				doc.value = await getDocument(path);
			} catch {
				isError.value = true;
			}
		};
		watch(() => props, ({path}) => {
			loadPage(path);
		}, {
			deep: true,
		});

		onMounted(() => loadPage(props.path));

		return {
			doc, isError, url,
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
</style>
