<template>
    <div>
        <Navbar />
        <div class="container">
            <div class="row">
                <div class="col-lg-8 mx-auto">
                    <h2>Joseph Conrad (3 Dec. 1857 – 3 Aug. 1924)</h2>
                    <img src="../../assets/img/author/conrad.jpg" alt=" " class="images author mt-3" /><br>
                
                <p class="lead">Joseph Conrad was a Polish-British novelist. He was regarded as a modernism pioneer. He was 
                a sailor when young. In his middle age, he began to write and he totally wrote 13 novels and 28 short stories.</p>
    
                <h4>Works</h4>
                <ul>
                    <li>Heart of Darkness (1899)</li>
                    <li>Lord Jim (1900)</li>
                    <li>Nostromo (1904)</li>
                    <li>The Secret Agent (1907)</li>
                </ul>
                <img src="../../assets/img/author/conrad1.jpg" alt="" class="images" /><br>
                <h4>Heart of Darkness</h4>
                <p>In <i>Heart of Darkness</i>, we can see modernism, realism, racial discrimination, psychoanalysis, feminism, colonial or anti-colonial, post-colonialism. The title of the novel, <i>Heart of Darkness</i> has multiple meanings. It can
                    refer to the wild of the Dark Continent. It can also refer to the greed, jealousy, and intrigue of human nature. It refers to the European colonial trading companies which move further inland, and also refers to white colonists'
                    filthy hearts and the Africans' uncivilized thoughts.<br><br><i>Heart of Darkness</i>is a novel about adventure in the jungle. It has the features of an adventure story: horror, mystery, exotic scenery, escape, tracking, ambush
                    and death. However, it is not just an adventure story or a personal travelogue. In fact, it is a colonial novel which combines human desire, historical sin, colonial economy, and moral reflection. We can analyze this novel from
                    many perspectives. It has received a variety of different evaluations</p>
                </div>
            </div>
        </div>
        <Footer class="mt-5" />
    </div>


</template>

<script>
import Navbar from '../Navbar'
import Footer from '../Footer'

export default {
    name: 'Conrad',
    components: {
        Navbar,
        Footer,
    },
}
</script>

<style scoped>
.row {
    margin-top: 140px;
}

.images {
    display: block;
    margin: auto;
    max-width: 100%;
}

.images.author {
    max-height: 400px;
}
    
</style>