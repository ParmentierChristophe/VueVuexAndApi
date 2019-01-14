<template>
  <div class="home">
    <h1 class="title">Pays d'europe</h1>
    <div v-if="loading">
      loading...
    </div>
    <div v-else>
      <home-pays-preview :pays="pays"></home-pays-preview>
    </div>
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
        'pays',
        'loading'
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