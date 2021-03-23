/* QuizQuestions is composed of a six lists of question objects sorted by topic with five properties
 * A String containing a question, and
 * An object containing each of the (2-4) possible responses
 * An int value indicating which of the responses is correct
 * A rationale shown when the player answers correctly
 * A rationale shown when the player answers incorrectly
 */

class Question {
  constructor(
    questionText,
    responses,
    correct,
    rationaleCorrect,
    rationaleIncorrect
  ) {
    this.questionText = questionText;
    this.responses = responses;
    this.correct = correct;
    this.rationaleCorrect = rationaleCorrect;
    this.rationaleIncorrect = rationaleIncorrect;
  }
}

let questionsExample1 = {
  questionText: `What is 2+2?`,
  response: [`1`, `2`, `3`, `4`],
  correct: 3,
  rationaleCorrect: `Two plus two is four.`,
  rationaleIncorrect: `Incorrect`
}
let questionsExample2 = {
  questionText: `What is 1x1?`,
  response: [`1`, `4`, `9`, `16`],
  correct: 0,
  rationaleCorrect: `One times one is one.`,
  rationaleIncorrect: `Incorrect`
}
let questionsExample = [
  questionsExample1,
  questionsExample2
];

let questionsStairs = [
  new Question(
    `Jenna is a new mom and is so excited that her baby is now 
    big enough to crawl and even pull herself up to standing. 
    She hasn’t put up a baby gate yet because she figures if the 
    child can’t event walk there is no need to put up the gate. 
    What would be the best advice you could give Jenna?`,
    [
      `No need to worry about putting up a gate until your baby is actually walking around`,
      `Even small children who are crawling could possibly pull 
      themselves up on the steps and fall. Put a baby gate up now 
      just in case and it will also help you start the habit once 
      your child is able to walk.`,
      `Even small children who are crawling could possibly pull themselves
       up on the steps and fall. Put a baby gate up now just in case and 
       it will also help you start the habit once your child is able to 
       walk. You should also put door knob covers on doors that lead to 
       rooms where there are stairs.`,
      ` Don’t do anything, falling is just something that happens to kids.
       It can’t cause a serious injury.`,
    ],
    2,
    `RATIONALECORRECT`,
    `RATIONALEINCORRECT`
  ),

  new Question(
    `True or False: Clutter on a staircase (or anywhere in the house) 
    could cause your child to fall and might cause them to be seriously hurt.`,
    [`True`, `False`],
    0,
    `RATIONALECORRECT`,
    `RATIONALEINCORRECT`
  ),
];

let questionsWindow = [
  new Question(
    `Tom and Allison are first-time parents and are excitedly 
    babyproofing their home before the baby is born. They were 
    told that it is important to put window guards on windows to
    make sure children don’t fall out. However, they have window
    screens in all their windows so they aren’t sure if they really
    need to bother with window guards. What is the BEST advice 
    you would you give these new parents? `,
    [
      `The window screen is strong enough to prevent children from 
      falling. Don’t waste your money on window guards. `,
      `The window screen isn’t strong enough to prevent children 
      from falling out the window, but if you don’t plan to open 
      your windows more than a few inches it won’t be necessary.`,
      `The window screen isn’t strong enough to prevent children 
      from falling out the window, and kids can falls out a window 
      that is cracked as much as six inches. Install the window 
      guards and move furniture that could be climbed on away from windows for extra protection`,
    ],
    2,
    `RATIONALECORRECT`,
    `RATIONALEINCORRECT`
  ),

  new Question(
    `How many inches does a window need to be cracked for small children, 
    five or younger, to fall out?`,
    [`About 1 foot or more`, `6 inches`, `2 inches`, `None of the above`],
    1,
    `RATIONALECORRECT`,
    `RATIONALEINCORRECT`
  ),

  new Question(
    "True or False: Window guards are one size fits all.",
    [`True`, `False`],
    1,
    `False, make sure to purchase window guards that fit your home’s windows’ sizes.`,
    `RATIONALEINCORRECT`
  ),
];

let questionsWater = [
  new Question(
    `Sara is having her niece and nephew over to her new house 
    for the first time. Her sister, the children’s mother, wants
    to make sure Sara has the home childproofed for her two kids 
    who are both under the age of four. Sara goes through a child
    proof recommendations list she finds online. However, she 
    ignores the section of the check lists that is labeled “water”
    because she doesn’t own a pool. What are some hazards that Sara
    should know about related to water hazards for small children 
    in the home?`,
    [
      `Children can drown in as little as two inches of water`,
      `Buckets, toilets and any standing water can be a drowning
       hazard for a young child`,
      `There are protective measures Sara can take to make sure 
      her niece and nephew are safe from potential dangers with 
      water in her home.`,
      `All of the above`,
    ],
    3,
    `RATIONALECORRECT`,
    `RATIONALEINCORRECT`
  ),

  new Question(
    `True or False:
    While fencing in a pool is very important to keep young children 
    from falling in and potentially drowning, there is no substitution
    for supervision.`,
    [`True`, `False`],
    0,
    `RATIONALECORRECT`,
    `RATIONALEINCORRECT`
  ),
];

let questionsBaby = [
  new Question(
    `True or False:
    If an infant or small child is snugly secured in their car seat 
    carrier, the safest place for them to be placed is at eye level 
    with a parent for supervision in places such as a table or countertop.`,
    [`True`, `False`],
    1,
    `False: Placing an infant or small child in their car seat carrier 
    on a table top, counter, or any other high surface is a falls hazard.
    A squirming or moving child can cause the entire carrier to fall over,
    which could cause serious injuries.`,
    `RATIONALEINCORRECT`
  ),

  new Question(
    `True or False:
    If a product or toy for a child is sold at well known and trusted 
    brands such as Costco, Wal-Mart, or Target that guarantees the 
    product’s safety. `,
    [`True`, `False`],
    1,
    `False: Many products sold for children are not recommended by 
    the Consumer Product Safety Commission for use. Baby walkers are 
    a good example. The American Academy of Pediatricians discourages 
    baby walkers being used because they have been known to cause falls.
    A safer choice is “saucer” shaped play station that does not move or
    a play pen area. Before buying products for your child it is always 
    a good idea to visit cpsc.gov and search for any warnings or recalls.`,
    `RATIONALEINCORRECT`
  ),

  new Question(
    `True or False: 
    It is unsafe to put a child’s highchair close to walls or furniture.`,
    [`True`, `False`],
    0,
    `True: Children can push off of walls or high furniture that could
    cause their high chair to tip over.`,
    `RATIONALEINCORRECT`
  ),
];

let questionsFurniture = [
  new Question(
    `True or False: 
    To avoid TV tip-overs it is best to place your TV 
    on a piece of furniture that is out of your child’s grasp.`,
    [`True`, `False`],
    1,
    `False: Children die every year from climbing up furniture that 
    causes that TV to tip over and fall on top of them. Prevent TV 
    tip overs by purchasing products that anchor your TV to the wall.`,
    `RATIONALEINCORRECT`
  ),

  new Question(
    `Which of the following is a safe way to protect your child 
    from furniture tip overs?`,
    [
      `Waiting until a child is heavy enough to actually pull over
       a heavy piece of furniture to secure it.`,
      `Installing anchors to heavy furniture such as dressers,
      book cases and entertainment centers`,
      `Putting a heavy item at the top of the furniture to equal 
      out any weight strain that a child could put on it by climbing.`,
      `Both b and c`,
    ],
    1,
    `RATIONALECORRECT`,
    `RATIONALEINCORRECT`
  ),
];

let questionsBed = [
  new Question(
    `True or False: 
    Young children need guardrails on their beds to prevent falls.`,
    [`True`, `False`],
    0,
    `RATIONALECORRECT`,
    `RATIONALEINCORRECT`
  ),

  new Question(
    `Derek is so proud of his four year old son for not being scared
    of the dark. He told his daddy he no longer needed a night light
     in his room because he wasn’t scared. Should Derek remove the 
    nightlight?`,
    [
      `Yes`,
      `No, nightlights will make his son safer and prevent potential
      trips and falls in the dark.`,
    ],
    1,
    `RATIONALECORRECT`,
    `RATIONALEINCORRECT`
  ),
];

export default [questionsStairs, questionsWindow, questionsWater, 
  questionsBaby, questionsFurniture, questionsBed];
