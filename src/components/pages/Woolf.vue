<template>
    <div>
        <Navbar />
        <div class="container" id="top">
            <div class="row">
                <div class="col-lg-8 mx-auto">
                    <h2>Virginia Woolf (25 Jan. 1882 – 28 Mar. 1941)</h2>
                    <img src="../../assets/img/author/woolf.jpg" alt="" class="images author mt-3" /><br>
                    <p class="lead ">Virginia Woolf who was an English writer was known as the pioneer of modernism and feminism in the 
                    20th century. She was a member of Bloomsbury Group. She experienced several nervous breakdowns and suffered from bipolar 
                    disorder. In the last, she committed suicide in 1941.</p>

                    <h4>Works</h4>
                    <ul>
                        <li>Mrs. Dalloway (1925)</li>
                        <li>To the Lighthouse (1927)</li>
                        <li>A Room of One's Own (1929)</li>
                        <li>Orlando: A Biography (1928)</li>
                    </ul>
                    <img src="../../assets/img/author/woolf1.jpg" height="373" alt="" class="images mt-4" /><br>
                    <h4>Mrs. Dalloway</h4>
                    <p>The novel depicts the details in the life of the protagonist Clarissa Dalloway in post–First World War England. It is a typical stream of consciousness novel. All thoughts, retrospectives, and reality take place in June. All the scenes
                        are closely related to the characters' thoughts. Woolf blurs the difference between direct dialogue and indirect dialogue, describing the plot with the author's direct narration and omniscient description. Because of structural
                        and stylistic similarities, <i>Mrs. Dalloway</i> is commonly considered to be a response to James Joyce's <i>Ulysses</i>.</p>

                    <img src="../../assets/img/author/woolf2.jpg" height="400 " alt=" " class="images mt-4" /><br>
                    <h4><i>The Hours</i> (film)</h4>
                    <p>In 2002, <i>The Hours</i> is directed by Stephen Daldry and starring Meryl Streep, Nicole Kidman, and Julianne 
                    Moore. The plot narrates that three women's lives from different generations are interconnected with the novel 
                    <i>Mrs. Dalloway</i> which is written by Virginia Woolf. With nine Academy Award nominationsIn, Nicole Kidman in 
                    the film as Virginia Woolf wins Best Actress.</p>
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
    name: 'Woolf',
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