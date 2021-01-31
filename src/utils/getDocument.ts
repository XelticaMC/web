import MarkdownIt from 'markdown-it';

const markdown = MarkdownIt({
	html: true,
});

const parse = (md: string): Document => {
	// markdown の全容をパースする
	const parsed = markdown.parse(md, {});
	if (parsed.length === 0) return {
		title: '',
		body: '',
	};
	const buf = [...parsed];
	const headingTokens = [];
	let headingStart = 0;
	// もっとも上にある見出しを抽出する
	while (buf[0].type !== 'heading_open') {
		buf.shift();
		headingStart++;
	}
	buf.shift();
	while (buf[0].type as string !== 'heading_close') {
		const token = buf.shift();
		if (token) {
			headingTokens.push(token);
		}
	}
	// 抽出した見出しを除く部分をbodyとして抽出する
	const bodyTokens = [...parsed];
	bodyTokens.splice(headingStart, headingTokens.length + 2);
	// 各々レンダーする
	return {
		title: markdown.renderer.render(headingTokens, {}, {}),
		body: markdown.renderer.render(bodyTokens, {}, {})
	};
};

export type Document = {
	title: string;
	body: string;
};

export const getDocument = async (path: string) => {
	const res = await fetch(`/docs/${path}.md`);
	const md = await res.text();
	return parse(md);
};
