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
        <v-row v-if="settings.screenSize.type.ismd || settings.screenSize.type.islg">
            <v-col v-show="isShowVideo" sm="6" md="4" lg="4" v-for="{ item, i } in listData" :color="settings.color"
                :key="i">
                <v-hover v-slot="{ hover }" open-delay="200">
                    <v-card :elevation="hover ? 18 : 1" :class="{ 'on-hover': hover }">
                        <!-- <iframe width="100%" :height="settings.defaultImageContentHeight" :src="result" frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                            <video-embed css="embed-responsive-1by1" src="https://www.youtube.com/watch?v=s4ObxcdXoFE"
                                ref="youtube">
                            </video-embed> -->

                        <LazyYoutube width="100%" src="https://www.youtube.com/watch?v=TcMBFSGVi1c" />

                        <v-row>
                            <v-col md="6">
                                <v-chip class="mx-5 my-5 white--text" :outlined="settings.outlinedGeneralButton" small
                                    :color="settings.color" :to="'/informasi/kategori/natal'">
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
        </v-row>
        <div v-else>
            <v-col v-show="isShowVideo" v-for="{ item, i } in listData" :color="settings.color" :key="i">
                <v-hover v-slot="{ hover }" open-delay="200">
                    <v-card :elevation="hover ? 18 : 1" :class="{ 'on-hover': hover }">
                        <LazyYoutube width="100%" src="https://www.youtube.com/watch?v=TcMBFSGVi1c" />
                        <v-row>
                            <v-col md="6">
                                <v-chip class="mx-5 my-5 white--text" :outlined="settings.outlinedGeneralButton" small
                                    :color="settings.color" :to="'/informasi/kategori/natal'">
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
        </div>


    </v-container>

</template>

<script>
import { mapState } from "vuex";
import Vue from 'vue'
// import Embed from 'v-video-embed'
import { LazyYoutube } from 'vue-lazytube'
import C_CategorySection from '@/components/C_CategorySection.vue';


// global register
// Vue.use(Embed);
export default {
    name: "Video",
    computed: {
        ...mapState(['settings'])
    },
    data() {
        return {
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
        }
    },
    mounted() {
        this.isShowVideo = this.listData.length > 0 ? true : false;
        this.loadURL();
    },
    methods: {
        loadURL() {

            const youtubeEmbedTemplate = 'https://www.youtube.com/embed/'
            const url = this.youtubeURL.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/)
            const YId = undefined !== url[2] ? url[2].split(/[^0-9a-z_/\\-]/i)[0] : url[0]
            const topOfQueue = youtubeEmbedTemplate.concat(YId)
            this.result = topOfQueue
            this.youtubeURL = ''
        }
    },
    components: {
        LazyYoutube,
        C_CategorySection
    }
}
</script>

<style>
iframe {
    width: 100% !important;
    min-width: 300px;
}
</style>