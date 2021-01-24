<template>
	<h2>サーバーの状態</h2>
	<template v-if="state.stat">
		<dl>
			<dt>バージョン</dt>
			<dd>{{state.stat.software}} {{state.stat.version}}</dd>
			<dt>ユーザー数</dt>
			<dd v-text="state.stat.players.online" />
		</dl>
		<ul class="users" v-for="item in (state.stat.players.list || [])" :key="item">
			<li class="user">
				<img class="avatar" :src="`https://crafatar.com/avatars/${state.stat.players.uuid[item]}?overlay`"/>
				<span class="name" v-text="item"/>
			</li>
		</ul>
	</template>
	<div v-else-if="state.error" class="error">
		取得に失敗しました。エラー: {{state.error.message}}
	</div>
	<div v-else class="loading">
		取得中…
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, reactive, ref } from 'vue';

type ServerStatus = Record<string, unknown> | null;

let statCache: ServerStatus;

export default defineComponent({
	setup() {
		const state = reactive({
			stat: statCache,
			error: null as Error | null,
		});

		const fetchData = () => {
			fetch('https://api.mcsrvstat.us/2/play.craft.xeltica.work').then(async res => {
				state.stat = statCache = await res.json();
			}).catch(err => {
				state.error = err;
			});
		};

		const handleRef = ref(-1);

		onMounted(() => {
			fetchData();
		});

		return {
			state,
		};
	},
})
</script>

<style lang="scss" scoped>
h2 {
	font-size: 1rem;
}

.error {
	color: red;
	font-weight: bold;
}
.loading {
	font-style: oblique;
	opacity: 0.7;
}

.users {
	margin: 0;
	padding: 0;

	> .user {
		margin-bottom: 1px;
		padding: 0 8px;
		display: flex;
		align-items: center;
		> .avatar {
			width: 1.4rem;
			height: 1.4rem;
			border-radius: 100%;
		}
		> .name {
			margin-left: 16px;
		}
	}
}
</style>
