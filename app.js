const rawQuestions = {
  Love: {
    mood: "Light",
    items: [
      "What is a tiny thing I do that makes you feel loved?",
      "What was the moment you first thought, 'I really like this person'?",
      "If our relationship had a theme song title, what would it be?",
      "What is one thing we do together that feels like home?",
      "What compliment from me would you secretly replay all day?",
      "When do you feel most understood by me?",
      "What habit of mine is weirdly cute to you?",
      "What does a perfect lazy Sunday with us look like?",
      "What is one memory with me you would put in a frame?",
      "What is the most romantic thing that does not cost money?",
      "What is a promise you hope we keep even when life gets busy?",
      "What small ritual should we start?",
      "What is something you want us to celebrate more?",
      "What is one thing I should never stop doing?",
      "What kind of date would make you feel chosen?",
      "What is a love language you want more of this month?",
      "What does being a team mean to you in real life?",
      "What is one boundary that helps love feel safe?",
      "What is one way I can show up for you when you are stressed?",
      "What is a moment where you felt proud of us?",
      "What is one silly private tradition we should invent?",
      "What does romance look like on an ordinary weekday?",
      "What is one thing about us that feels rare?",
      "What is a tiny detail about me you noticed before I knew you noticed?",
      "What is one thing you hope I always remember about you?",
      "What made you smile about us recently?",
      "What is the cutest misunderstanding we ever had?",
      "What is a question you wish I asked you more often?",
      "What would make our next month feel more connected?",
      "What is something I do that makes you feel calm?",
      "What kind of surprise would actually make your day?",
      "What is one way we have grown since we met?",
      "What is the most 'us' thing we do?",
      "What is a moment you wanted to freeze in time?",
      "What is one part of my personality you feel lucky to know?",
      "What is one way we can make goodbye or goodnight sweeter?",
      "What is a shared dream that feels exciting right now?",
      "What is an inside joke that deserves a comeback?",
      "When do you feel most like we are partners, not just dating?",
      "What is a simple sentence you love hearing from me?",
      "What is a way I can make you feel more admired?",
      "What is something about our chemistry that makes you laugh?",
      "What is one little thing we should turn into a tradition?",
      "What is a memory of us that still feels fresh?",
      "If love was measured in tiny actions, what action scores highest for you?"
    ]
  },
  Deep: {
    mood: "Deep",
    items: [
      "What fear do you find easiest to hide from people who love you?",
      "What does emotional safety feel like to you?",
      "What is one thing from your past that shaped how you love?",
      "When do you need comfort, and when do you need solutions?",
      "What is a pattern you are trying to outgrow?",
      "What makes you feel truly respected in a relationship?",
      "What is something you have learned about trust the hard way?",
      "What does forgiveness mean to you without pretending nothing happened?",
      "What part of yourself do you want to be loved more gently?",
      "What is one dream you are nervous to say out loud?",
      "What is a value you would never want to compromise for love?",
      "When do you feel most vulnerable with me?",
      "What do you need when you shut down?",
      "What is one way we can disagree better?",
      "What does loyalty mean when nobody is watching?",
      "What kind of future pressure scares you the most?",
      "What is a belief about relationships you have changed your mind about?",
      "What does a healthy apology sound like to you?",
      "What do you wish people understood about your quiet moments?",
      "What is something you are proud you survived?",
      "What kind of reassurance actually helps you?",
      "What is a lesson you want love to teach you slowly?",
      "What is one way you want to be brave this year?",
      "What does being fully seen mean to you?",
      "What is one old wound you do not want to bring into us?",
      "What part of growing up still affects how you ask for help?",
      "What is one thing you need permission to feel?",
      "What is a truth about you that sounds simple but is important?",
      "What does patience look like when life is difficult?",
      "What is something you want to protect in our relationship?",
      "What is one place where you want more honesty, even if it is awkward?",
      "What helps you believe someone will stay?",
      "What is a moment when you felt deeply alone, and what would have helped?",
      "What kind of love did you need more of as a child?",
      "What does commitment mean before big life milestones happen?",
      "What is one thing you are afraid to need?",
      "How do you know when your nervous system trusts someone?",
      "What is the difference between being loved and being understood for you?",
      "What is something you are still learning how to receive?",
      "What would make conflict feel less scary?",
      "What does emotional maturity look like in daily life?",
      "What do you want us to handle differently than couples you saw growing up?",
      "What is one promise you want to make to yourself, not to me?",
      "What is a hard topic you want us to get better at discussing?",
      "What does a peaceful love feel like in your body?"
    ]
  },
  Funny: {
    mood: "Light",
    items: [
      "If our relationship was a reality show, what would the title be?",
      "What is my funniest harmless flaw?",
      "What would our couple mascot be, and why?",
      "What food would describe my personality today?",
      "What is the most dramatic thing we have ever done over nothing?",
      "If I had a warning label, what would it say?",
      "What useless talent should we train for as a couple?",
      "What is the dumbest hill you would defend in an argument?",
      "What object in this room understands our relationship best?",
      "If our texts were leaked as a book, what chapter would be funniest?",
      "What is the most suspicious thing I do for no reason?",
      "What would be my job in a medieval village?",
      "What couple activity would we be terrible at but enjoy anyway?",
      "What is a phrase I say too much?",
      "What tiny inconvenience turns me into a main character?",
      "If we swapped personalities for a day, what would go wrong first?",
      "What is a weird opinion you think I secretly have?",
      "What snack has the same energy as our relationship?",
      "What would our couple handshake look like?",
      "What is the most ridiculous date idea you would still try?",
      "What household item would win a talent show?",
      "If my mood had a weather forecast, what would it say?",
      "What is one thing we should absolutely not be trusted to name?",
      "What would our couple business sell if it had to be ridiculous?",
      "What is my most lovable chaos mode?",
      "What is the funniest thing I misunderstand?",
      "What would our relationship's loading screen tip say?",
      "If our love story had a villain, what minor inconvenience would it be?",
      "What chore should be an Olympic sport for us?",
      "What is a fake conspiracy theory about our relationship?",
      "What is the worst couple slogan you can invent for us?",
      "What would I be famous for in a very small town?",
      "What is a word that sounds like it describes me?",
      "What is one thing you would roast me for in a loving speech?",
      "What would our emergency code phrase be for leaving a boring place?",
      "What random object would you trust me to survive with?",
      "What would our couple perfume be called?",
      "What minor habit of mine deserves its own documentary?",
      "What is the funniest lie we could tell people about how we met?",
      "What is our relationship's most chaotic side quest?",
      "If I were a menu item, what would I be called?",
      "What would our couple band be named?",
      "What is the funniest thing to put on our imaginary family crest?",
      "What would be my superpower if it had to be useless?",
      "What is the most unserious reason you like me?"
    ]
  },
  Future: {
    mood: "Deep",
    items: [
      "What is one tiny future moment with me that you hope happens?",
      "What kind of home would feel like us?",
      "What is a trip we should take for the memories, not the photos?",
      "What ordinary Tuesday do you hope we have in five years?",
      "What should we get better at before life gets busier?",
      "What is one skill we should learn together?",
      "What does a good year for us look like?",
      "What future tradition should start now?",
      "What is one financial habit that would make our future calmer?",
      "What is a place you want to show me someday?",
      "What kind of older couple energy do you hope we have?",
      "What is one thing you want us to still laugh about years from now?",
      "What does building a life together mean in small daily choices?",
      "What is one adventure that feels just outside our comfort zone?",
      "What should our future kitchen always have?",
      "What would make us proud of this season later?",
      "What is a dream date we should actually plan?",
      "What kind of support do you want during career changes?",
      "What is one thing we should protect when we are busy?",
      "What future version of us would you want to meet for advice?",
      "What is a habit that would make us stronger over time?",
      "What is something you want to experience with me for the first time?",
      "What does stability mean to you?",
      "What kind of celebration should we create for small wins?",
      "What is one place in the world that feels romantic to imagine together?",
      "What is an adult responsibility we could make less boring?",
      "What does a peaceful morning together look like?",
      "What is one shared goal that would make us feel proud?",
      "What is something you want us to be known for by friends?",
      "What kind of life pace suits us best?",
      "What is one future challenge we can prepare for with kindness?",
      "What is a tiny luxury you hope we always make room for?",
      "What should we say yes to more often?",
      "What should we say no to more confidently?",
      "What is one memory we have not made yet but should?"
    ]
  },
  Flirty: {
    mood: "Bold",
    items: [
      "What look from me makes you lose your train of thought?",
      "What is a compliment you want but would never ask for?",
      "What outfit of mine should make a comeback?",
      "What is a cute thing I do without realizing it?",
      "What is the most attractive non-physical trait I have?",
      "What tiny gesture from me feels romantic?",
      "What is a date-night rule we should invent?",
      "What is something I do that feels quietly charming?",
      "What is your favorite way for me to greet you?",
      "What part of my confidence do you find attractive?",
      "What is a flirty dare that would still be sweet?",
      "What is a romantic scene we could recreate in our own style?",
      "What is one thing that makes you want to sit closer?",
      "What is your favorite version of me?",
      "What is a compliment you think I need to believe more?",
      "What should be our code word for 'you look really good'?",
      "What is something about me that aged well in your eyes?",
      "What kind of attention from me do you enjoy most?",
      "What is a sweetly bold question you want me to answer?",
      "What is a song that makes you think of attraction?",
      "What is one thing you want me to notice more often?",
      "What is an innocent habit of mine that is surprisingly attractive?",
      "What is your favorite excuse to be near me?",
      "What is a romantic place where we would take great photos?",
      "What is a look, scent, or sound that reminds you of me?",
      "What is one way I could make a normal day feel like a date?",
      "What is a compliment you would write on a note and hide for me?",
      "What is a playful challenge we should try tonight?",
      "What is the cutest way to interrupt you?",
      "What is one thing I do that feels movie-scene romantic?",
      "What is your favorite type of hug from me?",
      "What is a soft dare you want to give me?",
      "What tiny detail makes someone instantly more attractive to you?",
      "What is a flirtier name for our normal plans?",
      "What is one romantic thing we should overdo for fun?"
    ]
  },
  Wildcard: {
    mood: "Light",
    items: [
      "What is a rule we would make if we owned a tiny country?",
      "What is a secret ranking you have in your head?",
      "What is a boring thing you find strangely satisfying?",
      "What is one opinion you would defend with too much confidence?",
      "What is a memory that always changes your mood?",
      "What is one thing people underestimate about you?",
      "What is a childhood dream you still kind of respect?",
      "What is one skill you wish could download into your brain?",
      "What is a weird fear you have never fully explained?",
      "What is a perfect snack plate?",
      "What is one thing you would erase from all chores forever?",
      "What is your most specific comfort show or movie vibe?",
      "What is one decision you are glad younger you made?",
      "What is an oddly specific thing that makes you feel fancy?",
      "What would your personal theme day include?",
      "What is an object you are emotionally attached to for no good reason?",
      "What is a question you love being asked?",
      "What is a hobby you would try if nobody judged the result?",
      "What is one tiny luxury that improves life too much?",
      "What fictional world would be fun for one day only?",
      "What is the best compliment someone could give your personality?",
      "What is a normal skill that feels like magic when someone is good at it?",
      "What is one smell that instantly brings back a memory?",
      "What is a personal rule you live by without announcing it?",
      "What is something you would teach a younger cousin about dating?",
      "What is a sound you love?",
      "What is a sound that should be illegal?",
      "What is your most irrational loyalty?",
      "What is a thing you thought was adult life but is actually just paperwork?",
      "What is one topic you could give a dramatic presentation about?",
      "What is a tiny problem you solved in a clever way?",
      "What is a thing you are picky about for no clear reason?",
      "What is your ideal no-phone evening?",
      "What is one compliment from anyone that stuck with you?",
      "What is an unexpected thing you find beautiful?",
      "What is one truth that gets funnier the older you get?",
      "What is a random tradition your family or friends have?",
      "What is a choice you respect even if you would not choose it?",
      "What is one way you want to spend free time differently?",
      "What is the most underrated form of kindness?",
      "What is something simple that can ruin your mood?",
      "What is something simple that can rescue your mood?",
      "What is a question that would start a two-hour conversation?",
      "What is a personal green flag you are proud of?",
      "What is a hill you would defend with a slide deck?"
    ]
  }
};

const extraQuestionPacks = {
  Love: {
    items: [
      "What part of me do you think I protect like a locked room?",
      "What kind of love do you think we are inventing that neither of us saw growing up?",
      "If my heart had a weather system, what climate have you learned how to survive?",
      "What is a quiet proof of love that most people would miss if they watched us?",
      "What is something about me you would defend even when I am not in the room?",
      "What version of us only appears when nobody is performing?",
      "What is the difference between wanting me and choosing me for you?",
      "What is a tiny moment where you realized I am not like other people you have known?",
      "What would you want me to know about loving you on your hardest day?",
      "What part of our love feels ancient, like it was already waiting for us?",
      "What do you think I secretly need more tenderness about?",
      "What is a strange little signal that tells you we are okay?",
      "If our relationship had a hidden room, what would be inside it?",
      "What is one way you want to be loved that feels almost too specific to explain?",
      "What do you hope never becomes ordinary between us?"
    ]
  },
  Deep: {
    items: [
      "What is one truth about you that people keep simplifying until it becomes wrong?",
      "Which version of you had to disappear so the current you could survive?",
      "What do you fear I would misunderstand if I saw your whole inner world at once?",
      "What is a belief you inherited that you are quietly uninstalling?",
      "When have you confused peace with boredom or chaos with chemistry?",
      "What emotion do you treat like evidence against yourself?",
      "What do you wish I could feel for ten seconds so I would understand you better?",
      "What is a part of you that asks for love in a language you barely speak?",
      "Which apology are you still waiting to receive from life?",
      "What do you do when you are scared of being fully known?",
      "What is a wound that made you funny, independent, or charming before it made you tired?",
      "What does your silence usually mean: peace, protection, punishment, or processing?",
      "What kind of closeness makes you want to run even though you want it?",
      "What is something you have outgrown but still dress up as loyalty?",
      "What do you want to stop proving before it turns into your personality?",
      "Which part of your softness survived the worst year of your life?",
      "What do you secretly test in people before you let them close?",
      "What is one way love can become a mirror you were not ready for?",
      "What is the most expensive emotional lesson you ever learned?",
      "What does your nervous system mistake for danger in relationships?",
      "What kind of honesty feels like freedom instead of attack?",
      "What are you afraid will happen if you are easy to love?",
      "What is one memory that still controls a room inside you?",
      "Where do you need patience, and where do you actually need courage?",
      "What would you ask your future self if they could only answer with a feeling?"
    ]
  },
  Funny: {
    items: [
      "If our emotional baggage had names, which one would always be late?",
      "What would our couple therapist write in all caps after one session?",
      "Which tiny inconvenience could almost defeat our love story?",
      "If our relationship had a cursed object, what would it be?",
      "What would be the worst possible documentary title about our daily life?",
      "If one of my habits became a courtroom trial, what would the charges be?",
      "What is the funniest thing your brain has decided is romantic?",
      "If our arguments had commercial breaks, what product would sponsor them?",
      "What would our love story be called if it was written by someone very dramatic?",
      "What is one totally harmless thing I do with villain energy?"
    ]
  },
  Future: {
    items: [
      "What future problem do you think we should learn how to solve before it arrives?",
      "What would our life look like if we designed it around nervous-system peace instead of impressing people?",
      "What should future us never sacrifice just to look successful?",
      "If our future home had one rule written on the wall, what would it say?",
      "What kind of freedom do you want us to build together?",
      "What does a brave future with me require from you now?",
      "What boring routine could become sacred if we protected it?",
      "What future temptation could make us forget who we are as a team?",
      "What do you want us to become unusually good at together?",
      "What should we practice now so older us feels grateful?"
    ]
  },
  Flirty: {
    items: [
      "What is attractive about me in a way that has nothing to do with looking good?",
      "What part of my energy feels dangerous in the best harmless way?",
      "What is one sentence from me that would stay in your head all night?",
      "What makes you feel pulled toward me before you even think about it?",
      "What is the most magnetic version of me?",
      "What is a look I give you that should probably have a warning label?",
      "What normal thing could I do slowly and make it feel romantic?",
      "What kind of confidence do you want to see more from me?",
      "What is one thing about me that feels quietly addictive?",
      "What would make tonight feel like a scene we should remember?"
    ]
  },
  Wildcard: {
    items: [
      "If your inner world was a house, which room would you refuse to renovate?",
      "What is a completely irrational thing that still tells the truth about you?",
      "If your intuition had a voice, what annoying thing would it keep repeating?",
      "What do you think your dreams are trying to make you admit?",
      "What is a personality trait you use as a disguise?",
      "If your life had a glitch, what moment would keep replaying?",
      "What invisible scoreboard do you need to stop checking?",
      "What is something you pretend is a preference but is actually protection?",
      "If your future self sent you a warning label, what would it say?",
      "What do you find beautiful that would make no sense on paper?",
      "What is one thing you know before you have proof?",
      "What would your shadow self order at a restaurant?",
      "What is a harmless delusion that makes life more fun?",
      "What is the weirdest evidence that you are healing?",
      "What question would make tonight impossible to forget?"
    ]
  },
  Mindbend: {
    mood: "Deep",
    items: [
      "If I could walk through your mind for one minute, what door would you beg me not to open?",
      "What part of you loves me, and what part of you is still interviewing me?",
      "If our souls had a group chat before we met, what did yours warn mine about?",
      "What is one thing you are scared I might be able to see through?",
      "Which memory of us feels like it belongs to a parallel universe?",
      "If your trust had a control room, which button is hardest for you to let me near?",
      "What would your childhood self find suspicious about how I love you?",
      "What is the strangest way I have changed the atmosphere inside your head?",
      "If our relationship was a dream, what symbol would keep appearing?",
      "What secret contract do you think couples accidentally sign without reading?",
      "What part of loving me feels like stepping through a mirror?",
      "If I met the version of you that exists only at 3 a.m., what would they confess?",
      "What is one emotional superstition you still obey?",
      "What do you think our biggest unspoken question is?",
      "If your fear could text me, what would it accuse me of?",
      "What kind of tenderness scares you because it feels too accurate?",
      "What have you been calling independence that might actually be armor?",
      "If we switched hearts for one day, what would shock you about mine?",
      "What is the most intimate thing someone can notice without touching you?",
      "What is one truth about us that sounds insane but feels correct?",
      "Which part of you is hardest to date because it keeps changing the rules?",
      "What invisible test did I pass without knowing?",
      "If our love had a monster under the bed, what would feed it?",
      "What future version of us would current us be afraid to disappoint?",
      "What is the difference between being obsessed, attached, chosen, and calm?",
      "What do you want me to understand before I understand the facts?",
      "If every ex, crush, and almost-love taught you one curse, which curse are you breaking with me?",
      "What would make love feel like a portal instead of a trap?",
      "What part of your ego gets loudest when you feel deeply wanted?",
      "What is the scariest compliment I could give you because it would be true?",
      "If our relationship had a secret boss level, what would it test?",
      "What do you think we are both pretending is simpler than it is?",
      "Which emotion do you want me to hold without trying to fix it?",
      "What would your shadow say is the real reason you like me?",
      "If the universe forced us to be radically honest for five minutes, what would you say first?",
      "What is one beautiful thing about us that could become dangerous if ignored?",
      "What question would make you feel naked in your personality?",
      "If our chemistry was a spell, what ingredient would make it unstable?",
      "What part of you trusts me, but only in whispers?",
      "What do you think I am teaching your nervous system without trying?",
      "What would you want to ask me if there were no consequences to the answer?",
      "What kind of love feels almost illegal because it is so specific?",
      "If we were both myths, what warning would people tell about us?",
      "What is something your body knew about me before your mind agreed?",
      "What would make you feel chosen in a way that reaches the oldest part of you?",
      "If our relationship had a hidden prophecy, what would be the first line?",
      "Which truth about love did you learn too early?",
      "What do you think we are here to heal in each other, if anything?",
      "What are you afraid will become possible if this actually works?",
      "What question should we ask only after midnight?"
    ]
  }
};

Object.entries(extraQuestionPacks).forEach(([category, pack]) => {
  if (!rawQuestions[category]) {
    rawQuestions[category] = { mood: pack.mood || "Deep", items: [] };
  }

  rawQuestions[category].items.push(...pack.items);
});

const followUps = {
  Love: [
    "Bonus: trade answers after the first response.",
    "Bonus: name the smallest real example you can remember.",
    "Bonus: turn the answer into a tiny plan for this week."
  ],
  Deep: [
    "Bonus: let the answer breathe before responding.",
    "Bonus: answer with one memory and one feeling.",
    "Bonus: say what support would look like in real life."
  ],
  Mindbend: [
    "Bonus: answer the beautiful version first, then the dangerous version.",
    "Bonus: say what your body knows before your logic edits it.",
    "Bonus: name the fear hiding underneath the answer."
  ],
  Funny: [
    "Bonus: give the serious answer, then the worst possible answer.",
    "Bonus: act out the answer for five seconds.",
    "Bonus: make the answer sound like a movie trailer."
  ],
  Future: [
    "Bonus: pick one small step that could happen this month.",
    "Bonus: describe the scene like a photo.",
    "Bonus: say what would make that future feel peaceful."
  ],
  Flirty: [
    "Bonus: answer like you are leaving a secret note.",
    "Bonus: give a sweet answer and a bold answer.",
    "Bonus: say the answer while making eye contact."
  ],
  Wildcard: [
    "Bonus: defend your answer like it matters too much.",
    "Bonus: ask one follow-up that makes it stranger.",
    "Bonus: give a one-word answer first, then explain it."
  ]
};

const generatedParts = {
  tinyActions: [
    "a handwritten note",
    "a surprise snack",
    "a ten-minute walk",
    "a random compliment",
    "a good morning message",
    "a quiet hug",
    "a shared playlist",
    "a planned lazy breakfast"
  ],
  timeWindows: [
    "tonight",
    "this weekend",
    "a rainy day",
    "a stressful week",
    "our next date",
    "a random Tuesday",
    "a long drive",
    "a morning together"
  ],
  sillyObjects: [
    "a broken umbrella",
    "one spoon",
    "a tiny suitcase",
    "a dramatic hat",
    "a mystery key",
    "a fake mustache",
    "a suspicious sandwich",
    "a single candle"
  ],
  places: [
    "a quiet cabin",
    "a crowded airport",
    "a tiny cafe",
    "a city rooftop",
    "a beach at night",
    "a kitchen at midnight",
    "a bookshop",
    "a train station"
  ],
  feelings: [
    "safe",
    "wanted",
    "chosen",
    "brave",
    "understood",
    "playful",
    "calm",
    "excited"
  ],
  strangeSymbols: [
    "a locked hallway",
    "a mirror that answers back",
    "a city under the bed",
    "a phone call from future us",
    "a room full of versions of you",
    "a staircase that keeps changing",
    "a candle that remembers everything",
    "a map with one missing country"
  ],
  hiddenForces: [
    "jealousy disguised as intuition",
    "fear wearing confidence",
    "comfort that feels suspicious",
    "chemistry that refuses to behave",
    "a boundary pretending to be a wall",
    "a fantasy asking for evidence",
    "trust arriving before logic",
    "softness with a knife behind its back"
  ],
  lifeChapters: [
    "moving somewhere new",
    "having less free time",
    "chasing a big dream",
    "being far apart for a bit",
    "saving money together",
    "meeting new friends",
    "building a routine",
    "handling family pressure"
  ]
};

const generatedTemplates = {
  Love: [
    () => `What is one ${pick(generatedParts.tinyActions)} that would make ${pick(generatedParts.timeWindows)} feel more romantic?`,
    () => `When do I make you feel most ${pick(generatedParts.feelings)}?`,
    () => `What would be our sweetest tradition in ${pick(generatedParts.places)}?`
  ],
  Deep: [
    () => `What would you need from me during a season of ${pick(generatedParts.lifeChapters)}?`,
    () => `What does feeling ${pick(generatedParts.feelings)} unlock in you?`,
    () => `What part of love gets harder for you during ${pick(generatedParts.timeWindows)}?`
  ],
  Mindbend: [
    () => `If our relationship was haunted by ${pick(generatedParts.hiddenForces)}, what would it make us do?`,
    () => `What would ${pick(generatedParts.strangeSymbols)} reveal about the way you love?`,
    () => `Which version of you shows up when you feel ${pick(generatedParts.feelings)} but do not trust it?`
  ],
  Funny: [
    () => `How would we survive for a day with only ${pick(generatedParts.sillyObjects)}?`,
    () => `What would our argument about ${pick(generatedParts.sillyObjects)} sound like?`,
    () => `What would our couple review say if ${pick(generatedParts.places)} rated us?`
  ],
  Future: [
    () => `What do you hope we remember about ${pick(generatedParts.timeWindows)} five years from now?`,
    () => `How should we handle ${pick(generatedParts.lifeChapters)} as a team?`,
    () => `What future version of us belongs in ${pick(generatedParts.places)}?`
  ],
  Flirty: [
    () => `What would make ${pick(generatedParts.timeWindows)} feel like a secret date?`,
    () => `What tiny thing could I do in ${pick(generatedParts.places)} that would make you smile?`,
    () => `What is the most attractive way someone can make you feel ${pick(generatedParts.feelings)}?`
  ],
  Wildcard: [
    () => `What would your life motto be if it had to include ${pick(generatedParts.sillyObjects)}?`,
    () => `What is the most chaotic thing we could do in ${pick(generatedParts.places)} and still call it romantic?`,
    () => `What is your strongest opinion about ${pick(generatedParts.timeWindows)}?`
  ]
};

const categoryStyles = {
  Love: { background: "rgba(255, 107, 92, 0.2)", color: "#ffb3a8" },
  Deep: { background: "rgba(76, 201, 240, 0.18)", color: "#c9f3ff" },
  Mindbend: { background: "rgba(245, 80, 255, 0.2)", color: "#f8c2ff" },
  Funny: { background: "rgba(255, 209, 102, 0.18)", color: "#ffe39b" },
  Future: { background: "rgba(32, 232, 193, 0.18)", color: "#a8ffed" },
  Flirty: { background: "rgba(181, 116, 255, 0.2)", color: "#dec4ff" },
  Wildcard: { background: "rgba(255, 255, 255, 0.13)", color: "#f8fbff" }
};

const moodCopy = {
  Light: "Light",
  Deep: "Deep",
  Bold: "Bold"
};

const deck = Object.entries(rawQuestions).flatMap(([category, data]) => {
  return data.items.map((text, index) => ({
    id: `${category}-${index}`,
    category,
    mood: data.mood,
    text,
    generated: false
  }));
});

const state = {
  filter: "All",
  mood: "Any",
  queue: [],
  history: [],
  historyIndex: -1,
  turn: 0,
  visualPulse: 0,
  seen: new Set(),
  saved: loadSaved()
};

const els = {
  visualizer: document.querySelector("#visualizer"),
  questionStage: document.querySelector(".question-stage"),
  questionCard: document.querySelector(".question-card"),
  roundNumber: document.querySelector("#roundNumber"),
  seenCount: document.querySelector("#seenCount"),
  deckLeft: document.querySelector("#deckLeft"),
  categoryBadge: document.querySelector("#categoryBadge"),
  turnBadge: document.querySelector("#turnBadge"),
  moodLabel: document.querySelector("#moodLabel"),
  questionText: document.querySelector("#questionText"),
  followText: document.querySelector("#followText"),
  previousButton: document.querySelector("#previousButton"),
  nextButton: document.querySelector("#nextButton"),
  shuffleButton: document.querySelector("#shuffleButton"),
  saveButton: document.querySelector("#saveButton"),
  clearSavedButton: document.querySelector("#clearSavedButton"),
  categoryFilters: document.querySelector("#categoryFilters"),
  moodFilters: document.querySelector("#moodFilters"),
  playerOne: document.querySelector("#playerOne"),
  playerTwo: document.querySelector("#playerTwo"),
  savedList: document.querySelector("#savedList")
};

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function shuffle(list) {
  const copy = [...list];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function matchesFilters(question) {
  const categoryMatch = state.filter === "All" || question.category === state.filter;
  const moodMatch = state.mood === "Any" || question.mood === state.mood;
  return categoryMatch && moodMatch;
}

function filteredBaseDeck() {
  const exactMatches = deck.filter(matchesFilters);
  if (exactMatches.length > 0) {
    return exactMatches;
  }

  return deck.filter((question) => state.filter === "All" || question.category === state.filter);
}

function generateQuestion(categoryOverride) {
  const possibleCategories = Object.keys(generatedTemplates).filter((category) => {
    const categoryMatch = categoryOverride ? category === categoryOverride : state.filter === "All" || category === state.filter;
    const mood = rawQuestions[category].mood;
    const moodMatch = state.mood === "Any" || mood === state.mood;
    return categoryMatch && moodMatch;
  });

  const categories = possibleCategories.length > 0
    ? possibleCategories
    : categoryOverride && generatedTemplates[categoryOverride]
      ? [categoryOverride]
      : Object.keys(generatedTemplates);
  const category = pick(categories);
  const template = pick(generatedTemplates[category]);

  return {
    id: `Generated-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    category,
    mood: rawQuestions[category].mood,
    text: template(),
    generated: true
  };
}

function refillQueue() {
  const base = filteredBaseDeck();
  const unseen = base.filter((question) => !state.seen.has(question.id));
  const source = unseen.length > 0 ? unseen : base;
  const generated = Array.from({ length: 24 }, () => generateQuestion(state.filter === "All" ? undefined : state.filter));
  state.queue = shuffle([...source, ...generated]);
}

function currentQuestion() {
  return state.history[state.historyIndex];
}

function nextQuestion() {
  if (state.historyIndex < state.history.length - 1) {
    state.historyIndex += 1;
    render();
    return;
  }

  if (state.queue.length === 0) {
    refillQueue();
  }

  const question = { ...(state.queue.shift() || generateQuestion()) };
  state.turn = state.history.length === 0 ? 0 : 1 - state.turn;
  question.turn = state.turn;
  question.follow = pick(followUps[question.category] || followUps.Love);
  state.history.push(question);
  state.historyIndex = state.history.length - 1;
  state.seen.add(question.id);
  triggerVisualPulse();
  render();
}

function previousQuestion() {
  if (state.historyIndex <= 0) {
    return;
  }

  state.historyIndex -= 1;
  render();
}

function resetRound() {
  state.queue = [];
  state.history = [];
  state.historyIndex = -1;
  refillQueue();
  nextQuestion();
}

function shuffleCurrentDeck() {
  if (state.historyIndex < state.history.length - 1) {
    state.history = state.history.slice(0, state.historyIndex + 1);
  }

  refillQueue();
  nextQuestion();
}

function getPlayers() {
  const first = els.playerOne.value.trim() || "Player 1";
  const second = els.playerTwo.value.trim() || "Player 2";
  return [first, second];
}

function turnText(turnIndex = state.turn) {
  const players = getPlayers();
  const asker = players[turnIndex];
  const answerer = players[1 - turnIndex];

  if (asker.toLowerCase() === "you") {
    return `You ask ${answerer}`;
  }

  return `${asker} asks ${answerer}`;
}

function render() {
  const question = currentQuestion();
  if (!question) {
    return;
  }

  const style = categoryStyles[question.category] || categoryStyles.Love;
  question.follow ||= pick(followUps[question.category] || followUps.Love);
  els.categoryBadge.textContent = question.category;
  els.categoryBadge.style.background = style.background;
  els.categoryBadge.style.color = style.color;
  els.turnBadge.textContent = turnText(question.turn ?? state.turn);
  els.moodLabel.textContent = moodCopy[question.mood] || question.mood;
  els.questionText.textContent = question.text;
  els.followText.textContent = question.follow;
  els.roundNumber.textContent = String(state.historyIndex + 1);
  els.seenCount.textContent = String(state.seen.size);
  els.deckLeft.textContent = String(state.queue.length);
  els.previousButton.disabled = state.historyIndex <= 0;
  els.saveButton.classList.toggle("is-saved", isSaved(question));
  animateQuestionCard();
  renderSaved();
}

function isSaved(question) {
  return state.saved.some((item) => item.text === question.text);
}

function toggleSaved() {
  const question = currentQuestion();
  if (!question) {
    return;
  }

  if (isSaved(question)) {
    state.saved = state.saved.filter((item) => item.text !== question.text);
  } else {
    state.saved.unshift({
      category: question.category,
      text: question.text
    });
  }

  saveSaved();
  render();
}

function renderSaved() {
  if (state.saved.length === 0) {
    els.savedList.innerHTML = '<p class="empty-state">No saved questions yet.</p>';
    return;
  }

  els.savedList.innerHTML = state.saved.map((item) => {
    const safeCategory = escapeHtml(item.category);
    const safeText = escapeHtml(item.text);
    return `<article class="saved-item"><strong>${safeCategory}</strong><p>${safeText}</p></article>`;
  }).join("");
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function saveSaved() {
  try {
    localStorage.setItem("love-loop-saved", JSON.stringify(state.saved));
  } catch {
    // Saved questions still work in memory when browser storage is unavailable.
  }
}

function loadSaved() {
  try {
    const saved = JSON.parse(localStorage.getItem("love-loop-saved") || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function setActiveButton(container, attribute, value) {
  container.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset[attribute] === value);
  });
}

function isNextKey(event) {
  return event.key === "ArrowRight"
    || event.key === "Enter"
    || event.key === " "
    || event.key === "Spacebar"
    || event.code === "Space";
}

function triggerVisualPulse() {
  state.visualPulse = 1.2;
}

function animateQuestionCard() {
  if (!els.questionCard || typeof requestAnimationFrame !== "function") {
    return;
  }

  els.questionCard.classList.remove("is-changing");
  requestAnimationFrame(() => {
    els.questionCard.classList.add("is-changing");
    if (typeof window !== "undefined" && typeof window.setTimeout === "function") {
      window.setTimeout(() => els.questionCard.classList.remove("is-changing"), 280);
    }
  });
}

function startVisualizer() {
  const canvas = els.visualizer;
  if (!canvas || typeof canvas.getContext !== "function" || typeof window === "undefined") {
    return;
  }

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return;
  }

  const palette = ["#ff6b5c", "#20e8c1", "#4cc9f0", "#ffd166", "#b574ff"];
  const prefersReducedMotion = typeof window.matchMedia === "function"
    && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isCoarsePointer = typeof window.matchMedia === "function"
    && window.matchMedia("(pointer: coarse)").matches;
  const layerCount = isCoarsePointer ? 10 : 18;
  const ribbonCount = isCoarsePointer ? 4 : 7;
  const tunnelCount = isCoarsePointer ? 20 : 34;
  const spiralArms = isCoarsePointer ? 5 : 8;
  const targetFrameMs = isCoarsePointer ? 1000 / 30 : 1000 / 60;
  let width = 0;
  let height = 0;
  let dpr = 1;
  let lastFrameTime = 0;
  let running = false;

  function resize() {
    const dprCap = isCoarsePointer ? 1.35 : 2;
    dpr = Math.min(window.devicePixelRatio || 1, dprCap);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function drawFrame(time) {
    const t = time * 0.001;
    const centerX = width * 0.54 + Math.sin(t * 0.4) * width * 0.04;
    const centerY = height * 0.5 + Math.cos(t * 0.33) * height * 0.05;
    const baseRadius = Math.min(width, height) * 0.12;
    const maxRadius = Math.hypot(width, height) * 0.62;
    const pulse = state.visualPulse;

    ctx.clearRect(0, 0, width, height);
    ctx.globalCompositeOperation = "lighter";

    for (let ring = 0; ring < tunnelCount; ring += 1) {
      const progress = (ring / tunnelCount + (t * 0.055) % 1) % 1;
      const radius = 18 + progress * maxRadius;
      const twist = t * 0.65 + ring * 0.21 + pulse * 0.38;
      const sides = 42;

      ctx.beginPath();
      for (let point = 0; point <= sides; point += 1) {
        const angle = (Math.PI * 2 * point) / sides + twist;
        const ripple = Math.sin(point * 0.9 + t * 2.4 + ring) * (6 + pulse * 18);
        const pinch = 1 + Math.sin(angle * 3 + t * 1.8) * 0.045;
        const x = centerX + Math.cos(angle) * (radius * pinch + ripple);
        const y = centerY + Math.sin(angle) * (radius / (1.22 + Math.sin(t * 0.4) * 0.08) + ripple);

        if (point === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.strokeStyle = `hsl(${(ring * 18 + t * 90) % 360} 96% 64%)`;
      ctx.globalAlpha = (1 - progress) * (0.13 + pulse * 0.04);
      ctx.lineWidth = 0.9 + (1 - progress) * 2.2 + pulse * 1.4;
      ctx.stroke();
    }

    for (let arm = 0; arm < spiralArms; arm += 1) {
      ctx.beginPath();
      for (let step = 0; step < 150; step += 1) {
        const progress = step / 149;
        const radius = 14 + progress * maxRadius * 0.72;
        const angle = arm * ((Math.PI * 2) / spiralArms)
          + progress * 12.5
          - t * (0.82 + arm * 0.035)
          + Math.sin(progress * 8 + t * 1.3) * 0.18;
        const wobble = Math.sin(step * 0.23 + t * 3 + arm) * (5 + pulse * 10);
        const x = centerX + Math.cos(angle) * (radius + wobble);
        const y = centerY + Math.sin(angle) * (radius * 0.74 + wobble);

        if (step === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.strokeStyle = palette[arm % palette.length];
      ctx.globalAlpha = 0.08 + pulse * 0.035;
      ctx.lineWidth = 1.1 + pulse * 1.6;
      ctx.stroke();
    }

    for (let layer = 0; layer < layerCount; layer += 1) {
      const sides = 5 + (layer % 5);
      const radius = baseRadius + layer * Math.min(width, height) * 0.034 + pulse * 22;
      const rotation = t * (layer % 2 === 0 ? 0.28 : -0.22) + layer * 0.18;

      ctx.beginPath();
      for (let point = 0; point <= sides; point += 1) {
        const angle = rotation + (Math.PI * 2 * point) / sides + Math.sin(t * 0.8 + layer) * 0.05;
        const wave = Math.sin(t * 2.1 + point * 1.7 + layer) * (8 + pulse * 12);
        const x = centerX + Math.cos(angle) * (radius + wave);
        const y = centerY + Math.sin(angle) * (radius + wave);

        if (point === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.strokeStyle = palette[layer % palette.length];
      ctx.globalAlpha = 0.08 + pulse * 0.035;
      ctx.lineWidth = 1.2 + (layer % 3) * 0.55 + pulse * 1.5;
      ctx.stroke();
    }

    for (let ribbon = 0; ribbon < ribbonCount; ribbon += 1) {
      const color = palette[(ribbon + 2) % palette.length];
      const amplitude = height * (0.045 + ribbon * 0.008) + pulse * 20;
      const baseline = height * (0.18 + ribbon * 0.12);

      ctx.beginPath();
      for (let x = -40; x <= width + 40; x += 18) {
        const y = baseline
          + Math.sin(x * 0.011 + t * (1.1 + ribbon * 0.12) + ribbon) * amplitude
          + Math.cos(x * 0.017 - t * 0.8) * 18;

        if (x === -40) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.strokeStyle = color;
      ctx.globalAlpha = 0.055 + pulse * 0.02;
      ctx.lineWidth = 1.4 + ribbon * 0.25;
      ctx.stroke();
    }

    const scanlineGap = isCoarsePointer ? 34 : 22;
    for (let y = ((t * 36) % scanlineGap) - scanlineGap; y < height + scanlineGap; y += scanlineGap) {
      ctx.beginPath();
      ctx.moveTo(0, y + Math.sin(t * 2 + y * 0.01) * 12);
      ctx.lineTo(width, y + Math.cos(t * 1.7 + y * 0.012) * 12);
      ctx.strokeStyle = `hsl(${(y + t * 120) % 360} 100% 62%)`;
      ctx.globalAlpha = 0.025 + pulse * 0.012;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    ctx.globalCompositeOperation = "source-over";
    ctx.globalAlpha = 1;
    state.visualPulse = Math.max(0, state.visualPulse - 0.018);
  }

  function loop(time) {
    if (!running) {
      return;
    }

    if (document.hidden) {
      running = false;
      return;
    }

    if (time - lastFrameTime >= targetFrameMs) {
      drawFrame(time);
      lastFrameTime = time;
    }

    window.requestAnimationFrame(loop);
  }

  function startLoop() {
    if (running) {
      return;
    }

    running = true;
    lastFrameTime = 0;
    window.requestAnimationFrame(loop);
  }

  resize();
  window.addEventListener("resize", resize);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && !prefersReducedMotion) {
      triggerVisualPulse();
      startLoop();
    }
  });

  if (prefersReducedMotion) {
    drawFrame(0);
    return;
  }

  startLoop();
}

els.nextButton.addEventListener("click", nextQuestion);
els.previousButton.addEventListener("click", previousQuestion);
els.shuffleButton.addEventListener("click", shuffleCurrentDeck);
els.saveButton.addEventListener("click", toggleSaved);
els.clearSavedButton.addEventListener("click", () => {
  state.saved = [];
  saveSaved();
  render();
});

els.categoryFilters.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-filter]");
  if (!button) {
    return;
  }

  state.filter = button.dataset.filter;
  setActiveButton(els.categoryFilters, "filter", state.filter);
  resetRound();
});

els.moodFilters.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-mood]");
  if (!button) {
    return;
  }

  state.mood = button.dataset.mood;
  setActiveButton(els.moodFilters, "mood", state.mood);
  resetRound();
});

[els.playerOne, els.playerTwo].forEach((input) => {
  input.addEventListener("input", render);
});

function isTypingInField() {
  const tagName = document.activeElement?.tagName;
  return tagName === "INPUT" || tagName === "TEXTAREA";
}

function handleGlobalKeydown(event) {
  if (isTypingInField()) {
    return;
  }

  if (isNextKey(event)) {
    event.preventDefault();
    nextQuestion();
  }

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    previousQuestion();
  }

  if (event.key.toLowerCase() === "s") {
    shuffleCurrentDeck();
  }

  if (event.key.toLowerCase() === "f") {
    toggleSaved();
  }

  const categories = ["All", "Love", "Deep", "Mindbend", "Funny", "Future", "Flirty", "Wildcard"];
  const numericIndex = Number(event.key);
  if (numericIndex >= 1 && numericIndex <= categories.length) {
    state.filter = categories[numericIndex - 1];
    setActiveButton(els.categoryFilters, "filter", state.filter);
    resetRound();
  }
}

function handleGlobalKeyup(event) {
  if (!isTypingInField() && isNextKey(event)) {
    event.preventDefault();
  }
}

function setupTouchControls() {
  if (!els.questionStage || typeof window === "undefined" || !("PointerEvent" in window)) {
    return;
  }

  let startX = 0;
  let startY = 0;
  let startedOnInteractive = false;

  function isInteractiveTarget(target) {
    return Boolean(target?.closest?.("button, input, textarea, select, a"));
  }

  els.questionStage.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse") {
      return;
    }

    startX = event.clientX;
    startY = event.clientY;
    startedOnInteractive = isInteractiveTarget(event.target);
  }, { passive: true });

  els.questionStage.addEventListener("pointerup", (event) => {
    if (event.pointerType === "mouse" || startedOnInteractive) {
      return;
    }

    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;
    const isHorizontalSwipe = Math.abs(deltaX) > 54 && Math.abs(deltaY) < 82;

    if (!isHorizontalSwipe) {
      return;
    }

    if (deltaX < 0) {
      nextQuestion();
    } else {
      previousQuestion();
    }
  }, { passive: true });

  els.questionStage.addEventListener("pointercancel", () => {
    startedOnInteractive = false;
  }, { passive: true });
}

function registerServiceWorker() {
  if (
    typeof window === "undefined"
    || typeof navigator === "undefined"
    || !("serviceWorker" in navigator)
    || window.location.protocol === "file:"
  ) {
    return;
  }

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {
      // The app still works without offline install support.
    });
  });
}

document.addEventListener("keydown", handleGlobalKeydown, true);
document.addEventListener("keyup", handleGlobalKeyup, true);

setupTouchControls();
registerServiceWorker();
resetRound();
startVisualizer();
