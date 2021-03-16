import Phaser from "phaser";
import {
} from "./QuizQuestions";

// in progress
let questionsExample1 = {
    questionText: `What is 2+2?`,
    responses: [`1`, `2`, `3`, `4`],
    correct: 3,
    rationaleCorrect: `Two plus two is four.`,
    rationaleIncorrect: `Incorrect`
}
let questionsExample2 = {
    questionText: `What is 1x1?`,
    responses: [`1`, `4`, `9`, `16`],
    correct: 0,
    rationaleCorrect: `One times one is one.`,
    rationaleIncorrect: `Incorrect`
}
let questionsExample = [
    questionsExample1,
    questionsExample2
];

class QuizScene extends Phaser.Scene {
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

        this.add.text(350, 500, `${questionsExample[0].questionText}`, { ...fontFam });
        for(let i = 0; i < 4; i++) {
            this.add.text(350, 400 - 50 * i, questionsExample[0].responses[i], {...fontFam,})
        }
    }
}

export default QuizScene;
