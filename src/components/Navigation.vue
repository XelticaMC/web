<template>
    <nav class="list">
      <RouterLink v-for="item in nav" :key="item.to" :to="item.to" class="item" active-class="active">
        {{item.name}}
      </RouterLink>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    setup() {
        return {
            nav: [
                { to: '/', name: '情報', },
                { to: '/play', name: '遊び方', },
                { to: '/rule', name: 'ルール', },
                { to: '/how-it-works', name: '仕組み', },
                { to: '/links', name: 'リンク', },
            ],
        };
    }
})
</script>

<style lang="scss" scoped>
.list {
    display: flex;
    height: 48px;
    justify-content: space-evenly;
    margin-top: 16px;
    > .item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        &:not(:first-child) {
            border-left: 1px solid rgba(0, 0, 0, 0.2);
        }
        &.active {
            background: rgba(0, 0, 0, 0.3);
            color: white;
        }
    }

}
</style>