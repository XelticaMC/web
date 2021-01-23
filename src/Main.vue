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
    <button class="sidebar-button" @click="clicked">
      <i-ic-menu />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Navigation from './components/Navigation.vue';
import revision from './revision';

export default defineComponent({
  name: 'Main',
  components: {
    Navigation,
  },
  setup(_, ctx) {
    return {
      revision,
      clicked() {
        ctx.emit('sidebarActivated');
      },
    }
  },
  emits: [
    'sidebarActivated',
  ],
  methods: {
    
  },
});
</script>

<style lang="scss" scoped>
.container {
    position: relative;
    background: var(--containerBg);
    padding-bottom: 16px;
    box-shadow: 0 0 32px rgba(0, 0, 0, 0.8);
    min-height: 100%;
    box-sizing: border-box;
}

.view {
  padding: 0 32px;
}

.revision {
  opacity: 0.5;
}

.sidebar-button {
  position: fixed;
  right: 32px;
  bottom: 32px;
  width: 64px;
  height: 64px;
  background: var(--accent);
  border: none;
  border-radius: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  outline: none;
  transition: box-shadow 0.05s ease;
  color: #333;
  font-size: 24px;

  &:hover {
    filter: brightness(120%);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  }

  &:active {
    filter: brightness(60%);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  }
}


@media screen and (min-width: 1024px) {
  .sidebar-button {
    display: none;
  }
}
</style>