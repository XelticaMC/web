<template>
    <h2>Discord</h2>
    <p>Discord サーバーを用意しています。参加していなくても遊べますが、重要なお知らせや情報交換ができるので、何倍も楽しめます！是非入ってください！もちろん、登録は無料です！</p>
    <iframe class="widget" src="https://discord.com/widget?id=759661786105905152&theme=dark" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Discord',
})
</script>

<style lang="scss" scoped>
    .widget {
        display: block;
        /* max-width: 360px; */
        width: 100%;
    }
</style>