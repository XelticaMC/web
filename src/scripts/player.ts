import { ref } from "vue";

export type Player = {
	uuid: string;
	displayName: string;
};

export const players = ref<Player[]>([]);

export const isFetching = ref(false);
export const hasError = ref(false);

export const fetchPlayers = async () => {
	hasError.value = false;
	isFetching.value = true;
	try {
		const res = await fetch('https://api.craft.xeltica.work/v1/players');
		const p: Player[] = await res.json();
		p.forEach(pl => {
			// TODO: HTMLにマッピングして色対応する
			pl.displayName = pl.displayName.replace(/§[a-z0-9]/g, '');
		});
		players.value = p;
	} catch (e) {
		console.error(e);
		hasError.value = true;
	} finally {
		isFetching.value = false;
	}
};

fetchPlayers();

setInterval(() => fetchPlayers(), 10000);
