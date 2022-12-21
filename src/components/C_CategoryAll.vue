<template>
    <v-container>
        <v-row class="mb-5">

            <v-col cols="2">
                <!-- <Breadcrumbs /> -->
                <h4>Kategori</h4>
            </v-col>
            <v-col cols="10">
                <C_CategorySection />
            </v-col>
        </v-row>
        <v-row>
            <v-col md="4" v-for="( image, i ) in listCategoriesData" :key="i">
                <v-flex xs12>
                    <router-link :to="'/informasi/detail/' + image.slugTitle" class="text-decoration-none">
                        <v-hover v-slot="{ hover }" open-delay="200">
                            <a href="javascript:void(0)" @click="openImage(image)">
                                <v-card :elevation="hover ? 5 : 1" :class="{ 'on-hover': hover }">
                                    <v-container fluid grid-list-lg>
                                        <v-layout row>
                                            <v-img :height="settings.defaultImageSmallContentHeight"
                                                src="../assets/lahai5.jpeg" :alt="image.title"
                                                lazy-src="../assets/lahai5.jpeg" class="grey darken-4 rounded-lg"
                                                :width="settings.defaultImageSmallContentWidth">
                                                <template v-slot:placeholder>
                                                    <v-row class="fill-height ma-0" align="center" justify="center">
                                                        <v-progress-circular indeterminate color="grey lighten-5">
                                                        </v-progress-circular>
                                                    </v-row>
                                                </template>
                                            </v-img>

                                            <div>
                                                <div class="subheading font-weight-medium mt-3 ml-3">
                                                    {{ image.title }}
                                                </div>
                                                <h5 class="float-left font-weight-regular my-2">
                                                    <v-chip class="ma-2" small>
                                                        {{ image.category }}
                                                    </v-chip> {{ image.date }}
                                                </h5>
                                            </div>
                                        </v-layout>
                                    </v-container>
                                </v-card>
                            </a>
                        </v-hover>
                    </router-link>
                </v-flex>
            </v-col>
            <v-col md="12" v-show="isShowgalery == false">
                <v-alert :color="settings.color + ' lighten-5'" icon="mdi-information-outline" dense>
                    Sementara belum ada informasi
                </v-alert>
            </v-col>

        </v-row>
    </v-container>
</template>

<script>
import News from '@/components/C_News.vue';
import Breadcrumbs from '@/components/C_Breadcrumbs.vue';
import C_CategorySection from '@/components/C_CategorySection.vue';
import C_Parallax from '@/components/C_Parallax.vue';

import { mapState } from "vuex";
export default {
    data: () => ({
        selectedItem: 0,
        items: [
            { text: 'Natal', icon: 'mdi-clock', total: 5, slug: "natal" },
            { text: 'Jemaat', icon: 'mdi-account', total: 10, slug: "jemaat" },
            { text: 'PESPARAWI', icon: 'mdi-flag', total: 10, slug: "pesparawi" },
            { text: 'PW', icon: 'mdi-flag', total: 12, slug: "pw" },
            { text: 'Sidang Klasis', icon: 'mdi-flag', total: 3, slug: "sidang-klasis" },
            { text: 'Oukumene', icon: 'mdi-flag', total: 7, slug: "oukumene" },
        ],
        listCategoriesData: [
            {
                id: "23453",
                category: "PKB",
                slugCategory: "pkb",
                slugTitle: "ibadah-natal-2021",
                title: "Ibadah Natal 2021",
                date: "5 Menit yang lalu"
            },
            {
                id: "2366",
                category: "PW",
                slugCategory: "pw",
                slugTitle: "ibadah-natal-2021",
                title: "Pesparawi Nasional diadakan di maybrat",
                date: "8 jam yang lalu"
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
    components: {
        News,
        Breadcrumbs,
        C_CategorySection,
        C_Parallax
    },
    computed: {
        ...mapState(['settings'])
    },
    mounted() {

        // console.log(this.items.slug.indexOf('natal'));
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
                        text: 'Informasi',
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
        // console.log(this.$route.params.id);

        // var listData = this.items.filter((item) => {
        //     return item.slug;
        // });
        let indexData = 0;
        this.items.forEach((el, index) => {
            if (el.slug === this.$route.params.id) indexData = index;
        });
        this.selectedItem = indexData;
        console.log(indexData);
        // listData
        // var datas = this.items.findIndex(x => x.word === 'you');
    }
}
</script>