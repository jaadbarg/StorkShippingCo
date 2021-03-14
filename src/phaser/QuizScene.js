import Phaser from "phaser";
import {questionsStairs, questionsWindow, questionsWater, 
    questionsBaby, questionsFurniture, questionsBed} from "QuizQuestions";


    // in progress
    
class quizScene extends Phaser.Scene {

    constructor() {
        super({ key: "quizScene" });
        console.log("quizScene");
        //pass in an int indicating which hazard was selected
        // switch(hazard) {
        //     case 1:
        //         this.question = questionsStairs[Math.floor(Math.random() * questionsStairs.length)];
        //         break;
        //     case 2:
        //         this.question = questionsWindow[Math.floor(Math.random() * questionsWindow.length)]
        //         break;
        //     case 3:
        //         this.question = questionsWater[Math.floor(Math.random() * questionsWater.length)]
        //         break;
        //     case 4:
        //         this.question = questionsBaby[Math.floor(Math.random() * questionsBaby.length)]
        //         break;
        //     case 5:
        //         this.question = questionsFurniture[Math.floor(Math.random() * questionsFurniture.length)]
        //         break;
        //     case 6:
        //         this.question = questionsBed[Math.floor(Math.random() * questionsBed.length)]
        //         break;
        // } 
    }

    preload() {
        this.load.image("background", "../assets/menu.jpg");
    }

    create() {

        const fontFam = {
            fontSize: 30,
            color: "#000000",
            backgroundColor: "#FFFFFF",
            };

        let bg = this.add.sprite(0, 0, "background");
        bg.setOrigin(400, 300);

        let title = this.add.text(100, 100, "Instructions");

        this.add.text(350, 500, `${this.question.questionText}`, { ...fontFam });
        this.question.correct = correct;

        let responseNo = 0;
        this,question.responses.forEach(function(response) {
            let responseBtn = this.add.text(350, 400 - 50 * responseNo, response, { ...fontFam });
            responseBtn.setInteractive({ useHandCursor: true });

            responseNo++;
          })
        // will add response buttons
    };
}

export default quizScene;