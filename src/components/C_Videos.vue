<template >
    <div>
        <v-row>
            <v-col md="6">
                <h1 class="font-weight-regular">
                    <v-icon>
                        mdi-video
                    </v-icon>
                    Video
                </h1>
            </v-col>
            <v-col md="6">
                <v-btn v-show="isShowVideo" small :color="settings.color" class="white-text float-right" rounded
                    outlined>
                    <v-icon> mdi-chevron-right</v-icon>
                </v-btn>
            </v-col>
        </v-row>
        <v-row class="my-15">
            <v-col v-show="isShowVideo" md="4" v-for="item in listData" :color="settings.color">
                <v-hover v-slot="{ hover }" open-delay="200">
                    <v-card :elevation="hover ? 18 : 1" :class="{ 'on-hover': hover }">
                        <iframe width="100%" :height="settings.defaultImageContentHeight" :src="result" frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>

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
            <v-col md="12" v-show="isShowVideo == false">
                <v-alert :color="settings.color + ' lighten-5'" icon="mdi-information-outline" dense>
                    Sementara belum ada video
                </v-alert>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapState } from "vuex";

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
    }
}
</script>

<style>
iframe {
    width: 100% !important;
    min-width: 300px;
}
</style>