<template>


  <div>
    <v-main>
      <v-container>
        <Carausel />
        <HomeProfile />
        <HomeInformations />
        <HomeAgenda />
      </v-container>
    </v-main>
    <Parallax />
    <v-main class="mt-15">
      <v-container>
        <!-- <div v-if="settings.screenSize.type.islg">
          <v-row>
            <v-col md="5">
              <Documents />
            </v-col>

            <v-col md="7">
              <Poster />
            </v-col>
          </v-row>
        </div>
        <div v-else> -->
        <Poster />
        <HomeDocuments />

        <!-- </div> -->
        <Galery />
        <Videos />
      </v-container>
    </v-main>
  </div>


</template>

<script>
// @ is an alias to /src
import HomeProfile from '@/components/C_HomeProfile';
import Carausel from '@/components/C_Carausel';
import HomeAgenda from '@/components/C_HomeAgenda';
import HomeInformations from '@/components/C_HomeInformations';
import HomeDocuments from '@/components/C_HomeDocuments';
import Poster from '@/components/C_Poster';
import Parallax from '@/components/C_Parallax';
import Videos from '@/components/C_HomeVideos';
import Galery from '@/components/C_Galery';
import { mapState } from "vuex";
export default {
  name: 'Home',
  components: {
    HomeProfile,
    Carausel,
    HomeAgenda,
    HomeInformations,
    HomeDocuments,
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
