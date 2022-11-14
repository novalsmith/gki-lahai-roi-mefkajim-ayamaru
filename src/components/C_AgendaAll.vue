<template>
    <v-row>
        <Breadcrumbs />

        <v-row>
            <v-col md="3">
                <v-card class="mx-auto rounded-lg mb-10">
                    <v-list>
                        <v-subheader>Agenda</v-subheader>
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
                <!-- Category Section -->

                <C_CategorySection />

            </v-col>

            <v-col md="9">
                <v-row>
                    <v-col md="4" v-for="(item, i) in listData" :key="i">
                        <v-hover v-slot="{ hover }" open-delay="200">
                            <router-link :to="'/agenda/detail/' + item.title" class="text-decoration-none">
                                <v-card :elevation="hover ? 18 : 1" :class="{ 'on-hover': hover }">
                                    <v-img class="white--text align-end"
                                        :height="settings.defaultImageSmallContentHeight"
                                        src="../assets/profilemefkajim.jpg">
                                        <v-chip :color="settings.color" class="mx-5 my-5 white--text">
                                            <v-icon class="mx-1">
                                                mdi-bell
                                            </v-icon> {{ item.date }}
                                        </v-chip>
                                    </v-img>

                                    <v-row>
                                        <v-col md="6">
                                            <v-chip class="mx-5 my-5 white--text"
                                                :outlined="settings.outlinedGeneralButton" small
                                                :color="settings.color">
                                                Sidang Klasis
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
                date: "25 Des 2021"
            },
            {
                title: "Pesparawi Nasional diadakan di maybrat",
                date: "25 Sep 2022"
            },
            {
                title: "Peresmian Gedung Gereja Cabang di Maybrat",
                date: "25 Sep 2022"
            },
            {
                title: "Sidang Klasis di Maybrat",
                date: "25 Sep 2022"
            },
            {
                title: "Peresmian Gedung Gereja Cabang di Maybrat",
                date: "25 Mar 2022"
            },
            {
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