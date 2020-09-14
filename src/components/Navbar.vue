<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div class="container">
                <router-link class="navbar-brand js-scroll-trigger" to="/">
                    Literature
                </router-link>
                <button class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#" @click="goPage('portfolio')">Authors</a></li>
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#" @click="goPage('about')">About</a></li>
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#" @click="goGame()">Game</a></li>
                    </ul>
                    <!-- <ul class="navbar-nav ml-auto">
                        <li class="nav-item mx-0 mx-lg-1"><router-link class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/" >Authors</router-link></li>
                        <li class="nav-item mx-0 mx-lg-1"><router-link class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/">About</router-link></li>
                        <li class="nav-item mx-0 mx-lg-1"><router-link class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/">Contact</router-link></li>
                    </ul> -->
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    methods: {
        goPage(part){
            let id = document.getElementById(part);
            if(id) {
                id.scrollIntoView();
            } else {
                    this.$router.push({
                    path: "/",
                });
            }
        },
        goGame() {
            this.$router.push({
                path: "/game",
            });
        }
    }
}
</script>