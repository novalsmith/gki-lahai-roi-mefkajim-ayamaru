<template>
    <div>
        <v-main>
            <v-container>
                <Category />
            </v-container>
        </v-main>
    </div>
</template>
  
<script>
// @ is an alias to /src
import Category from '@/components/C_CategoryAll.vue';

export default {
    name: "NewsDetail",
    components: {
        Category
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
  