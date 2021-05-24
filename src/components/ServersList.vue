<template>
  <div class="serverslist-main-container">
    <div class="serverslist-status-list">
      <div class="serverslist-up">
        <p>
          Up
        </p>
      </div>
      <div class="serverslist-maintenance">
        <p>
          Maintenance
        </p>
      </div>
      <div class="serverslist-down">
        <p>
          Down
        </p>
      </div>
    </div>
    <h2>Servers in system</h2>
    <div class="serverlist-server-list">
      <div class="serverlist-single-server" v-for="(item,index) in servers" v-bind:key="index" data-testid="single-server">
        <p class="serverlist-single-server-name">
            {{item.name}}
        </p>
        <p class="serverlist-single-server-status">
            {{item.status}}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed, ComputedRef, defineComponent, onMounted,
} from 'vue';
import { useStore } from 'vuex';
import { Server } from '../interface/Server';

export default defineComponent({
  name: 'ServersList',
  setup() {
    onMounted((): void => {
      // eslint-disable-next-line no-console
      console.log('Servers list was mounted');
    });
    const store = useStore();
    const servers:ComputedRef<Server[]> = computed(() => store.getters.SERVERS);
    return {
      servers,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../style/ServersList.scss'
</style>
