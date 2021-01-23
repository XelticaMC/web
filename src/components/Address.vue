<template>
    <section class="addr">
        <div class="box"><slot/></div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({});
</script>

<style lang="scss" scoped>
.addr {
    display: flex;
    justify-content: center;
    align-items: center;

    .box {
        border: 2px solid var(--tableBorder);
        background: var(--tableBg);
        padding: 8px;
        width: max-content;
    }
}
</style>