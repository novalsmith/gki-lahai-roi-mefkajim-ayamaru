<template>
    <v-container>
        <v-row class="mb-5">

            <v-col cols="2"> 
                <h4>Kategori</h4>
            </v-col>
            <v-col cols="10">
                <C_CategorySection />
            </v-col>
        </v-row>


        <v-row>
            <v-col md="4" v-for="(item, i) in listData" :key="i">
                <div>
                    <v-flex xs12>
                        <v-hover v-slot="{ hover }" open-delay="200">
                            <router-link :to="'/agenda/detail/' + item.slugTitle" class="text-decoration-none">
                                <v-card :elevation="hover ? 18 : 1" :class="{ 'on-hover': hover }">
                                    <v-container fluid grid-list-lg>
                                        <v-layout row> 
                                            <v-img src="../assets/profilemefkajim.jpg"
                                                :width="settings.defaultImageSmallContentWidth"
                                                :height="settings.defaultImageSmallContentHeight"
                                                lazy-src="../assets/profilemefkajim.jpg"
                                                class="grey darken-4 rounded-lg">
                                                <template v-slot:placeholder>
                                                    <v-row class="fill-height ma-0" align="center" justify="center">
                                                        <v-progress-circular indeterminate color="grey lighten-5">
                                                        </v-progress-circular>
                                                    </v-row>
                                                </template>
                                            </v-img> 
                                            <div class="mt-3 ml-3">

                                                <h2 class="font-weight-medium grey--text">
                                                    <v-icon class="grey--text">
                                                        mdi-bell
                                                    </v-icon> {{ item.date }}
                                                </h2>


                                                <div class="subheading font-weight-medium">
                                                    {{ item.title }}
                                                </div>
                                                <h5 class="float-left font-weight-regular my-2">
                                                    <v-chip class="ma-2" small>
                                                        {{ item.category }}
                                                    </v-chip> {{ item.datePublish }}
                                                </h5>
                                            </div> 
                                        </v-layout>
                                    </v-container>
                                </v-card>
                            </router-link>
                        </v-hover>
                    </v-flex>
                </div>
            </v-col>
        </v-row>

    </v-container>

</template>

<script>
import News from '@/components/C_News.vue';
import Breadcrumbs from '@/components/C_Breadcrumbs.vue';
import C_CategorySection from '@/components/C_CategorySection.vue';

import { mapState } from "vuex";
export default {
    data: () => ({
        selectedItem: 1,
        items: [
            { text: 'Desember 2022', icon: 'mdi-clock', total: 5 },
            { text: 'Januari 2021', icon: 'mdi-account', total: 10 },
            { text: 'Maret 2022', icon: 'mdi-flag', total: 10 },
            { text: 'Februari 2021', icon: 'mdi-flag', total: 12 },
            { text: 'Agustus 2022', icon: 'mdi-flag', total: 3 },
            { text: 'September', icon: 'mdi-flag', total: 7 },
        ],
        listData: [
            {
                title: "Ibadah Natal 2021",
                category: "PKB",
                date: "25 Des 2021",
                datePublish: "16 Des 2021"
            },
            {
                title: "Pesparawi Nasional diadakan di maybrat",
                category: "Pesparawi",
                date: "25 Sep 2022",
                datePublish: "16 Des 2021"
            },
            {
                title: "Peresmian Gedung Gereja Cabang di Maybrat",
                category: "Peresmian",
                date: "14 Nov 2022",
                datePublish: "16 Des 2021"
            },
            {
                title: "Sidang Klasis di Maybrat",
                category: "Sidang Klasis",
                date: "02 Jan 2022",
                datePublish: "16 Des 2021"
            }
        ]
    }),
    components: {
        News,
        Breadcrumbs,
        C_CategorySection
    },
    computed: {
        ...mapState(['settings', 'breadcrumData'])
    },
    methods: {
        setBreadcrumsData() {
            const datas = {

                type: "agenda",
                items: [
                    {
                        text: 'Beranda',
                        disabled: false,
                        href: '/',
                        color: "#42A5F5"
                    },
                    {
                        text: 'Agenda',
                        disabled: true,
                        href: 'breadcrumbs_link_2',
                        color: "#BDBDBD"
                    },
                ],

            }
            this.$store.dispatch('breadcrumData', datas);
        }
    },
    created() {
        this.setBreadcrumsData();
    },
}
</script>