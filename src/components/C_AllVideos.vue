<template>
    <v-row>
        <Breadcrumbs />
        <v-row>
            <v-col md="3">
                <C_CategorySection />
            </v-col>

            <v-col md="9">
                <v-row>
                    <v-col v-show="isShowVideo" md="6" v-for="(items,i) in listData" :color="settings.color" :key="i">
                        <v-hover v-slot="{ hover }" open-delay="200">
                            <v-card :elevation="hover ? 18 : 1" :class="{ 'on-hover': hover }">
                                <iframe :height="settings.defaultImageSmallContentHeight" :src="result" frameborder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>

                                <v-row>
                                    <v-col md="6">
                                        <v-chip class="mx-5 my-5 white--text" :outlined="settings.outlinedGeneralButton"
                                            small :color="settings.color" :to="'/informasi/kategori/natal'">
                                            Natal
                                        </v-chip>
                                    </v-col>
                                    <v-col md="6">
                                        <v-card-subtitle class="float-right">
                                            25 Sep 2022
                                        </v-card-subtitle>
                                    </v-col>
                                </v-row>
                                <v-divider class="mx-5"></v-divider>
                                <v-card-title class="font-weight-regular">Sidang Klasis di Maybrat</v-card-title>

                            </v-card>
                        </v-hover>
                    </v-col>
                    <v-col md="12" v-show="isShowVideo == false">
                        <v-alert :color="settings.color + ' lighten-5'" icon="mdi-information-outline" dense>
                            Sementara belum ada video
                        </v-alert>
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
        result: "",
        isShowVideo: false,
        youtubeURL: "https://www.youtube.com/watch?v=qZXt1Aom3Cs",
        listData: [
            {
                youtubeURL: "qZXt1Aom3Cs"
            },
            {
                youtubeURL: "qZXt1Aom3Cs"
            },
            {
                youtubeURL: "qZXt1Aom3Cs"
            },
            {
                youtubeURL: "qZXt1Aom3Cs"
            },

            {
                youtubeURL: "qZXt1Aom3Cs"
            },
            {
                youtubeURL: "qZXt1Aom3Cs"
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
        this.isShowVideo = this.listData.length > 0 ? true : false;
        this.loadURL();
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
                        text: 'Media',
                        disabled: false,
                        href: '/media/video',
                        color: "#42A5F5"
                    },
                    {
                        text: 'Video',
                        disabled: true,
                        href: 'breadcrumbs_link_2',
                        color: "#BDBDBD"
                    },
                ],

            }
            this.$store.dispatch('breadcrumData', datas);
        },
        loadURL() {

            const youtubeEmbedTemplate = 'https://www.youtube.com/embed/'
            const url = this.youtubeURL.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/)
            const YId = undefined !== url[2] ? url[2].split(/[^0-9a-z_/\\-]/i)[0] : url[0]
            const topOfQueue = youtubeEmbedTemplate.concat(YId)
            this.result = topOfQueue
            this.youtubeURL = ''
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