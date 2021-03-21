import Phaser from "phaser";
import questionsStairs  from "./QuizQuestions";
import questionsWindow  from "./QuizQuestions";
import questionsWater  from "./QuizQuestions";
import questionsBaby  from "./QuizQuestions";
import questionsFurniture  from "./QuizQuestions";
import questionsBed  from "./QuizQuestions";

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

// keeps track of which questions you're on for each category to avoid repeats
let counter = [0,0,0,0,0,0]

class QuizScene extends Phaser.Scene {
    constructor() {
        super({ key: "quizScene" });
    }

    init(data) {
        console.log("init "+ data.id)
        this.gateID = data.id
    }

    preload() {
        this.load.image("background", "../assets/menu.jpg");
    }

    create() {
        //including an example q for now until data can be passed between scenes
        let question = questionsWindow[1];

        //pass in an int indicating which hazard was selected
        switch(this.gateID) {
            case 0:
                question = questionsStairs[counter[0]];
                counter[0]++;
                break;
            case 1:
                question = questionsWindow[counter[1]];
                counter[1]++;
                break;
            case 2:
                question = questionsWater[counter[2]];
                counter[2]++;
                break;
            case 3:
                question = questionsBaby[counter[3]];
                counter[3]++;
                break;
            case 4:
                question = questionsFurniture[counter[4]];
                counter[4]++;
                break;
            case 5:
                question = questionsBed[counter[5]];
                counter[5]++;
                break;
        }

        let cam = this.cameras.add(0, 0, 800, 600);
        cam.setBackgroundColor(0x7AD7F0);
        const fontFam = {
            fontSize: 30,
            color: "#000000",
            backgroundColor: "#FFFFFF",
        };

        let bg = this.add.sprite(0, 0, "background");
        bg.setOrigin(400, 300);

        let title = this.add.text(0, 0, `${question.questionText}`,
         { ...fontFam, wordWrap: {width: 820} });
        
        for(let i = 0; i < question.responses.length; i++) {
            let choice;
            if(i == question.correct) {
                choice = this.add.text(0, 150 + 100 * i, question.responses[i],
                     {...fontFam, wordWrap: {width: 820}})
                choice.setInteractive();
                choice.on('pointerdown', () =>
                    this.correctResponse(question)
                );
            } else {
                choice = this.add.text(0, 150 + 100 * i, question.responses[i], {...fontFam, wordWrap: {width: 820}})
                choice.setInteractive();
                choice.on('pointerdown', function() {
                    alert(`Try again! ${question.rationaleIncorrect}`);
                });
            }
        }
    }

    correctResponse(question) {
        alert(`Correct choice, Good job! ${question.rationaleCorrect}`);
        this.scene.switch("gameScene")
    }
}

export default QuizScene;
