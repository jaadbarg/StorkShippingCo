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
    `Jenna is a new mom and is so excited that her baby is now big enough to crawl and even pull herself up to standing. She hasn’t put up a baby gate yet because she figures if the child can’t even walk there is no need to put up the gate. What would be the best advice you could give Jenna?`,
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

  new Question(
    `What type of baby gates are recommended to be used at the top of stairs?`,
    [`Hardware mounted`, `Pressure mounted`, 'Both are equally safe for the top of stairways'],
    0,
    `Hardware mounted gates are the safest gates to use at the top of stairs because they are screwed into place. Pressure mounted gates are more appropriate for flat areas like doorways.`,
    `Pressure mounted gates are more appropriate for flat areas like doorways.`
  ),

  new Question(
    `True or False: Parents can reduce their child’s risk of falling on stairs by carrying them up and down the steps even when they are old enough to walk but still wobbly on their feet.`,
    [`True`, `False`],
    1,
    `Parents should avoid carrying their child up and down the stairs when possible. Carrying the extra weight may cause the parent to fall and injure both themselves and the child. When it is necessary to carry your child up and down the steps, minimize your risk by not carrying any other objects.`,
    `Carrying the extra weight may cause the parent to fall and injure both themselves and the child.`
  ),

  new Question(
    `What should parents or caregivers do if their child falls?`,
    [`Try to stay calm. This can help keep your child’s from getting scared, and help you focus so you can assess any injuries.`, `Check for any bleeding. If there is, apply firm pressure directly over the injury with a clean cloth or bandage for five to ten minutes.`, 'If it hurts for your child to breath or if they are having a hard time breathing, don’t wait – head to an emergency room right away.', 'All of the above'],
    3,
    `Parents should stay calm, check for bleeding and apply firm direct pressure over any bleeding, look for signs of difficult or painful breathing. Parents or caregivers should also look for signs of other injuries. If the fall is bad enough there might be serious injuries that don’t cause bleeding such as injury to the spine, neck, or head.`,
    `Parents should stay calm, check for bleeding and apply firm direct pressure over any bleeding, look for signs of difficult or painful breathing. Parents or caregivers should also look for signs of other injuries. If the fall is bad enough there might be serious injuries that don’t cause bleeding such as injury to the spine, neck, or head.`
  ),

  new Question(
    `According to a nationwide study conducted by Nationwide Children’s Hospital, hardware mounted baby gates should be installed at the top and bottom of stairs in homes of children from zero to what age?`,
    [`1 years old`, `2 years old`, '10 years old', 'None of the above'],
    1,
    `The Center for Injury Research and Policy (CIRP) of The Research Institute at Nationwide Children’s Hospital’s nationwide study concluded that hardware mounted gates can prevent falls on the stairway and should be installed at the top and bottom of stairways in homes of children 0 – 2 years old OR whenever their child learns how to climb over or open the gate. If removing a gate is not possible because of other children in the home, use a gate without notches or gaps that could be used for climbing.`,
    `Hardware mounted gates can prevent falls on the stairway and should be installed at the top and bottom of stairways in homes of children 0 – 2 years old OR whenever their child learns how to climb over or open the gate.`
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

  new Question(
    "Window guards should be easy for adults and teens to remove in case of a fire and the window needs to be used to escape. At what story and below should window guards be easily removable for adults and teens in case of a fire?",
    [`Two stories and below`, `10 Stories and below`, 'Six stories and below'],
    2,
    `According to the Consumer Product Safety Commission: for windows on the 6th floor and below, install window guards that adults and older children/teens can open easily in case of a fire.`,
    `For windows on the 6th floor and below, install window guards that adults and older children/teens can open easily in case of a fire.`
  ),

  new Question(
    "Does a bug net work equally well as a window guard for children?",
    [`Yes`, 'No'],
    1,
    `According to the consumer product safety commission window screens and bug nets do not protect children from falling out windows. Use products specifically stating they are window guards.`,
    `Use products specifically stating they are window guards.`
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

  new Question(
    "True or False: Flotation devices such as water wings or pool noodles are NOT life saving devices and cannot always prevent drowning.",
    [`True`, `False`],
    0,
    "Water wings and other pool toys like noodles or rafts can help children experience water but they are not life saving devices. Supervision is always necessary whether or not a child is using water wings or other pool floats.",
    "Water wings and other pool toys like noodles or rafts can help children experience water but they are not life saving devices."
  ),

  new Question(
    "What is the leading cause of unintentional death for kids 1- 4 across the United States?",
    [`Falls`, `Choking`, "Dehydration", 'Drowning'],
    3,
    "Drowning was the leading cause of unintentional death in 2018  for children ages 1 – 4 and the second leading cause of death for children ages 5 – 9.",
    "Drowning was the leading cause of unintentional death in 2018  for children ages 1 – 4."
  ),

  new Question(
    "What is the earliest age a child can start taking swimming lessons according to the American Academy of Pediatrics?",
    [`Five years old`, `10 years old`, "Six months old", 'One year old'],
    3,
    "The American Academy of Pediatrics’ guidelines say that children can take swimming lessons starting as early as age one. This is based on research that shows that children who take swim lessons at this early age are less likely to drown. In fact, in 2009 a study showed that children ages 1 – 4 who participated in swimming lessons had an 88% reduction in drowning risk.",
    "The American Academy of Pediatrics’ guidelines say that children can take swimming lessons starting as early as age one."
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

  new Question(
    `Which of the following are factors that influence how serious a fall injury is for a child:`,
    [`The height the child can fall from`, `What the child falls onto`, 'What the child may hit as they fall', 'All of the above'],
    3,
    `Height: Children under 5 shouldn't have access to heights over 1.5 meters. Older children shouldn't have access to heights over 2 meters. 2) What the child falls onto: hard surfaces such as concrete, ceramic tiles and even compacted sand are more hazardous to fall onto than softer surfaces. 3) What a child may hit as they falls: landing on sharp-edged furniture or glass can cause serious injuries. Caregivers should edge guards on furniture with corners or sharp edges.`,
    'It is more than you think!'
  ),

  new Question(
    `True or False: Falls are more common when toddlers are tired or feel sick.`,
    [`True`, `False`],
    0,
    `Falls happen more frequently when children are tired or feeling unwell. To reduce falls risk parents should try and plan accordingly and practice extra safety precautions during that time.`,
    `Falls happen more frequently when children are tired or feeling unwell.`
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

  new Question(
    `True or False: You can treat falls injuries on your own by simply applying ice for 15  - 20 minutes to the areas that are hurting or swelling.`,
    [
      `True`,
      `False`
    ],
    1,
    `You should apply an ice pack or a cold pack for 15 to 20 minutes to injured areas. This can help reduce pain and swelling. BUT parents or caregivers should also take other steps such as checking for serious bleeding and determine if your child is having a hard time breathing or if it hurts them to breathe. If so, take them to a hospital immediately.`,
    `parents or caregivers should also take other steps such as checking for serious bleeding and determine if your child is having a hard time breathing or if it hurts them to breathe. If so, take them to a hospital immediately.`
  ),

  new Question(
    `A few falls and safety hazards for small children related to TVs are:`,
    [
      `TV Tip overs`,
      `Electric chords for the TV and other electronics`,
      'Both a and b',
      'None of the above'
    ],
    2,
    `Small children can be severely injured or killed by a TV tip over. Another falls hazards for ANY age is leaving chords and wires from TVs or any electronics on the floor.`,
    `Small children can be severely injured or killed by a TV tip over. Another falls hazards for ANY age is leaving chords and wires from TVs or any electronics on the floor.`
  ),

  new Question(
    `True or False: If you have a small child, it is important to place your TV on a stand that is designated for TVs rather than placing it on top of any piece of furniture.`,
    [
      `True`,
      `False`
    ],
    0,
    'When choosing a place for your TV, parents or caregivers with young children should select a stand that is designated for a TV and make sure it is made for the TV’s size. Secure the TV to the stand with safety straps and then secure the stand to the wall with safety straps or L-brackets.',
    `You should select a stand that is designated for a TV and make sure it is made for the TV’s size.`
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

  new Question(
    `Which of the following can caregivers do to reduce the chance of babies falling out of beds or cribs:`,
    [
      `Remove any toys from a crib that your toddler could use to climb on and fall out.`,
      `When your child is ready to move from a crib to a bed, place a mattress on the floor to soften a fall.`,
      'A and B',
      'Neither'
    ],
    2,
    `Children can be seriously hurt if they fall out of their crib or their bed. Parents can reduce their risk of falling by following removing any toys and place a mattress on the floor.`,
    `Children can be seriously hurt if they fall out of their crib or their bed.`
  ),

  new Question(
    ` How can a caregiver determine when it is time for a child to start sleeping in a bed rather than their crib:`,
    [
      `When the child can easily climb out of the crib on their own`,
      `When the child starts talking`,
      'When the child is too tall to fit into their crib',
      'None of the above'
    ],
    0,
    `When children are able to climb out of their crib on their own it is time to move them to a bed to avoid them climbing and falling. This typically occurs between 18 months to 3 ½ years old.`,
    `When children are able to climb out of their crib on their own it is time to move them to a bed to avoid them climbing and falling.`
  ),

  new Question(
    `True or False: The best way to prevent TV tipover accidents with children is to place your TV high and away from children’s reach.`,
    [
      `True`,
      `False`
    ],
    1,
    'To prevent TV tipovers TVs should be 1) placed on stands that are designated for TVs 2) are placed on TV stands that are made for the TVs size per the manufacturer’s instructions and 3) both the stand and TV should be secured to the wall using a tether.',
    `Children can cause TV tipovers by attempting to climb up furniture and causing the stand and the TV to tip.`
  ),
];

export default [questionsStairs, questionsWindow, questionsWater, 
  questionsBaby, questionsFurniture, questionsBed];