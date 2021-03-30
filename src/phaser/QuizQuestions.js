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

let questionsStairs = [
  new Question(
    `Jenna is a new mom and is so excited that her baby is now big enough to crawl and even pull herself up to standing. She hasn’t put up a baby gate yet because she figures if the child can’t event walk there is no need to put up the gate. What would be the best advice you could give Jenna?`,
    [
      `No need to worry about putting up a gate until your baby is actually walking around`,
      `Even small children who are crawling could possibly pull themselves up on the steps and fall. Put a baby gate up now just in case and it will also help you start the habit once your child is able to walk.`,
      `Put a baby gate up now just in case and it will also help you start the habit once your child is able to walk. You should also put door knob covers on doors that lead to rooms where there are stairs.`,
      `Don’t do anything, falling is just something that happens to kids. It can’t cause a serious injury.`,
    ],
    2,
    `Even small children just beginning to crawl can themselves up on a stair and have an accident. And remember, supervision is always the best way to prevention accidents.`,
    `There are MULTIPLE precautions you can take to fall proof your staircase.`
  ),

  new Question(
    `True or False: Clutter on a staircase (or anywhere in the house) could cause your child to fall and might cause them to be seriously hurt.`,
    [`True`, `False`],
    0,
    `Clutter is a falls hazard for any age. Small children who are still unsteady on their feet and just learning to walk and climb stairs may fall over clutter and tripping hazards.`,
    `Clutter on a staircase is a hazard for falling for all ages.`
  ),
];

let questionsWindow = [
  new Question(
    `Tom and Allison are first-time parents and are excitedly babyproofing their home. They were told that it is important to put window guards on windows to ensure children don’t fall out. However, they have window screens in all their windows so they aren’t sure if they really need window guards. What is the BEST advice you would you give these new parents? `,
    [
      `The window screen is strong enough to prevent children from falling. Don’t waste your money on window guards. `,
      `The window screen isn’t strong enough to prevent children from falling out the window, but if you don’tplan to open your windows more than a few inches it won’t be necessary.`,
      `The window screen isn’t strong enough to prevent children from falling out the window, and kids can falls out a window that is cracked as much as six inches. Install the window guards and move furniture that could be climbed on away from windows for extra protection`,
    ],
    2,
    `Window screens are not strong enough to prevent falls, and children can fall out a window cracked as little as six inches. Parents should invest in precautions or seek community resources to place window guards and move furniture for small children. Remember that there is no substitute for supervision.`,
    `Children can fall out of windows easily. Parents should take every precaution to protect them from falls.`
  ),

  new Question(
    `How many inches does a window need to be cracked for small children, five or younger, to fall out?`,
    [`About 1 foot or more`, `6 inches`, `2 inches`, `None of the above`],
    1,
    `Small children are capable of falling out windows that are cracked only six inches. Placing window guards, moving furniture and not relying on window screens for protection will reduce falls risk.`,
    `Less than a foot but more than a few!`
  ),

  new Question(
    "True or False: Window guards are one size fits all.",
    [`True`, `False`],
    1,
    `Window guards come in a variety of sizes to fit the many different sizes of windows that may be in a house. Measure your windows before purchasing.`,
    `Windows come in various sizes…`
  ),
];

let questionsWater = [
  new Question(
    `Sara is having her niece and nephew over to her new house for the first time. Her sister, the children’s mother, wants to make sure Sara has the home childproofed for her two kids who are both under the age of four. What are some hazards that Sara should know about related to water hazards for small children in the home?`,
    [
      `Children can drown in as little as two inches of water`,
      `Buckets, toilets and any standing water can be a drowning hazard for a young child`,
      `There are protective measures Sara can take to make sure her niece and nephew are safe from potential dangers with water in her home.`,
      `All of the above`,
    ],
    3,
    `Children can drown in as little as 2 inches of water such as buckets, shallow bathtubs, toilets filled sinks, and baby pools. Place toilet covers and never leave standing water in your house to prevent home drownings. Always empty baby pools after each use. `,
    `Children can drown easily in shallow water, but it is preventable.`
  ),

  new Question(
    `True or False: While fencing in a pool is very important to keep young children from falling in and potentially drowning, there is no substitution for supervision.`,
    [`True`, `False`],
    0,
    `Supervision is always the best way to prevent children from drowning and children should never be left unattended while swimming in the pool. Even if you are at a pool with lifeguards, parents should still supervise. If you are with a group of parents and your children are playing together in the pool, designated a “water watcher” who will keep their eye on kids in the pool. Fences should always be placed around pool so that children don’t accidently wonder into the pool area and fall in. Make sure sliding glass doors that lead to pool areas are child proofed.`,
    `Supervision is always the best way to protect against injury.`
  ),
];

let questionsBaby = [
  new Question(
    `True or False: If an infant or small child is snugly secured in their car seat carrier, the safest place for them to be placed is at eye level with a parent for supervision in places such as a table or countertop.`,
    [`True`, `False`],
    1,
    `Placing an infant or small child in their car seat carrier on a table top, counter, or any other high surface is a falls hazard. A squirming or moving child can cause the entire carrier to fall over, which could cause serious injuries.`,
    `Table top and countertops are high up. Falling from that height could cause serious injury to a child or infant.`
  ),

  new Question(
    `True or False: If a product or toy for a child is sold at well known and trusted brands such as Costco, Wal-Mart, or Target that guarantees the product’s safety. `,
    [`True`, `False`],
    1,
    `Many products sold for children are not recommended by the Consumer Product Safety Commission for use. Baby walkers are a good example. The American Academy of Pediatricians discourages baby walkers because they can cause falls. A safer choice is “saucer” shaped play station that does not move or a play pen area. Before buying products for your child it is always a good idea to visit cpsc.gov and search for any warnings or recalls.`,
    `The best place to resource to learn about a product’s safety is by consulting the Consumer Product Safety Commission’s website.`
  ),

  new Question(
    `True or False: It is unsafe to put a child’s highchair close to walls or furniture.`,
    [`True`, `False`],
    0,
    `Children can push off of walls or high furniture that could cause their high chair to tip over.`,
    `Children can use walls or counters to push off of, which could cause a fall or tip over of the high chair.`
  ),
];

let questionsFurniture = [
  new Question(
    `True or False: To avoid TV tip-overs it is best to place your TV on a piece of furniture that is out of your child’s grasp.`,
    [`True`, `False`],
    1,
    `Children die every year from climbing up furniture that causes that TV to tip over and fall on top of them. Prevent TV tip overs by purchasing products that anchor your TV to the wall.`,
    `TVs and many types of furniture can be extremely heavy.`
  ),

  new Question(
    `Which of the following is a safe way to protect your child from furniture tip overs?`,
    [
      `Waiting until a child is heavy enough to actually pull over a heavy piece of furniture to secure it.`,
      `Installing anchors to heavy furniture such as dressers, book cases and entertainment centers`,
      `Putting a heavy item at the top of the furniture to equal out any weight strain that a child could put on it by climbing.`,
      `Both B and C`,
    ],
    1,
    `Children are capable of pulling over even heavy furniture and many children die or are injured from furniture and TV tip overs each year.`,
    `There are products you can purchase that will make your furniture and TVs less likely to tip over.`
  ),
];

let questionsBed = [
  new Question(
    `True or False: Young children need guardrails on their beds to prevent falls.`,
    [`True`, `False`],
    0,
    `Guardrails can prevent small children from rolling out of bed and falling to the floor.`,
    `A fall from a bed can hurt!`
  ),

  new Question(
    `Derek is so proud of his four year old son for not being scared of the dark. He told his daddy he no longer needed a night light in his room because he wasn’t scared. Should Derek remove the nightlight?`,
    [
      `Yes`,
      `No, nightlights will make his son safer and prevent potential trips and falls in the dark.`,
    ],
    1,
    `Nightlights will make his son safer and prevent potential trips and falls in the dark.`,
    `Nightlights serve more than one purpose. They not only can soothe a child’s fear of the dark but can also make your home safer from falls.`
  ),
];

export default [questionsStairs, questionsWindow, questionsWater, 
  questionsBaby, questionsFurniture, questionsBed];