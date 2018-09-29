<template>
  <section>

    <section class="photo">

      <div @click="visibilit = !visibilit">
        <responsive-photo
          :photo="photo"
          :title="title"
        ></responsive-photo>
      </div>

      <span>{{ title }}</span>

      <transition name="group">
        <div v-show="visibilit">
          <slot name="legend"></slot>
          <slot name="date"></slot>
        </div>
      </transition>

    </section>

  </section>
</template>

<script>
  import ResponsivePhoto from '../responsive-photo/ResponsiveFoto'

  export default {
    components: {
      'responsive-photo': ResponsivePhoto
    },
    props: ['photo', 'title', 'status'],
    data() {
      return {
        visibilit: false
      }
    }
  }
</script>


<style scoped lang="scss">

  .photo {
    width: 300px;
    padding: 16px;
    box-sizing: border-box;
  }

  .group-enter, .group-leave-active {
    opacity: 0;
    max-height: 0;
    overflow: hidden;
  }

  .group-enter-active, .group-leave-active {
    transition: opacity 480ms;
    max-height: 100px;
  }


</style>
