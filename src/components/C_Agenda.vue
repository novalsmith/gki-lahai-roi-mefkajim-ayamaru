<template>
    <div v-if="settings.screenSize.type.islg">
        <v-row class="mb-5"> 
            <v-col cols="2">
                <h4>Kategori</h4>
            </v-col>
            <v-col cols="10">
                <C_CategorySection @getCategoryBySlug="getCategoryBySlug" />
            </v-col>
        </v-row> 
        <v-row>
            <v-col md="4" v-for="item in agendaData">
                <div>
                    <v-flex xs12>
                        <v-hover v-slot="{ hover }" open-delay="200">
                            <router-link :to="'/agenda/detail/' + item.slugTitle" class="text-decoration-none">
                                <v-card :elevation="hover ? 18 : 1" :class="{ 'on-hover': hover }">
                                    <v-container fluid grid-list-lg>
                                        <v-layout row>
                                            <v-img :src="require(`../assets/${item.source}`)"
                                                :width="settings.defaultImageSmallContentWidth"
                                                :height="settings.defaultImageSmallContentHeight"
                                                :lazy-src="require(`../assets/${item.source}`)"
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
                                                    <v-chip class="ma-2" small outlined :color="settings.color">
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
            <v-col md="12" v-show="isShowAgenda == false">
                <v-alert color="blue-grey" dense outlined icon="mdi-information-outline">
                    Sementara belum ada data
                </v-alert>
            </v-col>
        </v-row> 
    </div>

</template>

<script>
import C_CategorySection from '@/components/C_CategorySection.vue';

import { mapState } from "vuex";
export default {
    data: () => ({
        selectedItem: 1,
        datafiltering: [],
        isCategoryClicked: false,
        isShowAgenda: false,
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
                id: "23453",
                category: "PKB",
                slugCategory: "pkb",
                slugTitle: "ibadah-natal-2021",
                title: "Ibadah Natal 2021",
                date: "5 Menit yang lalu",
                datePublish: "25 Des 2022",
                source: "profilemefkajim.jpg"
            },
            {
                id: "2366",
                category: "PW",
                slugCategory: "pw",
                slugTitle: "ibadah-natal-2021",
                title: "Pesparawi Nasional diadakan di maybrat",
                datePublish: "8 jam yang lalu",
                date: "06 Jan 2023",
                source: "profilemefkajim.jpg"
            },
            {
                id: "2553",
                category: "PW 2",
                slugCategory: "pw",
                slugTitle: "ibadah-natal-2021",
                title: "Peresmian Gedung Gereja Cabang di Maybrat",
                datePublish: "25 Sep 2022",
                date: "07 Jan 2023",
                source: "profilemefkajim.jpg"

            },
            {
                id: "23499",
                category: "Natal",
                slugCategory: "natal",
                slugTitle: "ibadah-natal-2021",
                title: "Sidang Klasis di Maybrat",
                datePublish: "25 Sep 2022",
                date: "06 Feb 2023",
                source: "profilemefkajim.jpg"

            },
            {
                id: "2888",
                category: "Natal",
                slugCategory: "sidang-klasis",
                slugTitle: "sidang-klasis-di-maybrat",
                title: "Sidang Klasis di Maybrat",
                datePublish: "25 Sep 2022",
                date: "06 Mar 2023",
                source: "profilemefkajim.jpg"

            },
            {
                id: "2345",
                category: "Natal",
                slugCategory: "natal",
                slugTitle: "ibadah-natal-2021",
                title: "Sidang Klasis di Maybrat",
                datePublish: "25 Sep 2022",
                date: "06 Des 2023",
                source: "profilemefkajim.jpg"

            }
        ]
    }),
    components: {
        C_CategorySection
    },
    computed: {
        ...mapState(['settings', 'breadcrumData']),
        agendaData() {
            if (!this.isCategoryClicked) {
                this.datafiltering = this.listData;
            }
            return this.datafiltering;
        }
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
                    this.isShowAgenda = false;
                } else {
                    this.isShowAgenda = true;
                }
            }
            this.datafiltering = filteredList;
        }
    },
    created() {
        this.setBreadcrumsData();
    },
}
</script>