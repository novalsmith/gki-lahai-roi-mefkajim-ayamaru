<template>
  <v-main v-if="loading">
    <v-container>
      <v-skeleton-loader type="image, article"></v-skeleton-loader>
    </v-container>
  </v-main>
  <div v-else>
    <v-main>
      <v-container>
        <Carausel />
        <Hero />
        <News />
        <Agenda />
      </v-container>
    </v-main>
    <Parallax />
    <v-main>
      <v-container>
        <v-row class="my-2">
          <v-col md="5">
            <!-- Documents -->
            <Documents />
          </v-col>

          <v-col md="7">
            <!-- Poster -->
            <Poster />
          </v-col>
        </v-row>
        <Galery />
        <Videos />
      </v-container>
    </v-main>

  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/C_Hero.vue';
import Carausel from '@/components/C_Carausel.vue';
import Agenda from '@/components/C_Agenda.vue';
import News from '@/components/C_News.vue';
import Documents from '@/components/C_Documents.vue';
import Poster from '@/components/C_Poster.vue';
import Parallax from '@/components/C_Parallax.vue';
import Videos from '@/components/C_Videos.vue';
import Galery from '@/components/C_Galery.vue';
import search from '../components/C_SearchingPage.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    Carausel,
    Agenda,
    News,
    Documents,
    Poster,
    Parallax,
    Videos,
    Galery,
    search
  },
  data: () => ({
    loading: false
  }),
  created() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1000);


  }
}
</script>
