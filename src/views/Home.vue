<template>
  <div class="home">
    <h1 class="title">Pays d'europe</h1>
    <home-pays-preview :pays="pays"></home-pays-preview>
  </div>
</template>

<script>
  import HomePaysPreview from '@/components/HomePaysPreview';
  import {
    mapActions,
    mapState,
  } from "vuex";

  export default {
    name: 'home',
    beforeMount() {
      this.$store.dispatch('fetchPays');
    },


    computed: {
      ...mapState([
        'pays'
      ]),
      ...mapActions([
        'fetchPays'
      ]),

    },

    components: {
      HomePaysPreview
    }
  }
</script>