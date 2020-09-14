<template>
    <div>
        <Navbar />
        <div class="container">
            <div class="row">
                <div class="col-lg-8 mx-auto">
                    <h2>George Orwell (25 Jun. 1903 – 21 Jan. 1950)</h2>
                    <img src="../../assets/img/author/orwell.jpg" alt=" " class="images author mt-3" /><br>

                    <p class="lead ">George Orwell was Eric Arthur Blair's pen name and he was born in Eric Arthur Blair in Motihari, India. He was an English novelist, essayist, journalist and critic. George Orwell was born into a family of the lower-upper middle class.
                        He is a democratic socialist and he struggles against Stalinism. He voluntarily fought in the Spanish Civil War. His book <i>Homage to CataloniaHe</i> was written about his war experiences and observations.</p>

                    <h4>Works</h4>
                    <ul>
                        <li>Homage to Catalonia (1938)</li>
                        <li>Animal Farm (1945)</li>
                        <li>Nineteen Eighty-Four (1949)</li>
                    </ul>
                    <img src="../../assets/img/author/orwell1.jpg" alt=" " height="300" class="images" /><br>
                    <h4>Animal Farm</h4>
                    <p><i>Animal Farm</i> reflects historical events from Russian Revolution of 1917 to the Stalinist era of the Soviet Union.<br> There are a lot of allusions in the novel:
                        <ul>
                            <li>Old Major symbolizes Lenin (presents Animalism [Communism])</li>
                            <li>Snowball symbolizes Leon Trotsky (is exiled after the revolution)</li>
                            <li>Napoleon symbolizes Joseph Stalin (exiles Trotsky after the death of Lenin and then makes bloody purges against possible dissenters)</li>
                            <li>Squealer symbolizes Vyacheslav Molotov (the most clever with language and is Napoleon’s propagandist)</li>
                        </ul>
                    </p>

                    <h4>Orwellism</h4>
                    <p>It means that the modern authoritarian regime controls the society by strictly implementing political propaganda, surveillance, deliberate provision of false information, denial of truth (double thought), and manipulation of the past
                        (including making "unperson ", meaning the elimination of a person's past existence from public records and memory) Orwellian can be seen in satirical allegorical novel, especially in the dystopian novel <i>Nineteen Eighty-Four</i>.<br><br>                        Orwell creates many neologisms such as "Big Brother ", "Thought Police ", "Room 101 ", "memory hole ", "newspeak ", "doublethink ", "proles ", "unperson " and "thoughtcrime ".</p>
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
    name: 'Orwell',
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
    max-height: 350px;
} 
</style>