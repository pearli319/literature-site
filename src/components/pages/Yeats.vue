<template>
    <div>
        <Navbar />
        <div class="container">
            <div class="row">
                <div class="col-lg-8 mx-auto">
                    <h2>William Butler Yeats (13 Jun. 1865 – 28 Jan. 1930)</h2>
                    <img src="../../assets/img/author/yeats.jpg" class="images author mt-3" alt=" "/><br>
            
                    <p class="lead ">William Butler Yeats was an Irish poet playwright and he was born in Sandymount, Ireland. He was 
                    regarded as an important figure in the Irish Cultural Revival. His early poems are characterised by romanticism in both their 
                    form and content. Moreover, his poems are often molded from Irish legends and the occult. He developed a lifelong 
                    interest in mysticism and spiritism. From 1900, his style of poetry gradully changed. His poetry became more physical 
                    and realistic and his later poems made a significant contribution to modernism.</p>

                    <h4>About Yeats</h4>
                    <ul>
                        <li>One of the founder of the Abbey Theatre</li>
                        <li>He was awarded the Nobel Prize for Literature in 1923.</li>
                        <li>A senator of Irish Free State for two terms</li>
                    </ul>
                    <img src="../../assets/img/author/yeats1.jpg" class="images" height="373" alt=""/><br>
                    <h4>Important poems</h4>
                    <ul>
                        <li class="poem">The Lake of Innisfree (1888)</li>
                        <p class="text text1">I will arise and go now, and go to Innisfree,<br>
                            And a small cabin build there, of clay and wattles made;<br>
                            Nine bean rows will I have there, a hive for the honey bee,<br>
                            And live alone in the bee-loud glade.
                            <br><br>
                            And I shall have some peace there, for peace comes dropping slow,<br>
                            Dropping from the veils of the morning to where the cricket sings;<br>
                            There midnight's all a glimmer, and noon a purple glow,<br>
                            And evening full of the linnet's wings.
                            <br><br>
                            I will arise and go now, for always night and day<br>
                            I hear lake water lapping with low sounds by the shore;<br>
                            While I stand on the roadway, or on the pavements grey,<br>
                            I hear it in the deep heart's core.</p>
                        <li class="poem">When you are old (1893)</li>
                        <p class="text text2">When you are old and grey and full of sleep,<br>
                            And nodding by the fire, take down this book,<br>
                            And slowly read, and dream of the soft look<br>
                            Your eyes had once, and of their shadows deep;
                            <br><br>
                            How many loved your moments of glad grace,<br>
                            And loved your beauty with love false or true,<br>
                            But one man loved the pilgrim soul in you,<br>
                            And loved the sorrows of your changing face;
                            <br><br>
                            And bending down beside the glowing bars,<br>
                            Murmur, a little sadly, how Love fled<br>
                            And paced upon the mountains overhead<br>
                            And hid his face amid a crowd of stars.</p>
                        <li>Easter, 1916 (1916)</li>
                        <li>The Second Coming (1920)</li>
                    </ul>

                    <img src="../../assets/img/author/yeats2.jpg" class="images" height="373" alt=" "/><br>
                    <h4>Love and marriage</h4>
                    <p>In 1889, Yeats met Maud Gonne, an English heiress and ardent Irish Nationalist. She greatly influenced Yeats's 
                    writings and his life. Many of Yeats's poems are inspired by her, or mention her, such as <i>This, This Rude 
                    Knocking</i>. He also wrote the play, <i>The Countess Cathleen</i> based on her prototype. Yeats loved her for many years. 
                    However, Gonne rejected his marriage proposal. In 1917, he married Georgie Hyde-Lees after his proposal was rejected by 
                    Iseult Gonne, the daughter of Maud Gonne.</p>
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
    name: 'Yeats',
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
    max-height: 450px;
}

.text {
    opacity: 0;
    height: 0px;
    margin: 0px;
    overflow: hidden;
    transition: all .5s;
}

.poem {
    cursor: pointer;
}

.poem:hover +.text1, .text1:hover {
    opacity: 1;
    height: 400px;
    margin: 10px;
}

.poem:hover +.text2, .text2:hover {
    opacity: 1;
    height: 350px;
    margin: 10px;
}

@media (max-width: 575.98px) { 
    .poem:hover +.text1, .text1:hover {
        height: 550px;
}

    .poem:hover +.text2, .text2:hover {
        height: 600px;
    }
}

@media (max-width: 358px) { 
    .poem:hover +.text1, .text1:hover {
        height: 750px;
}

    .poem:hover +.text2, .text2:hover {
        height: 700px;
    }
}
</style>