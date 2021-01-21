<template>
  <h2>バージョン</h2>
  <p>
    Java版、統合版、両方から入ることができます。
    <router-link to="/how-it-works">仕組み</router-link>
  </p>
  <ul>
      <li>
        Minecraft Java Edition 1.16.4および1.16.5
        <ul>
          <li>ポート: 25565</li>
        </ul>
      </li>
      <li>
        Minecraft 統合版 v1.16.100〜v1.16.201
        <ul>
          <li>ポート: 19132</li>
        </ul>
      </li>
  </ul>
  <p>
      技術的な問題により、現在統合版でログインするとスキンが他者からはデフォルトの物に見えてしまいます。
  </p>

  <MinecraftStats />

  <Plugins />
  <Links />
  <Discord style="margin-top: 32px"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Discord from '../components/Discord.vue';
import Plugins from '../components/Plugins.vue';
import MinecraftStats from '../components/MinecraftStats.vue';
import Links from '../components/Links.vue';

export default defineComponent({
  name: 'Index',
  components: {
    Discord,
    Plugins,
    MinecraftStats,
    Links,
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