<template>
	<NotFound />
</template>

<script lang="ts">
import { useHead } from '@vueuse/head';
import { computed, defineComponent } from 'vue';

import NotFound from '../components/NotFound.vue';

export default defineComponent({
	name: 'Fallback',
	components: {
		NotFound,
	},
	setup() {
    useHead({
      title: 'Not Found',
    })
	},
});
</script>
