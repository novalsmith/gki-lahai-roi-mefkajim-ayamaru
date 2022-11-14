<template>
    <v-row>
        <Breadcrumbs />
        <v-row>
            <v-col md="3">
                <C_CategorySection />
            </v-col>

            <v-col md="9">
                <v-row>

                    <v-col md="4" v-for="{ item, i } in listData" :key="i">
                        <v-hover v-slot="{ hover }" open-delay="200">
                            <v-card :elevation="hover ? 18 : 1" :class="{ 'on-hover': hover }">
                                <router-link :to="'/informasi/detail/' + item.slugTitle">
                                    <v-img :height="settings.defaultImageSmallContentHeight"
                                        src="../assets/lahai5.jpeg"></v-img>
                                </router-link>
                                <v-row>
                                    <v-col md="6">
                                        <v-chip class="mx-5 my-5 white--text" outlined small :color="settings.color"
                                            :to="'/informasi/kategori/' + item.slugCategory">
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
                                <v-card-title class="font-weight-regular text-subtitle-1">{{ item.title }}</v-card-title>

                            </v-card>
                        </v-hover>

                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-row>

</template>

<script>
import News from '@/components/C_News.vue';
import Breadcrumbs from '@/components/C_Breadcrumbs.vue';
import C_CategorySection from '@/components/C_CategorySection.vue';

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
        listData: [
            {
                id: "23453",
                category: "PKB",
                title: "Ibadah Natal 2021",
                date: "25 Des 2021"
            },
            {
                id: "2366",
                category: "PW",
                title: "Pesparawi Nasional diadakan di maybrat",
                date: "25 Sep 2022"
            },
            {
                id: "2553",
                category: "Jemaat",
                title: "Peresmian Gedung Gereja Cabang di Maybrat",
                date: "25 Sep 2022"
            },
            {
                id: "23499",
                category: "Natal",
                title: "Sidang Klasis di Maybrat",
                date: "25 Sep 2022"
            },
            {
                id: "2888",
                category: "Natal",
                title: "Sidang Klasis di Maybrat",
                date: "25 Des 2022"
            },
            {
                id: "2345",
                category: "Natal",
                title: "Sidang Klasis di Maybrat",
                date: "25 Apr 2022"
            }
        ]
    }),
    components: {
        News,
        Breadcrumbs,
        C_CategorySection
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