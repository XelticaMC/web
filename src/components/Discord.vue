<template>
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
        margin: 0 auto;
        max-width: 360px;
        width: 100%;
    }
</style>