<template>
    <!-- <v-col cols="12"> -->
    <v-sheet class="mx-auto">
        <v-slide-group show-arrows next-icon="mdi-arrow-right-thin-circle-outline"
            prev-icon="mdi-arrow-left-thin-circle-outline">
            <v-slide-item v-for="n in items" :key="n" v-slot="{ active, toggle }">
                <v-btn class="mx-2" :input-value="active" :active-class="('white--text ' + settings.color)" depressed
                    rounded @click="toggle" small>
                    {{ n.text }}
                </v-btn>
            </v-slide-item>
        </v-slide-group>
    </v-sheet>
    <!-- </v-col> -->
    <!-- <v-card class="mx-auto rounded-lg">
        <v-list>
            <v-subheader>Kategori</v-subheader>
            <v-list-item-group v-model="selectedItem" :color="settings.color">
                <v-list-item v-for="(item, i) in items" :key="i">
                    <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>

                    <v-chip class="mx-5 my-5 white--text" circle small :color="settings.color">
                        {{item.total}}
                    </v-chip>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-card> -->
</template>

<script>
import News from '@/components/C_News.vue';
import Breadcrumbs from '@/components/C_Breadcrumbs.vue';
import { mapState } from "vuex";
export default {
    data: () => ({
        selectedItem: 0,
        model: null,
        items: [
            { text: 'Natal', icon: 'mdi-clock', total: 5, slug: "natal" },
            { text: 'Jemaat', icon: 'mdi-account', total: 10, slug: "jemaat" },
            { text: 'PESPARAWI', icon: 'mdi-flag', total: 10, slug: "pesparawi" },
            { text: 'PW', icon: 'mdi-flag', total: 12, slug: "pw" },
            { text: 'Sidang Klasis', icon: 'mdi-flag', total: 3, slug: "sidang-klasis" },
            { text: 'Oukumene', icon: 'mdi-flag', total: 7, slug: "oukumene" },
            { text: 'PKB', icon: 'mdi-flag', total: 7, slug: "oukumene" },
            { text: 'Sidang Jemaat Allah', icon: 'mdi-flag', total: 7, slug: "oukumene" },
            { text: 'Pemuda', icon: 'mdi-flag', total: 7, slug: "oukumene" },
        ]
    }),
    components: {
        News,
        Breadcrumbs
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