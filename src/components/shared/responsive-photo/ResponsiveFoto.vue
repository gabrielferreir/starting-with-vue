<template>
  <section>

    <section class="photo">

      <img :alt="title" :src="photo"/>

    </section>

  </section>
</template>

<script>
  export default {
    props: ['photo', 'title'],
    data() {
      return {}
    }
  }
</script>


<style scoped lang="scss">

  .photo {
    width: 100%;
    height: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    box-sizing: border-box;
    background-color: #333;
    img {
      max-width: 100%;
    }
  }

</style>
