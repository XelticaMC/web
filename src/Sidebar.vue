<template>
    <div class="sidebar">
      <h1>test</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa error veniam repellat 
        saepe deserunt nesciunt hic ut dolores quae tempora illum cumque earum incidunt, dicta 
        harum corporis doloremque quos minima eligendi soluta aspernatur voluptatem. Laboriosam 
        nesciunt porro maiores tempora ipsa numquam excepturi, cumque velit natus sed facere 
        esse magni doloremque totam perspiciatis eos sint. Repudiandae neque autem cum similique 
        qui odit consectetur quibusdam accusamus excepturi ratione quo necessitatibus nesciunt 
        assumenda vel ex dignissimos deleniti omnis perspiciatis incidunt facere nostrum dicta 
        praesentium, vitae laborum. Quibusdam animi odio modi delectus velit esse veniam voluptatibus! 
        Dolorum, quod. Recusandae expedita harum aperiam consequuntur suscipit!
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa error veniam repellat 
        saepe deserunt nesciunt hic ut dolores quae tempora illum cumque earum incidunt, dicta 
        harum corporis doloremque quos minima eligendi soluta aspernatur voluptatem. Laboriosam 
        nesciunt porro maiores tempora ipsa numquam excepturi, cumque velit natus sed facere 
        esse magni doloremque totam perspiciatis eos sint. Repudiandae neque autem cum similique 
        qui odit consectetur quibusdam accusamus excepturi ratione quo necessitatibus nesciunt 
        assumenda vel ex dignissimos deleniti omnis perspiciatis incidunt facere nostrum dicta 
        praesentium, vitae laborum. Quibusdam animi odio modi delectus velit esse veniam voluptatibus! 
        Dolorum, quod. Recusandae expedita harum aperiam consequuntur suscipit!
      </p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Sidebar',
    setup() {

    },
});
</script>

<style lang="scss" scoped>
.sidebar {
    position: sticky;
    top: 0;
    max-width: 320px;
    width: 100%;
    background: var(--containerBg);
    padding-bottom: 16px;
    margin: 0 16px;
    box-shadow: 0 0 32px rgba(0, 0, 0, 0.8);
    min-height: 100vh;
    height: max-content;
    box-sizing: border-box;
}
</style>