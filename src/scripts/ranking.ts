import { reactive, ref } from "vue";

export type Ranking = {
	name: string;
	displayName: string;
	mode: 'normal' | 'point' | 'time';
	playerMode: boolean;
	rankingRecord: RankingRecord[];
};

export type RankingRecord = {
	key: string;
	value: string;
};

export const ranking = reactive<Record<string, Ranking>>({});

export const isFetching = ref(false);
export const hasError = ref(false);

export const fetchPlayers = async () => {
	hasError.value = false;
	try {
		const rankingNames: string[] = await fetch('https://api.craft.xeltica.work/v1/ranking').then(r => r.json());
		rankingNames.forEach(async name => {
			const data: Ranking = await fetch(`https://api.craft.xeltica.work/v1/ranking/${name}`).then(r => r.json());
			ranking[name] = data;
		});
	} catch (e) {
		console.error(e);
		hasError.value = true;
	}
};

fetchPlayers();

setInterval(() => fetchPlayers(), 5000);
