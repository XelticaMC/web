<template>
	<dl>
		<dt>ユーザー数</dt>
		<dd v-text="players.length" />
	</dl>
	<ul class="users" v-for="item in featuredPlayers" :key="item.uuid">
		<li class="user">
			<img class="avatar" :src="`https://crafatar.com/avatars/${item.uuid}?overlay`" :alt="item.displayName" :title="item.displayName"/>
			<span class="name" v-text="item.displayName"/>
		</li>
	</ul>
	<div class="faces">
		<img v-for="item in otherPlayers" :key="item.uuid" class="avatar" :alt="item.displayName" :title="item.displayName" :src="`https://crafatar.com/avatars/${item.uuid}?overlay`"/>
	</div>
	<div v-if="hasError" class="error">
		取得に失敗しました。
		<button @click="fetchPlayers">再試行</button>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onUnmounted, reactive, ref } from 'vue';

import { players, hasError, isFetching, fetchPlayers } from '../player';

type ServerStatus = Record<string, unknown> | null;

let statCache: ServerStatus;

export default defineComponent({
	setup() {
		return {
			players,
			featuredPlayers: computed(() => players.value.slice(0, 5)),
			otherPlayers: computed(() => players.value.slice(5)),
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
		> .name {
			margin-left: 16px;
		}
	}
}

.faces {
	padding: 4px;
	> .avatar {
		margin: 4px;
	}
}

.avatar {
	width: 1.4rem;
	height: 1.4rem;
	border-radius: 100%;
}
</style>
