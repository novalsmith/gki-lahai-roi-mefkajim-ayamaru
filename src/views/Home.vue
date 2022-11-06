<template>
  <div>
    <v-main>
      <v-container>
        <Carausel />
        <Hero />
        <Agenda />
        <News />
      </v-container>
    </v-main>
    <Parallax />
    <v-main>
      <v-container>
        <v-row class="my-15">
          <v-col md="5">
            <!-- Documents -->
            <Documents />
          </v-col>

          <v-col md="7">
            <!-- Poster -->
            <Poster />
          </v-col>
        </v-row>
        <Videos />
        <Galery />
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
    Galery
  }
}
</script>
