<template>

    <!-- <v-toolbar :color="settings.color" dark>
            <v-app-bar-nav-icon>
                <v-icon>
                    mdi-file
                </v-icon>
            </v-app-bar-nav-icon>

            <v-toolbar-title>Dokumen</v-toolbar-title>
            <v-spacer></v-spacer>

            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <div v-on="on" v-bind="attrs">
                        <v-btn fab small color="white" to="dokumen">
                            <v-icon color="teal"> mdi-chevron-right</v-icon>
                        </v-btn>
                    </div>
                </template>
                <span>Lihat Semua Dokumen</span>
            </v-tooltip>  
        </v-toolbar> -->
    <div>
        <v-row>
            <v-col md="6">
                <h3 class="font-weight-regular">
                    <v-icon>
                        mdi-file-multiple-outline
                    </v-icon>
                    Dokumen
                </h3>
            </v-col>
            <v-col md="6">
                <v-btn small text :color="settings.color" class="white--text float-right" to="/informasi">
                    Semua <v-icon> mdi-chevron-right</v-icon>
                </v-btn>
            </v-col>
        </v-row>
        <v-list v-show="isShowDocument" three-line>
            <template v-for="(item, index) in listDocuments">
                <v-subheader v-if="item.header" :key="item.header" v-text="item.header"></v-subheader>
                <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>
                <v-list-item v-else :key="item.title">
                    <v-list-item-avatar>
                        <v-icon>{{ item.avatar }}</v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title v-html="item.title"></v-list-item-title>
                        <v-list-item-subtitle>
                            <v-chip class="ma-2" small>
                                {{ item.category }}
                            </v-chip> {{ item.date }}
                        </v-list-item-subtitle>
                    </v-list-item-content>

                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <div v-on="on" v-bind="attrs">
                                <v-btn fab x-small :color="settings.color" outlined>
                                    <v-icon>mdi-download</v-icon>
                                </v-btn>
                            </div>
                        </template>
                        <span>Download</span>
                    </v-tooltip>

                </v-list-item>
            </template>
        </v-list>

        <v-list v-show="isShowDocument == false">
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>
                        <v-alert :color="settings.color + ' lighten-5'" icon="mdi-information-outline" dense>
                            Sementara belum ada album foto
                        </v-alert>
                    </v-list-item-title>

                </v-list-item-content>
            </v-list-item>
        </v-list>
    </div>

</template>

<script>
import { mapState } from "vuex";
export default {
    data: () => ({
        isShowDocument: false,
        listDocuments: [
            { header: 'Silahkan Download Dokumen Dibawah ini' },
            {
                avatar: 'mdi-file-pdf-box',
                category: "Natal",
                date: "5 Menit yang lalu",
                title: 'Brunch this weekend?',
                subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
            },
            { divider: true, inset: true },
            {
                avatar: 'mdi-file-excel-outline',
                category: "Natal",
                date: "5 Menit yang lalu",
                title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
                subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
            },
            { divider: true, inset: true },
            {
                avatar: 'mdi-file-word-box-outline',
                title: 'Oui oui',
                category: "Natal",
                date: "5 Menit yang lalu",
                subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
            },
            { divider: true, inset: true },
            {
                avatar: 'mdi-file-pdf-box',
                title: 'Birthday gift',
                category: "Natal",
                date: "5 Menit yang lalu",
                subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
            },
            { divider: true, inset: true },
            {
                avatar: 'mdi-file-word-box-outline',
                title: 'Recipe to try',
                category: "Natal",
                date: "5 Menit yang lalu",
                subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
            },
        ],
    }),
    computed: {
        ...mapState(['settings'])
    },
    mounted() {
        this.isShowDocument = this.listDocuments.length > 0 ? true : false;
    }
}
</script>