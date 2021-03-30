import Phaser from "phaser";
import questionBank from "./QuizQuestions"
import eventsCenter from "./EventsCenter"
// import questionsStairs  from "./QuizQuestions";
// import questionsWindow  from "./QuizQuestions";
// import questionsWater  from "./QuizQuestions";
// import questionsBaby  from "./QuizQuestions";
// import questionsFurniture  from "./QuizQuestions";
// import questionsBed  from "./QuizQuestions";

// keeps track of which questions you're on for each category to avoid repeats
let counter = [0, 0, 0, 0, 0, 0]
let feedbackText;
let backBtn;
let titleText;
let timePassed = 0;
let spawnEvent;

const fontFam = {
    fontSize: 18,
    // fontFamily: "cursive",
    color: "#000000",
    //backgroundColor: "#FFFFFF",
};

const fontFamBack = {
    fontSize: 30,
    // fontFamily: "cursive",
    color: "#000000",
    fontStyle: "bold",
    backgroundColor: "#FFFFFF",
};

class QuizScene extends Phaser.Scene {
    constructor() {
        super({ key: "quizScene" });
    }

    init(data) {
        this.gateID = data.id
    }

    preload() {
        this.load.image("background", "../assets/menu.jpg");
    }

    create() {
        let question;

        this.trackTime();

        this.createSectionColors();

        //pass in an int indicating which hazard was selected
        switch (this.gateID) {
            case 0:
                question = questionBank[0][counter[0]];
                counter[0]++;
                if(counter[0] >= 2) {
                    counter[0] = 0;
                }
                break;
            case 1:
                question = questionBank[1][counter[1]];
                counter[1]++;
                if(counter[1] >= 3) {
                    counter[1] = 0;
                }
                break;
            case 2:
                question = questionBank[2][counter[2]];
                counter[2]++;
                if(counter[2] >= 2) {
                    counter[2] = 0;
                }
                break;
            case 3:
                question = questionBank[3][counter[3]];
                counter[3]++;
                if(counter[3] >= 3) {
                    counter[3] = 0;
                }
                break;
            case 4:
                question = questionBank[4][counter[4]];
                counter[4]++;
                if(counter[4] >= 2) {
                    counter[4] = 0;
                }
                break;
            case 5:
                question = questionBank[5][counter[5]];
                counter[5]++;
                if(counter[5] >= 2) {
                    counter[5] = 0;
                }
                break;
        }

        let cam = this.cameras.add(0, 0, 800, 600);
        cam.setBackgroundColor(0x7AD7F0);

        let bg = this.add.sprite(0, 0, "background");
        bg.setOrigin(400, 300);

        let title = this.add.text(50, 50, `${question.questionText}`,
            { ...fontFam, wordWrap: { width: 700 } });

        for (let i = 0; i < question.responses.length; i++) {
            let choice;
            if (i == question.correct) {
                choice = this.add.text(50, 210 + 90 * i, this.convertI(i) + question.responses[i],
                    { ...fontFam, wordWrap: { width: 700 } })
                choice.setInteractive();
                choice.on('pointerdown', () =>
                    this.correctResponse(question, question.responses.length)
                );
            } else {
                choice = this.add.text(50, 210 + 90 * i, this.convertI(i) + question.responses[i], { ...fontFam, wordWrap: { width: 700 } })
                choice.setInteractive();
                choice.on('pointerdown', () =>
                    this.incorrectResponse(question, question.responses.length)
                );
            }
        }
    }

    createSectionColors() {
        this.add.rectangle(400, 100, 730, 140, 0xFFFFFF);
    }

    trackTime() {
        spawnEvent = this.time.addEvent({
            delay: 1000,
            callback: this.increaseTime,
            callbackScope: this,
            loop: true,
        });
    }

    increaseTime() {
        timePassed++;
    }

    convertI(i) {
        if (i == 0) {
            return "A. "
        }
        if (i == 1) {
            return "B. "
        }
        if (i == 2) {
            return "C. "
        }
        if (i == 3) {
            return "D. "
        }
        return "error"
    }

    correctResponse(question, length) {
        let modal = this.add.rectangle(400, 300, 600, 420, 0xffffff);
        modal.setStrokeStyle(10, 0x00bb00);

        titleText = this.add.text(328, 130, "Good Job!", {... fontFamBack});
        feedbackText = this.add.text(150, 200, "", { ...fontFam, wordWrap: { width: 515 } });
        backBtn = this.add.text(280, 450, "", { ...fontFamBack });

        feedbackText.setText(question.rationaleCorrect);
        backBtn.setText("Return to game");
        backBtn.setInteractive({ useHandCursor: true });
        backBtn.on("pointerdown", () => this.goBack());
    }

    incorrectResponse(question, length) {
        let modal = this.add.rectangle(400, 300, 600, 420, 0xffffff);
        modal.setStrokeStyle(10, 0xe90000);

        titleText = this.add.text(328, 130, "Try Again!", {... fontFamBack});
        feedbackText = this.add.text(150, 200, "", { ...fontFam, wordWrap: { width: 515 } });
        backBtn = this.add.text(277, 450, "", { ...fontFamBack });

        feedbackText.setText(question.rationaleIncorrect);
        backBtn.setText("Back To Question");
        backBtn.setInteractive({ useHandCursor: true });
        backBtn.on("pointerdown", () => this.clearFeedback(backBtn, modal));
    }

    clearFeedback(backBtn, modal) {
        titleText.setText('');
        backBtn.setText("");
        feedbackText.setText("");
        modal.destroy();
    }

    goBack() {
        eventsCenter.emit('timePassedData', timePassed)
        this.scene.switch("gameScene")
    }
}

export default QuizScene;
