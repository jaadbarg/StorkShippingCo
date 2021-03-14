import Phaser from "phaser";
import {questionsStairs, questionsWindow, questionsWater, 
    questionsBaby, questionsFurniture, questionsBed} from "QuizQuestions";


    // in progress
    
class quizPopup extends Phaser.Scene {

    constructor(hazard) {
        super("quizPopup");
        console.log("quizPopup");
        //pass in an int indicating which hazard was selected
        switch(hazard) {
            case 1:
                this.question = questionsStairs[Math.floor(Math.random() * questionsStairs.length)];
                break;
            case 2:
                this.question = questionsWindow[Math.floor(Math.random() * questionsWindow.length)]
                break;
            case 3:
                this.question = questionsWater[Math.floor(Math.random() * questionsWater.length)]
                break;
            case 4:
                this.question = questionsBaby[Math.floor(Math.random() * questionsBaby.length)]
                break;
            case 5:
                this.question = questionsFurniture[Math.floor(Math.random() * questionsFurniture.length)]
                break;
            case 6:
                this.question = questionsBed[Math.floor(Math.random() * questionsBed.length)]
                break;
        } 
    }

    create() {

        const fontFam = {
            fontSize: 30,
            color: "#000000",
            backgroundColor: "#FFFFFF",
            };

        let questionText = this.add.text(350, 500, 
            `${this.question.questionText}`, { ...fontFam });

        // will add response buttons
    };
}