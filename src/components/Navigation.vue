<template>
    <div class="dummy" ref="dummy" />
    <nav class="list" ref="list">
        <template v-for="item in nav">
            <a
                v-if="item.external"
                :key="item.to"
                :href="item.to"
                class="item"
                active-class="active"
                v-text="item.name"
            />
            <RouterLink
                v-else
                :key="item.to"
                :to="item.to"
                class="item"
                active-class="active"
                v-text="item.name"
            />
        </template>
    </nav>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue';
export default defineComponent({
    setup() {
        const list = ref(null as HTMLElement | null);
        const dummy = ref(null as HTMLElement | null);

        const observer = new IntersectionObserver(([e]) => {
            const cl = list.value?.classList;
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
            list,
            dummy,
            nav: [
                { to: '/', name: '情報', },
                { to: '/play', name: '遊び方', },
                { to: '/rule', name: 'ルール', },
                { to: '//map.craft.xeltica.work', name: 'マップ', external: true },
            ],
        };
    }
})
</script>

<style lang="scss" scoped>
.dummy {
    margin-top: 16px;
}

.list {
    display: flex;
    height: 48px;
    justify-content: space-evenly;
    position: sticky;
    top: 0;
    transition: 0.2s ease;
    > .item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        text-decoration: none;
        &:not(:first-child) {
            border-left: 1px solid rgba(0, 0, 0, 0.2);
        }
        &.active {
            background: rgba(0, 0, 0, 0.5);
            color: white;
        }
    }

    &.stick {
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
    }
}
</style>