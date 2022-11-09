<template>
    <v-row class="my-5">
        <v-col md="6">
            <h3 class="font-weight-regular">
                <v-icon>
                    mdi-calendar-multiple-check
                </v-icon>
                Agenda
            </h3>
        </v-col>
        <v-col md="6">
            <v-btn v-show="isShowAgenda" small text :color="settings.color" class="white-text float-right" to="/agenda">
                Lainnya
            </v-btn>
        </v-col>
        <v-col md="4" v-show="isShowAgenda" v-for="item in listData" v-if="!settings.screenSize.type.islg">
            <v-flex xs12>
                <v-hover v-slot="{ hover }" open-delay="200">
                    <router-link :to="'/informasi/detail/' + item.slugTitle" class="text-decoration-none">
                        <v-card :elevation="hover ? 5 : 1" :class="{ 'on-hover': hover }">
                            <v-container fluid grid-list-lg>
                                <v-layout row>
                                    <v-flex xs5>
                                        <v-img contain src="../assets/profilemefkajim.jpg" height="auto"
                                            class="rounded-lg" transition="false">
                                        </v-img>
                                    </v-flex>
                                    <v-flex xs7>
                                        <div>

                                            <h1 class="font-weight-medium grey--text" v-text="item.date"></h1>

                                        </div>
                                        <div class="subheading font-weight-medium">
                                            {{ item.title }}
                                        </div>

                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card>
                    </router-link>
                </v-hover>
            </v-flex>
        </v-col>
        <v-col v-show="isShowAgenda" md="4" v-for="item in listData" v-else>
            <v-hover v-slot="{ hover }" open-delay="200">
                <router-link :to="'/agenda/detail/' + item.title" class="text-decoration-none">
                    <v-card :elevation="hover ? 18 : 1" :class="{ 'on-hover': hover }">
                        <v-img class="white--text align-end" :height="settings.defaultImageContentHeight"
                            src="../assets/profilemefkajim.jpg">
                            <v-chip :color="settings.color" class="mx-5 my-5 white--text">
                                <v-icon class="mx-1">
                                    mdi-bell
                                </v-icon> {{ item.date }}
                            </v-chip>
                        </v-img>

                        <v-row>
                            <v-col md="6">
                                <v-chip class="mx-5 my-5 white--text" :outlined="settings.outlinedGeneralButton" small
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
        <v-col md="12" v-show="isShowAgenda == false">
            <v-alert :color="settings.color + ' lighten-5'" icon="mdi-information-outline" dense>
                Sementara belum ada agenda
            </v-alert>
        </v-col>
    </v-row>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "Agenda",
    computed: {
        ...mapState(['settings'])
    },
    data: () => ({
        model: null,

        isShowAgenda: false,
        listData: [
            {
                title: "Ibadah Natal 2021",
                category: "PKB",
                date: "25 Des 2021"
            },
            {
                title: "Pesparawi Nasional diadakan di maybrat",
                category: "Pesparawi",
                date: "25 Sep 2022"
            },
            {
                title: "Peresmian Gedung Gereja Cabang di Maybrat",
                category: "Peresmian",
                date: "14 Nov 2022"
            },
            {
                title: "Sidang Klasis di Maybrat",
                category: "Sidang Klasis",
                date: "02 Jan 2022"
            }
        ]
    }),
    mounted() {
        this.isShowAgenda = this.listData.length > 0 ? true : false;
    }
}
</script>