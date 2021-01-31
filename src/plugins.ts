import { ref } from "vue";

export type Plugin = {
	name: string;
	enabled: boolean;
	version: string;
};

export const plugins = ref<Plugin[]>([]);

export const isFetching = ref(false);
export const hasError = ref(false);

export const fetchPlugins = async () => {
	hasError.value = false;
	isFetching.value = true;
	try {
		const res = await fetch('http://api.craft.xeltica.work/v1/plugins');
		const p: Plugin[] = await res.json();
		plugins.value = p;
	} catch (e) {
		console.error(e);
		hasError.value = true;
	} finally {
		isFetching.value = false;
	}
};

fetchPlugins();
