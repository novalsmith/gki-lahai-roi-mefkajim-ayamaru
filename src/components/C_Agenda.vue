<template>
    <v-row class="my-15">
        <v-col md="6">
            <h1 class="font-weight-regular">
                <v-icon>
                    mdi-calendar-multiple-check
                </v-icon>
                Agenda
            </h1>
            <p>Agenda kegiatan yang dilakukan Gereja </p>
        </v-col>
        <v-col md="6">
            <v-btn to="agenda" v-show="isShowAgenda" small icon :color="settings.color" class="white-text float-right" rounded
                outlined>
                <v-icon> mdi-chevron-right</v-icon>

            </v-btn>
        </v-col>
        <v-col v-show="isShowAgenda" md="4" v-for="item in listData">
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
    mounted() {
        this.isShowAgenda = this.listData.length > 0 ? true : false;
    }
}
</script>