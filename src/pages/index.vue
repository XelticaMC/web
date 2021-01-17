<template>
  <h2>バージョン</h2>
  <p>Java版、統合版、両方から入ることができます。</p>
  <ul>
      <li>Minecraft Java Edition 1.16.4</li>
      <li>Minecraft 統合版 1.16.2xx</li>
  </ul>
  <p>
      技術的な問題により、現在統合版でログインするとスキンが他者からはデフォルトの物に見えてしまいます。
  </p>

  <MinecraftStats />

  <Plugins />
  <Discord style="margin-top: 32px"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Discord from '../components/Discord.vue';
import Plugins from '../components/Plugins.vue';
import MinecraftStats from '../components/MinecraftStats.vue';

export default defineComponent({
  name: 'Index',
  components: {
    Discord,
    Plugins,
    MinecraftStats,
  },
  
  data() {
    return {
        
    }
  },
  methods: {
      
  },
});
</script>

<style lang="scss" scoped>

</style>