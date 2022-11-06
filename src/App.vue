<template>
  <v-app>
    <v-system-bar v-show="false" class="px-0 py-0 my-0 my-0">
      <img src="https://cdn.pixelfordinner.cloud/uploads/2014/11/voa_panel_sample-1024x0-c-f.jpg" width="100%" alt=""
        height="200%">
    </v-system-bar>
    <v-container>
      <!-- <div v-if="isMobile()">MOBILE</div>
      <div v-else>DESKTOP OR TABLET</div> -->
      <C_Header />
    </v-container>
    <!-- <v-main>
      <v-container> -->
    <!-- <router-link :to="data.path" v-for="data in itemsMenu">{{data.name}} &nbsp;&nbsp;&nbsp;</router-link> -->
    <router-view />
    <v-btn v-scroll="onScroll" v-show="fab" fab fixed small bottom right :color="settings.color" @click="toTop"
      class="mb-15" v-if="settings.screenSize.type.isxs">
      <v-icon color="white">mdi-chevron-up</v-icon>
    </v-btn>
    <v-btn v-scroll="onScroll" v-show="fab" small fab fixed bottom right :color="settings.color" @click="toTop" class="mb-15"
      v-else>
      <v-icon color="white">mdi-chevron-up</v-icon>
    </v-btn>
    <!-- </v-container>
    </v-main> -->
    <Footers class="mt-15" />
  </v-app>
</template>

<script>
import C_Header from '@/components/C_Header.vue';
import Footers from '@/components/C_Footer.vue';
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(['settings'])
  },
  created() {
    this.setMobileDeviceSettings();
  },
  components: {
    C_Header,
    Footers
  },
  data() {
    return {
      fab: false
      // itemsMenu: []
    };
  },
  methods: {
    onScroll(e) {
      if (typeof window === 'undefined') return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0)
    },
    isMobile() {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    },
    setMobileDeviceSettings() {

      const datas = {
        isMobileData: this.isMobile()
      }
      this.$store.dispatch('settings', datas);
    }
  }
}
</script>

<style>
.on-hover {
  transition: all 0.5s ease;
}
</style>