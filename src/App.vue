<template>
  <div class="container">
    <Navigation />
    <div class="view">
      <RouterView />
    </div>
    <footer>
        <p>(C)2021 Xeltica</p>
        <p><small class="revision" v-text="revision" /></p>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navigation from './components/Navigation.vue';
import revision from './revision';

export default defineComponent({
  name: 'App',
  components: {
    Navigation,
  },
  data() {
    return {
      revision,
    }
  },
  methods: {
    
  },
});
</script>

<style lang="scss">
html {
    --bg: #fff;
    --containerBg: rgba(255, 255, 255, 0.8);
    --bgImage: url(./assets/day.jpg);
    --fg: #222;
    --accent: rgb(30, 172, 2);
    --linkActive: var(--fg);
    --tableBg: #eee;
    --tableBorder: #ccc;
    --divider: #aaa;
    --navActiveBg: rgba(255, 255, 255, 0.5);
    --navStickBg: rgba(255, 255, 255, 0.5);

  &.dark {
    --bg: #222;
    --containerBg: rgba(40, 40, 40, 0.7);
    --bgImage: url(./assets/night.jpg);
    --fg: #fff;
    --accent: rgb(160, 236, 145);
    --tableBg: #111;
    --tableBorder: #333;
    --divider: #333;
    --navActiveBg: rgba(0, 0, 0, 0.5);
    --navStickBg: rgba(0, 0, 0, 0.5);
  }
}

body {
    width: 100%;
    margin: 0 auto;
    background-color: var(--bg);
    color: var(--fg);
    background-image: var(--bgImage);
    background-attachment: fixed;
    background-size: cover;
}

footer {
  text-align: center;
  border-top: 1px solid var(--divider);
  margin-top: 16px;
}

.container {
    position: relative;
    background: var(--containerBg);
    padding-bottom: 16px;
    /* backdrop-filter: blur(8px); */
    box-shadow: 0 0 32px rgba(0, 0, 0, 0.8);
    max-width: 800px;
    min-height: 100vh;
    margin: auto;
    box-sizing: border-box;
}

.view {
  padding: 0 32px;
}

h1, h2, h3, h4, h5, h6, a {
  color: var(--accent);
  &.active {
    color: var(--linkActive);
  }
}

h1 { font-size: 1.6rem; }
h2 { font-size: 1.5rem; }
h3 { font-size: 1.4rem; }
h4 { font-size: 1.3rem; }
h5 { font-size: 1.1rem; }
h6 { font-size: 1rem; }

table {
    background-color: var(--tableBg);
    border-collapse: collapse;

    th, td {
        text-align: left;
        padding: 8px;
        border: 1px solid var(--tableBorder);
    }
}

.revision {
  opacity: 0.5;
}
</style>