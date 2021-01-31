<template>
	<NotFound />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import NotFound from '../components/NotFound.vue';

export default defineComponent({
	name: 'Fallback',
	components: {
		NotFound,
	},
});
</script>
