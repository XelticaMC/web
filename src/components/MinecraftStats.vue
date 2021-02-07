<template>
	<dl>
		<dt>ユーザー数</dt>
		<dd v-text="players.length" />
	</dl>
	<ul class="users" v-for="item in players" :key="item">
		<li class="user">
			<img class="avatar" :src="`https://crafatar.com/avatars/${item.uuid}?overlay`"/>
			<span class="name" v-text="item.displayName"/>
		</li>
	</ul>
	<div v-if="hasError" class="error">
		取得に失敗しました。
		<button @click="fetchPlayers">再試行</button>
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, reactive, ref } from 'vue';

import { players, hasError, isFetching, fetchPlayers } from '../player';

type ServerStatus = Record<string, unknown> | null;

let statCache: ServerStatus;

export default defineComponent({
	setup() {
		return {
			players,
			hasError,
			isFetching,
			fetchPlayers,
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
