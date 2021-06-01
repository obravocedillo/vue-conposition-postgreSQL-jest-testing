<template>
  <div class="navigation-bar-main-container">

    <!-- site logo or name -->
    <div class="navigation-logo-container" data-testid="navigation-item">
      <div class="navigation-logo">
        <p>
          Servers Status
        </p>
      </div>
    </div>
    <!-- site logo or name -->

    <!-- navigation items -->
    <div class="navigation-item-container" data-testid="navigation-item">
      <div class="navigation-item">
        <p @click="changeView('/')">
          Servidores
        </p>
      </div>
      <div class="navigation-item">
        <p @click="changeView('/add-server')">
          Añadir Servidor
        </p>
      </div>
    </div>
    <!-- navigation items -->

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Navbar',
  setup(){
    const router = useRouter()
    const changeView = (url: string):void => {
      router.push({
        path: url,
      })
    }

    return {
      changeView
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../style/Navbar.scss'
</style>
