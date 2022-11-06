<template >
  <div>
    <v-row>
      <Breadcrumbs />
      <v-col md="10" offset-md="1">
        <h1 class="font-weight-regular text-center">Pesparawi nasional di maybrat</h1>
        <v-row class="my-1">
          <v-col md="4" class="text-center">
            <v-chip outlined small :color="settings.color" :to="`/informasi/kategori/natal`">
              Sidang Klasis
            </v-chip>
          </v-col>
          <v-col md="4" class="text-center">
            <p> 12 Okt 2022</p>
          </v-col>
          <v-col md="4" class="text-right">
            Bagikan
            <v-btn class="circle" icon :color="settings.color">
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn class="circle" icon :color="settings.color">
              <v-icon>mdi-email</v-icon>
            </v-btn>
            <v-btn class="circle" icon :color="settings.color">
              <v-icon>mdi-whatsapp</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col md="10" offset-md="1">
        <v-img class="grey darken-4 rounded-lg" src="../assets/profilemefkajim.jpg"> </v-img>
        <div class="my-15">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum repellat libero fugit vero est tempora
            amet, fuga quos ad dignissimos! Quas, necessitatibus maiores eos natus officiis iste repellendus dolorum
            porro.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, eum inventore repellendus dolore
            distinctio pariatur soluta! Excepturi, tenetur quibusdam distinctio illo iusto eius alias, labore sunt
            impedit doloremque tempore earum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil modi nobis
            quis aliquid tempora ea,
            eum aut hic dicta reprehenderit voluptates officiis earum ex,
            atque optio at quas ratione! Temporibus!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum repellat libero fugit vero est tempora
            amet, fuga quos ad dignissimos! Quas, necessitatibus maiores eos natus officiis iste repellendus dolorum
            porro.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, eum inventore repellendus dolore
            distinctio pariatur soluta! Excepturi, tenetur quibusdam distinctio illo iusto eius alias, labore sunt
            impedit doloremque tempore earum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil modi nobis
            quis aliquid tempora ea,
            eum aut hic dicta reprehenderit voluptates officiis earum ex,
            atque optio at quas ratione! Temporibus!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum repellat libero fugit vero est tempora
            amet, fuga quos ad dignissimos! Quas, necessitatibus maiores eos natus officiis iste repellendus dolorum
            porro.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, eum inventore repellendus dolore
            distinctio pariatur soluta! Excepturi, tenetur quibusdam distinctio illo iusto eius alias, labore sunt
            impedit doloremque tempore earum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil modi nobis
            quis aliquid tempora ea,
            eum aut hic dicta reprehenderit voluptates officiis earum ex,
            atque optio at quas ratione! Temporibus!</p>

          <v-img src="../assets/lahai4.jpeg" height="auto" class="grey darken-4 rounded-lg my-10">
          </v-img>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum repellat libero fugit vero est tempora
            amet, fuga quos ad dignissimos! Quas, necessitatibus maiores eos natus officiis iste repellendus dolorum
            porro.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, eum inventore repellendus dolore
            distinctio pariatur soluta! Excepturi, tenetur quibusdam distinctio illo iusto eius alias, labore sunt
            impedit doloremque tempore earum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil modi nobis
            quis aliquid tempora ea,
            eum aut hic dicta reprehenderit voluptates officiis earum ex,
            atque optio at quas ratione! Temporibus!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum repellat libero fugit vero est tempora
            amet, fuga quos ad dignissimos! Quas, necessitatibus maiores eos natus officiis iste repellendus dolorum
            porro.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, eum inventore repellendus dolore
            distinctio pariatur soluta! Excepturi, tenetur quibusdam distinctio illo iusto eius alias, labore sunt
            impedit doloremque tempore earum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil modi nobis
            quis aliquid tempora ea,
            eum aut hic dicta reprehenderit voluptates officiis earum ex,
            atque optio at quas ratione! Temporibus!</p>
        </div>
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
            text: 'Agenda',
            disabled: false,
            href: '/agenda',
            color: "#42A5F5"
          },
          {
            text: 'Detail Agenda',
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
  }
}
</script> 