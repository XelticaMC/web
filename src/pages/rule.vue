<template>
	<NotFound v-if="isError" />
	<template v-else-if="doc">
		<header>
			<h1 v-text="doc.title" />
		</header>
		<article v-html="doc.body" />
	</template>
</template>

<script lang="ts">
import { useHead } from '@vueuse/head';
import { computed, defineComponent, onMounted, ref, watch, watchEffect } from 'vue';

import NotFound from '../components/NotFound.vue';
import { Document, getDocument } from '../scripts/getDocument';

let cache: Document;

export default defineComponent({
	name: 'Docs',
	components: {
		NotFound,
	},
	setup(props) {
		const doc = ref<Document | undefined>(undefined);
		const isError = ref<boolean>(false);
		const loadPage = async (path: string) => {
			isError.value = false;
			doc.value = cache;
			try {
				cache = doc.value = await getDocument(path);
			} catch {
				doc.value = undefined;
				isError.value = true;
			}
		};

		onMounted(() => {
			 loadPage('rule');
		});

		const title = computed(() => (doc.value?.title || '') + ' - XelticaMC');

    useHead({
      // Can be static or computed
      title,
    })

		return {
			doc, isError,
		};
	}
});
</script>

<style lang="scss" scoped>
	div {
		text-align: left;

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
