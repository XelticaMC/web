import striptags from "striptags";
import { ref } from "vue";

export type Post = {
	id: number;
	link: string;
	title: string;
	excerpt: string;
};

type RenderedString = { rendered: string };

type RawPost = {
	id: number;
	link: string;
	title: RenderedString;
	excerpt: RenderedString;
};

export const posts = ref<Post[]>([]);
export const isFetching = ref(false);
export const hasError = ref(false);

export const fetchPosts = async () => {
	hasError.value = false;
	isFetching.value = true;
	try {
		const res = await fetch('https://blog.craft.xeltica.work/wp-json/wp/v2/posts');
		const rawData: RawPost[] = await res.json();
		posts.value = rawData.map(r => ({
			id: r.id,
			link: r.link,
			title: striptags(r.title.rendered),
			excerpt: striptags(r.excerpt.rendered),
		})).slice(0, 5);
	} catch (e) {
		console.error(e);
		hasError.value = true;
	} finally {
		isFetching.value = false;
	}
};

fetchPosts();
