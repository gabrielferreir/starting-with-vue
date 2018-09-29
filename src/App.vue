<template>
  <div>
    <vue-menu :routes="routes"></vue-menu>
    <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import {routes} from './routes';
  import Menu from './components/menu/Menu'

  export default {
    components: {
      'vue-menu': Menu
    },
    data() {
      return {
        routes
      }
    }
  }
</script>

<style>
  .pagina-enter, .pagina-leave-active {
    opacity: 0;
    position: absolute;
  }

  .pagina-enter-active, .pagina-leave-active {
    transition: opacity 180ms;
  }
</style>
