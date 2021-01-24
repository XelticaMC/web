<template>
	<div class="dummy" ref="dummy" />
	<div class="wrapper" ref="wrapper">
		<header>
			<h1>
				<RouterLink to="/">XelticaMC</RouterLink>
			</h1>
			<Address>play.craft.xeltica.work</Address>
		</header>
	</div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue';

import Address from './Address.vue';

export default defineComponent({
	components: {
		Address,
	},
	setup() {
		const wrapper = ref(null as HTMLElement | null);
		const dummy = ref(null as HTMLElement | null);

		const observer = new IntersectionObserver(([e]) => {
			const cl = wrapper.value?.classList;
			if (e.isIntersecting) cl?.remove('stick');
			else cl?.add('stick');
		});

		onMounted(() => {
			if (!dummy.value) return;
			observer.observe(dummy.value);
		});

		onBeforeUnmount(() => {
			if (!dummy.value) return;
			observer.unobserve(dummy.value);
		});

		return {
			wrapper,
			dummy,
		};
	}
})
</script>

<style lang="scss" scoped>
header {
	display: flex;
	justify-content: space-between;
	text-align: center;
	padding: 16px 32px;

	> h1 {
		margin: 0;
	}

	@media screen and (max-width: 525px) {
		flex-direction: column;
	}
}

.wrapper {
	position: sticky;
	top: 0;
	transition: 0.2s ease;

	&.stick {
		background: var(--navStickBg);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
	}
}

.list {
	display: flex;
	height: 48px;
	justify-content: space-evenly;
	> .item {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		text-decoration: none;
		border-bottom: 2px solid var(--divider);
		&.active {
			color: var(--linkActive);
			border-color: var(--accent);
			cursor: default;
		}
		&.disabled {
			opacity: 0.5;
		}
	}
}
</style>
