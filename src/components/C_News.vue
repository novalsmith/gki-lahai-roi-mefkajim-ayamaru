<template>
    <v-row class="my-15">
        <v-col md="6">
            <h1 class="font-weight-regular">
                <v-icon>
                    mdi-newspaper-variant-multiple
                </v-icon>
                Informasi
            </h1>
        </v-col>
        <v-col md="6">
            <v-btn v-show="isShowNews" small :color="settings.color" class="white-text float-right" rounded outlined
                to="/informasi">
                <v-icon> mdi-chevron-right</v-icon>
            </v-btn>
        </v-col>
        <v-col md="4" v-show="isShowNews" v-for="item in listData">
            <v-hover v-slot="{ hover }" open-delay="200">
                <router-link :to="'/informasi/detail/' + item.slugTitle">
                    <v-card :elevation="hover ? 18 : 1" :class="{ 'on-hover': hover }">

                        <v-img :height="settings.defaultImageContentHeight" src="../assets/lahai5.jpeg"></v-img>

                        <v-row>
                            <v-col md="6">
                                <v-chip class="mx-5 my-5 white--text" small :color="settings.color"
                                    :outlined="settings.outlinedGeneralButton">
                                    {{ item.category }}
                                </v-chip>
                            </v-col>
                            <v-col md="6">
                                <v-card-subtitle class="float-right">
                                    {{ item.date }}
                                </v-card-subtitle>
                            </v-col>
                        </v-row>
                        <v-divider class="mx-5"></v-divider>
                        <v-card-title class="font-weight-regular">{{ item.title }}</v-card-title>

                    </v-card>
                </router-link>
            </v-hover>

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