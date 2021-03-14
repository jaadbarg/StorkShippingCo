 /* QuizQuestions is composed of a list of Question objects with two properties
    * A String containing a question, and
    * An object containing each of the (2-4) possible responses 
    * An int value indicating which of the responses is correct
    */

let questionsExample = [
    new Question(`What is 2+2?`, [`1`,`2`,`3`,`4`], 3),
    new Question(`What is 1x1?`, [`1`,`4`,`9`,`16`], 0)
];

let questionsStairs = [
    new Question(
        `Jenna is a new mom and is so excited that her baby is now big enough to crawl and even 
    pull herself up to standing. She hasn’t put up a baby gate yet because she figures if the 
    child can’t event walk there is no need to put up the gate. What would be the best advice you could 
    give Jenna?`,
    [`No need to worry about putting up a gate until your baby is actually walking around`,
    `Even small children who are crawling could possibly pull themselves up on the steps and fall. 
    Put a baby gate up now just in case and it will also help you start the habit once your child is 
    able to walk.`,
    `Even small children who are crawling could possibly pull themselves up on the steps and fall. 
    Put a baby gate up now just in case and it will also help you start the habit once your child is able 
    to walk. You should also put door knob covers on doors that lead to rooms where there are stairs.`,
    ` Don’t do anything, falling is just something that happens to kids. It can’t cause a serious injury.`], 3
    ),
    new Question("What is 2+2?", [`1`,`2`,`3`,`4`], 3),)
];

let questionsWindow = [

];

let questionsWater = [

];

let questionsBaby = [

];

let questionsFurniture = [

];

let questionsBed = [

];

class Question {
    constructor(questionText, responses, correct) {
        this.questionText = questionText;
        this.responses = responses;
        this.correct = correct;
    }
}