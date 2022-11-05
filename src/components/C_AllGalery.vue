<template>
    <v-row>
        <Breadcrumbs />
        <v-row>
            <v-col md="3">
                <v-card class="mx-auto rounded-lg">
                    <v-list>
                        <v-subheader>Album</v-subheader>
                        <v-list-item-group v-model="selectedItem" :color="settings.color">
                            <v-list-item v-for="(item, i) in items" :key="i">
                                <v-list-item-content>
                                    <v-list-item-title v-text="item.text"></v-list-item-title>
                                </v-list-item-content>

                                <v-chip class="mx-5 my-5 white--text" circle small :color="settings.color">
                                    {{ item.total }}
                                </v-chip>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-card>
            </v-col>

            <v-col md="9">
                <v-row>
                    <v-col md="4" v-show="isShowgalery" v-for="image in imagesList" :key="image.alt">
                        <v-hover v-slot="{ hover }" open-delay="200">
                            <a href="javascript:void(0)" @click="openImage(image)">
                                <v-card :elevation="hover ? 18 : 1" :class="{ 'on-hover': hover }">
                                    <v-img :height="settings.defaultImageSmallContentHeight"
                                        :src="require(`../assets/${image.source}`)" :alt="image.alt"
                                        class="grey darken-4"></v-img>
                                    <v-row>
                                        <v-col md="10" offset-md="2">
                                            <v-card-subtitle class="float-right">
                                                25 Sep 2022
                                            </v-card-subtitle>
                                        </v-col>
                                    </v-row>
                                    <v-divider class="mx-5"></v-divider>
                                    <v-card-title class="font-weight-regular">{{ image.title }}</v-card-title>
                                </v-card>
                            </a>
                        </v-hover>
                    </v-col>
                    <v-col md="12" v-show="isShowgalery == false">
                        <v-alert :color="settings.color + ' lighten-5'" icon="mdi-information-outline" dense>
                            Sementara belum ada album foto
                        </v-alert>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <GeneralDialog v-if="this.$store.state.settings['dialogData']['modalType'].isGalery">
            <component :is="child_component"></component>
        </GeneralDialog>

    </v-row>

</template>

<script>
import { mapState } from "vuex";
import News from '@/components/C_News.vue';
import Breadcrumbs from '@/components/C_Breadcrumbs.vue';
import C_CategorySection from '@/components/C_CategorySection.vue';
import GeneralDialog from "@/components/C_GeneralDialog.vue";
import GaleryModal from "@/components/C_GaleryModal.vue";


export default {
    data: () => ({
        dialogm1: '',
        dialog: false,
        isShowgalery: false,
        selectedItem: 0,
        localData: null,
        child_component: 'GaleryModal',
        items: [
            { text: 'Natal', icon: 'mdi-clock', total: 5, slug: "natal" },
            { text: 'Jemaat', icon: 'mdi-account', total: 10, slug: "jemaat" },
            { text: 'PESPARAWI', icon: 'mdi-flag', total: 10, slug: "pesparawi" },
            { text: 'PW', icon: 'mdi-flag', total: 12, slug: "pw" },
            { text: 'Sidang Klasis', icon: 'mdi-flag', total: 3, slug: "sidang-klasis" },
            { text: 'Oukumene', icon: 'mdi-flag', total: 7, slug: "oukumene" },
        ],
        imagesList: [
            { source: "lahai1.jpeg", alt: "asd1", title: "Ibadah Perayaan Natal 2021" },
            { source: "lahai2.jpeg", alt: "sds2", title: "Ibadah Perayaan Natal 2022" },
            { source: "lahai3.jpeg", alt: "asdf3", title: "Ibadah Perayaan Natal 2023" },
            { source: "lahai4.jpeg", alt: "asdf4", title: "Ibadah Perayaan Natal 2024" },
            { source: "lahai5.jpeg", alt: "asdf5", title: "Ibadah Perayaan Natal 2025" },
            { source: "lahai6.jpeg", alt: "asdf6", title: "Ibadah Perayaan Natal 2026" }
        ]
    }),
    components: {
        News,
        Breadcrumbs,
        C_CategorySection,
        GaleryModal,
        GeneralDialog,

    },
    computed: {
        ...mapState(['settings'])
    },
    mounted() {
        this.localData = this.$store.state.settings['dialogData'];
        this.isShowgalery = this.imagesList.length > 0 ? true : false;
        // console.log(this.items.slug.indexOf('natal'));
    },
    methods: {
        openImage(image) {
            this.dialog = true;
            this.localData.isShowDialog = true;
            this.localData.modalType.isGalery = true;
            this.localData.modalType.isSearch = false;
            this.localData.data = image;
            const modalData = {
                dialogData: this.localData
            }
            this.$store.dispatch('settings', modalData);
        },
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
                        href: '/media/foto',
                        color: "#42A5F5"
                    },
                    {
                        text: 'Foto',
                        disabled: true,
                        href: 'breadcrumbs_link_2',
                        color: "#BDBDBD"
                    },
                ],

            }
            this.$store.dispatch('breadcrumData', datas);
        },
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