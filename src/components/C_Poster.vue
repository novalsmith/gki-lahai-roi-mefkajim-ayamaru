 
<template class="mt-1">
    <!-- <v-carousel next-icon="mdi-chevron-right" prev-icon="mdi-chevron-left" cycle delimiter-icon="mdi-minus" -->
    <v-carousel cycle :show-arrows="false" delimiter-icon="mdi-checkbox-blank-circle-outline" class="mb-15 rounded-lg">
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src">
            <v-row class="fill-height" align="center" justify="center">
                <v-col class="ml-15">
                    <div class="text-h5 white--text float-left">
                        {{item.title}}
                    </div>
                </v-col>
            </v-row>
        </v-carousel-item>
    </v-carousel>
</template>
<script>
export default {
    name: "Poster",
    data() {
        return {
            cycle: true,
            items: [
                {
                    category: "NATAL",
                    title: "Ibadah Natal GKI Lahai-Roi Mefkajim Ayamaru",
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                },
                {
                    category: "KUNJUNGAN",
                    title: "Kunjungan Bupati Maybrat",
                    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                },
                {
                    category: "SIDANG KLASIS",
                    title: "Sidang Klasis di Maybrat",
                    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                },
                {
                    category: "PESPARAWI",
                    title: "Pesparawi se Indonesia di Kabupaten Maybrat 2024",
                    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                },
            ],
        }
    },
}
</script>