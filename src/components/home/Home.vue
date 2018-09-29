<template>
  <section>
    <h1>{{ title }}</h1>

    <input type="search"
           class="filtro"
           placeholder="Pesquise"
           @input="filtro = $event.target.value"
    />

    {{ filtro }}
    <div class="card">
      <photo v-for="photo of photosFiltred"
             :title="photo.titulo"
             :photo="photo.url"
      >

        <div slot="legend">Pazuzu</div>
        <div slot="date">29/09/2018</div>
      </photo>
    </div>

  </section>
</template>

<script>
  import Photo from "../shared/photo/Photo";

  export default {
    components: {
      'photo': Photo
    },
    data() {
      return {
        title: 'Frameworks',
        photos: [],
        filtro: ''
      }
    },
    computed: {
      photosFiltred() {
        console.log('photosFiltred')
        if (this.filtro) {
          const regex = new RegExp(this.filtro.trim(), 'i');
          return this.photos.filter(photo => regex.test(photo.titulo))
        } else {
          return this.photos;
        }
      }
    },
    created() {
      this.$http.get('http://localhost:3000/v1/fotos').then(res => {
        console.log(res.body);
        this.photos = res.body;
      })
    },


  }
</script>

<!-- scoped - componentizes style-->
<style scoped lang="scss">
  .card {
    display: flex;
    flex-wrap: wrap;
  }
</style>
