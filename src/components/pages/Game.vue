<template>
    <div>
        <Navbar />
        <h1 class="title">Who wants to be a millionaire?</h1>

        `<div id="game_board">
            <i class="fas fa-hand-holding-usd fa-3x"></i>
            <p class="bank">{{ "$" + questions[Qnum][3] }}</p>

            <div v-if="!lostGame && !winGame">
                <h5 class="question-number">{{ `Question number ${Qnum+1}`}}</h5>
                <p class="question">{{ questions[Qnum][0] }}</p>
                
                <br>
                <ul class="answers">
                    <button 
                        v-for="(answer, i) in questions[this.Qnum][1]"
                        :key="i"
                        type="button" 
                        :data-answer="answer.replace(/ /g, '')"
                        @click="answerQuestion(answer, Qnum)">
                        {{ answer }}
                    </button>
                </ul>
                <br>
                <div class="lifeline" v-show="haveFiftyFifty">
                    <button class="fifty-fifty" @click="fiftyFifty(Qnum)"><i class="far fa-heart heart"></i>50/50</button>
                </div>
            </div>

            <div v-else-if="lostGame && !winGame" class="lose">
                <h3>Game Over</h3>
                <p class="question"> You get {{"$" + questions[Qnum][3] }}!</p>
                <button class="restart" @click="reStart">Play again</button>
            </div> 

            <div v-else>
                <p class="question"> You're a millionaire!!!!!!!!! ｡:.ﾟヽ(*´∀`)ﾉﾟ.:｡ </p>
                <button class="restart" @click="reStart">Play again</button>
            </div>           
        </div>

        <Footer />
    </div>
</template>

<script>
import Navbar from '../Navbar'
import Footer from '../Footer'

// import Game from '../../assets/js/game'
export default {
    name: 'Game',
    components: {
        Navbar,
        Footer,
    },
    data(){
        return {
            questions: [
                ['In Orwell’s Animal Farm, what animal calls for the overthrow of humans?', ['A. Cats', 'B. Pigs', 'C. Dogs', 'D. Horses'], 'B. Pigs', 1000],
                ['Which does George Orwell support for?', ['A. Totalitarianism', ' B. Stalinism', 'C. Anarchism', 'D. Democratic socialism'], 'D. Democratic socialism', 5000],
                ['Where was Yeats born?', ['A. Ireland', 'B. France', 'C. Poland', 'D. Italy'], 'A. Ireland', 10000],
                ['Which is not the work of Yeats?', ['A. The Second Coming', 'B. When you are old', 'C. Leda and the Swan', 'D. The Chimney Sweeper'], 'D. The Chimney Sweeper', 40000],
                ['In Yeats’ “The Lake Isle of Innisfree”, what is the reasoning behind his desire to travel to Innisfree?', ['A. love', 'B. peace', 'C. family', 'D. career'], 'B. peace', 80000],
                ['Which film is interconnected with the novel Mrs. Dalloway?', ['A. Gone with the Wind', 'B. The Hours', 'C. Pride & Prejudice', "D. Breakfast at Tiffany's"], 'B. The Hours', 100000],
                ['Which war did George Orwell voluntarily fight in?', ['A. World War I', 'B. World War II', 'C. Spanish Civil War', 'D. Irish War of Independence'], 'C. Spanish Civil War', 300000],
                ['What kind of job was Joseph Conrad when he was young, and then this career experience affected his work, “Heart of Darkness”?', ['A. teacher', 'B. priest', 'C. sailor', 'D. painter'], 'C. sailor', 600000],
                ['Which is not the theme about Conrad’s “Heart of Darkness”?', ['A. racial discrimination', 'B. feminism', 'C. anti-war', 'D. anti-colonial'], 'C. anti-war', 700000],
                ['What doctrine is Joseph Conrad regarded as a pioneer?', ['A. romanticism', 'B. utopianism', 'C. humanitarianism', 'D. modernism'], 'D. modernism', 800000],
                ['What is Woolf’s Mrs. Dalloway commonly considered to be a response to?', ['A. Ulysses', 'B. The Lady with the Dog', 'C. A Rose for Emily', 'D. A Doll House'], 'A. Ulysses', 900000],
                ['What is the narrative method of Woolf’s Mrs. Dalloway?', ['A. stream of consciousness', 'B. multiperspectivity', 'C. first-person narrative', 'D. stream of unconsciousness'], 'A. stream of consciousness', 1000000],
            ],
            totalQuestions: 12,
            Qnum: 0,
            haveFiftyFifty: true,
            lostGame: false,
            winGame: false,

        }
    },
    methods: {
        answerQuestion(userAnswer, num){
            $('.answers button').removeAttr("style");
            if(userAnswer === this.questions[num][2]) {
                if(this.Qnum+1 === this.totalQuestions) {
                    this.winGame = true;
                    return
                }
                this.Qnum += 1;
                
            } else {
                this.lostGame = true;
            }
        },
        fiftyFifty(num){
            this.haveFiftyFifty = false
            let fiftyFiftycount = 0;
            const correctAnswer = this.questions[num][2];
            $(".answers button").each(function() {
                if(fiftyFiftycount < 2) {
                    console.log("hihi", $(this).data('answer'));
                    console.log("hihi2", correctAnswer);
                    if($(this).data('answer') !== correctAnswer.replace(/ /g, '')) {
                        $(this).hide();
                        fiftyFiftycount += 1;
                    }
                }
            })
        },
        reStart(){
            this.Qnum = 0;
            this.lostGame = false;
            this.winGame = false;
            this.haveFiftyFifty = true;
        }

    }
}
</script>

<style scoped>
.title {
    margin-top: 150px;
    display: inline-block;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%);
}

#game_board {
    background: whitesmoke;
    border: rgb(126, 119, 119) 1px solid;
    max-width: 800px;
    padding: 24px;
    margin: 70px auto;
    border-radius: 20px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
}

.question {
    margin-bottom: -10px;
    font-size: 25px;
}

.answers {
    display: flex;
    flex-direction: column;
    padding-right: 75px;
    padding-left: 75px;
}

.answers button {
    color: #000;
    background-color: #ffd54f;
    border-color: #FBF487;
    border-radius: 10px;
    padding: 10px;
    font-size: 25px;
    font-weight: 300px;
    margin-bottom: 20px;
}

.answers button:hover {
    background-color: rgb(255, 187, 0);
    color: white;
    border-color: #FFC107;
}

.fifty-fifty {
    box-shadow: 3px 3px 3px rgba(0,0,0,0.2);
    margin-top: 25px;
    color: #fff;
    background-color: #64b5f6;
    border: none;
    border-radius: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 20px;
    padding-left: 10px;
    padding-right: 12px;
}

.fifty-fifty:hover {
    background-color: #2286c3;
}

.fifty-fifty:hover .heart {
    color: #ff6090;
}

.lose {
    text-align: center;
}

.restart {
    box-shadow: 0px 0px 5px rgba(0,0,0,0.8);
    color: white;
    background-color: #ff1744;
    border: none;
    border-radius: 25px;
    margin-top: 50px;
    padding: 5px 10px;
    font-size: 20px;
    transition: 0.3s;
}

.restart:hover {
    background-color: #d32f2f;
}

button:focus {
    outline: none;
}

</style>