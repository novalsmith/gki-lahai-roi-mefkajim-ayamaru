<template>
  <v-container>
    <v-row class="mb-5">

      <v-col cols="2">
        <h4>Kategori</h4>
      </v-col>
      <v-col cols="10">
        <C_CategorySection @getCategoryBySlug="getCategoryBySlug" />
      </v-col>
    </v-row>
    <v-row>
      <v-col md="4" v-for="items in documentsData">
        <v-flex xs12>
          <router-link :to="'/informasi/detail/' + items.subtitle" class="text-decoration-none">
            <v-hover v-slot="{ hover }" open-delay="200">

              <v-card :elevation="hover ? 5 : 1" :class="{ 'on-hover': hover }">
                <v-container fluid grid-list-lg>
                  <v-layout row>
                    <v-img :height="settings.defaultImageSmallContentHeight" :src="require(`../assets/${items.source}`)"
                      :alt="items.title" :lazy-src="require(`../assets/${items.source}`)"
                      class="grey darken-4 rounded-lg" :width="settings.defaultImageSmallContentWidth">
                      <template v-slot:placeholder>
                        <v-row class="fill-height ma-0" align="center" justify="center">
                          <v-progress-circular indeterminate color="grey lighten-5">
                          </v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>

                    <div>
                      <div class="subheading font-weight-medium mt-3 ml-3">
                        <p v-html="items.title"></p>
                      </div>
                      <h5 class="float-left font-weight-regular my-2">
                        <v-chip class="ma-2" small outlined :color="settings.color">
                          <v-icon> mdi-download </v-icon> Download
                        </v-chip> {{ items.date }}
                      </h5>
                    </div>
                  </v-layout>
                </v-container>
              </v-card>

            </v-hover>
          </router-link>
        </v-flex>
      </v-col>
      <v-col md="12" v-show="isShowDocument == false">
        <v-alert color="blue-grey" dense outlined icon="mdi-information-outline">
          Sementara belum ada data
        </v-alert>
      </v-col>

    </v-row>
  </v-container>
</template>
  
<script>
import { mapState } from "vuex";
import Breadcrumbs from '@/components/C_Breadcrumbs.vue';
import OtherNews from '@/components/C_OtherNews.vue';
import C_CategorySection from '@/components/C_CategorySection.vue';
export default {
  name: "Video",
  computed: {
    ...mapState(['settings']),
    documentsData() {
      if (!this.isCategoryClicked) {
        this.datafiltering = this.listDocuments;
      }
      return this.datafiltering;
    }
  },
  data() {
    return {
      isCategoryClicked: false,
      isShowDocument: false,
      datafiltering: [],
      listData: [
        {
          id: "23453",
          category: "PKB",
          slugCategory: "pkb",
          slugTitle: "ibadah-natal-2021",
          title: "Ibadah Natal 2021",
          date: "5 Menit yang lalu",
          source: "lahai5.jpeg"
        },
        {
          id: "2366",
          category: "PW",
          slugCategory: "pw",
          slugTitle: "ibadah-natal-2021",
          title: "Pesparawi Nasional diadakan di maybrat",
          date: "8 jam yang lalu",
          source: "lahai5.jpeg"
        },
        {
          id: "2553",
          category: "PW 2",
          slugCategory: "pw",
          slugTitle: "ibadah-natal-2021",
          title: "Peresmian Gedung Gereja Cabang di Maybrat",
          date: "25 Sep 2022",
          source: "lahai5.jpeg"
        },
        {
          id: "23499",
          category: "Natal",
          slugCategory: "natal",
          slugTitle: "ibadah-natal-2021",
          title: "Sidang Klasis di Maybrat",
          date: "25 Sep 2022",
          source: "lahai5.jpeg"
        },
        {
          id: "2888",
          category: "Natal",
          slugCategory: "sidang-klasis",
          slugTitle: "sidang-klasis-di-maybrat",
          title: "Sidang Klasis di Maybrat",
          date: "25 Sep 2022",
          source: "lahai5.jpeg"
        },
        {
          id: "2345",
          category: "Natal",
          slugCategory: "natal",
          slugTitle: "ibadah-natal-2021",
          title: "Sidang Klasis di Maybrat",
          date: "25 Sep 2022",
          source: "lahai5.jpeg"
        }
      ],
      data: []
    }
  },
  components: {
    Breadcrumbs,
    OtherNews,
    C_CategorySection
  },
  methods: {
    setBreadcrumsData() {
      const datas = {
        type: "informasi",
        items: [
          {
            text: 'Beranda',
            disabled: false,
            href: '/',
            color: "#42A5F5"
          },
          {
            text: 'Dokumen',
            disabled: true,
            href: 'breadcrumbs_link_2',
            color: "#BDBDBD"
          },
        ],

      }
      this.$store.dispatch('breadcrumData', datas);

    },
    getCategoryBySlug(event) {
      var filteredList = [];
      if (event != '') {
        if (event === this.$store.state.settings.allCategory) {
          filteredList = this.listData;
        } else {
          filteredList = this.listData.filter((e) => e.slugCategory === event).map((e) => { return e });
        }
        this.isCategoryClicked = true;
        if (filteredList.length == 0) {
          this.isShowDocument = false;
        } else {
          this.isShowDocument = true;
        }
      }
      this.datafiltering = filteredList;
    }
  },
  created() {
    this.setBreadcrumsData();
  },
  mounted() {
    this.isShowDocument = this.listData.length > 0 ? true : false;
  }
}
</script> 