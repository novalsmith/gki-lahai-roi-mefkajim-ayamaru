<template>
  <v-footer padless>
    <div v-if="settings.screenSize.type.isxs || settings.screenSize.type.ismd">
      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">

        <v-card>
          <v-toolbar elevation="0">
            <v-btn icon @click="dialog = false">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-text-field dense rounded filled width="100%" class="ml-5 mt-7"
              placeholder="Masukan kata yang ingin dicari disini" prepend-inner-icon="mdi-magnify">
            </v-text-field>
          </v-toolbar>
          <v-list three-line>
            <v-list-item v-for="item in items">

              <v-img :src="item.image" class="mr-4 rounded" max-width="100" min-width="100"></v-img>

              <v-list-item-content>
                <span class="text-uppercase font-weight-regular text-caption" v-text="item.category"></span>

                <div v-text="item.title"></div>
              </v-list-item-content>
            </v-list-item>

          </v-list>
        </v-card>
      </v-dialog>
      <v-navigation-drawer v-model="drawer" fixed bottom temporary class="rounded-t-xl">
        <v-row class="my-1 mx-1">
          <v-col md="10">
            <span>Menu</span>
          </v-col>
          <v-col md="2" class="text-right">
            <v-btn icon @click.stop="drawer = false" :color="settings.color">
              <v-icon>
                mdi-close
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-list nav dense>
          <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
            <v-list-item>
              <v-list-item-title>Foo</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Bar</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Fizz</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Buzz</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Foo</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Bar</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Fizz</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Buzz</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Foo</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Bar</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Fizz</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Buzz</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-bottom-navigation fixed :color="settings.color" height="60">
        <v-btn to="/">
          <!-- <span>Home</span> -->
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-btn @click.stop="drawer = !drawer">
          <!-- <span>Menu</span> -->
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        <v-btn>
          <v-icon>
            mdi-newspaper-variant-multiple
          </v-icon>
        </v-btn>

        <v-btn @click="searchingButton">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>



        <!-- <v-btn>
<span>Nearby</span>
<v-icon>mdi-map-marker</v-icon>
</v-btn> -->
      </v-bottom-navigation>
    </div>
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} — <strong>GKI Lahai-Roi Mefkajim Ayamaru</strong>
    </v-col>
  </v-footer>
</template>

<script>
import { mapState } from "vuex";
// import { width, type } from 'screenSize';
// const screenSize = new useBreakpoints();
export default {
  computed: {
    ...mapState(['settings'])
  },
  data: () => ({
    drawer: false,
    group: null,
    dialog: false,
    notifications: false,
    sound: true,
    widgets: false,
    items: [
      {
        image: 'https://cdn-images-1.medium.com/max/1024/1*9C9hLji68wV373tk8okLYA.jpeg',
        title: 'TBI’s 5 Best: SF Mocktails to Finish Dry January Strong',
        category: 'Travel',
        keyword: 'Drinks',

      },
      {
        image: 'https://cdn-images-1.medium.com/max/1024/1*BBNtYUieAqHoXKjiJ2mMjQ.png',
        title: 'PWAs on iOS 12.2 beta: the good, the bad, and the “not sure yet if good”',
        category: 'Technology',
        keyword: 'Phones'
      },
      {
        image: 'https://cdn-images-1.medium.com/max/1024/1*rTEtei1UEmNqbq6evRsExw.jpeg',
        title: 'How to Get Media Mentions for Your Business',
        category: 'Media',
        keyword: 'Social'
      },
      {
        image: 'https://cdn-images-1.medium.com/max/1024/1*FD2nkJewVeQnGf0ommQfrw.jpeg',
        title: 'The Pitfalls Of Outsourcing Self-Awareness To Artificial Intelligence',
        category: 'Technology',
        keyword: 'Military'
      },
      {
        image: 'https://cdn-images-1.medium.com/max/1024/1*eogFpsVgNzXQLCVgFzT_-A.jpeg',
        title: 'Degrees of Freedom and Sudoko',
        category: 'Travel',
        keyword: 'Social',
      }
    ],
  }),
  watch: {
    group() {
      this.drawer = false;

    },
  },
  methods: {
    // console.log(screenSize);
    searchingButton() {
      this.dialog = true;
    }
  }
}
</script>