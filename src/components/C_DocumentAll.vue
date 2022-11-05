<template>
    <div>
      <v-row>
        <Breadcrumbs/>  
        <v-col md="10" offset-md="1">
        </v-col>
        <v-col md="8" offset-md="2"> 
            <v-card>
        <v-toolbar :color="settings.color" class="white--text">
            <v-app-bar-nav-icon class="white--text">
                <v-icon>
                    mdi-file
                </v-icon>
            </v-app-bar-nav-icon>

            <v-toolbar-title>Dokumen</v-toolbar-title> 
            <v-spacer></v-spacer>
            <v-text-field class="pt-5" solo dense rounded placeholder="Masukan kata yang ingin dicari disini"
                    prepend-inner-icon="mdi-magnify">
                </v-text-field>
        </v-toolbar>

        <v-list v-show="isShowDocument" three-line>
            <template v-for="(item, index) in listDocuments">
                <v-subheader v-if="item.header" :key="item.header" v-text="item.header"></v-subheader>
                <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>
                <v-list-item v-else :key="item.title">
                    <v-list-item-avatar>
                        <v-icon>mdi-folder</v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title v-html="item.title"></v-list-item-title>
                        <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                    </v-list-item-content>
 
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <div v-on="on" v-bind="attrs">
                                <v-btn fab small :color="settings.color" outlined>
                                    <v-icon>mdi-download</v-icon>
                                </v-btn>
                            </div>
                        </template>
                        <span>Download</span>
                    </v-tooltip>  

                </v-list-item>
            </template>
        </v-list>
       
        <v-list v-show="isShowDocument==false">
            <v-list-item>
                <v-list-item-content>
                        <v-list-item-title>
                            <v-alert 
                                :color="settings.color+' lighten-5'"
                                icon="mdi-information-outline"
                                dense
                                > 
                                    Sementara belum ada album foto
                            </v-alert> 
                        </v-list-item-title>
                      
                    </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-card>
        </v-col> 
      </v-row>
    </div>
</template>
  
  <script>
  import { mapState } from "vuex";
  import Breadcrumbs from '@/components/C_Breadcrumbs.vue';
  import OtherNews from '@/components/C_OtherNews.vue';
  export default {
    name: "Video",
    computed: {
      ...mapState(['settings'])
    },
    data() {
      return {
        isShowDocument:false,
        listDocuments: [
            { header: 'Silahkan Download Dokumen Dibawah ini' },
            {
                avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                title: 'Brunch this weekend?',
                subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
            },
            { divider: true, inset: true },
            {
                avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
                subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
            },
            { divider: true, inset: true },
            {
                avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                title: 'Oui oui',
                subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
            },
            { divider: true, inset: true },
            {
                avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
                title: 'Birthday gift',
                subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
            },
            { divider: true, inset: true },
            {
                avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
                title: 'Recipe to try',
                subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
            },
        ],
        data: []
      }
    },
    components: {
      Breadcrumbs,
      OtherNews
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
        console.log(this.$route.params) // outputs 'yay'
  
      }
    },
    created() {
      this.setBreadcrumsData();
    },
    mounted(){
        this.isShowDocument = this.listDocuments.length > 0 ? true : false; 
    }
  }
  </script> 