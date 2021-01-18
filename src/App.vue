<template>
  <div class="container">
    <header>
        <h1>XelticaMC</h1>
        <p>XelticaMC は、Xelticaが管理するマインクラフトサーバーです。</p>
        <Address>craft.xeltica.work</Address>
    </header>
    <Navigation />
    <div class="view">
      <RouterView />
    </div>
    <footer>
        <p>(C)2021 Xeltica</p>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Address from './components/Address.vue';
import Navigation from './components/Navigation.vue';

export default defineComponent({
  name: 'App',
  components: {
    Address,
    Navigation,
  },
  data() {
    return {
      
    }
  },
  methods: {
    
  },
});
</script>

<style lang="scss">
body {
    width: 100%;
    margin: 0 auto;
    background-color: #222;
    color: #fff;
    --accent: rgb(160, 236, 145);
    background-image: url(./assets/background.png);
    background-attachment: fixed;
    background-size: cover;
}

header {
  text-align: center;
}

footer {
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  margin-top: 16px;
}

.container {
    position: relative;
    background: rgba(0, 0, 0, 0.8);
    padding: 32px 0;
    /* backdrop-filter: blur(8px); */
    box-shadow: 0 0 32px rgba(0, 0, 0, 0.8);
    max-width: 800px;
    min-height: 100vh;
    margin: auto;
    box-sizing: border-box;
}

.view {
  padding: 32px;
}

h1, h2, a {
  color: var(--accent);
  &.active {
    color: white;
  }
}

table {
    background-color: #111;
    border-collapse: collapse;

    th, td {
        text-align: left;
        padding: 8px;
        border: 1px solid #333;
    }
}
</style>