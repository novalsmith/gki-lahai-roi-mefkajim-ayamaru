<template>


  <div>
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
        <div v-if="settings.screenSize.type.islg">
          <v-row>
            <v-col md="5">
              <Documents />
            </v-col>

            <v-col md="7">
              <Poster />
            </v-col>
          </v-row>
        </div>
        <div v-else>
          <Documents />
          <Poster />
        </div>
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
// import Search from '../components/C_SearchingPage.vue'
import { mapState } from "vuex";
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
    // Search
  },
  data: () => ({
    loading: false
  }),
  created() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1000);


  },
  computed: {
    ...mapState(['settings'])
  },
}
</script>
