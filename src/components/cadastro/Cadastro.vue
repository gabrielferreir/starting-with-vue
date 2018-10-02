<template>
  <div>
    <h1>Cadastro</h1>
    <form>

      <input name="nome"
             v-model="info.nome"
             placeholder="Nome"
      />

      <input name="email"
             v-model="info.email"
             placeholder="Email"
      />

    </form>
    <div>{{ info }}</div>
  </div>
</template>

<script>
  import Cadastro from '../../domain/Cadastro'
  export default {
    data() {
      return {
        info: new Cadastro()
      }
    }
  }
</script>

<style>
</style>
