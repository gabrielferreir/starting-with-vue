<template>
  <button @click="confirmMethod()" :class="styleButton" :type="type">{{ title }}</button>
</template>

<script>
  export default {
    props: {
      type: {
        required: true,
        type: String
      },
      title: {
        required: true,
        type: String
      },
      confirm: {
        type: Boolean
      },
      btstyle: {
        type: String
      }
    },
    methods: {
      confirmMethod() {
        if (this.confirm) {
          if (confirm('Confirma essa ação?')) this.$emit('action');
        } else {
          this.$emit('action');
        }
      }
    },
    computed: {
      styleButton() {
        if (this.btstyle === 'default' || !this.btstyle) return 'button';
        if (this.btstyle === 'danger') return 'button danger';

      }
    }
  }
</script>

<style lang="scss">
  .button {
    display: inline-block;
    padding: 10px;
    border-radius: 3px;
    margin: 10px;
    font-size: 1.2em;
    color: #FFF;
    &.danger {
      background-color: firebrick;
    }
    &.default {
      background-color: darkcyan;
    }
  }
</style>
