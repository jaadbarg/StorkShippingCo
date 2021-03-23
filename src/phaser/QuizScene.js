import Phaser from "phaser";
import questionBank from "./QuizQuestions"
// import questionsStairs  from "./QuizQuestions";
// import questionsWindow  from "./QuizQuestions";
// import questionsWater  from "./QuizQuestions";
// import questionsBaby  from "./QuizQuestions";
// import questionsFurniture  from "./QuizQuestions";
// import questionsBed  from "./QuizQuestions";

// keeps track of which questions you're on for each category to avoid repeats
let counter = [0,0,0,0,0,0]
let feedbackText;
let backBtn;

const fontFam = {
    fontSize: 18,
    color: "#000000",
    backgroundColor: "#FFFFFF",
};

const fontFamBack = {
    fontSize: 30,
    color: "#ffa500",
    backgroundColor: "#FFFFFF",
};

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
        console.log(this.gateID)
        //including an example q for now until data can be passed between scenes
        let question
        console.log(question)

        feedbackText = this.add.text(0, 550, "", {...fontFam, wordWrap: {width: 820}});
        backBtn = this.add.text(530, 550, "", {...fontFamBack});

        //pass in an int indicating which hazard was selected
        switch(this.gateID) {
            case 0:
                question = questionBank[0][counter[0]];
                counter[0]++;
                console.log(0.01)
                console.log(question)
                break;
            case 1:
                question = questionBank[1][counter[1]];
                counter[1]++;
                console.log(11)
                break;
            case 2:
                question = questionBank[2][counter[2]];
                counter[2]++;
                console.log(22)
                console.log(question)
                break;
            case 3:
                question = questionBank[3][counter[3]];
                counter[3]++;
                console.log(33)
                break;
            case 4:
                question = questionBank[4][counter[4]];
                counter[4]++;
                break;
            case 5:
                question = questionBank[5][counter[5]];
                counter[5]++;
                break;
        }

        let cam = this.cameras.add(0, 0, 800, 600);
        cam.setBackgroundColor(0x7AD7F0);

        let bg = this.add.sprite(0, 0, "background");
        bg.setOrigin(400, 300);

        console.log(question)
        let title = this.add.text(0, 0, `${question.questionText}`,
         { ...fontFam, wordWrap: {width: 820} });
        
        for(let i = 0; i < question.responses.length; i++) {
            let choice;
            if(i == question.correct) {
                choice = this.add.text(0, 180 + 90 * i, this.convertI(i) + question.responses[i],
                     {...fontFam, wordWrap: {width: 820}})
                choice.setInteractive();
                choice.on('pointerdown', () =>
                    this.correctResponse(question, question.responses.length)
                );
            } else {
                choice = this.add.text(0, 180 + 90 * i, this.convertI(i) + question.responses[i], {...fontFam, wordWrap: {width: 820}})
                choice.setInteractive();
                choice.on('pointerdown', () =>
                    this.incorrectResponse(question, question.responses.length)
                );
            }
        }
    }

    convertI(i) {
        if(i == 0) {
            return "A. "
        }
        if(i == 1) {
            return "B. "
        }
        if(i == 2) {
            return "C. "
        }
        if(i == 3) {
            return "D. "
        }
        return "error"
    }

    correctResponse(question, length) {
        feedbackText.setText(question.rationaleCorrect);
        backBtn.setText("Return to game");
        backBtn.setInteractive({ useHandCursor: true });
        backBtn.on("pointerdown", () => this.goBack());
    }

    incorrectResponse(question, length) {
        feedbackText.setText(question.rationaleIncorrect);
        backBtn.setText("Try again!")
        //backBtn.setInteractive({ useHandCursor: true });
        //backBtn.on("pointerdown", () => this.clearFeedback(backBtn));
    }

    clearFeedback(backBtn) {
        backBtn.setText("");
        feedbackText.setText("");
    }

    goBack() {
        this.scene.switch("gameScene");
    }
}

export default QuizScene;
