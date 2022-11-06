<template>


    <div class="my-5" v-if="!settings.screenSize.type.islg">
        <h2 class="font-weight-regular" :color="color">Selamat Datang di <br> GKI Lahai-Roi Mefkajim Ayamaru
        </h2>
        <router-link to="profil">
            <img src="../assets/profilemefkajim.jpg" aspect-ratio="1.7" class="rounded-lg my-5" width="100%" alt="">
        </router-link>
    </div>

    <v-row class="my-5" v-else>
        <v-col lg="6">
            <h1 class="font-weight-regular" :color="color">Selamat Datang di <br> GKI Lahai-Roi Mefkajim Ayamaru</h1>
            <p class="description" :color="color">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis modi
                ea dolorem? Sapiente maiores architecto eum labore voluptates officia accusamus est cumque
                corporis fugit, aliquam quibusdam fuga rem, reprehenderit culpa.</p>
            <v-btn :color="settings.color" to="profil" class="white-text" rounded outlined>
                Selengkapnya
            </v-btn>
        </v-col>
        <v-col lg="6">
            <router-link to="profil">
                <img src="../assets/profilemefkajim.jpg" aspect-ratio="1.7" class="rounded-lg" width="100%" alt="">
            </router-link>
        </v-col>
    </v-row>


</template>

<script>
import { mapState } from "vuex";
export default {
    name: "Hero",
    computed: {
        ...mapState(['settings'])
    },
    data() {
        return {
            color: "grey darken-2"
        }
    }
}
</script>
 
<style>
.intro-text {
    font-size: 40px;
    font-weight: 600;
    font-family: 'Roboto';
    line-height: 40pt;
    /* color: #444444ba; */
}

p.description {
    font-size: 19px;
    margin: 32px 0px;
    /* color: #444444ba; */

}

/* 
.img-circle {
    border-radius: 3%;
} */
</style>