<template>
    <div>
        <v-main>
            <v-container>
                <Document />
            </v-container>
        </v-main>
    </div>
</template>
  
<script>
// @ is an alias to /src
import Document from '@/components/C_DocumentAll.vue';

export default {
    name: "DocumentDetail",
    components: {
        Document
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
  