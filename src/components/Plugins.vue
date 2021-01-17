<template>
  <h2>導入プラグイン</h2>
  <table>
      <thead>
          <tr>
              <th>名前</th>
              <th>説明</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="plugin in plugins" :key="plugin.name">
              <td v-text="plugin.name" />
              <td v-text="plugin.description" />
          </tr>
      </tbody>
  </table>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Plugins',

  data() {
    return {
      plugins: [
        {
            name: 'DiscordSRV',
            description: 'Discord 連携プラグイン',
        },
        {
            name: 'dynmap',
            description: 'ウェブマッププラグイン',
        },
        {
            name: 'LunaChat',
            description: 'チャットにて、日本語変換をサーバーで行ってくれるプラグイン',
        },
        {
            name: 'Geyser-Spigot',
            description: '統合版ユーザーも入れるようにするプラグイン',
        },
        {
            name: 'floodgate-bukkit',
            description: '統合版ユーザーがJava版のライセンスを持っていなくても入れるようにするプラグイン',
        },
        {
            name: 'PlugMan',
            description: 'プラグインの個別リロード機能などを持った管理プラグイン',
        },
      ],
    };
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
</style>
