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
      <div v-for="photo of photosFiltred">
        <photo
          :title="photo.titulo"
          :photo="photo.url">
          <div slot="legend">Pazuzu</div>
          <div slot="date">29/09/2018</div>
          <div slot="button">
            <vue-button :type="'danger'" :title="'EXCLUIR'" :confirm="true" btstyle="danger" @action="remove(photo)"></vue-button>
          </div>
        </photo>
      </div>
    </div>

  </section>
</template>

<script>
  import Photo from "../shared/photo/Photo";
  import Button from '../shared/button/Button';

  export default {
    components: {
      'photo': Photo,
      'vue-button': Button
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
    methods: {

      remove(item) {
        alert('Remove ' + item.titulo)
      }

    }


  }
</script>

<!-- scoped - componentizes style-->
<style scoped lang="scss">
  .card {
    display: flex;
    flex-wrap: wrap;
  }
</style>
