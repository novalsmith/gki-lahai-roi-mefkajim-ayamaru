<template>
    <div>
        <v-main>
            <v-container>
                <NewsDetails />
            </v-container>
        </v-main>
    </div>
</template>
  
<script>
// @ is an alias to /src
import NewsDetails from '@/components/C_NewsDetail.vue';

export default {
    name: "NewsDetail",
    components: {
        NewsDetails
    },
    mounted() {
        this.toTop();
    },
    methods: {
        toTop() {
            this.$vuetify.goTo(0)
        }
    }

}
</script>
  