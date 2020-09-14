<template>
    <div>
        <div class="page-section portfolio" id="portfolio">
            <!-- Portfolio Section -->
            <div class="container">

                <!-- Portfolio Section Heading -->
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Authors</h2>

                <!-- Icon Divider -->
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon">
                        <i class="fas fa-star"></i>
                    </div>
                    <div class="divider-custom-line"></div>
                </div>

                <!-- Portfolio Grid Items -->
                <div class="row">
                    <div class="col-md-6 col-lg-4 mb-3" v-for="(item, i) in authorData" :key="i">
                        <div class="portfolio-item mx-auto">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <a class="nav-link" href="#" @click="goAuthor(item.url)">
                                    <h1 class="author">{{item.name}}</h1>
                                </a>
                                <!-- <router-link class="nav-link" :to="{ path: item.url }">
                                    <h1 class="author">{{item.name}}</h1>
                                </router-link> -->
                            </div>
                            <img class="img-fluid" :src= "item.img" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    </div>
</template>

<style scoped>
.author {
    font-size: 2.2rem;
}
    
</style>
    
<script>
export default {
    name: 'Authors',
    data() {
        return {
            authorData: [
                {name: "Joseph Conrad", img: require("../assets/portfolio/cabin.png"), url: "conrad"},
                {name: "Virginia Woolf", img: require("../assets/portfolio/cake.png"), url: "woolf"},
                {name: "George Orwell", img: require("../assets/portfolio/circus.png"), url: "orwell"},
                {name: "William Butler Yeats", img: require("../assets/portfolio/submarine.png"), url: "yeats"},
                {name: "Game", img: require("../assets/portfolio/game.png"), url: "game"}
                
            ]
        }
    },
    methods: {
        goAuthor(url) {
            this.$router.push({
                path: url,
            });
        }
    }
}
</script>