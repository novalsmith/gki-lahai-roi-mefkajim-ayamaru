<template>
    <v-row class="my-15">
        <v-col md="6">
            <h3 class="font-weight-regular">
                <v-icon>
                    mdi-newspaper-variant-multiple
                </v-icon>
                Informasi
            </h3>
        </v-col>
        <v-col md="6">
            <v-btn v-show="isShowNews" small text :color="settings.color" class="white-text float-right"
                to="/informasi">
                Lainnya
            </v-btn>
        </v-col>
        <v-col md="4" v-show="isShowNews" v-for="item in listData">
            <v-flex xs12>
                <v-hover v-slot="{ hover }" open-delay="200">
                    <router-link :to="'/informasi/detail/' + item.slugTitle" class="text-decoration-none">
                        <v-card :elevation="hover ? 5 : 1" :class="{ 'on-hover': hover }">
                            <v-container fluid grid-list-lg>
                                <v-layout row>
                                    <v-flex xs5>
                                        <v-img contain src="../assets/lahai5.jpeg" height="auto" class="rounded-lg"
                                            transition="false">
                                        </v-img>
                                    </v-flex>
                                    <v-flex xs7>
                                        <div>
                                            <div class="subheading font-weight-medium">
                                                {{ item.title }}
                                            </div>
                                            <v-layout row class="my-3">
                                                <v-flex xs6>
                                                    <v-chip class="white--text" small :color="settings.color"
                                                        :outlined="settings.outlinedGeneralButton">
                                                        {{ item.category }}
                                                    </v-chip>
                                                </v-flex>
                                                <v-flex xs6>
                                                    <h5 class="float-right font-weight-regular"> {{ item.date }}</h5>
                                                </v-flex>
                                            </v-layout>
                                        </div>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card>
                    </router-link>
                </v-hover>
            </v-flex>
        </v-col>
        <v-col md="12" v-show="isShowNews == false">
            <v-alert :color="settings.color + ' lighten-5'" icon="mdi-information-outline" dense>
                Sementara belum ada informasi
            </v-alert>
        </v-col>
    </v-row>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "News",
    computed: {
        ...mapState(['settings'])
    },
    data: () => ({
        isShowNews: false,
        listData: [
            {
                id: "23453",
                category: "PKB",
                slugCategory: "pkb",
                slugTitle: "ibadah-natal-2021",
                title: "Ibadah Natal 2021",
                date: "25 Des 2021"
            },
            {
                id: "2366",
                category: "PW",
                slugCategory: "pw",
                slugTitle: "ibadah-natal-2021",
                title: "Pesparawi Nasional diadakan di maybrat",
                date: "25 Sep 2022"
            },
            {
                id: "2553",
                category: "Jemaat",
                slugCategory: "jemaat",
                slugTitle: "ibadah-natal-2021",
                title: "Peresmian Gedung Gereja Cabang di Maybrat",
                date: "25 Sep 2022"
            },
            {
                id: "23499",
                category: "Natal",
                slugCategory: "natal",
                slugTitle: "ibadah-natal-2021",
                title: "Sidang Klasis di Maybrat",
                date: "25 Sep 2022"
            },
            {
                id: "2888",
                category: "Natal",
                slugCategory: "sidang-klasis",
                slugTitle: "sidang-klasis-di-maybrat",
                title: "Sidang Klasis di Maybrat",
                date: "25 Sep 2022"
            },
            {
                id: "2345",
                category: "Natal",
                slugCategory: "natal",
                slugTitle: "ibadah-natal-2021",
                title: "Sidang Klasis di Maybrat",
                date: "25 Sep 2022"
            }
        ]
    }),
    mounted() {
        this.isShowNews = this.listData.length > 0 ? true : false;
    }
}
</script> 