<template>
    <v-fade-transition mode="out-in">
        <v-row class="my-15">
            <v-col md="6">
                <h1 class="font-weight-regular">
                    <v-icon>
                        mdi-camera
                    </v-icon>
                    Album Foto
                </h1>
            </v-col>
            <v-col md="6">
                <v-btn :color="settings.color" small class="white-text float-right" rounded outlined to="foto">
                    <v-icon> mdi-chevron-right</v-icon>
                </v-btn>
            </v-col>
            <v-col md="4" v-show="isShowgalery" v-for="image in imagesList" :key="image.alt">
                <v-hover v-slot="{ hover }" open-delay="200">
                    <router-link :to="'/foto/album/' + image.slug" class="text-decoration-none">
                        <v-card :elevation="hover ? 18 : 1" :class="{ 'on-hover': hover }">
                            <v-img :height="settings.defaultImageContentHeight"
                                :src="require(`../assets/${image.source}`)" :alt="image.alt" class="grey darken-4">
                            </v-img>
                            <v-row>
                                <v-col md="6">
                                    <v-chip class="mx-5 my-5 white--text" small
                                        :outlined="settings.outlinedGeneralButton" :color="settings.color"
                                        :to="'/informasi/kategori/natal'">
                                        {{ image.total }} Foto
                                    </v-chip>

                                </v-col>
                                <v-col md="6">
                                    <v-card-subtitle class="float-right">
                                        {{ image.date }}
                                    </v-card-subtitle>
                                </v-col>
                            </v-row>
                            <v-divider class="mx-5"></v-divider>
                            <v-card-title class="font-weight-regular">{{ image.title }}</v-card-title>

                        </v-card>
                    </router-link>

                </v-hover>
            </v-col>
            <v-col md="12" v-show="isShowgalery == false">
                <v-alert :color="settings.color + ' lighten-5'" icon="mdi-information-outline" dense>
                    Sementara belum ada album foto
                </v-alert>
            </v-col>

        </v-row>
    </v-fade-transition>
</template>


<script>
import { mapState } from "vuex";
export default {
    name: "Galery",
    computed: {
        ...mapState(['settings'])
    },
    data() {
        return {
            isShowgalery: false,
            imagesList: [
                { source: "lahai1.jpeg", alt: "asd1", title: "Natal", total: 15, date: "25 Sept 2022", slug: "natal" },
                { source: "lahai2.jpeg", alt: "sds2", title: "Sidang Klasis 2022", total: 23, date: "15 Sept 2022", slug: "sidang-klasis" },
                { source: "lahai3.jpeg", alt: "asdf3", title: "Natal", total: 50, date: "6 Agus 2022", slug: "natal" },
                { source: "lahai4.jpeg", alt: "asdf4", title: "PKB", total: 14, date: "25 Des 2022", slug: "pkb" },
                { source: "lahai5.jpeg", alt: "asdf5", title: "PW", total: 20, date: "2 Sept 2022", slug: "pw" },
                { source: "lahai6.jpeg", alt: "asdf6", title: "Pesparawi", total: 15, date: "8 Sept 2022", slug: "pesparawi" }
            ]
        }
    },
    mounted() {
        this.isShowgalery = this.imagesList.length > 0 ? true : false;
    }

}
</script>