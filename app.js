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

rawQuestions.Deep.items = [
  "What is one thing that makes you feel loved?",
  "What is one thing that makes you feel ignored?",
  "What helps you feel calm?",
  "What is one fear you have in love?",
  "What is one thing you need more of from me?",
  "What is one thing you are proud of?",
  "What is one thing you want to get better at?",
  "What makes you feel safe with someone?",
  "What makes you lose trust?",
  "What is a small thing that can hurt your feelings?",
  "What is a small thing that can make your day?",
  "When do you feel most happy with me?",
  "When do you feel most stressed?",
  "What do you need when you are quiet?",
  "What do you need when you are upset?",
  "What is one thing you wish I understood better?",
  "What is one thing you wish people asked you more?",
  "What is one lesson love has taught you?",
  "What is one thing you want to stop overthinking?",
  "What is one thing you want us to talk about more?",
  "What does a good apology sound like to you?",
  "What makes an argument feel less scary?",
  "What is one thing you want us to protect?",
  "What is one thing you never want us to forget?",
  "What makes you feel close to me?",
  "What makes you feel far away from me?",
  "What is one habit you want to leave behind?",
  "What is one habit you want us to build?",
  "What is one way I can support you better?",
  "What is one way you support me that I may not notice?",
  "What is one dream you want to say out loud?",
  "What is one thing you want to be brave about?",
  "What does love feel like when it is healthy?",
  "What is one thing that makes you feel chosen?",
  "What should we do when one of us has a bad day?"
];

const extraQuestionPacks = {
  Love: {
    items: [
      "What is one thing I do that makes your day better?",
      "What is a small thing we do that feels special?",
      "What is your favorite normal moment with me?",
      "What is one thing about me that feels like home?",
      "What is one sweet thing we should do more often?",
      "What is your favorite way to spend one hour with me?",
      "What is one thing I do that makes you feel safe?",
      "What is one cute memory you think about sometimes?",
      "What is one thing you want us to try together?",
      "What is one thing I should know when you are having a bad day?",
      "What is one thing you like about how we are together?",
      "What is a small promise we can keep this week?",
      "What is one thing that makes us feel like a team?",
      "What is one simple date you would love?",
      "What is one message from me that would make you smile?"
    ]
  },
  Deep: {
    items: [
      "What is one thing you wish people understood about you?",
      "What is something that can make you sad fast?",
      "What helps you calm down when life feels too much?",
      "What is a fear you do not talk about a lot?",
      "What is one thing you are proud of surviving?",
      "What do you need when you are quiet?",
      "What is one thing that makes trust hard for you?",
      "What is one way I can make you feel more loved?",
      "What is something you are still learning about yourself?",
      "What is one thing you want to stop worrying about?",
      "What is a hard lesson love has taught you?",
      "What is one old habit you want to change?",
      "When do you feel most like yourself?",
      "What is one thing you want to be braver about?",
      "What kind of apology feels real to you?",
      "What is something small that can hurt your feelings?",
      "What is something small that can fix your mood?",
      "What is one thing you want us to be honest about?",
      "What is one thing that makes you feel chosen?",
      "What do you need more of this month: fun, rest, help, or love?"
    ]
  },
  Funny: {
    items: [
      "If I was a sandwich, what sandwich would I be?",
      "What is my funniest face?",
      "What is one thing I do like I am in a movie?",
      "If our relationship had a theme song, what silly title would it have?",
      "What is the dumbest thing we could argue about?",
      "If I had a warning label, what would it say?",
      "What food has the same energy as me?",
      "What would our couple name be if we were a bad pop band?",
      "What is my most dramatic habit?",
      "What is one thing I say too much?",
      "What would I be famous for if I was famous for something stupid?",
      "If we had a tiny reality show, what would the first episode be called?",
      "What is one thing we should never be trusted to cook?",
      "What animal would judge our relationship the hardest?",
      "What is the funniest fake rumor about us?",
      "What would our couple perfume be called?",
      "If I was a weather forecast, what would today say?",
      "What is one thing I do that deserves background music?",
      "If we opened a restaurant, what would be the worst item on the menu?",
      "What is the funniest thing to whisper in a serious moment?",
      "What would our couple handshake look like?",
      "If my phone could talk, what would it complain about?",
      "What would be my superhero power if it had to be useless?",
      "What is one silly rule we should make for tonight?",
      "Who would win in a staring contest: me, you, or a potato?",
      "What is one thing I do like a cartoon character?",
      "What would our fake royal titles be?",
      "If our love was a snack, what snack would it be?",
      "What is the worst romantic gift you can imagine?",
      "What would our neighbors think if they heard our dumbest conversation?",
      "What is a terrible date idea that still sounds funny?",
      "If I was a kitchen object, what would I be?",
      "What would our couple motto be if it had to be stupid?",
      "What is one thing I should be banned from doing?",
      "What is my funniest serious opinion?",
      "What would our relationship be called as a video game?",
      "What tiny problem makes me act dramatic?",
      "If we had a pet rock, what would we name it?",
      "What is the weirdest compliment you can give me?",
      "What would be our emergency escape word at a boring party?"
    ]
  },
  Future: {
    items: [
      "What future problem should we learn to handle calmly?",
      "What would a peaceful life together look like?",
      "What should future us never give up?",
      "If our future home had one rule written on the wall, what would it say?",
      "What kind of freedom do you want us to build together?",
      "What is one dream trip we should actually plan?",
      "What boring routine could become cute if we did it together?",
      "What could make us forget to act like a team?",
      "What do you want us to get really good at together?",
      "What should we start now so future us says thank you?"
    ]
  },
  Flirty: {
    items: [
      "What is attractive about me besides my looks?",
      "What do I do that makes you want to sit closer?",
      "What is one sentence from me that would stay in your head all night?",
      "What makes you want a hug from me?",
      "What is your favorite version of me?",
      "What is a look I give you that should probably have a warning label?",
      "What normal thing do I do that is secretly cute?",
      "What kind of confidence looks good on me?",
      "What is one thing about me that you keep liking more?",
      "What would make tonight feel extra romantic?"
    ]
  },
  Wildcard: {
    items: [
      "If your brain had a homepage, what would be on it?",
      "What is one thing you know is silly but still believe a little?",
      "If your gut feeling had a voice, what would it say today?",
      "What is a dream you had that was really weird?",
      "What is a personality trait you pretend not to have?",
      "If your life had a replay button, what moment would you press?",
      "What score are you keeping in your head for no reason?",
      "What is one thing you say you hate but secretly like?",
      "If future you sent a warning label, what would it say?",
      "What do you find pretty that other people may not get?",
      "What is one thing you knew before you had proof?",
      "What would your grumpy side order at a restaurant?",
      "What is a harmless delusion that makes life more fun?",
      "What is one weird sign that you are doing better?",
      "What question would make tonight impossible to forget?"
    ]
  },
  Weird: {
    mood: "Deep",
    items: [
      "If we met in another world, where would it be?",
      "If my brain was a room, what would be on the floor?",
      "What would your 3 a.m. self ask me?",
      "What is one weird sign that you like someone?",
      "If our relationship was a dream, what would keep showing up?",
      "What would your younger self think about me?",
      "If we swapped minds for one hour, what would surprise you?",
      "What is a strange thing that makes you feel loved?",
      "If your heart could send one text, what would it say?",
      "What secret rule do you have for trusting people?",
      "If our love was a game, what would the hard level be?",
      "What is something you feel but cannot explain well?",
      "If my fear could talk, what would it say?",
      "What tiny thing tells you someone really cares?",
      "What question feels scary but interesting?",
      "If we had a magic button, what should it fix?",
      "What is one thing about us that feels oddly lucky?",
      "If your mood was a color right now, what color is it?",
      "What would we do if tonight was a dream?",
      "What is a silly sign from the universe we should watch for?",
      "If our couple energy was a movie, what genre is it?",
      "What is one thing you pretend is random but actually matters?",
      "What would our secret mission be?",
      "If we had to hide a message for future us, what would it say?",
      "What is one weird question you want to ask me?"
    ]
  }
};

const partyQuestionPacks = {
  Cash: {
    mood: "Light",
    items: [
      "For $50, would you let me pick your profile picture for one day?",
      "For $100, would you send your last selfie to a random friend with no context?",
      "For $250, would you let me choose your outfit for our next date?",
      "For $500, would you eat the same dinner every day for a month?",
      "For $1,000, would you let me post a caption on your story?",
      "For $2,000, would you let your mom read your last five emojis?",
      "For $5,000, would you let your dad choose your haircut style for a week?",
      "For $10,000, would you delete your favorite app for one year?",
      "For $25,000, would you wear a shirt that says 'I miss my ex' for one full day?",
      "For $50,000, would you let me plan your whole birthday with zero hints?",
      "For $100,000, would you live without music for one year?",
      "For $1,000,000, would you move to a random country with me for one year?",
      "How much money would it take for you to let me rename your phone?",
      "How much money would it take for you to give up pizza for life?",
      "How much money would it take for you to let me read one random note in your notes app?",
      "For $750, would you let me write your next three texts to your best friend?",
      "For $3,000, would you go to dinner wearing whatever I choose?",
      "For $8,000, would you let me choose your ringtone for six months?",
      "For $15,000, would you let your family see your screen time report?",
      "For $30,000, would you only speak in questions for one whole day?",
      "For $60,000, would you let me pick your first tattoo idea, but not actually get it?",
      "For $100, would you call a friend and say 'I have joined the potato business'?",
      "For $10,000, would you let me control your playlist for a year?",
      "For $20,000, would you swap phones with me for one hour, with permission?",
      "For $100,000, would you let your search history be read out loud by a robot voice?"
    ]
  },
  Choices: {
    mood: "Bold",
    items: [
      "Would you rather tell your mom your most embarrassing crush or let your dad pick your date outfit?",
      "Would you rather lose your phone for a week or let me rename every contact in it?",
      "Would you rather have to sing every apology or dance every time you say sorry?",
      "Would you rather be rich but always slightly bored, or broke but laughing every day?",
      "Would you rather I read your mind once a month or your phone autocorrect for one day?",
      "Would you rather be famous for a bad dance or for a weird laugh?",
      "Would you rather eat dinner with all your exes or all my exes?",
      "Would you rather have your parents read your last message to me or hear your last voice note?",
      "Would you rather never lie again or never know when someone lies to you?",
      "Would you rather have to wear matching outfits with me every weekend or let me pick your hairstyle?",
      "Would you rather have a pause button for arguments or a rewind button for awkward moments?",
      "Would you rather say every thought out loud for one hour or have no filter in your texts for one day?",
      "Would you rather go viral for being romantic or for being extremely cringe?",
      "Would you rather lose every game to me forever or admit I am funnier for a year?",
      "Would you rather have to ask my permission before buying snacks or let me choose all snacks forever?",
      "Would you rather get $10,000 now or one perfect date every month for five years?",
      "Would you rather be able to see my dreams or let me see yours?",
      "Would you rather always know when I miss you or never know when I am jealous?",
      "Would you rather have a couple tattoo for a week or matching pajamas forever?",
      "Would you rather tell one huge truth or answer five tiny awkward questions?"
    ]
  },
  Dares: {
    mood: "Bold",
    items: [
      "Dare: give me your most dramatic love confession in a movie voice.",
      "Dare: let me choose one photo pose and take it right now.",
      "Dare: send a friend only three emojis and let me pick them.",
      "Dare: do your best fake proposal in ten seconds.",
      "Dare: let me write a harmless fake dating-app bio for you.",
      "Dare: show the weirdest safe photo in your camera roll.",
      "Dare: make a fake apology to a spoon like it broke your heart.",
      "Dare: give me a compliment that sounds like a threat but is still nice.",
      "Dare: perform a five-second runway walk across the room.",
      "Dare: explain why you are the best snack in the room.",
      "Dare: say 'I was wrong' in the most dramatic way possible.",
      "Dare: let me choose one word you cannot say for three questions.",
      "Dare: make the worst romantic poem you can in 20 seconds.",
      "Dare: do a serious speech about why potatoes deserve respect.",
      "Dare: invent a secret handshake in 15 seconds.",
      "Dare: make your best jealous face.",
      "Dare: give me a compliment using the word banana.",
      "Dare: pretend you are accepting an award for being difficult but cute.",
      "Dare: make a fake voicemail to your future self."
    ]
  },
  Chaos: {
    mood: "Light",
    items: [
      "What is the most chaotic thing we could do tonight that is still harmless?",
      "What secret should our couple government hide from the people?",
      "If I was arrested for being too dramatic, what would the evidence be?",
      "What is one thing I do that feels illegal but is actually normal?",
      "What would our scandal be if we were tiny celebrities?",
      "If our relationship had a fight scene, what object would start it?",
      "What is one rule we should break only in our imagination?",
      "What would you name our fake crime podcast?",
      "If we had to start a cult around one snack, what snack wins?",
      "What is the most cursed date idea that might still be fun?",
      "If one of us had to wear a cape for a month, who deserves it?",
      "What is the worst advice we could give another couple?",
      "What would our emergency plan be during a boring dinner?",
      "If we had a secret enemy, what tiny thing would they do to annoy us?",
      "What is the funniest way to say 'I love you' without saying it?",
      "If your family had to rate me on one weird skill, what skill should I show?",
      "What is one thing I should never say in a serious meeting?",
      "What would our fake breakup reason be if it had to be stupid?",
      "What is the most dramatic way to ask for a snack?",
      "What would happen if we had to swap personalities at a party?",
      "What is one harmless thing that would make you immediately suspicious?",
      "What would be our couple villain origin story?",
      "If we were stuck in an elevator for an hour, what would get weird first?",
      "What is the funniest lie we could tell strangers about how we met?",
      "What is one question that would make both of us laugh and panic?"
    ]
  }
};

const extraDaresEn = [
  "Dare: call me like you are breaking very serious news about a missing sock.",
  "Dare: do a 10-second slow-motion entrance into the room.",
  "Dare: let me choose one harmless emoji you must send to a friend.",
  "Dare: make a fake perfume ad for yourself.",
  "Dare: give a speech about why you deserve a snack right now.",
  "Dare: do your most dramatic fake cry for five seconds.",
  "Dare: pose like you are on the cover of a terrible romance novel.",
  "Dare: make a fake apology to your phone for using it too much.",
  "Dare: sell me an invisible product like your life depends on it.",
  "Dare: do a serious interview with a pillow.",
  "Dare: make the worst pickup line you can.",
  "Dare: say three compliments about me as fast as possible.",
  "Dare: make a fake trailer voice for our relationship.",
  "Dare: recreate your most dramatic walk.",
  "Dare: let me choose a harmless pose for your lock screen photo.",
  "Dare: do a fake cooking show using no food.",
  "Dare: give me your best villain laugh.",
  "Dare: explain our relationship like a sports commentator.",
  "Dare: make a fake news headline about us.",
  "Dare: do a 10-second dance with only your shoulders.",
  "Dare: try to make me laugh without touching me.",
  "Dare: tell a fake secret in the most suspicious voice.",
  "Dare: act like you just won an award for being cute but annoying.",
  "Dare: make a commercial for your worst habit.",
  "Dare: do your best rich-person laugh.",
  "Dare: make a fake customer review of me.",
  "Dare: stare at me for seven seconds without laughing.",
  "Dare: say one sentence like you are in a soap opera.",
  "Dare: make up a couple law we both must obey tonight.",
  "Dare: do a fake runway pose using something nearby.",
  "Dare: describe me like I am a menu item.",
  "Dare: give a dramatic toast to the room.",
  "Dare: make a fake weather report about your mood.",
  "Dare: let me choose one safe photo from tonight to keep.",
  "Dare: explain why you would survive a zombie date night.",
  "Dare: make a fake voice note to your future self.",
  "Dare: do the most awkward wink possible.",
  "Dare: say 'I am innocent' like you are obviously guilty.",
  "Dare: make up a handshake using exactly three moves.",
  "Dare: give me a compliment using the word spaghetti.",
  "Dare: pretend the floor is lava for five seconds.",
  "Dare: make your most serious face while saying something dumb.",
  "Dare: act like a bodyguard protecting the snacks.",
  "Dare: make a fake dating rule that sounds official.",
  "Dare: give me a one-line poem about my face.",
  "Dare: do an evil plan speech about stealing the blanket.",
  "Dare: let me ask one yes-or-no question you must answer fast.",
  "Dare: say your favorite thing about me in a whisper.",
  "Dare: make a dramatic speech about why you need attention.",
  "Dare: show your best fake shocked face.",
  "Dare: pretend you are a judge deciding who is cuter.",
  "Dare: describe our love story in five words.",
  "Dare: do a fake phone call with your future rich self.",
  "Dare: make the ugliest romantic face you can.",
  "Dare: tell me one tiny truth while looking serious.",
  "Dare: act like you are selling tickets to our first date.",
  "Dare: make a fake warning label for yourself.",
  "Dare: do a dramatic hair flip, real or imaginary.",
  "Dare: explain why you are the main character for 10 seconds.",
  "Dare: make a fake recipe for a perfect relationship.",
  "Dare: say 'I missed you' in three different moods.",
  "Dare: pick an object nearby and flirt with it badly.",
  "Dare: do your best secret-agent voice.",
  "Dare: give me a fake apology for being too attractive.",
  "Dare: make up a tiny dance move and name it.",
  "Dare: tell me a harmless confession in a dramatic voice.",
  "Dare: pretend you are stuck in a romantic music video.",
  "Dare: say one nice thing about yourself without smiling.",
  "Dare: make a fake breakup speech to your favorite snack.",
  "Dare: let me choose one word you must say in a sentence now.",
  "Dare: do a fake podcast intro about us.",
  "Dare: give a serious review of my laugh.",
  "Dare: act like you are meeting me for the first time again.",
  "Dare: make up a cheesy couple slogan.",
  "Dare: do a five-second victory dance.",
  "Dare: say one sentence like you are hiding a secret.",
  "Dare: explain why your side of the bed is better.",
  "Dare: make a dramatic promise about snacks.",
  "Dare: pretend you are a tour guide for this room.",
  "Dare: give me your best fake jealous line.",
  "Dare: describe yourself as a luxury product.",
  "Dare: do a silent movie reaction to seeing me.",
  "Dare: make one harmless rule for the rest of this round.",
  "Dare: say the most romantic thing you can in exactly five words.",
  "Dare: do your best bad magic trick with no props.",
  "Dare: make a fake text you would send if you missed me badly.",
  "Dare: pick a theme song for me and hum two seconds of it.",
  "Dare: give me an honest rating for my date energy tonight.",
  "Dare: act like you are presenting me to a royal court.",
  "Dare: say something sweet like you are very embarrassed.",
  "Dare: pretend the blanket is a celebrity and interview it.",
  "Dare: make a fake motivational speech for our relationship."
];

partyQuestionPacks.Dares.items = [
  ...partyQuestionPacks.Dares.items,
  ...extraDaresEn
];

const extraChoicesEn = [
  "Would you rather get $5,000 today or one free date night every week for a year?",
  "Would you rather let me pick your next tattoo design or your next haircut idea, without actually doing it?",
  "Would you rather have to laugh at every bad joke or cry at every cute video?",
  "Would you rather your phone read your texts out loud or your face show every thought?",
  "Would you rather be unable to say 'no' to snacks or unable to say 'yes' to plans?",
  "Would you rather have your family hear your couple voice or your friends see your baby photos?",
  "Would you rather wear one terrible outfit for a week or smell like fries for a month?",
  "Would you rather get $1,000 for every awkward silence or lose $10 every time you overthink?",
  "Would you rather have to wink after every compliment or salute after every apology?",
  "Would you rather go on a fancy date with no phones or a cheap date with unlimited snacks?",
  "Would you rather know every time I think you look cute or every time I think you are annoying?",
  "Would you rather share a toothbrush for one emergency night or wear wet socks for one full day?",
  "Would you rather always be 10 minutes early or always arrive with a dramatic entrance?",
  "Would you rather have me choose your playlist or your dessert forever?",
  "Would you rather fight one tiny argument every day or one big silly argument once a month?",
  "Would you rather have to say 'my love' before every request or end every text with 'boss'?",
  "Would you rather live in a tiny beach house or a huge boring mansion?",
  "Would you rather have your search history shown to me or your drafts folder shown to me?",
  "Would you rather be able to teleport to me once a week or pause time for one date?",
  "Would you rather only be able to flirt badly or only be able to flirt in poetry?",
  "Would you rather your parents plan our date or strangers vote on our outfits?",
  "Would you rather never get jealous but never get butterflies, or get both very easily?",
  "Would you rather have to send a voice note for every text or only use emojis for one day?",
  "Would you rather win every debate but lose every board game, or the opposite?",
  "Would you rather have a truth button or a mute button for arguments?",
  "Would you rather have every kiss interrupted by applause or every hug scored by judges?",
  "Would you rather spend $10,000 on travel or $10,000 making the perfect home?",
  "Would you rather have to wear matching shoes or matching sunglasses every weekend?",
  "Would you rather be stuck in a lift with me for two hours or on a silent retreat with me for two days?",
  "Would you rather know my exact first impression of you or my exact favorite memory of you?",
  "Would you rather have to cook for me blindfolded or let me cook with no recipe?",
  "Would you rather answer one brutal question or do three embarrassing dares?",
  "Would you rather have a shared bank account for snacks only or a shared calendar for romance only?",
  "Would you rather be famous as a perfect couple or secretly be the funniest couple alive?",
  "Would you rather have to say yes to one safe dare or answer one spicy question?",
  "Would you rather give up takeout or give up watching shows together?",
  "Would you rather have one amazing long hug every day or ten tiny kisses every day?",
  "Would you rather your laugh be louder or your texts be more dramatic?",
  "Would you rather go camping with no internet or hotel with no snacks?",
  "Would you rather I pick your outfit for family dinner or your caption for a post?",
  "Would you rather have to tell me every crush you ever had or every lie you told as a kid?",
  "Would you rather get caught stalking my old photos or caught practicing a cute text?",
  "Would you rather do karaoke in front of strangers or slow dance in front of friends?",
  "Would you rather be unable to hide when you miss me or unable to hide when you are hungry?",
  "Would you rather have $50,000 but no cuddles for a year, or normal life with unlimited cuddles?",
  "Would you rather let me choose your phone wallpaper or your morning alarm sound?",
  "Would you rather relive our first date or see a preview of our next best date?",
  "Would you rather always know what I want to eat or always know what mood I am in?",
  "Would you rather be called cute in public or hot in private?",
  "Would you rather do one bold romantic thing now or one funny dare now?"
];

partyQuestionPacks.Choices.items.push(...extraChoicesEn);

Object.entries({ ...extraQuestionPacks, ...partyQuestionPacks }).forEach(([category, pack]) => {
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
  Relationship: [
    "Bonus: answer with one real example from us.",
    "Bonus: say what you would need from me in that moment.",
    "Bonus: turn the answer into one small agreement."
  ],
  Deep: [
    "Bonus: give a short example.",
    "Bonus: say one feeling and one reason.",
    "Bonus: answer in simple words."
  ],
  Weird: [
    "Bonus: make the answer funny if you can.",
    "Bonus: say the first weird answer that comes to mind.",
    "Bonus: ask one silly follow-up."
  ],
  Cash: [
    "Bonus: name the lowest amount you would accept.",
    "Bonus: say if you would really do it.",
    "Bonus: raise or lower the money by one step."
  ],
  Choices: [
    "Bonus: answer fast, no overthinking.",
    "Bonus: explain why in one sentence.",
    "Bonus: make the other option even worse."
  ],
  Impossible: [
    "Bonus: choose first, then explain what broke your brain.",
    "Bonus: say what would make you change your answer.",
    "Bonus: both players guess each other's answer before explaining."
  ],
  Dares: [
    "Bonus: do it now or trade one saved question.",
    "Bonus: make it extra dramatic.",
    "Bonus: the other player can add one harmless rule."
  ],
  Chaos: [
    "Bonus: give the normal answer and the chaotic answer.",
    "Bonus: make it sound like breaking news.",
    "Bonus: both players vote on who would do it first."
  ],
  Funny: [
    "Bonus: give the real answer, then the dumb answer.",
    "Bonus: act out the answer for five seconds.",
    "Bonus: say it like a dramatic movie voice."
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
    "a talking mirror",
    "a magic button",
    "a tiny spaceship",
    "a dream phone",
    "a secret door",
    "a weird hat",
    "a tiny dragon",
    "a mystery snack"
  ],
  hiddenForces: [
    "a bad mood",
    "a silly fear",
    "too much pride",
    "a tiny jealousy",
    "a big crush",
    "a lazy Sunday mood",
    "a weird dream",
    "a snack craving"
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
  Weird: [
    () => `If our relationship had ${pick(generatedParts.strangeSymbols)}, what would happen?`,
    () => `What would ${pick(generatedParts.strangeSymbols)} say about us?`,
    () => `If ${pick(generatedParts.hiddenForces)} joined our date, what would go wrong?`
  ],
  Cash: [
    () => `For $${pick(["100", "500", "1,000", "5,000", "10,000", "50,000"])}, would you let me pick your outfit for a whole week?`,
    () => `For $${pick(["250", "750", "2,000", "8,000", "25,000"])}, would you let me post one harmless story from your phone?`,
    () => `How much money would it take for you to give up ${pick(["pizza", "music", "coffee", "your favorite app", "sweets"])} for a year?`
  ],
  Choices: [
    () => `Would you rather let me read your last ${pick(["3", "5", "10"])} emojis or let your mom choose your next outfit?`,
    () => `Would you rather get $${pick(["1,000", "10,000", "100,000"])} or have one perfect date every month?`,
    () => `Would you rather say every thought out loud for ${pick(["10 minutes", "one hour", "one whole day"])} or let me answer your texts for five minutes?`
  ],
  Dares: [
    () => `Dare: make a fake speech about why ${pick(generatedParts.sillyObjects)} is romantic.`,
    () => `Dare: act like ${pick(["a game show host", "a rich villain", "a dramatic lawyer", "a secret agent"])} for ten seconds.`,
    () => `Dare: sell me ${pick(generatedParts.sillyObjects)} like it is a luxury product.`,
    () => `Dare: make a fake apology to ${pick(generatedParts.sillyObjects)}.`,
    () => `Dare: do a five-second dance about ${pick(generatedParts.hiddenForces)}.`,
    () => `Dare: give a serious news report about ${pick(generatedParts.timeWindows)}.`,
    () => `Dare: make a tiny love poem about ${pick(generatedParts.sillyObjects)}.`,
    () => `Dare: explain why ${pick(generatedParts.places)} should hire us as a couple.`,
    () => `Dare: say one sweet thing in the most dramatic voice you can.`,
    () => `Dare: make a fake warning label for yourself in one sentence.`
  ],
  Chaos: [
    () => `What is the most chaotic thing we could do with ${pick(generatedParts.sillyObjects)} and still be fine?`,
    () => `If our relationship had a fake scandal at ${pick(generatedParts.places)}, what would it be?`,
    () => `What would our couple villain origin story be during ${pick(generatedParts.timeWindows)}?`
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

const generatedPartsNl = {
  tinyActions: [
    "een lief briefje",
    "een snack als verrassing",
    "een wandeling van tien minuten",
    "een random compliment",
    "een goedemorgenbericht",
    "een rustige knuffel",
    "een playlist samen",
    "een lui ontbijt"
  ],
  timeWindows: [
    "vanavond",
    "dit weekend",
    "op een regenachtige dag",
    "op onze volgende date",
    "op een random dinsdag",
    "tijdens een lange rit",
    "op een rustige ochtend"
  ],
  sillyObjects: [
    "een kapotte paraplu",
    "een lepel",
    "een kleine koffer",
    "een dramatische hoed",
    "een mysterieuze sleutel",
    "een nep snor",
    "een verdachte boterham",
    "een enkele kaars"
  ],
  places: [
    "een rustig huisje",
    "een druk vliegveld",
    "een klein cafe",
    "een dak in de stad",
    "het strand in de avond",
    "de keuken om middernacht",
    "een boekenwinkel",
    "een treinstation"
  ],
  feelings: [
    "veilig",
    "gewild",
    "gekozen",
    "dapper",
    "begrepen",
    "speels",
    "rustig",
    "blij"
  ],
  strangeSymbols: [
    "een pratende spiegel",
    "een magische knop",
    "een klein ruimteschip",
    "een droomtelefoon",
    "een geheime deur",
    "een rare hoed",
    "een mini draak",
    "een mysterieuze snack"
  ],
  hiddenForces: [
    "een slechte bui",
    "een rare angst",
    "te veel trots",
    "een beetje jaloezie",
    "een grote crush",
    "een luie-zondag-sfeer",
    "een rare droom",
    "trek in snacks"
  ],
  lifeChapters: [
    "ergens anders wonen",
    "minder vrije tijd hebben",
    "een grote droom volgen",
    "even ver uit elkaar zijn",
    "samen geld sparen",
    "nieuwe mensen leren kennen",
    "een routine bouwen",
    "familiedruk"
  ]
};

const generatedTemplatesNl = {
  Love: [
    () => `Welke ${pick(generatedPartsNl.tinyActions)} zou ${pick(generatedPartsNl.timeWindows)} romantischer maken?`,
    () => `Wanneer laat ik jou je het meest ${pick(generatedPartsNl.feelings)} voelen?`,
    () => `Welke lieve traditie zouden wij kunnen hebben in ${pick(generatedPartsNl.places)}?`
  ],
  Deep: [
    () => `Wat zou je van mij nodig hebben tijdens ${pick(generatedPartsNl.lifeChapters)}?`,
    () => `Wat helpt jou om je ${pick(generatedPartsNl.feelings)} te voelen?`,
    () => `Wat wordt moeilijker voor jou tijdens ${pick(generatedPartsNl.timeWindows)}?`
  ],
  Weird: [
    () => `Als onze relatie ${pick(generatedPartsNl.strangeSymbols)} had, wat zou er gebeuren?`,
    () => `Wat zou ${pick(generatedPartsNl.strangeSymbols)} over ons zeggen?`,
    () => `Als ${pick(generatedPartsNl.hiddenForces)} op onze date kwam, wat zou er misgaan?`
  ],
  Cash: [
    () => `Voor ${pick(["100", "500", "1.000", "5.000", "10.000", "50.000"])} euro: zou je mij je outfit laten kiezen voor een week?`,
    () => `Voor ${pick(["250", "750", "2.000", "8.000", "25.000"])} euro: zou je mij een onschuldige story laten posten vanaf jouw telefoon?`,
    () => `Hoeveel geld moet je krijgen om een jaar te stoppen met ${pick(["pizza", "muziek", "koffie", "je favoriete app", "snoep"])}?`
  ],
  Choices: [
    () => `Wat kies je: ik lees je laatste ${pick(["3", "5", "10"])} emojis, of je moeder kiest je volgende outfit?`,
    () => `Wat kies je: ${pick(["1.000", "10.000", "100.000"])} euro, of elke maand een perfecte date?`,
    () => `Wat kies je: ${pick(["10 minuten", "een uur", "een hele dag"])} alles hardop zeggen, of ik antwoord vijf minuten op je appjes?`
  ],
  Dares: [
    () => `Dare: geef een nep-speech over waarom ${pick(generatedPartsNl.sillyObjects)} romantisch is.`,
    () => `Dare: doe tien seconden alsof je ${pick(["een spelshowhost", "een rijke slechterik", "een dramatische advocaat", "een geheim agent"])} bent.`,
    () => `Dare: verkoop mij ${pick(generatedPartsNl.sillyObjects)} alsof het een luxe product is.`,
    () => `Dare: bied je excuses aan aan ${pick(generatedPartsNl.sillyObjects)}.`,
    () => `Dare: doe een dans van vijf seconden over ${pick(generatedPartsNl.hiddenForces)}.`,
    () => `Dare: geef een serieus nieuwsbericht over ${pick(generatedPartsNl.timeWindows)}.`,
    () => `Dare: maak een klein liefdesgedicht over ${pick(generatedPartsNl.sillyObjects)}.`,
    () => `Dare: leg uit waarom ${pick(generatedPartsNl.places)} ons als koppel moet inhuren.`,
    () => `Dare: zeg iets liefs met je meest dramatische stem.`,
    () => `Dare: maak in een zin een waarschuwingslabel voor jezelf.`
  ],
  Chaos: [
    () => `Wat is het meest chaotische dat wij kunnen doen met ${pick(generatedPartsNl.sillyObjects)} zonder problemen?`,
    () => `Als wij een nep-schandaal hadden in ${pick(generatedPartsNl.places)}, wat was het?`,
    () => `Wat is ons koppel-villain-verhaal tijdens ${pick(generatedPartsNl.timeWindows)}?`
  ],
  Funny: [
    () => `Hoe zouden wij overleven met alleen ${pick(generatedPartsNl.sillyObjects)}?`,
    () => `Waar zouden wij ruzie over maken met ${pick(generatedPartsNl.sillyObjects)}?`,
    () => `Welke review zou ${pick(generatedPartsNl.places)} over ons schrijven?`
  ],
  Future: [
    () => `Wat hoop je dat wij later onthouden van ${pick(generatedPartsNl.timeWindows)}?`,
    () => `Hoe moeten wij omgaan met ${pick(generatedPartsNl.lifeChapters)} als team?`,
    () => `Welke toekomstige versie van ons past bij ${pick(generatedPartsNl.places)}?`
  ],
  Flirty: [
    () => `Wat zou ${pick(generatedPartsNl.timeWindows)} laten voelen als een geheime date?`,
    () => `Wat kan ik doen in ${pick(generatedPartsNl.places)} waardoor jij moet lachen?`,
    () => `Wat is een aantrekkelijke manier om jou ${pick(generatedPartsNl.feelings)} te laten voelen?`
  ],
  Wildcard: [
    () => `Wat zou jouw levensmotto zijn als ${pick(generatedPartsNl.sillyObjects)} erin moest zitten?`,
    () => `Wat is het meest chaotische dat wij kunnen doen in ${pick(generatedPartsNl.places)}?`,
    () => `Wat is jouw sterkste mening over ${pick(generatedPartsNl.timeWindows)}?`
  ]
};

const categoryStyles = {
  Love: { background: "rgba(255, 107, 92, 0.2)", color: "#ffb3a8" },
  Relationship: { background: "rgba(124, 255, 203, 0.18)", color: "#c9ffef" },
  Deep: { background: "rgba(76, 201, 240, 0.18)", color: "#c9f3ff" },
  Weird: { background: "rgba(245, 80, 255, 0.2)", color: "#f8c2ff" },
  Cash: { background: "rgba(84, 255, 140, 0.2)", color: "#b9ffd0" },
  Choices: { background: "rgba(255, 89, 180, 0.2)", color: "#ffc0e3" },
  Impossible: { background: "rgba(255, 34, 76, 0.26)", color: "#ffd0d8" },
  Dares: { background: "rgba(255, 140, 0, 0.22)", color: "#ffd4a1" },
  Chaos: { background: "rgba(255, 45, 85, 0.22)", color: "#ffb6c4" },
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

const uiCopy = {
  en: {
    brandSubtitle: "Endless questions for two",
    languageButton: "NL",
    languageTitle: "Vertaal naar Nederlands",
    round: "Round",
    seen: "Seen",
    queued: "Queued",
    players: "Players",
    playerOne: "Player 1",
    playerTwo: "Player 2",
    category: "Category",
    mood: "Mood",
    saved: "Saved",
    clear: "Clear",
    next: "Next",
    space: "Space",
    emptySaved: "No saved questions yet.",
    previousTitle: "Previous question",
    nextTitle: "Next question",
    shuffleTitle: "Shuffle deck",
    saveTitle: "Save question",
    asking: (asker, answerer) => asker.toLowerCase() === "you" ? `You ask ${answerer}` : `${asker} asks ${answerer}`,
    defaultPlayers: ["You", "Girlfriend"],
    filters: {
      All: "All",
      Love: "Love",
      Deep: "Deep",
      Weird: "Weird",
      Cash: "Cash",
      Choices: "Choices",
      Dares: "Dares",
      Chaos: "Chaos",
      Funny: "Jokes",
      Future: "Future",
      Flirty: "Flirty",
      Wildcard: "Wild"
    },
    moods: {
      Any: "Any",
      Light: "Light",
      Deep: "Deep",
      Bold: "Bold"
    }
  },
  nl: {
    brandSubtitle: "Eindeloze vragen voor twee",
    languageButton: "EN",
    languageTitle: "Switch to English",
    round: "Ronde",
    seen: "Gezien",
    queued: "Over",
    players: "Spelers",
    playerOne: "Speler 1",
    playerTwo: "Speler 2",
    category: "Categorie",
    mood: "Sfeer",
    saved: "Bewaard",
    clear: "Leeg",
    next: "Volgende",
    space: "Spatie",
    emptySaved: "Nog geen vragen bewaard.",
    previousTitle: "Vorige vraag",
    nextTitle: "Volgende vraag",
    shuffleTitle: "Schud vragen",
    saveTitle: "Vraag bewaren",
    asking: (asker, answerer) => asker.toLowerCase() === "jij" || asker.toLowerCase() === "you" ? `Jij vraagt ${answerer}` : `${asker} vraagt ${answerer}`,
    defaultPlayers: ["Jij", "Vriendin"],
    filters: {
      All: "Alles",
      Love: "Liefde",
      Deep: "Diep",
      Weird: "Raar",
      Cash: "Cash",
      Choices: "Keuzes",
      Dares: "Dares",
      Chaos: "Chaos",
      Funny: "Grappen",
      Future: "Toekomst",
      Flirty: "Flirty",
      Wildcard: "Wild"
    },
    moods: {
      Any: "Alles",
      Light: "Licht",
      Deep: "Diep",
      Bold: "Gedurfd"
    }
  }
};

const followUpsNl = {
  Love: [
    "Bonus: geef allebei antwoord.",
    "Bonus: noem een klein echt voorbeeld.",
    "Bonus: maak er een mini-plan van voor deze week."
  ],
  Relationship: [
    "Bonus: geef een echt voorbeeld van ons.",
    "Bonus: zeg wat je dan van mij nodig zou hebben.",
    "Bonus: maak er een kleine afspraak van."
  ],
  Deep: [
    "Bonus: geef een kort voorbeeld.",
    "Bonus: zeg een gevoel en een reden.",
    "Bonus: antwoord in simpele woorden."
  ],
  Weird: [
    "Bonus: maak het antwoord grappig als dat kan.",
    "Bonus: zeg het eerste rare antwoord dat in je hoofd komt.",
    "Bonus: stel daarna een domme vervolgvraag."
  ],
  Cash: [
    "Bonus: noem het laagste bedrag waarvoor je het zou doen.",
    "Bonus: zeg eerlijk of je het echt zou doen.",
    "Bonus: maak het bedrag een stap hoger of lager."
  ],
  Choices: [
    "Bonus: antwoord snel, niet te lang nadenken.",
    "Bonus: leg het uit in een zin.",
    "Bonus: maak de andere keuze nog erger."
  ],
  Impossible: [
    "Bonus: kies eerst, leg daarna uit wat je hoofd kapotmaakte.",
    "Bonus: zeg wat jouw antwoord zou veranderen.",
    "Bonus: raad eerst elkaars antwoord voordat je uitlegt."
  ],
  Dares: [
    "Bonus: doe het nu of ruil voor een bewaarde vraag.",
    "Bonus: maak het extra dramatisch.",
    "Bonus: de ander mag een onschuldige regel toevoegen."
  ],
  Chaos: [
    "Bonus: geef het normale antwoord en het chaosantwoord.",
    "Bonus: zeg het alsof het breaking news is.",
    "Bonus: stem samen wie dit als eerste zou doen."
  ],
  Funny: [
    "Bonus: geef het echte antwoord en daarna het domme antwoord.",
    "Bonus: beeld het vijf seconden uit.",
    "Bonus: zeg het met een dramatische filmstem."
  ],
  Future: [
    "Bonus: kies een kleine stap voor deze maand.",
    "Bonus: beschrijf het alsof het een foto is.",
    "Bonus: zeg wat het rustig zou maken."
  ],
  Flirty: [
    "Bonus: antwoord alsof je een geheim briefje schrijft.",
    "Bonus: geef een lief antwoord en een brutaal antwoord.",
    "Bonus: kijk elkaar even aan bij het antwoord."
  ],
  Wildcard: [
    "Bonus: verdedig je antwoord alsof het heel belangrijk is.",
    "Bonus: stel een vervolg dat het nog raarder maakt.",
    "Bonus: geef eerst een antwoord van een woord."
  ]
};

const dutchQuestionDeck = {
  Love: [
    "Wat doe ik waardoor jij je geliefd voelt?",
    "Wat is jouw favoriete kleine moment met mij?",
    "Wanneer voelde jij voor het eerst: ik vind jou echt leuk?",
    "Wat is iets liefs dat wij vaker moeten doen?",
    "Welke date zou jij deze week leuk vinden?",
    "Wat is een compliment van mij dat jij graag hoort?",
    "Wat maakt ons volgens jou een goed team?",
    "Wat is een herinnering met mij die jij nooit wilt vergeten?",
    "Wat is een simpele manier om jou te laten glimlachen?",
    "Wat voelt voor jou als thuiskomen bij mij?",
    "Wat moet ik nooit stoppen met doen?",
    "Wat is een kleine traditie die wij kunnen starten?",
    "Wanneer voel jij je het meest begrepen door mij?",
    "Wat wil je dat ik vaker aan je vraag?",
    "Wat is het meest 'wij' aan ons?"
  ],
  Deep: [
    "Wat maakt jou rustig als je stress hebt?",
    "Wat is iets waar je bang voor bent in liefde?",
    "Wat heb je nodig als je stil wordt?",
    "Wat maakt vertrouwen moeilijk voor jou?",
    "Wat kan ik doen waardoor jij je veiliger voelt?",
    "Wat is iets waar je trots op bent?",
    "Wat wil je minder overdenken?",
    "Wat is een kleine opmerking die jou kan raken?",
    "Wat helpt jou na een slechte dag?",
    "Wanneer voel jij je het meest jezelf?",
    "Wat is een gewoonte die je wilt veranderen?",
    "Wat is een droom die je hardop wilt zeggen?",
    "Wat maakt een sorry echt voor jou?",
    "Waar moeten wij eerlijker over zijn?",
    "Wat betekent gezonde liefde voor jou?"
  ],
  Weird: [
    "Als wij in een droom zaten, wat zou er gebeuren?",
    "Als mijn brein een kamer was, wat lag er op de grond?",
    "Wat zou jouw 3-uur-'s-nachts-versie mij vragen?",
    "Wat is een raar teken dat jij iemand leuk vindt?",
    "Als wij een geheime missie hadden, wat was die?",
    "Welke kleur heeft jouw humeur nu?",
    "Als jouw hart een appje stuurde, wat stond erin?",
    "Wat is een rare manier waarop jij je geliefd voelt?",
    "Als wij een magische knop hadden, wat moest die fixen?",
    "Wat is een vraag die eng maar interessant voelt?",
    "Als onze relatie een film was, welk genre was het?",
    "Wat is een teken van het universum dat wij moeten verzinnen?",
    "Als wij van gedachten wisselden, wat zou jou verrassen?",
    "Wat is iets dat random lijkt maar eigenlijk belangrijk is?",
    "Wat zou future-us aan ons appen?"
  ],
  Cash: [
    "Voor 50 euro: mag ik jouw profielfoto een dag kiezen?",
    "Voor 100 euro: zou je je laatste selfie zonder context naar een vriend sturen?",
    "Voor 250 euro: mag ik je outfit kiezen voor onze volgende date?",
    "Voor 500 euro: zou je een maand lang elke dag hetzelfde eten?",
    "Voor 1.000 euro: mag ik een caption op jouw story zetten?",
    "Voor 2.000 euro: zou je je moeder je laatste vijf emojis laten zien?",
    "Voor 5.000 euro: mag je vader je kapselstijl voor een week kiezen?",
    "Voor 10.000 euro: verwijder je je favoriete app voor een jaar?",
    "Voor 25.000 euro: draag je een shirt met 'ik mis mijn ex' erop voor een dag?",
    "Voor 50.000 euro: mag ik je hele verjaardag plannen zonder hints?",
    "Voor 100.000 euro: leef je een jaar zonder muziek?",
    "Voor 1.000.000 euro: verhuis je een jaar met mij naar een random land?",
    "Hoeveel geld moet je krijgen zodat ik je telefoon mag hernoemen?",
    "Hoeveel geld moet je krijgen om nooit meer pizza te eten?",
    "Hoeveel geld moet je krijgen zodat ik een random notitie in je notes mag lezen?",
    "Voor 750 euro: mag ik je volgende drie appjes naar je beste vriend schrijven?",
    "Voor 3.000 euro: ga je uit eten in een outfit die ik kies?",
    "Voor 8.000 euro: mag ik je ringtone zes maanden kiezen?",
    "Voor 15.000 euro: mag je familie je schermtijd zien?",
    "Voor 30.000 euro: praat je een hele dag alleen in vragen?"
  ],
  Choices: [
    "Wat kies je: je moeder je meest beschamende crush vertellen, of je vader je date-outfit laten kiezen?",
    "Wat kies je: een week je telefoon kwijt, of ik hernoem al je contacten?",
    "Wat kies je: elke sorry zingen, of dansen elke keer dat je sorry zegt?",
    "Wat kies je: rijk maar vaak verveeld, of arm maar elke dag lachen?",
    "Wat kies je: ik lees eens per maand je gedachten, of ik zie een dag je autocorrect?",
    "Wat kies je: viral gaan door een slechte dans, of door je rare lach?",
    "Wat kies je: eten met al jouw exen, of met al mijn exen?",
    "Wat kies je: je ouders lezen je laatste appje naar mij, of horen je laatste voice note?",
    "Wat kies je: nooit meer liegen, of nooit weten wanneer iemand liegt?",
    "Wat kies je: elk weekend matchende outfits, of ik kies je kapsel?",
    "Wat kies je: een pauzeknop voor ruzies, of een terugspoelknop voor awkward momenten?",
    "Wat kies je: een uur elke gedachte hardop, of een dag geen filter in je appjes?",
    "Wat kies je: bekend staan als romantisch, of extreem cringe?",
    "Wat kies je: altijd verliezen van mij, of een jaar toegeven dat ik grappiger ben?",
    "Wat kies je: 10.000 euro nu, of vijf jaar lang elke maand een perfecte date?"
  ],
  Dares: [
    "Dare: doe je meest dramatische liefdesverklaring met filmstem.",
    "Dare: laat mij een fotopose kiezen en maak die nu.",
    "Dare: stuur een vriend drie emojis die ik kies.",
    "Dare: doe een nep-aanzoek in tien seconden.",
    "Dare: laat mij een onschuldige fake dating-bio voor je maken.",
    "Dare: laat de raarste veilige foto in je filmrol zien.",
    "Dare: bied je excuses aan aan een lepel alsof hij je hart brak.",
    "Dare: geef mij een compliment dat klinkt als een bedreiging maar lief is.",
    "Dare: doe een vijf-seconden catwalk door de kamer.",
    "Dare: leg uit waarom jij de beste snack in de kamer bent.",
    "Dare: zeg 'ik had ongelijk' zo dramatisch mogelijk.",
    "Dare: ik kies een woord dat jij drie vragen niet mag zeggen.",
    "Dare: maak in twintig seconden het slechtste liefdesgedicht.",
    "Dare: geef een serieuze speech over waarom aardappels respect verdienen.",
    "Dare: bedenk een geheime handshake in vijftien seconden.",
    "Dare: doe je beste jaloerse gezicht."
  ],
  Chaos: [
    "Wat is het meest chaotische dat wij vanavond kunnen doen dat nog onschuldig is?",
    "Welk geheim zou onze koppel-regering verbergen?",
    "Als ik gearresteerd werd omdat ik te dramatisch ben, wat was het bewijs?",
    "Wat doe ik dat illegaal voelt maar gewoon normaal is?",
    "Wat zou ons schandaal zijn als wij mini-celebs waren?",
    "Als onze relatie een vechtscene had, welk object startte alles?",
    "Welke regel mogen wij alleen in onze fantasie breken?",
    "Hoe heet onze neppe crime podcast?",
    "Als wij een sekte rond een snack begonnen, welke snack wint?",
    "Wat is de meest vervloekte date die toch leuk kan zijn?",
    "Wie van ons verdient een maand lang een cape?",
    "Wat is het slechtste advies dat wij een ander koppel kunnen geven?",
    "Wat is ons noodplan tijdens een saai diner?",
    "Wat zou een geheime vijand doen om ons expres te irriteren?",
    "Wat is de grappigste manier om 'ik hou van jou' te zeggen zonder het te zeggen?",
    "Welke rare skill moet ik aan je familie laten zien?",
    "Wat moet ik nooit zeggen in een serieuze meeting?",
    "Wat is onze domste fake break-up reden?",
    "Wat is de meest dramatische manier om om een snack te vragen?",
    "Wat gebeurt er als wij op een feestje van persoonlijkheid wisselen?"
  ],
  Funny: [
    "Als ik een broodje was, welk broodje was ik?",
    "Wat is mijn grappigste gezicht?",
    "Wat doe ik alsof ik in een film zit?",
    "Waarover zouden wij de domste ruzie ooit hebben?",
    "Als ik een waarschuwing had, wat stond erop?",
    "Welke snack heeft mijn energie?",
    "Wat is mijn meest dramatische gewoonte?",
    "Wat zeg ik veel te vaak?",
    "Waar zou ik beroemd om worden als het iets doms moest zijn?",
    "Wat is de slechtste romantische cadeau-idee?",
    "Als onze relatie een game was, hoe heette die?",
    "Wat is een vreselijke date die toch grappig klinkt?",
    "Wat zou onze domme koppel-slogan zijn?",
    "Als wij een restaurant hadden, wat was het slechtste gerecht?",
    "Wat is de raarste compliment die je mij kunt geven?",
    "Wat zou onze noodcode zijn op een saai feestje?",
    "Als ik een keukenvoorwerp was, wat was ik?",
    "Wie wint een staarwedstrijd: jij, ik, of een aardappel?",
    "Wat verdient bij ons achtergrondmuziek?",
    "Wat zou onze neppe koninklijke titel zijn?"
  ],
  Future: [
    "Wat wil je ooit samen met mij doen?",
    "Waar moeten wij beter in worden als team?",
    "Hoe ziet een rustig leven samen eruit?",
    "Welke reis moeten wij echt plannen?",
    "Welke kleine gewoonte zou future-us blij maken?",
    "Wat moeten wij nooit opgeven?",
    "Welke traditie moeten wij later nog hebben?",
    "Wat wil je dat wij leren samen?",
    "Hoe ziet een perfecte ochtend samen eruit?",
    "Wat is een droom die wij kunnen delen?",
    "Wat moeten wij vaker vieren?",
    "Wat moeten wij vaker nee tegen zeggen?",
    "Welke plek wil je mij ooit laten zien?",
    "Wat zou ons huis altijd moeten hebben?",
    "Waar wil je dat wij bekend om staan bij vrienden?"
  ],
  Flirty: [
    "Wat vind je aantrekkelijk aan mij naast mijn uiterlijk?",
    "Wat doe ik waardoor jij dichterbij wilt zitten?",
    "Welke blik van mij vind jij gevaarlijk leuk?",
    "Wat is je favoriete knuffel van mij?",
    "Wat is een lieve manier waarop ik je aandacht kan trekken?",
    "Wat moet ik dragen op onze volgende date?",
    "Wat is iets normaals dat ik doe maar jij schattig vindt?",
    "Welke zin van mij zou in je hoofd blijven?",
    "Wat maakt vanavond extra romantisch?",
    "Wat is jouw favoriete versie van mij?",
    "Wat is een klein gebaar dat jou laat smelten?",
    "Wat is een flirterige opdracht voor mij?",
    "Wat wil je dat ik vaker opmerk?",
    "Wat maakt iemand meteen aantrekkelijker?",
    "Wat is een excuus om naast mij te zitten?"
  ],
  Wildcard: [
    "Wat is jouw meest random mening?",
    "Wat is iets kleins dat jouw dag kan redden?",
    "Welke hobby wil je ooit proberen?",
    "Wat is een geluid dat verboden moet worden?",
    "Wat is jouw perfecte snackbord?",
    "Wat is iets waar je onnodig kieskeurig over bent?",
    "Welke film of serie voelt als comfort voor jou?",
    "Wat is een rare angst van jou?",
    "Wat is een compliment dat je nooit vergeet?",
    "Welke simpele luxe maakt jouw leven beter?",
    "Wat is iets dat mensen aan jou onderschatten?",
    "Wat zou jij aan jongere mensen leren over daten?",
    "Wat is een geur die meteen een herinnering geeft?",
    "Waar kun jij te lang over praten?",
    "Wat is een kleine groene vlag van jou?"
  ]
};

dutchQuestionDeck.Dares = [
  "Dare: doe je meest dramatische liefdesverklaring met filmstem.",
  "Dare: laat mij een fotopose kiezen en maak die nu.",
  "Dare: stuur een vriend drie emojis die ik kies.",
  "Dare: doe een nep-aanzoek in tien seconden.",
  "Dare: laat mij een onschuldige fake dating-bio voor je maken.",
  "Dare: laat de raarste veilige foto in je filmrol zien.",
  "Dare: bied je excuses aan aan een lepel alsof hij je hart brak.",
  "Dare: geef mij een compliment dat klinkt als een bedreiging maar lief is.",
  "Dare: doe een vijf-seconden catwalk door de kamer.",
  "Dare: leg uit waarom jij de beste snack in de kamer bent.",
  "Dare: zeg 'ik had ongelijk' zo dramatisch mogelijk.",
  "Dare: ik kies een woord dat jij nu in een zin moet gebruiken.",
  "Dare: maak in twintig seconden het slechtste liefdesgedicht.",
  "Dare: geef een serieuze speech over waarom aardappels respect verdienen.",
  "Dare: bedenk een geheime handshake in vijftien seconden.",
  "Dare: doe je beste jaloerse gezicht.",
  "Dare: bel mij alsof je heel serieus nieuws hebt over een verdwenen sok.",
  "Dare: maak een slow-motion entree van tien seconden.",
  "Dare: maak een nep-parfumreclame voor jezelf.",
  "Dare: geef een speech over waarom jij nu een snack verdient.",
  "Dare: doe vijf seconden je meest dramatische nep-huil.",
  "Dare: poseer alsof je op een slechte romantische boekcover staat.",
  "Dare: bied je telefoon excuses aan omdat je hem te vaak gebruikt.",
  "Dare: verkoop mij een onzichtbaar product alsof je leven ervan afhangt.",
  "Dare: doe een serieus interview met een kussen.",
  "Dare: verzin de slechtste openingszin die je kunt.",
  "Dare: zeg drie complimenten over mij zo snel mogelijk.",
  "Dare: maak een trailerstem voor onze relatie.",
  "Dare: doe je meest dramatische loopje.",
  "Dare: doe een kookshow zonder eten.",
  "Dare: geef je beste slechterikenlach.",
  "Dare: leg onze relatie uit als sportcommentator.",
  "Dare: verzin een nep-nieuwskop over ons.",
  "Dare: dans tien seconden alleen met je schouders.",
  "Dare: probeer mij aan het lachen te maken zonder mij aan te raken.",
  "Dare: vertel een nepgeheim met je meest verdachte stem.",
  "Dare: doe alsof je een prijs wint voor schattig maar irritant zijn.",
  "Dare: maak een reclame voor je slechtste gewoonte.",
  "Dare: doe je beste rijke-mensen-lach.",
  "Dare: maak een nep-klantenreview over mij.",
  "Dare: kijk mij zeven seconden aan zonder te lachen.",
  "Dare: zeg een zin alsof je in een soap zit.",
  "Dare: verzin een koppelwet die wij vanavond moeten volgen.",
  "Dare: doe een runway-pose met iets dat dichtbij ligt.",
  "Dare: beschrijf mij alsof ik op een menu sta.",
  "Dare: breng een dramatische toast uit op de kamer.",
  "Dare: maak een weerbericht over je humeur.",
  "Dare: leg uit waarom jij een zombie-date-night zou overleven.",
  "Dare: maak een nep-voicebericht naar je toekomstige zelf.",
  "Dare: doe de meest ongemakkelijke knipoog ooit.",
  "Dare: zeg 'ik ben onschuldig' alsof je duidelijk schuldig bent.",
  "Dare: maak een handshake met precies drie bewegingen.",
  "Dare: geef mij een compliment met het woord spaghetti.",
  "Dare: doe vijf seconden alsof de vloer lava is.",
  "Dare: trek je meest serieuze gezicht terwijl je iets doms zegt.",
  "Dare: doe alsof je bodyguard bent voor de snacks.",
  "Dare: verzin een datingregel die officieel klinkt.",
  "Dare: geef mij een gedicht van een zin over mijn gezicht.",
  "Dare: geef een kwaadaardige speech over het stelen van de deken.",
  "Dare: ik stel een ja-of-nee-vraag en jij antwoordt meteen.",
  "Dare: zeg fluisterend wat je leuk aan mij vindt.",
  "Dare: geef een dramatische speech over waarom jij aandacht nodig hebt.",
  "Dare: laat je beste nep-geschrokken gezicht zien.",
  "Dare: doe alsof je rechter bent en bepaalt wie schattiger is.",
  "Dare: beschrijf ons liefdesverhaal in vijf woorden.",
  "Dare: doe een nep-telefoongesprek met je toekomstige rijke zelf.",
  "Dare: trek het lelijkste romantische gezicht dat je kunt.",
  "Dare: vertel een kleine waarheid met een serieus gezicht.",
  "Dare: doe alsof je kaartjes verkoopt voor onze eerste date.",
  "Dare: maak een waarschuwingslabel voor jezelf.",
  "Dare: doe een dramatische hair flip, echt of nep.",
  "Dare: leg tien seconden uit waarom jij de main character bent.",
  "Dare: maak een nep-recept voor een perfecte relatie.",
  "Dare: zeg 'ik miste je' in drie verschillende stemmingen.",
  "Dare: flirt slecht met een object in de kamer.",
  "Dare: doe je beste geheim-agent-stem.",
  "Dare: bied nep-excuses aan omdat je te aantrekkelijk bent.",
  "Dare: verzin een kleine dansmove en geef hem een naam.",
  "Dare: vertel een onschuldige bekentenis met dramatische stem.",
  "Dare: doe alsof je vastzit in een romantische videoclip.",
  "Dare: zeg iets liefs over jezelf zonder te glimlachen.",
  "Dare: maak een nep-breakup speech voor je favoriete snack.",
  "Dare: maak een podcast-intro over ons.",
  "Dare: geef een serieuze review van mijn lach.",
  "Dare: doe alsof je mij opnieuw voor het eerst ontmoet.",
  "Dare: verzin een foute koppel-slogan.",
  "Dare: doe vijf seconden een overwinningsdans.",
  "Dare: zeg een zin alsof je een geheim verbergt.",
  "Dare: leg uit waarom jouw kant van het bed beter is.",
  "Dare: maak een dramatische belofte over snacks.",
  "Dare: doe alsof je een gids bent in deze kamer.",
  "Dare: geef je beste fake jaloerse zin.",
  "Dare: beschrijf jezelf als een luxe product.",
  "Dare: reageer als in een stomme film wanneer je mij ziet.",
  "Dare: maak een onschuldige regel voor de rest van deze ronde.",
  "Dare: zeg iets romantisch in precies vijf woorden.",
  "Dare: doe een slechte goocheltruc zonder spullen.",
  "Dare: verzin een appje dat je zou sturen als je mij heel erg mist.",
  "Dare: kies een theme song voor mij en neurie twee seconden.",
  "Dare: geef eerlijk een cijfer voor mijn date-energie vanavond.",
  "Dare: presenteer mij alsof ik bij een koninklijk hof hoor.",
  "Dare: zeg iets liefs alsof je je heel erg schaamt.",
  "Dare: interview de deken alsof die beroemd is.",
  "Dare: geef een motivatiespeech voor onze relatie.",
  "Dare: doe alsof je in een reclame zit voor knuffels.",
  "Dare: maak een dramatische entree terug naar je stoel.",
  "Dare: zeg drie woorden die onze avond beschrijven.",
  "Dare: geef mij je beste pokerface.",
  "Dare: doe alsof je een geheim recept voor liefde uitlegt.",
  "Dare: kies een object en geef het een liefdesadvies.",
  "Dare: speel tien seconden een jaloerse detective.",
  "Dare: geef een speech waarom jij gelijk had, zelfs als dat niet zo is.",
  "Dare: maak een fake trailer voor onze volgende date.",
  "Dare: doe een mini-roast van jezelf.",
  "Dare: geef een compliment dat begint met 'irritant genoeg...'."
];

dutchQuestionDeck.Choices.push(
  "Wat kies je: vandaag 5.000 euro, of een jaar lang elke week een gratis date night?",
  "Wat kies je: ik bedenk je volgende tattoo-idee, of je volgende kapsel-idee, zonder het echt te doen?",
  "Wat kies je: lachen om elke slechte grap, of huilen om elke schattige video?",
  "Wat kies je: je telefoon leest je appjes hardop, of je gezicht laat elke gedachte zien?",
  "Wat kies je: nooit nee kunnen zeggen tegen snacks, of nooit ja kunnen zeggen tegen plannen?",
  "Wat kies je: je familie hoort jouw koppelstem, of je vrienden zien je babyfoto's?",
  "Wat kies je: een week een vreselijke outfit, of een maand naar friet ruiken?",
  "Wat kies je: 1.000 euro voor elke awkward stilte, of 10 euro verliezen elke keer dat je overdenkt?",
  "Wat kies je: knipogen na elk compliment, of salueren na elke sorry?",
  "Wat kies je: een chique date zonder telefoons, of een goedkope date met oneindig snacks?",
  "Wat kies je: altijd weten wanneer ik je cute vind, of altijd weten wanneer ik je irritant vind?",
  "Wat kies je: in noodgeval een tandenborstel delen, of een hele dag natte sokken?",
  "Wat kies je: altijd tien minuten te vroeg, of altijd binnenkomen met een dramatische entree?",
  "Wat kies je: ik kies je playlist voor altijd, of je dessert voor altijd?",
  "Wat kies je: elke dag een mini-ruzie, of een keer per maand een grote domme ruzie?",
  "Wat kies je: voor elk verzoek 'mijn lief' zeggen, of elk appje eindigen met 'baas'?",
  "Wat kies je: een klein strandhuis, of een enorm saai landhuis?",
  "Wat kies je: je zoekgeschiedenis aan mij tonen, of je concept-appjes aan mij tonen?",
  "Wat kies je: een keer per week naar mij teleporteren, of tijd pauzeren voor een date?",
  "Wat kies je: alleen slecht flirten, of alleen flirten in gedichten?",
  "Wat kies je: je ouders plannen onze date, of vreemden stemmen op onze outfits?",
  "Wat kies je: nooit jaloers maar ook nooit vlinders, of allebei heel snel?",
  "Wat kies je: voor elk appje een voice note sturen, of een dag alleen emojis gebruiken?",
  "Wat kies je: elke discussie winnen maar elk bordspel verliezen, of andersom?",
  "Wat kies je: een waarheidsknop, of een mute-knop voor ruzies?",
  "Wat kies je: elke kus krijgt applaus, of elke knuffel krijgt jurycijfers?",
  "Wat kies je: 10.000 euro aan reizen, of 10.000 euro voor het perfecte huis?",
  "Wat kies je: elk weekend matchende schoenen, of matchende zonnebrillen?",
  "Wat kies je: twee uur met mij vast in een lift, of twee dagen samen in stilte?",
  "Wat kies je: mijn exacte eerste indruk van jou weten, of mijn favoriete herinnering aan jou?",
  "Wat kies je: blinddoek koken voor mij, of mij laten koken zonder recept?",
  "Wat kies je: een harde vraag beantwoorden, of drie gênante dares doen?",
  "Wat kies je: een gezamenlijke snack-bankrekening, of een gezamenlijke romance-kalender?",
  "Wat kies je: bekend staan als perfect koppel, of stiekem het grappigste koppel zijn?",
  "Wat kies je: nu een veilige dare doen, of een spicy vraag beantwoorden?",
  "Wat kies je: nooit meer eten bestellen, of nooit meer samen series kijken?",
  "Wat kies je: elke dag een lange goede knuffel, of elke dag tien kleine kusjes?",
  "Wat kies je: je lach wordt harder, of je appjes worden dramatischer?",
  "Wat kies je: kamperen zonder internet, of hotel zonder snacks?",
  "Wat kies je: ik kies je outfit voor familiediner, of je caption voor een post?",
  "Wat kies je: elke crush ooit vertellen, of elke leugen die je als kind zei?",
  "Wat kies je: betrapt worden op oude foto's stalken, of op een cute appje oefenen?",
  "Wat kies je: karaoke voor vreemden, of slow dance voor vrienden?",
  "Wat kies je: niet kunnen verbergen dat je mij mist, of niet kunnen verbergen dat je honger hebt?",
  "Wat kies je: 50.000 euro maar een jaar geen knuffels, of normaal leven met oneindig knuffels?",
  "Wat kies je: ik kies je telefoonachtergrond, of je wekker-geluid?",
  "Wat kies je: onze eerste date opnieuw beleven, of een preview zien van onze volgende beste date?",
  "Wat kies je: altijd weten wat ik wil eten, of altijd weten in welke mood ik ben?",
  "Wat kies je: cute genoemd worden in publiek, of hot genoemd worden prive?",
  "Wat kies je: nu een bold romantisch ding doen, of nu een grappige dare doen?",
  "Wat kies je: ik mag je playlist kiezen, of jij mag mijn snack kiezen?",
  "Wat kies je: een dag alleen fluisteren, of een dag alles zingen?",
  "Wat kies je: ik zie je meest awkward foto, of jij ziet de mijne?",
  "Wat kies je: een maand geen memes, of een maand geen desserts?",
  "Wat kies je: altijd winnen met games, of altijd gelijk krijgen in discussies?"
);

const horrorDeckNl = {
  Love: [
    "Wat zou je doen als ik midden in de nacht bel en alleen fluister: doe niet open?",
    "Welke lieve herinnering aan ons zou eng worden als je hem in een verlaten huis terugzag?",
    "Als een vreemde zei dat hij ons allebei uit een droom kent, wat vraag je eerst?",
    "Welke gewoonte van mij zou verdacht voelen als ik hem ineens nooit meer deed?",
    "Wat is het engste bewijs dat iemand echt van je houdt?",
    "Als ik morgen alles over jou wist zonder dat jij het vertelde, wat zou je willen weten?",
    "Welke kamer zou jij niet met mij ingaan, zelfs niet voor liefde?",
    "Wat zou jij doen als je een foto van ons vindt die pas volgende week genomen wordt?",
    "Welke zin van mij zou romantisch zijn overdag, maar eng in het donker?",
    "Als liefde een waarschuwing had, wat stond er bij ons op?",
    "Wat zou je eerder geloven: dat ik lieg, of dat iemand mij nadoet?",
    "Welke plek met mij voelt mooi, maar ook een beetje verkeerd?",
    "Als een stem mijn stem nadeed, waaraan zou jij merken dat ik het niet ben?",
    "Wat is iets liefs dat meteen creepy wordt als iemand het te vaak doet?",
    "Als wij samen verdwijnen voor een avond, waar zouden mensen ons zoeken?"
  ],
  Deep: [
    "Welke waarheid over jou zou het hardst aankomen als ik hem ineens wist?",
    "Wat is een angst die je meestal grappig maakt zodat niemand het merkt?",
    "Welke kant van jezelf wil je liever niet in de spiegel zien?",
    "Wat zou je doen als je toekomstige zelf zegt: vertrouw niemand vanavond?",
    "Welke herinnering voelt alsof hij niet helemaal van jou is?",
    "Wat maakt stilte tussen twee mensen enger dan ruzie?",
    "Wanneer voelt iemand te dichtbij, zelfs als je diegene leuk vindt?",
    "Wat is iets dat je zou willen vergeten, maar ook niet kwijt wilt?",
    "Welke vraag zou je bang maken als ik hem precies goed stelde?",
    "Als schuld een geluid had, hoe zou het klinken?",
    "Wat is enger: verlaten worden of echt gezien worden?",
    "Welke geheimen maken iemand interessant, en welke maken iemand gevaarlijk?",
    "Wat zou jij nooit willen dromen over mij?",
    "Wat is de donkerste gedachte die toch onschuldig blijft?",
    "Als je een brief van jezelf kreeg met 'sorry' erop, waar zou die over gaan?"
  ],
  Weird: [
    "Wat als je wakker wordt en mijn naam staat op je arm geschreven?",
    "Wat als de spiegel een seconde te laat meebeweegt?",
    "Wat als je telefoon een foto maakt terwijl niemand hem aanraakt?",
    "Wat als iemand achter ons meeluistert, maar alleen jij hem kunt horen?",
    "Wat als dezelfde zwarte auto drie keer langsrijdt vanavond?",
    "Wat als er onder je bed een brief ligt met mijn handschrift?",
    "Wat als je een voicemail krijgt van jezelf van morgen?",
    "Wat als de lamp knippert elke keer dat iemand liegt?",
    "Wat als je in mijn ogen iemand anders ziet staan?",
    "Wat als een onbekend nummer alleen jouw geheime codewoord kent?",
    "Wat als je op een foto een hand op je schouder ziet die er niet was?",
    "Wat als een deur in huis ineens naar een andere plek gaat?",
    "Wat als de klok steeds teruggaat naar hetzelfde moment?",
    "Wat als je mijn stem hoort terwijl ik naast je stil ben?",
    "Wat als er op het raam staat: ik weet wat jullie kozen?"
  ],
  Cash: [
    "Voor 100 euro: loop je vijf minuten door een donkere kamer zonder je telefoonlamp?",
    "Voor 500 euro: luister je een minuut naar een onbekende voicemail in het donker?",
    "Voor 1.000 euro: laat je iemand anders een enge foto voor je kiezen als achtergrond voor een dag?",
    "Voor 2.000 euro: slaap je met de kastdeur open?",
    "Voor 5.000 euro: blijf je een nacht in een leeg huis waar de lampen vanzelf aangaan?",
    "Voor 10.000 euro: kijk je een uur naar een babyfoon waarop niemand hoort te zijn?",
    "Voor 25.000 euro: open je een doos die aan jou geadresseerd is maar gisteren al bezorgd had moeten zijn?",
    "Voor 50.000 euro: ga je terug naar een plek waar jij ooit een slecht gevoel had?",
    "Voor 100.000 euro: lees je hardop een brief die begint met 'als je dit leest, ben ik weg'?",
    "Voor 1.000.000 euro: blijf je een week in een huis waar elke nacht om 03:13 wordt aangeklopt?",
    "Hoeveel geld moet je krijgen om een onbekende sleutel te gebruiken op een onbekende deur?",
    "Hoeveel geld moet je krijgen om een nacht geen gordijnen dicht te doen?",
    "Hoeveel geld moet je krijgen om een oude pop mee naar huis te nemen?",
    "Hoeveel geld moet je krijgen om te reageren op een appje van een dood nummer?",
    "Hoeveel geld moet je krijgen om precies te doen wat een briefje onder je deur zegt?"
  ],
  Choices: [
    "Wat kies je: een stem in de muur horen, of voetstappen op zolder?",
    "Wat kies je: een dag niemand kunnen vertrouwen, of een dag weten wanneer iedereen liegt?",
    "Wat kies je: een foto zien van je toekomst, of een opname horen van je laatste woorden?",
    "Wat kies je: een spiegel die soms niet klopt, of een deur die soms ergens anders uitkomt?",
    "Wat kies je: elke nacht dezelfde droom, of elke ochtend een onbekende herinnering?",
    "Wat kies je: een geheim weten over mij, of weten dat ik een geheim over jou weet?",
    "Wat kies je: een waarschuwing krijgen zonder uitleg, of uitleg zonder oplossing?",
    "Wat kies je: verdwalen in een bos, of vastzitten in een huis met alle deuren op slot?",
    "Wat kies je: iemand zien die jou niet mag zien, of gehoord worden door iets dat jij niet ziet?",
    "Wat kies je: een onbekend dagboek lezen, of jouw eigen dagboek terugvinden met extra pagina's?",
    "Wat kies je: een week geen spiegels, of een week geen ramen?",
    "Wat kies je: een waarschuwing van je ex, of een waarschuwing van je toekomstige kind?",
    "Wat kies je: wakker worden met modder aan je schoenen, of met zand in je bed?",
    "Wat kies je: een nummer bellen dat zichzelf belt, of opnemen als jouw eigen nummer jou belt?",
    "Wat kies je: de waarheid weten over een oude foto, of hem nooit meer kunnen zien?"
  ],
  Impossible: [
    "Wat kies je: je moeder redden van een trein, of honderd kinderen met een beperking redden?",
    "Wat kies je: je partner redden, of een bus vol onbekende gezinnen redden?",
    "Wat kies je: een onschuldige laten haten door iedereen, of een schuldige laten ontsnappen?",
    "Wat kies je: de waarheid zeggen en iemands leven breken, of liegen en zelf elke nacht wakker liggen?",
    "Wat kies je: je grootste geheim openbaar maken, of nooit meer weten of mensen echt van je houden?",
    "Wat kies je: een persoon terughalen die jij mist, of tien onbekenden redden die je nooit ontmoet?",
    "Wat kies je: jezelf redden en iemand die je liefhebt verliezen, of andersom?",
    "Wat kies je: altijd weten wanneer iemand sterft, of nooit meer kunnen zien wie liegt?",
    "Wat kies je: een kind redden dat jou later haat, of een volwassene redden die later levens redt?",
    "Wat kies je: een pijnlijke herinnering wissen, of hem houden omdat hij jou menselijk maakt?",
    "Wat kies je: vijf jaar langer leven zonder liefde, of korter leven met echte liefde?",
    "Wat kies je: je familie teleurstellen om eerlijk te blijven, of jezelf teleurstellen om vrede te houden?",
    "Wat kies je: een ramp voorkomen maar niemand gelooft je, of niets doen en iedereen begrijpt je later?",
    "Wat kies je: iemands slechtste daad weten, of nooit meer iemands beste kant kunnen zien?",
    "Wat kies je: je partner alles in je hoofd laten horen, of jij alles in haar hoofd horen?",
    "Wat kies je: een vriend redden die jou verraden heeft, of een vreemde redden die goed is?",
    "Wat kies je: een nachtmerrie leven die iedereen overleeft, of een mooie leugen leven waarin een iemand verdwijnt?",
    "Wat kies je: de laatste woorden van iedereen horen, of nooit meer afscheid kunnen nemen?",
    "Wat kies je: rijk worden door een geheim te bewaren, of arm blijven door de waarheid te vertellen?",
    "Wat kies je: een deur openen waarachter iemand huilt, of doorlopen terwijl je weet dat je kon helpen?",
    "Wat kies je: herinnerd worden als slecht maar het juiste doen, of geliefd worden om iets dat fout was?",
    "Wat kies je: een fout uit je verleden herstellen, of een fout uit onze toekomst voorkomen?",
    "Wat kies je: een persoon redden die jij kent, of vijftig namenloze mensen redden?",
    "Wat kies je: iemand pijn doen met eerlijkheid, of iemand beschermen met een leugen die groter wordt?",
    "Wat kies je: weten dat jouw keuze iemand breekt, of niet weten wie jij gebroken hebt?",
    "Wat kies je: een knop indrukken die een onbekende redt maar jou een jaar kost, of niets doen?",
    "Wat kies je: je laatste dag samen weten, of nooit weten wanneer iets voor het laatst is?",
    "Wat kies je: een monster zijn in iemands verhaal, of slachtoffer blijven in je eigen verhaal?",
    "Wat kies je: de liefde van je leven vergeten, of herinneren dat zij jou vergeet?",
    "Wat kies je: iedereen redden behalve jezelf, of jezelf redden en nooit meer rustig slapen?"
  ],
  Dares: [
    "Dare: doe alle lichten tien seconden uit en zeg wat je het eerst dacht.",
    "Dare: fluister mijn naam alsof je mij niet wilt wakker maken.",
    "Dare: kijk zeven seconden naar een donkere hoek zonder te lachen.",
    "Dare: lees de vraag alsof er iemand achter je staat.",
    "Dare: stuur jezelf een appje met alleen: niet omkijken.",
    "Dare: maak een voice memo van vijf seconden waarin je doet alsof je verdwaald bent.",
    "Dare: kies een object in de kamer dat vanaf nu verdacht is.",
    "Dare: doe alsof je net iets onder de tafel hoorde.",
    "Dare: zeg heel rustig: we hadden hier niet moeten komen.",
    "Dare: vertel in een zin waarom de deur dicht moet blijven.",
    "Dare: doe je beste nep-schrikreactie zonder geluid.",
    "Dare: wijs naar iets in de kamer en zeg: dat stond daar net niet.",
    "Dare: maak een waarschuwing voor future-us in zes woorden.",
    "Dare: praat tien seconden alsof je bezeten bent door een chique geest.",
    "Dare: beschrijf mij alsof ik de verdachte ben in een thriller."
  ],
  Chaos: [
    "Wat is het eerste wat fout gaat als wij in een horrorfilm zitten?",
    "Wie van ons zegt te vroeg: dit is vast niks?",
    "Welke domme beslissing zouden wij maken in een spookhuis?",
    "Wat zou onze slechtste horrorfilm-titel zijn?",
    "Wie raakt als eerste de verkeerde deur aan?",
    "Wat is het meest verdachte object in deze kamer?",
    "Welke normale zin klinkt nu ineens eng?",
    "Wat zou jij doen als ik ineens heel serieus zeg: hij staat achter je?",
    "Welk geluid zou ons meteen stil krijgen?",
    "Wat is ons noodplan als de lampen uitgaan?",
    "Wat zou jij doen als mijn telefoon vanzelf jouw naam typt?",
    "Welke plek in huis vertrouw jij het minst?",
    "Wat is de domste reden om toch naar de kelder te gaan?",
    "Wat zou de geest over ons roddelen?",
    "Welke van ons zou proberen te onderhandelen met iets engs?"
  ],
  Funny: [
    "Welke horrorfilm zouden wij verpesten door te veel te praten?",
    "Wat is de minst enge manier om een geest te beledigen?",
    "Welke snack neem jij mee naar een spookhuis?",
    "Wat zou jij schreeuwen als je stoer probeert te blijven?",
    "Welke domme outfit draag jij tijdens een achtervolging?",
    "Wat is de slechtste smoes om niet naar de kelder te hoeven?",
    "Hoe zou jij een monster proberen af te leiden?",
    "Welke playlist maakt een enge scene meteen belachelijk?",
    "Wat zou onze ghost-hunting teamnaam zijn?",
    "Welk object gebruik jij als nep-wapen dat niks helpt?",
    "Wat is de grappigste manier om dramatisch te verdwijnen?",
    "Welke zin maakt elke horrorfilm minder serieus?",
    "Wat zou jij tegen een geest zeggen om vrienden te worden?",
    "Welke slechte horrorregel zouden wij toch breken?",
    "Wat is de domste reden dat wij zouden overleven?"
  ],
  Future: [
    "Wat als future-us terugkomt om ons deze relatie af te raden?",
    "Wat zou jij vragen aan ons over tien jaar als ze bang kijken?",
    "Welke keuze van vandaag kan later creepy belangrijk worden?",
    "Wat als ons toekomstige huis een kamer heeft die niemand gebruikt?",
    "Wat als we later elk jaar dezelfde onbekende kaart krijgen?",
    "Wat zou een waarschuwing van future-us kort maar eng maken?",
    "Welke plek wil je nooit met mij bezoeken, zelfs later niet?",
    "Wat als onze kinderen ooit zeggen dat ze iemand in huis zien?",
    "Wat moet future-us absoluut nooit verbergen voor ons?",
    "Wat als een foto van onze toekomst een persoon te veel heeft?",
    "Welke gewoonte moeten wij stoppen voordat hij raar wordt?",
    "Wat als wij later een dag missen die niemand kan verklaren?",
    "Wat als we later een huis kopen met een dichtgetimmerde deur?",
    "Welke belofte voelt lief maar kan later gevaarlijk worden?",
    "Wat zou jij tegen future-me zeggen als ik jou niet herken?"
  ],
  Flirty: [
    "Wat is een blik van mij die in het donker gevaarlijker voelt?",
    "Welke fluisterzin van mij zou je kippenvel geven?",
    "Wat is aantrekkelijker: spanning of veiligheid?",
    "Wat zou jij doen als ik midden in een enge film alleen naar jou kijk?",
    "Welke aanraking is lief, maar ook spannend in het donker?",
    "Wat maakt iemand mysterieus op een aantrekkelijke manier?",
    "Welke date voelt een beetje verboden maar nog steeds goed?",
    "Wat is de spannendste plek voor een geheime kus?",
    "Wat zou je willen dat ik zeg als de lichten uitgaan?",
    "Wat is enger: te veel voelen, of niets durven zeggen?",
    "Welke outfit van mij past bij een thriller?",
    "Wat is een compliment dat klinkt als een dreiging maar lief is?",
    "Wat maakt stilte tussen ons spannend?",
    "Wat zou jij doen als ik zeg: kom dichterbij, maar niet omkijken?",
    "Welke kant van mij is een beetje gevaarlijk leuk?"
  ],
  Wildcard: [
    "Welke urban legend zou jij bijna geloven?",
    "Wat is het engste dat je ooit verkeerd hoorde?",
    "Welke droom bleef te lang in je hoofd hangen?",
    "Wat is jouw raarste onderbuikgevoel ooit?",
    "Welke plek voelt slecht zonder reden?",
    "Wat is een object dat nooit in een kinderkamer hoort?",
    "Wat is enger: oude foto's of oude voicemail?",
    "Wat zou jij doen als een vreemde jouw jeugdherinnering kent?",
    "Welke zin wil je nooit horen in het donker?",
    "Wat is iets dat alleen eng is als je alleen bent?",
    "Welke deur in een horrorfilm open jij toch?",
    "Wat zou je doen als iemand in je droom je echte naam zegt?",
    "Welke bijgeloof-regel volg jij stiekem toch?",
    "Wat is het meest verdachte cadeau dat je kunt krijgen?",
    "Wat is een vraag die je liever niet beantwoordt na middernacht?"
  ]
};

const horrorDeckEn = {
  Love: horrorDeckNl.Love.map((_, index) => [
    "What would you do if I called at midnight and only whispered: do not open the door?",
    "Which sweet memory of us would become scary if you saw it again in an empty house?",
    "If a stranger said they knew us both from a dream, what would you ask first?",
    "Which habit of mine would feel suspicious if I suddenly stopped doing it?",
    "What is the scariest proof that someone truly loves you?",
    "If I knew everything about you tomorrow without you telling me, what would you ask?",
    "What room would you not enter with me, even for love?",
    "What would you do if you found a photo of us that will only be taken next week?",
    "Which sentence from me is romantic in daylight but scary in the dark?",
    "If love had a warning label, what would ours say?",
    "What would you believe first: that I am lying, or that someone is copying me?",
    "Which place with me feels beautiful but a little wrong?",
    "If a voice copied my voice, how would you know it is not me?",
    "What sweet thing becomes creepy if someone does it too often?",
    "If we disappeared for one evening, where would people look for us?"
  ][index]),
  Deep: horrorDeckNl.Deep.map((_, index) => [
    "Which truth about you would hit hardest if I suddenly knew it?",
    "What fear do you usually make funny so nobody notices?",
    "Which side of yourself would you rather not see in the mirror?",
    "What would you do if your future self said: trust nobody tonight?",
    "Which memory feels like it is not fully yours?",
    "What makes silence between two people scarier than a fight?",
    "When does someone feel too close, even if you like them?",
    "What is something you want to forget but also do not want to lose?",
    "Which question would scare you if I asked it exactly right?",
    "If guilt had a sound, what would it sound like?",
    "What is scarier: being left, or being truly seen?",
    "Which secrets make someone interesting, and which make someone dangerous?",
    "What would you never want to dream about me?",
    "What is the darkest thought that still stays harmless?",
    "If you got a letter from yourself saying 'sorry', what would it be about?"
  ][index]),
  Weird: horrorDeckNl.Weird.map((_, index) => [
    "What if you woke up and my name was written on your arm?",
    "What if the mirror moved one second too late?",
    "What if your phone took a photo while nobody touched it?",
    "What if someone behind us was listening, but only you could hear them?",
    "What if the same black car drove past three times tonight?",
    "What if there was a letter under your bed in my handwriting?",
    "What if you got a voicemail from yourself from tomorrow?",
    "What if the lamp flickered every time someone lied?",
    "What if you saw someone else standing in my eyes?",
    "What if an unknown number only knew your secret code word?",
    "What if a photo showed a hand on your shoulder that was not there?",
    "What if a door in the house suddenly led somewhere else?",
    "What if the clock kept going back to the same moment?",
    "What if you heard my voice while I sat next to you silently?",
    "What if the window said: I know what you chose?"
  ][index]),
  Cash: horrorDeckNl.Cash.map((_, index) => [
    "For $100: would you walk through a dark room for five minutes with no phone light?",
    "For $500: would you listen to an unknown voicemail in the dark?",
    "For $1,000: would you let someone choose a scary photo as your wallpaper for one day?",
    "For $2,000: would you sleep with the closet door open?",
    "For $5,000: would you stay one night in an empty house where lights turn on by themselves?",
    "For $10,000: would you watch a baby monitor for one hour when nobody should be there?",
    "For $25,000: would you open a box addressed to you that should have arrived yesterday?",
    "For $50,000: would you return to a place that once gave you a bad feeling?",
    "For $100,000: would you read a letter out loud that starts with 'if you read this, I am gone'?",
    "For $1,000,000: would you stay a week in a house where someone knocks every night at 3:13?",
    "How much money would it take to use an unknown key on an unknown door?",
    "How much money would it take to sleep one night with no curtains closed?",
    "How much money would it take to bring home an old doll?",
    "How much money would it take to reply to a text from a dead number?",
    "How much money would it take to do exactly what a note under your door says?"
  ][index]),
  Choices: horrorDeckNl.Choices.map((_, index) => [
    "Would you rather hear a voice in the wall or footsteps in the attic?",
    "Would you rather trust nobody for a day or know whenever everyone lies?",
    "Would you rather see a photo of your future or hear a recording of your last words?",
    "Would you rather have a mirror that is sometimes wrong or a door that sometimes opens somewhere else?",
    "Would you rather have the same dream every night or wake up with a memory you do not know?",
    "Would you rather know a secret about me or know that I know a secret about you?",
    "Would you rather get a warning with no explanation or an explanation with no solution?",
    "Would you rather get lost in a forest or locked inside a house?",
    "Would you rather see someone who must not see you, or be heard by something you cannot see?",
    "Would you rather read a stranger's diary or find your own diary with extra pages?",
    "Would you rather have no mirrors for a week or no windows for a week?",
    "Would you rather get a warning from your ex or from your future child?",
    "Would you rather wake up with mud on your shoes or sand in your bed?",
    "Would you rather call a number that calls itself or answer when your own number calls you?",
    "Would you rather know the truth about an old photo or never see it again?"
  ][index]),
  Impossible: horrorDeckNl.Impossible.map((_, index) => [
    "Would you save your mother from a train, or save one hundred children with disabilities?",
    "Would you save your partner, or save a bus full of unknown families?",
    "Would you let an innocent person be hated by everyone, or let a guilty person escape?",
    "Would you tell the truth and break someone's life, or lie and stay awake every night?",
    "Would you make your biggest secret public, or never know if people truly love you?",
    "Would you bring back one person you miss, or save ten strangers you will never meet?",
    "Would you save yourself and lose someone you love, or the other way around?",
    "Would you always know when someone will die, or never know who is lying?",
    "Would you save a child who later hates you, or an adult who later saves lives?",
    "Would you erase a painful memory, or keep it because it made you human?",
    "Would you live five extra years without love, or live shorter with real love?",
    "Would you disappoint your family to stay honest, or disappoint yourself to keep peace?",
    "Would you stop a disaster but nobody believes you, or do nothing and be understood later?",
    "Would you know someone's worst act, or never see anyone's best side again?",
    "Would you let your partner hear everything in your head, or hear everything in hers?",
    "Would you save a friend who betrayed you, or a stranger who is good?",
    "Would you live a nightmare where everyone survives, or a beautiful lie where one person disappears?",
    "Would you hear everyone's last words, or never be able to say goodbye?",
    "Would you get rich by keeping a secret, or stay poor by telling the truth?",
    "Would you open a door with someone crying behind it, or walk away knowing you could help?",
    "Would you be remembered as bad while doing the right thing, or loved for something wrong?",
    "Would you fix a mistake from your past, or prevent a mistake from our future?",
    "Would you save one person you know, or fifty nameless people?",
    "Would you hurt someone with honesty, or protect them with a lie that keeps growing?",
    "Would you know your choice breaks someone, or never know who you broke?",
    "Would you press a button that saves a stranger but costs you one year, or do nothing?",
    "Would you know your last day together, or never know when something is happening for the last time?",
    "Would you be the monster in someone else's story, or stay the victim in your own?",
    "Would you forget the love of your life, or remember that she forgets you?",
    "Would you save everyone except yourself, or save yourself and never sleep peacefully again?"
  ][index]),
  Dares: horrorDeckNl.Dares.map((_, index) => [
    "Dare: turn off all lights for ten seconds and say the first thing you thought.",
    "Dare: whisper my name like you do not want to wake me.",
    "Dare: stare at a dark corner for seven seconds without laughing.",
    "Dare: read the question like someone is standing behind you.",
    "Dare: text yourself only this: do not look back.",
    "Dare: make a five-second voice memo pretending you are lost.",
    "Dare: choose one object in the room that is now suspicious.",
    "Dare: act like you just heard something under the table.",
    "Dare: say very calmly: we should not have come here.",
    "Dare: explain in one sentence why the door must stay closed.",
    "Dare: do your best fake scare reaction without sound.",
    "Dare: point at something in the room and say: that was not there before.",
    "Dare: make a six-word warning for future-us.",
    "Dare: talk for ten seconds like you are possessed by a fancy ghost.",
    "Dare: describe me like I am the suspect in a thriller."
  ][index]),
  Chaos: horrorDeckNl.Chaos.map((_, index) => [
    "What is the first thing that goes wrong if we are in a horror movie?",
    "Which one of us says too early: it is probably nothing?",
    "What dumb choice would we make in a haunted house?",
    "What would our worst horror movie title be?",
    "Who touches the wrong door first?",
    "What is the most suspicious object in this room?",
    "Which normal sentence sounds scary right now?",
    "What would you do if I suddenly said very seriously: he is behind you?",
    "What sound would make us both go silent?",
    "What is our emergency plan if the lights go out?",
    "What would you do if my phone typed your name by itself?",
    "Which place in the house do you trust the least?",
    "What is the dumbest reason to still go to the basement?",
    "What would the ghost gossip about us?",
    "Which one of us would try to negotiate with something scary?"
  ][index]),
  Funny: horrorDeckNl.Funny.map((_, index) => [
    "Which horror movie would we ruin by talking too much?",
    "What is the least scary way to insult a ghost?",
    "Which snack do you bring to a haunted house?",
    "What would you scream while trying to act brave?",
    "What dumb outfit would you wear during a chase scene?",
    "What is the worst excuse to avoid going to the basement?",
    "How would you distract a monster?",
    "Which playlist would make a scary scene ridiculous?",
    "What would our ghost-hunting team name be?",
    "What object would you use as a fake weapon that does not help?",
    "What is the funniest way to disappear dramatically?",
    "Which sentence makes every horror movie less serious?",
    "What would you say to a ghost to become friends?",
    "Which bad horror rule would we still break?",
    "What is the dumbest reason we would survive?"
  ][index]),
  Future: horrorDeckNl.Future.map((_, index) => [
    "What if future-us came back to warn us against this relationship?",
    "What would you ask us in ten years if they looked scared?",
    "Which choice today could become creepy important later?",
    "What if our future house has a room nobody uses?",
    "What if we later get the same unknown card every year?",
    "What would make a warning from future-us short but scary?",
    "Which place would you never visit with me, even later?",
    "What if our future kids say they see someone in the house?",
    "What must future-us never hide from us?",
    "What if a photo of our future has one person too many?",
    "Which habit should we stop before it becomes weird?",
    "What if we later miss one day nobody can explain?",
    "What if we buy a house with a boarded-up door?",
    "Which promise feels sweet but could become dangerous later?",
    "What would you say to future-me if I did not recognize you?"
  ][index]),
  Flirty: horrorDeckNl.Flirty.map((_, index) => [
    "Which look from me feels more dangerous in the dark?",
    "Which whispered sentence from me would give you chills?",
    "What is more attractive: tension or safety?",
    "What would you do if I looked only at you during a scary movie?",
    "Which touch is sweet but also tense in the dark?",
    "What makes someone mysterious in an attractive way?",
    "Which date feels a little forbidden but still good?",
    "What is the most tense place for a secret kiss?",
    "What would you want me to say when the lights go out?",
    "What is scarier: feeling too much, or not daring to say it?",
    "Which outfit of mine belongs in a thriller?",
    "What compliment sounds like a threat but is still sweet?",
    "What makes silence between us tense?",
    "What would you do if I said: come closer, but do not look back?",
    "Which side of me is a little dangerously fun?"
  ][index]),
  Wildcard: horrorDeckNl.Wildcard.map((_, index) => [
    "Which urban legend would you almost believe?",
    "What is the scariest thing you ever misheard?",
    "Which dream stayed in your head too long?",
    "What is your strangest gut feeling ever?",
    "Which place feels wrong for no reason?",
    "What object should never be in a child's room?",
    "What is scarier: old photos or old voicemail?",
    "What would you do if a stranger knew your childhood memory?",
    "Which sentence do you never want to hear in the dark?",
    "What is only scary when you are alone?",
    "Which door in a horror movie do you still open?",
    "What would you do if someone in your dream said your real name?",
    "Which superstition rule do you secretly follow?",
    "What is the most suspicious gift someone can give?",
    "What question would you rather not answer after midnight?"
  ][index])
};

const extraQuestionSets = [
  {
    category: "Love",
    count: 17,
    nlTemplate: (left, right) => `Wat doe je als ${left} en ${right}?`,
    enTemplate: (left, right) => `What do you do if ${left} and ${right}?`,
    nlLeft: [
      "een oude video van ons een extra persoon laat zien",
      "mijn stem opneemt terwijl ik niks zeg",
      "een vreemde precies weet hoe jij mij aankijkt",
      "ons favoriete lied ineens als waarschuwing klinkt"
    ],
    enLeft: [
      "an old video of us shows one extra person",
      "my voice records while I am saying nothing",
      "a stranger knows exactly how you look at me",
      "our favorite song suddenly sounds like a warning"
    ],
    nlRight: [
      "ik zeg dat jij mij toch moet vertrouwen",
      "alle deuren vanzelf op slot gaan",
      "je hart zegt blijven maar je buik zegt rennen",
      "dezelfde zin elke nacht terugkomt",
      "niemand anders het raar vindt"
    ],
    enRight: [
      "I say you still have to trust me",
      "all doors lock by themselves",
      "your heart says stay but your gut says run",
      "the same sentence returns every night",
      "nobody else thinks it is weird"
    ]
  },
  {
    category: "Deep",
    count: 17,
    nlTemplate: (left, right) => `Welke keuze maak je als ${left}, maar ${right}?`,
    enTemplate: (left, right) => `What choice do you make if ${left}, but ${right}?`,
    nlLeft: [
      "eerlijk zijn iemand kapot maakt",
      "zwijgen iedereen veilig houdt",
      "vergeven voelt als jezelf verraden",
      "weggaan de liefste optie lijkt"
    ],
    enLeft: [
      "being honest breaks someone",
      "staying quiet keeps everyone safe",
      "forgiving feels like betraying yourself",
      "leaving seems like the kindest option"
    ],
    nlRight: [
      "je nooit mag uitleggen waarom",
      "de ander jou daarna niet meer herkent",
      "je pas over tien jaar weet of het goed was",
      "iedereen denkt dat jij fout zit",
      "je hart het tegenovergestelde wil"
    ],
    enRight: [
      "you may never explain why",
      "the other person no longer recognizes you after",
      "you only know in ten years if it was right",
      "everyone thinks you were wrong",
      "your heart wants the opposite"
    ]
  },
  {
    category: "Weird",
    count: 17,
    nlTemplate: (left, right) => `Wat als ${left} telkens ${right}?`,
    enTemplate: (left, right) => `What if ${left} keeps ${right}?`,
    nlLeft: [
      "je schaduw",
      "mijn telefoon",
      "de spiegel in de badkamer",
      "een onbekende kalender"
    ],
    enLeft: [
      "your shadow",
      "my phone",
      "the bathroom mirror",
      "an unknown calendar"
    ],
    nlRight: [
      "een minuut voorloopt",
      "jouw naam schrijft",
      "dezelfde datum laat zien",
      "een plek tekent waar wij nooit zijn geweest",
      "antwoord geeft voordat je iets vraagt"
    ],
    enRight: [
      "moving one minute ahead",
      "writing your name",
      "showing the same date",
      "drawing a place we have never been",
      "answering before you ask anything"
    ]
  },
  {
    category: "Cash",
    count: 17,
    nlTemplate: (left, right) => `Voor ${left}: ${right}?`,
    enTemplate: (left, right) => `For ${left}: would you ${right}?`,
    nlLeft: [
      "250 euro",
      "2.500 euro",
      "25.000 euro",
      "250.000 euro"
    ],
    enLeft: [
      "$250",
      "$2,500",
      "$25,000",
      "$250,000"
    ],
    nlRight: [
      "slaap je een nacht naast een gesloten kist die soms beweegt",
      "open je een brief die zegt dat hij na middernacht gelezen moet worden",
      "laat je je telefoon een uur opnemen in een lege kamer",
      "loop je terug naar een plek waar alle lampen uitgaan",
      "kijk je in een spiegel die niet in jouw huis hoort"
    ],
    enRight: [
      "sleep one night beside a closed chest that sometimes moves",
      "open a letter that says it must be read after midnight",
      "let your phone record for one hour in an empty room",
      "walk back to a place where every light goes out",
      "look into a mirror that does not belong in your house"
    ]
  },
  {
    category: "Choices",
    count: 17,
    nlTemplate: (left, right) => `Wat kies je: ${left}, of ${right}?`,
    enTemplate: (left, right) => `Would you rather ${left}, or ${right}?`,
    nlLeft: [
      "een waarschuwing krijgen die je niet begrijpt",
      "de waarheid zien in elke spiegel",
      "een dag met je toekomstige zelf praten",
      "een deur openen die je naam zegt"
    ],
    enLeft: [
      "get a warning you do not understand",
      "see the truth in every mirror",
      "talk to your future self for one day",
      "open a door that says your name"
    ],
    nlRight: [
      "een geheim houden dat je relatie redt",
      "een droom vergeten die belangrijk voelt",
      "een vreemde geloven die alles van je weet",
      "een foto verbranden die nog niet gemaakt is",
      "weten wie jou ooit gaat missen"
    ],
    enRight: [
      "keep a secret that saves your relationship",
      "forget a dream that feels important",
      "believe a stranger who knows everything about you",
      "burn a photo that has not been taken yet",
      "know who will miss you one day"
    ]
  },
  {
    category: "Impossible",
    count: 17,
    nlTemplate: (left, right) => `Wat kies je: ${left}, of ${right}?`,
    enTemplate: (left, right) => `Would you choose to ${left}, or ${right}?`,
    nlLeft: [
      "een geliefde redden die later iemand pijn doet",
      "honderd vreemden redden die jouw naam nooit leren",
      "de waarheid vertellen waardoor je alles verliest",
      "een kind beschermen dat later jou haat"
    ],
    enLeft: [
      "save someone you love who later hurts someone",
      "save one hundred strangers who never learn your name",
      "tell the truth and lose everything",
      "protect a child who later hates you"
    ],
    nlRight: [
      "een goede leugen leven met iemand die je vertrouwt",
      "jezelf opofferen zonder dat iemand het weet",
      "een schuld dragen voor iets dat je niet deed",
      "iedereen teleurstellen maar niemand verliezen",
      "een ander laten kiezen en ermee moeten leven"
    ],
    enRight: [
      "live a good lie with someone you trust",
      "sacrifice yourself without anyone knowing",
      "carry blame for something you did not do",
      "disappoint everyone but lose nobody",
      "let someone else choose and live with it"
    ]
  },
  {
    category: "Dares",
    count: 17,
    nlTemplate: (left, right) => `Dare: ${left} alsof ${right}.`,
    enTemplate: (left, right) => `Dare: ${left} like ${right}.`,
    nlLeft: [
      "zeg mijn naam heel zacht",
      "kijk naar de dichtstbijzijnde deur",
      "wijs naar een object in de kamer",
      "maak een waarschuwing van vijf woorden"
    ],
    enLeft: [
      "say my name very softly",
      "look at the nearest door",
      "point at an object in the room",
      "make a five-word warning"
    ],
    nlRight: [
      "je net iets hoorde",
      "iemand meeluistert",
      "de kamer jou niet vertrouwt",
      "je ons uit een horrorfilm redt",
      "je niks mag uitleggen"
    ],
    enRight: [
      "you just heard something",
      "someone is listening",
      "the room does not trust you",
      "you are saving us from a horror movie",
      "you are not allowed to explain anything"
    ]
  },
  {
    category: "Chaos",
    count: 17,
    nlTemplate: (left, right) => `Wat doen wij als ${left} en ${right}?`,
    enTemplate: (left, right) => `What do we do if ${left} and ${right}?`,
    nlLeft: [
      "de stroom uitvalt",
      "mijn telefoon vanzelf opneemt",
      "iemand drie keer klopt",
      "de voordeur openstaat"
    ],
    enLeft: [
      "the power goes out",
      "my phone answers by itself",
      "someone knocks three times",
      "the front door is open"
    ],
    nlRight: [
      "niemand durft als eerste te bewegen",
      "er een nieuwe foto in je galerij staat",
      "de klok precies 03:13 blijft",
      "we allebei doen alsof we niet bang zijn",
      "de slechtste keuze grappig lijkt"
    ],
    enRight: [
      "nobody dares to move first",
      "there is a new photo in your gallery",
      "the clock stays exactly at 3:13",
      "we both pretend we are not scared",
      "the worst choice seems funny"
    ]
  },
  {
    category: "Funny",
    count: 16,
    nlTemplate: (left, right) => `Hoe verpesten wij ${left} met ${right}?`,
    enTemplate: (left, right) => `How do we ruin ${left} with ${right}?`,
    nlLeft: [
      "een demonische scene",
      "een spookjacht",
      "een enge filmavond",
      "een dramatische ontsnapping"
    ],
    enLeft: [
      "a demonic scene",
      "a ghost hunt",
      "a scary movie night",
      "a dramatic escape"
    ],
    nlRight: [
      "slechte snacks",
      "te veel discussie",
      "een dom lied",
      "een fake stoere houding"
    ],
    enRight: [
      "bad snacks",
      "too much arguing",
      "a dumb song",
      "a fake brave attitude"
    ]
  },
  {
    category: "Future",
    count: 16,
    nlTemplate: (left, right) => `Wat als future-us ${left} en ${right}?`,
    enTemplate: (left, right) => `What if future-us ${left} and ${right}?`,
    nlLeft: [
      "terugkomt met een waarschuwing",
      "een kamer in ons huis afsluit",
      "een foto naar nu stuurt",
      "ons vraagt om iets nooit te beloven"
    ],
    enLeft: [
      "comes back with a warning",
      "locks one room in our house",
      "sends a photo to the present",
      "asks us never to promise something"
    ],
    nlRight: [
      "geen uitleg wil geven",
      "alleen naar jou durft te kijken",
      "zegt dat liefde niet genoeg was",
      "een datum op tafel legt"
    ],
    enRight: [
      "refuses to explain",
      "only dares to look at you",
      "says love was not enough",
      "puts a date on the table"
    ]
  },
  {
    category: "Flirty",
    count: 16,
    nlTemplate: (left, right) => `Wat is spannender: ${left}, of ${right}?`,
    enTemplate: (left, right) => `What is more tense: ${left}, or ${right}?`,
    nlLeft: [
      "een blik die langer blijft",
      "een fluistering in het donker",
      "handen vasthouden tijdens angst",
      "een geheim dat alleen wij weten"
    ],
    enLeft: [
      "a look that stays too long",
      "a whisper in the dark",
      "holding hands while scared",
      "a secret only we know"
    ],
    nlRight: [
      "een stilte die iets zegt",
      "een kus na een waarschuwing",
      "dichtbij blijven als het eng wordt",
      "lachen omdat je eigenlijk bang bent"
    ],
    enRight: [
      "a silence that says something",
      "a kiss after a warning",
      "staying close when it gets scary",
      "laughing because you are actually scared"
    ]
  },
  {
    category: "Wildcard",
    count: 16,
    nlTemplate: (left, right) => `Welke is enger: ${left}, of ${right}?`,
    enTemplate: (left, right) => `Which is scarier: ${left}, or ${right}?`,
    nlLeft: [
      "een foto die jou terug aankijkt",
      "een voicemail zonder geluid",
      "een sleutel zonder deur",
      "een droom die precies klopt"
    ],
    enLeft: [
      "a photo that looks back at you",
      "a voicemail with no sound",
      "a key with no door",
      "a dream that is exactly right"
    ],
    nlRight: [
      "een deur die vanzelf sluit",
      "een onbekende die jouw verhaal kent",
      "een klok die stopt als je liegt",
      "een cadeau zonder afzender"
    ],
    enRight: [
      "a door that closes by itself",
      "a stranger who knows your story",
      "a clock that stops when you lie",
      "a gift with no sender"
    ]
  }
];

function buildExtraQuestions(set) {
  const nlItems = [];
  const enItems = [];

  for (let leftIndex = 0; leftIndex < set.nlLeft.length; leftIndex += 1) {
    for (let rightIndex = 0; rightIndex < set.nlRight.length; rightIndex += 1) {
      nlItems.push(set.nlTemplate(set.nlLeft[leftIndex], set.nlRight[rightIndex]));
      enItems.push(set.enTemplate(set.enLeft[leftIndex], set.enRight[rightIndex]));
      if (nlItems.length === set.count) {
        return { nlItems, enItems };
      }
    }
  }

  return { nlItems, enItems };
}

extraQuestionSets.forEach((set) => {
  const { nlItems, enItems } = buildExtraQuestions(set);
  horrorDeckNl[set.category].push(...nlItems);
  horrorDeckEn[set.category].push(...enItems);
});

const mindfuckQuestionSets = [
  {
    category: "Love",
    count: 32,
    nlTemplate: (left, right) => `Wat zou jij kiezen als onze relatie ${left}, maar ${right}?`,
    enTemplate: (left, right) => `What would you choose if our relationship ${left}, but ${right}?`,
    nlLeft: [
      "perfect lijkt voor iedereen",
      "elke gedachte eerlijk maakt",
      "alle kleine ruzies meteen wist",
      "jou precies laat voelen wat ik voel"
    ],
    enLeft: [
      "looks perfect to everyone",
      "makes every thought honest",
      "erases every small fight right away",
      "lets you feel exactly what I feel"
    ],
    nlRight: [
      "we minder vrij worden",
      "een kleine leugen alles rustiger houdt",
      "je niet meer weet welke keuze van jou was",
      "comfort en groei niet samen kunnen",
      "iedereen gelijk krijgt behalve jij",
      "we elkaars antwoord al kennen",
      "de beste herinnering nooit besproken mag worden",
      "vertrouwen elke dag opnieuw gekozen moet worden"
    ],
    enRight: [
      "we become less free",
      "one small lie keeps everything calmer",
      "you no longer know which choice was yours",
      "comfort and growth cannot exist together",
      "everyone is right except you",
      "we already know each other's answer",
      "the best memory may never be discussed",
      "trust has to be chosen again every day"
    ]
  },
  {
    category: "Deep",
    count: 32,
    nlTemplate: (left, right) => `Welke waarheid kies je als ${left}, maar ${right}?`,
    enTemplate: (left, right) => `Which truth do you choose if ${left}, but ${right}?`,
    nlLeft: [
      "het over jezelf gaat",
      "het over je verleden gaat",
      "het over iemand gaat van wie je houdt",
      "het over ons gaat"
    ],
    enLeft: [
      "it is about yourself",
      "it is about your past",
      "it is about someone you love",
      "it is about us"
    ],
    nlRight: [
      "je hem maar een keer mag zeggen",
      "niemand daarna hetzelfde naar je kijkt",
      "een simpele leugen veel makkelijker is",
      "je pas later weet of het goed was",
      "iemand anders er rust door verliest",
      "jij er eindelijk rust door krijgt",
      "je geen uitleg mag geven",
      "de ander alleen je antwoord ziet, niet je reden"
    ],
    enRight: [
      "you can only say it once",
      "nobody looks at you the same after",
      "a simple lie would be much easier",
      "you only know later if it was right",
      "someone else loses peace because of it",
      "you finally gain peace because of it",
      "you are not allowed to explain",
      "the other person only sees your answer, not your reason"
    ]
  },
  {
    category: "Weird",
    count: 32,
    nlTemplate: (left, right) => `Wat als ${left} precies ${right}?`,
    enTemplate: (left, right) => `What if ${left} exactly ${right}?`,
    nlLeft: [
      "je geheugen",
      "je gevoel voor tijd",
      "je smaak in mensen",
      "je geweten"
    ],
    enLeft: [
      "your memory",
      "your sense of time",
      "your taste in people",
      "your conscience"
    ],
    nlRight: [
      "kiest wat jij vergeet",
      "een andere versie van jou beschermt",
      "alleen eerlijk is als niemand kijkt",
      "jou laat winnen maar slechter maakt",
      "je gelukkig maakt met de verkeerde reden",
      "je gelijk geeft maar je eenzaam maakt",
      "een dag vooruitloopt op je gevoel",
      "niet van jou blijkt te zijn"
    ],
    enRight: [
      "chooses what you forget",
      "protects another version of you",
      "is only honest when nobody watches",
      "lets you win but makes you worse",
      "makes you happy for the wrong reason",
      "makes you right but lonely",
      "runs one day ahead of your feelings",
      "turns out not to be yours"
    ]
  },
  {
    category: "Cash",
    count: 32,
    nlTemplate: (left, right) => `Voor ${left}: zou je ${right}?`,
    enTemplate: (left, right) => `For ${left}: would you ${right}?`,
    nlLeft: [
      "100 euro",
      "1.000 euro",
      "10.000 euro",
      "100.000 euro"
    ],
    enLeft: [
      "$100",
      "$1,000",
      "$10,000",
      "$100,000"
    ],
    nlRight: [
      "een week lang elke gedachte eerlijk uitspreken",
      "je partner tien minuten jouw gedachten laten raden",
      "een oude mening openbaar terugnemen",
      "een jaar geen smoesjes meer gebruiken",
      "een geheim vertellen dat niemand schade doet maar wel ongemakkelijk is",
      "een dag leven volgens de keuzes van je partner",
      "je meest nutteloze trots opgeven",
      "een ongemakkelijke waarheid op tafel leggen"
    ],
    enRight: [
      "say every thought honestly for one week",
      "let your partner guess your thoughts for ten minutes",
      "publicly take back an old opinion",
      "use no excuses for one year",
      "tell a secret that hurts nobody but feels awkward",
      "live one day by your partner's choices",
      "give up your most useless pride",
      "put an uncomfortable truth on the table"
    ]
  },
  {
    category: "Choices",
    count: 32,
    nlTemplate: (left, right) => `Wat kies je: ${left}, of ${right}?`,
    enTemplate: (left, right) => `Would you rather ${left}, or ${right}?`,
    nlLeft: [
      "altijd weten wanneer iemand liegt",
      "altijd weten wanneer jij jezelf voorliegt",
      "een jaar lang precies genoeg geld hebben",
      "iedereen kunnen begrijpen"
    ],
    enLeft: [
      "always know when someone lies",
      "always know when you are lying to yourself",
      "have exactly enough money for one year",
      "be able to understand everyone"
    ],
    nlRight: [
      "een keer per maand iemands echte reden horen",
      "nooit meer twijfelen maar soms fout zitten",
      "een droom opgeven die niet meer bij je past",
      "gelijk krijgen maar niet begrepen worden",
      "rust kiezen boven spanning",
      "liefde kiezen boven controle",
      "een pijnlijke waarheid nu horen",
      "een mooie leugen pas later ontdekken"
    ],
    enRight: [
      "hear someone's real reason once a month",
      "never doubt again but sometimes be wrong",
      "give up a dream that no longer fits you",
      "be right but not understood",
      "choose peace over tension",
      "choose love over control",
      "hear a painful truth now",
      "discover a beautiful lie later"
    ]
  },
  {
    category: "Impossible",
    count: 47,
    nlTemplate: (left, right) => `Wat kies je: ${left}, of ${right}?`,
    enTemplate: (left, right) => `Would you choose ${left}, or ${right}?`,
    nlLeft: [
      "je familie teleurstellen om eerlijk te blijven",
      "je partner kwetsen met de waarheid",
      "een droom opgeven voor iemand die jou nodig heeft",
      "iemand vergeven die het niet verdient",
      "jezelf kiezen terwijl iemand anders op jou rekent",
      "geliefd worden om een leugen"
    ],
    enLeft: [
      "disappointing your family to stay honest",
      "hurting your partner with the truth",
      "giving up a dream for someone who needs you",
      "forgiving someone who does not deserve it",
      "choosing yourself while someone else depends on you",
      "being loved for a lie"
    ],
    nlRight: [
      "vrede houden en jezelf kwijtraken",
      "gelijk hebben en alleen eindigen",
      "een fout toegeven die niemand kon bewijzen",
      "een geheim bewaren dat iemand beschermt",
      "een kans missen die jou beter had gemaakt",
      "een ander gelukkig maken met iets dat jou leeg maakt",
      "je trots verliezen maar rust krijgen",
      "de makkelijke keuze nemen en het altijd weten"
    ],
    enRight: [
      "keeping peace and losing yourself",
      "being right and ending up alone",
      "admitting a mistake nobody could prove",
      "keeping a secret that protects someone",
      "missing a chance that would have made you better",
      "making someone else happy with something that empties you",
      "losing your pride but gaining peace",
      "taking the easy choice and always knowing it"
    ]
  },
  {
    category: "Dares",
    count: 32,
    nlTemplate: (left, right) => `Challenge: ${left} en ${right}.`,
    enTemplate: (left, right) => `Challenge: ${left} and ${right}.`,
    nlLeft: [
      "antwoord in drie woorden",
      "geef eerst het tegenovergestelde antwoord",
      "laat de ander jouw antwoord raden",
      "rangschik beide opties hardop"
    ],
    enLeft: [
      "answer in three words",
      "give the opposite answer first",
      "let the other person guess your answer",
      "rank both options out loud"
    ],
    nlRight: [
      "leg daarna uit waarom",
      "zeg wat je bijna koos",
      "maak het ongemakkelijk eerlijk",
      "verander een detail en kies opnieuw",
      "doe alsof je future-you bent",
      "geef een antwoord dat je over een jaar nog snapt",
      "laat trots niet meetellen",
      "maak er een relatie-regel van"
    ],
    enRight: [
      "then explain why",
      "say what you almost chose",
      "make it awkwardly honest",
      "change one detail and choose again",
      "act like future-you",
      "give an answer you still understand in a year",
      "do not count pride",
      "turn it into a relationship rule"
    ]
  },
  {
    category: "Chaos",
    count: 32,
    nlTemplate: (left, right) => `Wat doen wij als ${left}, maar ${right}?`,
    enTemplate: (left, right) => `What do we do if ${left}, but ${right}?`,
    nlLeft: [
      "we allebei hetzelfde antwoord geven",
      "een van ons mag liegen",
      "de vraag twee juiste antwoorden heeft",
      "we moeten kiezen binnen vijf seconden"
    ],
    enLeft: [
      "we both give the same answer",
      "one of us is allowed to lie",
      "the question has two right answers",
      "we have to choose within five seconds"
    ],
    nlRight: [
      "de reden belangrijker is dan de keuze",
      "de verliezer de volgende vraag kiest",
      "je pas wint als je eerlijk twijfelt",
      "de grappigste uitleg telt",
      "de meest rustige keuze verdacht voelt",
      "de ander jouw antwoord mag veranderen",
      "we daarna van kant moeten wisselen",
      "niemand mag zeggen: ligt eraan"
    ],
    enRight: [
      "the reason matters more than the choice",
      "the loser picks the next question",
      "you only win if you honestly doubt",
      "the funniest explanation counts",
      "the calmest choice feels suspicious",
      "the other person may change your answer",
      "we have to switch sides after",
      "nobody may say: it depends"
    ]
  },
  {
    category: "Funny",
    count: 31,
    nlTemplate: (left, right) => `Wat is dommer: ${left}, of ${right}?`,
    enTemplate: (left, right) => `What is dumber: ${left}, or ${right}?`,
    nlLeft: [
      "altijd gelijk willen hebben",
      "een discussie winnen maar de sfeer verliezen",
      "een compliment te serieus analyseren",
      "doen alsof je niet jaloers bent"
    ],
    enLeft: [
      "always wanting to be right",
      "winning an argument but losing the mood",
      "overanalyzing a compliment",
      "pretending you are not jealous"
    ],
    nlRight: [
      "een snack kiezen als persoonlijkheid",
      "je eigen advies niet volgen",
      "te lang doen over een simpel appje",
      "een mini-probleem behandelen als rechtbank",
      "trots zijn op koppigheid",
      "een slechte keuze goed uitleggen",
      "je gevoel rationaliseren tot het erger wordt",
      "een grap maken omdat het te echt wordt"
    ],
    enRight: [
      "choosing a snack as a personality",
      "not following your own advice",
      "taking too long over a simple text",
      "treating a tiny problem like a court case",
      "being proud of stubbornness",
      "explaining a bad choice well",
      "rationalizing your feeling until it gets worse",
      "making a joke because it gets too real"
    ]
  },
  {
    category: "Future",
    count: 31,
    nlTemplate: (left, right) => `Wat als future-us ${left}, maar ${right}?`,
    enTemplate: (left, right) => `What if future-us ${left}, but ${right}?`,
    nlLeft: [
      "zegt dat een kleine gewoonte alles veranderde",
      "ons een belofte laat schrappen",
      "een lijst geeft met drie keuzes",
      "vertelt dat rust belangrijker werd dan spanning"
    ],
    enLeft: [
      "says one small habit changed everything",
      "makes us delete one promise",
      "gives us a list of three choices",
      "says peace became more important than tension"
    ],
    nlRight: [
      "niet zegt welke keuze goed is",
      "maar een van ons het gelooft",
      "het iets kost dat nu leuk voelt",
      "we het pas later begrijpen",
      "het klinkt als saai advies",
      "we er vandaag al mee moeten beginnen",
      "het betekent dat iemand ongelijk moet toegeven",
      "het ons allebei een beetje stoort"
    ],
    enRight: [
      "does not say which choice is right",
      "only one of us believes it",
      "it costs something that feels fun now",
      "we only understand it later",
      "it sounds like boring advice",
      "we have to start today",
      "it means someone has to admit they were wrong",
      "it bothers both of us a little"
    ]
  },
  {
    category: "Flirty",
    count: 31,
    nlTemplate: (left, right) => `Wat is spannender: ${left}, of ${right}?`,
    enTemplate: (left, right) => `What is more tense: ${left}, or ${right}?`,
    nlLeft: [
      "weten wat ik denk maar niet mag zeggen",
      "een blik na een eerlijk antwoord",
      "een stilte die expres blijft hangen",
      "een compliment dat bijna te eerlijk is"
    ],
    enLeft: [
      "knowing what I think but not being allowed to say it",
      "a look after an honest answer",
      "a silence that stays on purpose",
      "a compliment that is almost too honest"
    ],
    nlRight: [
      "toegeven dat je aandacht wilde",
      "de ander jouw keuze laten bepalen",
      "een antwoord dat je normaal zou ontwijken",
      "lachen omdat het antwoord raak is",
      "dichtbij blijven tijdens een moeilijke vraag",
      "zeggen wat je eigenlijk hoopte",
      "een waarheid verpakken als grap",
      "een keuze maken zonder controle te houden"
    ],
    enRight: [
      "admitting you wanted attention",
      "letting the other person decide your choice",
      "an answer you would normally avoid",
      "laughing because the answer is accurate",
      "staying close during a hard question",
      "saying what you secretly hoped",
      "wrapping a truth as a joke",
      "making a choice without keeping control"
    ]
  },
  {
    category: "Wildcard",
    count: 31,
    nlTemplate: (left, right) => `Welke vraag breekt je hoofd meer: ${left}, of ${right}?`,
    enTemplate: (left, right) => `Which question breaks your brain more: ${left}, or ${right}?`,
    nlLeft: [
      "ben je nog jezelf als je je redenen vergeet",
      "is een goede leugen beter dan een slechte waarheid",
      "kan liefde eerlijk zijn zonder alles te zeggen",
      "is kiezen ook verliezen"
    ],
    enLeft: [
      "are you still yourself if you forget your reasons",
      "is a good lie better than a bad truth",
      "can love be honest without saying everything",
      "is choosing also losing"
    ],
    nlRight: [
      "wie ben je als niemand jou herinnert",
      "wat als twijfel slimmer is dan zekerheid",
      "wat als je beste keuze nooit fijn voelt",
      "kan iemand gelijk hebben om de verkeerde reden",
      "is rust soms gewoon twijfel met nette kleren",
      "wat als je gevoel gelijk heeft maar je uitleg niet",
      "ben je vrij als je altijd krijgt wat je wilt",
      "wat als het antwoord verandert zodra je het uitspreekt"
    ],
    enRight: [
      "who are you if nobody remembers you",
      "what if doubt is smarter than certainty",
      "what if your best choice never feels good",
      "can someone be right for the wrong reason",
      "is peace sometimes just doubt in nice clothes",
      "what if your feeling is right but your explanation is not",
      "are you free if you always get what you want",
      "what if the answer changes as soon as you say it"
    ]
  }
];

const moreMindfuckQuestionSets = [
  {
    category: "Love",
    count: 16,
    nlTemplate: (left, right) => `Wat als je moet kiezen tussen ${left} en ${right} in onze relatie?`,
    enTemplate: (left, right) => `What if you had to choose between ${left} and ${right} in our relationship?`,
    nlLeft: [
      "altijd eerlijk zijn",
      "altijd zacht blijven",
      "elkaars gedachten raden",
      "elkaar volledige vrijheid geven"
    ],
    enLeft: [
      "always being honest",
      "always staying gentle",
      "guessing each other's thoughts",
      "giving each other total freedom"
    ],
    nlRight: [
      "soms je trots inslikken",
      "soms geen gelijk krijgen",
      "elke kleine twijfel uitspreken",
      "een ongemakkelijk antwoord accepteren"
    ],
    enRight: [
      "sometimes swallowing your pride",
      "sometimes not being right",
      "saying every small doubt out loud",
      "accepting an uncomfortable answer"
    ]
  },
  {
    category: "Deep",
    count: 17,
    nlTemplate: (left, right) => `Welke is eerlijker: ${left}, of ${right}?`,
    enTemplate: (left, right) => `Which is more honest: ${left}, or ${right}?`,
    nlLeft: [
      "zeggen wat je voelt zonder bewijs",
      "toegeven dat je iets niet weet",
      "een keuze maken met twijfel",
      "je mening veranderen waar iemand bij is"
    ],
    enLeft: [
      "saying what you feel without proof",
      "admitting you do not know something",
      "making a choice with doubt",
      "changing your opinion in front of someone"
    ],
    nlRight: [
      "rust houden terwijl je nog vragen hebt",
      "een simpel antwoord weigeren",
      "iemand gelijk geven terwijl het prikt",
      "je eigen aandeel groter maken",
      "zeggen dat je reden niet perfect is"
    ],
    enRight: [
      "keeping peace while you still have questions",
      "refusing a simple answer",
      "letting someone be right while it stings",
      "making your own part bigger",
      "saying your reason is not perfect"
    ]
  },
  {
    category: "Weird",
    count: 17,
    nlTemplate: (left, right) => `Wat als ${left} eigenlijk ${right}?`,
    enTemplate: (left, right) => `What if ${left} is actually ${right}?`,
    nlLeft: [
      "je slechtste gewoonte",
      "je beste eigenschap",
      "je favoriete smoes",
      "je gevoel van gelijk"
    ],
    enLeft: [
      "your worst habit",
      "your best quality",
      "your favorite excuse",
      "your sense of being right"
    ],
    nlRight: [
      "een bescherming die te lang bleef",
      "een keuze die je ooit vergat",
      "een mening van iemand anders",
      "een gewoonte met een goede bedoeling",
      "een antwoord op een oude vraag"
    ],
    enRight: [
      "protection that stayed too long",
      "a choice you once forgot",
      "someone else's opinion",
      "a habit with a good intention",
      "an answer to an old question"
    ]
  },
  {
    category: "Cash",
    count: 17,
    nlTemplate: (left, right) => `Voor ${left}: zou je ${right}?`,
    enTemplate: (left, right) => `For ${left}: would you ${right}?`,
    nlLeft: [
      "50 euro",
      "750 euro",
      "7.500 euro",
      "75.000 euro"
    ],
    enLeft: [
      "$50",
      "$750",
      "$7,500",
      "$75,000"
    ],
    nlRight: [
      "een maand lang elke smoes vervangen met de echte reden",
      "de ander een dag je planning laten bepalen",
      "een oude discussie opnieuw voeren maar nu rustig",
      "toegeven welke kleine luxe jij te belangrijk maakt",
      "je telefoon een uur wegleggen tijdens elk gesprek"
    ],
    enRight: [
      "replace every excuse with the real reason for one month",
      "let the other person decide your schedule for one day",
      "redo an old argument but calmly this time",
      "admit which small luxury you make too important",
      "put your phone away for one hour during every conversation"
    ]
  },
  {
    category: "Choices",
    count: 17,
    nlTemplate: (left, right) => `Wat kies je: ${left}, of ${right}?`,
    enTemplate: (left, right) => `Would you rather ${left}, or ${right}?`,
    nlLeft: [
      "iedereen snappen maar jezelf minder",
      "jezelf snappen maar anderen minder",
      "altijd precies weten wat je wilt",
      "nooit meer een excuus nodig hebben"
    ],
    enLeft: [
      "understand everyone but yourself less",
      "understand yourself but others less",
      "always know exactly what you want",
      "never need an excuse again"
    ],
    nlRight: [
      "een keer per week je echte reden horen",
      "elke maand een oude overtuiging verliezen",
      "rust krijgen maar minder controle",
      "controle houden maar minder rust",
      "een mooi antwoord krijgen dat niet compleet is"
    ],
    enRight: [
      "hear your real reason once a week",
      "lose an old belief every month",
      "gain peace but less control",
      "keep control but less peace",
      "get a beautiful answer that is not complete"
    ]
  },
  {
    category: "Impossible",
    count: 25,
    nlTemplate: (left, right) => `Wat kies je: ${left}, of ${right}?`,
    enTemplate: (left, right) => `Would you choose ${left}, or ${right}?`,
    nlLeft: [
      "je eigen toekomst kleiner maken voor iemand anders",
      "iemand verliezen omdat je eindelijk eerlijk bent",
      "de schuld krijgen voor de juiste keuze",
      "een kans nemen die je relatie test",
      "blijven terwijl weggaan makkelijker is"
    ],
    enLeft: [
      "making your own future smaller for someone else",
      "losing someone because you finally tell the truth",
      "getting blamed for the right choice",
      "taking a chance that tests your relationship",
      "staying when leaving is easier"
    ],
    nlRight: [
      "winnen en weten dat je vals speelde",
      "verliezen en weten dat je eerlijk bleef",
      "rust kopen met een halve waarheid",
      "alles uitleggen en toch niet geloofd worden",
      "een antwoord accepteren dat nooit lekker voelt"
    ],
    enRight: [
      "winning while knowing you cheated",
      "losing while knowing you stayed honest",
      "buying peace with a half-truth",
      "explaining everything and still not being believed",
      "accepting an answer that never feels good"
    ]
  },
  {
    category: "Dares",
    count: 16,
    nlTemplate: (left, right) => `Challenge: ${left} en ${right}.`,
    enTemplate: (left, right) => `Challenge: ${left} and ${right}.`,
    nlLeft: [
      "kies binnen drie seconden",
      "laat de ander jouw antwoord voorspellen",
      "antwoord zonder het woord misschien",
      "geef eerst het antwoord dat het meest pijn doet aan je ego"
    ],
    enLeft: [
      "choose within three seconds",
      "let the other person predict your answer",
      "answer without using the word maybe",
      "give the answer that hurts your ego most first"
    ],
    nlRight: [
      "zeg daarna wat je probeerde te beschermen",
      "maak de andere optie aantrekkelijker",
      "leg uit wat je antwoord over jou zegt",
      "laat de ander een detail veranderen"
    ],
    enRight: [
      "then say what you tried to protect",
      "make the other option more tempting",
      "explain what your answer says about you",
      "let the other person change one detail"
    ]
  },
  {
    category: "Chaos",
    count: 16,
    nlTemplate: (left, right) => `Wat gebeurt er als ${left}, maar ${right}?`,
    enTemplate: (left, right) => `What happens if ${left}, but ${right}?`,
    nlLeft: [
      "we allebei zeker zijn",
      "we allebei twijfelen",
      "de verliezer eerlijker was",
      "de winnaar het slechter uitlegt"
    ],
    enLeft: [
      "we are both certain",
      "we both doubt",
      "the loser was more honest",
      "the winner explains it worse"
    ],
    nlRight: [
      "de grappigste reden telt",
      "de rustigste keuze wint",
      "de ander een veto krijgt",
      "we meteen van kant wisselen"
    ],
    enRight: [
      "the funniest reason counts",
      "the calmest choice wins",
      "the other person gets a veto",
      "we switch sides immediately"
    ]
  },
  {
    category: "Funny",
    count: 14,
    nlTemplate: (left, right) => `Wat is belachelijker: ${left}, of ${right}?`,
    enTemplate: (left, right) => `What is more ridiculous: ${left}, or ${right}?`,
    nlLeft: [
      "een gevoel behandelen als spreadsheet",
      "een appje analyseren alsof het literatuur is",
      "je trots verdedigen met slechte logica",
      "een klein probleem een titel geven"
    ],
    enLeft: [
      "treating a feeling like a spreadsheet",
      "analyzing a text like literature",
      "defending your pride with bad logic",
      "giving a small problem a title"
    ],
    nlRight: [
      "boos zijn op een hypothetische situatie",
      "een slechte keuze romantisch uitleggen",
      "een mini-crisis plannen",
      "doen alsof je spontaan bent met een schema"
    ],
    enRight: [
      "being mad at a hypothetical situation",
      "explaining a bad choice romantically",
      "planning a tiny crisis",
      "pretending to be spontaneous with a schedule"
    ]
  },
  {
    category: "Future",
    count: 14,
    nlTemplate: (left, right) => `Wat als wij later ${left}, maar ${right}?`,
    enTemplate: (left, right) => `What if later we ${left}, but ${right}?`,
    nlLeft: [
      "precies krijgen wat we nu willen",
      "een oude droom ontgroeien",
      "rustiger worden dan verwacht",
      "een kleine gewoonte enorm belangrijk maken"
    ],
    enLeft: [
      "get exactly what we want now",
      "outgrow an old dream",
      "become calmer than expected",
      "make one small habit hugely important"
    ],
    nlRight: [
      "iets missen dat nu normaal voelt",
      "het pas laat durven toegeven",
      "de reden anders is dan we dachten",
      "we allebei moesten veranderen"
    ],
    enRight: [
      "miss something that feels normal now",
      "only admit it late",
      "the reason is different than we thought",
      "we both had to change"
    ]
  },
  {
    category: "Flirty",
    count: 15,
    nlTemplate: (left, right) => `Wat voelt spannender: ${left}, of ${right}?`,
    enTemplate: (left, right) => `What feels more tense: ${left}, or ${right}?`,
    nlLeft: [
      "een eerlijk antwoord dat je laat glimlachen",
      "een compliment dat te raak is",
      "weten dat de ander je keuze al ziet",
      "een stilte omdat het antwoord duidelijk is"
    ],
    enLeft: [
      "an honest answer that makes you smile",
      "a compliment that lands too well",
      "knowing the other person already sees your choice",
      "a silence because the answer is obvious"
    ],
    nlRight: [
      "toegeven dat je indruk wilde maken",
      "de ander laten winnen omdat het leuker is",
      "een waarheid zeggen met een grap eromheen",
      "niet doen alsof je neutraal bent"
    ],
    enRight: [
      "admitting you wanted to impress",
      "letting the other person win because it is more fun",
      "saying a truth with a joke around it",
      "not pretending to be neutral"
    ]
  },
  {
    category: "Wildcard",
    count: 16,
    nlTemplate: (left, right) => `Wat breekt je hoofd meer: ${left}, of ${right}?`,
    enTemplate: (left, right) => `What breaks your brain more: ${left}, or ${right}?`,
    nlLeft: [
      "een keuze zonder goede reden",
      "een reden zonder echte keuze",
      "een leugen die iemand beter maakt",
      "een waarheid die iemand slechter maakt"
    ],
    enLeft: [
      "a choice without a good reason",
      "a reason without a real choice",
      "a lie that makes someone better",
      "a truth that makes someone worse"
    ],
    nlRight: [
      "een gevoel dat klopt maar niet logisch is",
      "een logica die klopt maar koud voelt",
      "vrijheid die te veel opties geeft",
      "zekerheid die te veel kost"
    ],
    enRight: [
      "a feeling that is right but not logical",
      "logic that is correct but feels cold",
      "freedom that gives too many options",
      "certainty that costs too much"
    ]
  }
];

const relationshipQuestionSets = [
  {
    category: "Relationship",
    count: 24,
    nlTemplate: (left, right) => `Wat moeten wij eerlijk bespreken als ${left}, maar ${right}?`,
    enTemplate: (left, right) => `What should we honestly talk about if ${left}, but ${right}?`,
    nlLeft: [
      "een ruzie eigenlijk over iets anders gaat",
      "we allebei gelijk willen hebben",
      "een oude onzekerheid terugkomt",
      "we elkaar minder goed lezen"
    ],
    enLeft: [
      "a fight is actually about something else",
      "we both want to be right",
      "an old insecurity comes back",
      "we read each other less clearly"
    ],
    nlRight: [
      "niemand schuld hoeft te krijgen",
      "het ongemakkelijk voelt om te beginnen",
      "we de sfeer niet willen verpesten",
      "we liever grappen maken dan eerlijk zijn",
      "de timing slecht is",
      "we niet weten welke vraag we echt willen stellen"
    ],
    enRight: [
      "nobody has to be blamed",
      "it feels awkward to start",
      "we do not want to ruin the mood",
      "we would rather joke than be honest",
      "the timing is bad",
      "we do not know which question we actually want to ask"
    ]
  },
  {
    category: "Relationship",
    count: 24,
    nlTemplate: (left, right) => `Welke afspraak zou onze relatie sterker maken als ${left}, ook al ${right}?`,
    enTemplate: (left, right) => `Which agreement would make our relationship stronger if ${left}, even if ${right}?`,
    nlLeft: [
      "een van ons dichtklapt",
      "we verschillend omgaan met stress",
      "we elkaar per ongeluk tekort doen",
      "we te druk zijn om goed te praten"
    ],
    enLeft: [
      "one of us shuts down",
      "we handle stress differently",
      "we accidentally give each other too little",
      "we are too busy to talk well"
    ],
    nlRight: [
      "het niet meteen opgelost wordt",
      "we allebei moe zijn",
      "het eerst klein lijkt",
      "een van ons defensief wordt",
      "we het antwoord nog niet weten",
      "we moeten toegeven dat we iets missen"
    ],
    enRight: [
      "it is not solved right away",
      "we are both tired",
      "it seems small at first",
      "one of us gets defensive",
      "we do not know the answer yet",
      "we have to admit something is missing"
    ]
  },
  {
    category: "Relationship",
    count: 24,
    nlTemplate: (left, right) => `Wat zou jij van mij nodig hebben wanneer ${left}, maar ${right}?`,
    enTemplate: (left, right) => `What would you need from me when ${left}, but ${right}?`,
    nlLeft: [
      "je liefde voelt maar geen woorden vindt",
      "je ruimte nodig hebt",
      "je bevestiging wilt zonder erom te vragen",
      "je iets dwarszit dat klein klinkt"
    ],
    enLeft: [
      "you feel love but cannot find words",
      "you need space",
      "you want reassurance without asking for it",
      "something bothers you that sounds small"
    ],
    nlRight: [
      "je niet needy wilt lijken",
      "ik het niet vanzelf merk",
      "we net een leuke dag hebben",
      "je zelf nog twijfelt waarom",
      "je denkt dat ik het verkeerd begrijp",
      "je liever sterk wilt overkomen"
    ],
    enRight: [
      "you do not want to seem needy",
      "I do not notice it by myself",
      "we just had a good day",
      "you still doubt why",
      "you think I will understand it wrong",
      "you would rather seem strong"
    ]
  },
  {
    category: "Relationship",
    count: 24,
    nlTemplate: (left, right) => `Welke versie van ons kies je: ${left}, of ${right}?`,
    enTemplate: (left, right) => `Which version of us do you choose: ${left}, or ${right}?`,
    nlLeft: [
      "rustig maar soms te stil",
      "eerlijk maar soms ongemakkelijk",
      "vrij maar soms onzeker",
      "hecht maar soms intens"
    ],
    enLeft: [
      "calm but sometimes too quiet",
      "honest but sometimes awkward",
      "free but sometimes uncertain",
      "close but sometimes intense"
    ],
    nlRight: [
      "spannend maar minder stabiel",
      "lief maar soms te voorzichtig",
      "veilig maar minder verrassend",
      "ambitieus maar sneller moe",
      "grappig maar soms ontwijkend",
      "serieus maar dieper verbonden"
    ],
    enRight: [
      "exciting but less stable",
      "sweet but sometimes too careful",
      "safe but less surprising",
      "ambitious but tired faster",
      "funny but sometimes avoidant",
      "serious but more deeply connected"
    ]
  }
];

Object.assign(horrorDeckNl, { Relationship: [] });
Object.assign(horrorDeckEn, { Relationship: [] });

Object.keys(horrorDeckNl).forEach((category) => {
  horrorDeckNl[category] = [];
  horrorDeckEn[category] = [];
});

[...mindfuckQuestionSets, ...moreMindfuckQuestionSets, ...relationshipQuestionSets].forEach((set) => {
  const { nlItems, enItems } = buildExtraQuestions(set);
  horrorDeckNl[set.category].push(...nlItems);
  horrorDeckEn[set.category].push(...enItems);
});

Object.keys(rawQuestions).forEach((category) => {
  delete rawQuestions[category];
});

Object.entries(horrorDeckEn).forEach(([category, items]) => {
  rawQuestions[category] = {
    mood: ["Cash", "Funny", "Chaos"].includes(category) ? "Light" : ["Choices", "Impossible", "Dares", "Flirty"].includes(category) ? "Bold" : "Deep",
    items
  };
});

Object.keys(dutchQuestionDeck).forEach((category) => {
  delete dutchQuestionDeck[category];
});

Object.assign(dutchQuestionDeck, horrorDeckNl);

Object.assign(uiCopy.en.filters, {
  Love: "Love",
  Relationship: "Relationship",
  Deep: "Deep",
  Weird: "Mindbend",
  Cash: "Money",
  Choices: "Choices",
  Impossible: "Impossible",
  Dares: "Challenges",
  Chaos: "Chaos",
  Funny: "Jokes",
  Future: "Future",
  Flirty: "Tension",
  Wildcard: "Random"
});

Object.assign(uiCopy.nl.filters, {
  Love: "Liefde",
  Relationship: "Relatie",
  Deep: "Diep",
  Weird: "Mindfuck",
  Cash: "Geld",
  Choices: "Keuzes",
  Impossible: "Onmogelijk",
  Dares: "Challenges",
  Chaos: "Chaos",
  Funny: "Grappen",
  Future: "Toekomst",
  Flirty: "Spanning",
  Wildcard: "Random"
});

Object.assign(generatedTemplates, {
  Love: [
    () => `What if ${pick(["a photo", "a mirror", "a voice note", "a locked door"])} knew something about us?`,
    () => `What would make a sweet moment with me feel scary?`,
    () => `What warning would a stranger give us tonight?`
  ],
  Deep: [
    () => `What truth would be hardest to hear in the dark?`,
    () => `What fear gets stronger when everything is quiet?`,
    () => `What memory would you not want to find written down?`
  ],
  Weird: [
    () => `What if ${pick(["the window", "your phone", "the mirror", "the clock"])} suddenly showed my name?`,
    () => `What if we heard ${pick(["footsteps", "whispering", "a knock", "breathing"])} from the wrong room?`,
    () => `What if ${pick(["a stranger", "future you", "a child", "my voice"])} warned you about tonight?`
  ],
  Cash: [
    () => `For $${pick(["100", "1,000", "10,000", "100,000"])}: would you open a door that knocks back?`,
    () => `For $${pick(["500", "5,000", "50,000"])}: would you sleep with no curtains and no lights?`,
    () => `How much money would it take to answer a call from your own number?`
  ],
  Choices: [
    () => `Would you rather hear ${pick(["footsteps", "whispers", "scratching"])} or see ${pick(["a shadow", "a face", "a handprint"])}?`,
    () => `Would you rather know the secret or stay safe?`,
    () => `Would you rather open the wrong door or ignore the right warning?`
  ],
  Impossible: [
    () => `Would you save ${pick(["one person you love", "yourself", "your partner"])} or ${pick(["ten strangers", "a bus full of families", "people who will never know your name"])}?`,
    () => `Would you choose the truth that destroys peace, or the lie that saves tonight?`,
    () => `Would you rather be hated for the right choice or loved for the wrong one?`
  ],
  Dares: [
    () => `Dare: whisper "${pick(["do not open it", "we should leave", "it knows us"])}" like you mean it.`,
    () => `Dare: point at ${pick(["a corner", "a door", "a window", "an object"])} and say why it is suspicious.`,
    () => `Dare: make a six-word warning for us.`
  ],
  Chaos: [
    () => `What is our worst decision if ${pick(["the lights go out", "the phone rings", "someone knocks"])}?`,
    () => `What would make us panic first in ${pick(["a forest", "a hallway", "a basement", "an empty hotel"])}?`,
    () => `What object here would betray us in a horror movie?`
  ],
  Funny: [
    () => `How would we ruin a scary scene with ${pick(["snacks", "arguing", "bad jokes", "singing"])}?`,
    () => `What would be our dumb ghost-hunting rule?`,
    () => `What snack saves us from the monster?`
  ],
  Future: [
    () => `What would future-us warn us about?`,
    () => `What room should our future house never have?`,
    () => `What photo from the future would scare you most?`
  ],
  Flirty: [
    () => `What whispered sentence would feel tense in the dark?`,
    () => `What makes mystery attractive instead of scary?`,
    () => `What would you do if I said: come closer, but do not look back?`
  ],
  Wildcard: [
    () => `What question should never be asked after midnight?`,
    () => `Which superstition would you follow tonight?`,
    () => `What object would you never take from an abandoned house?`
  ]
});

Object.assign(generatedTemplatesNl, {
  Love: [
    () => `Wat als ${pick(["een foto", "een spiegel", "een voice memo", "een gesloten deur"])} iets over ons wist?`,
    () => `Wat maakt een lief moment met mij ineens eng?`,
    () => `Welke waarschuwing zou een vreemde ons vanavond geven?`
  ],
  Deep: [
    () => `Welke waarheid wil je niet horen in het donker?`,
    () => `Welke angst wordt groter als alles stil is?`,
    () => `Welke herinnering wil je niet op papier terugvinden?`
  ],
  Weird: [
    () => `Wat als ${pick(["het raam", "je telefoon", "de spiegel", "de klok"])} ineens mijn naam laat zien?`,
    () => `Wat als wij ${pick(["voetstappen", "gefluister", "geklop", "ademhaling"])} uit de verkeerde kamer horen?`,
    () => `Wat als ${pick(["een vreemde", "future-you", "een kind", "mijn stem"])} je waarschuwt voor vanavond?`
  ],
  Cash: [
    () => `Voor ${pick(["100", "1.000", "10.000", "100.000"])} euro: open je een deur die terugklopt?`,
    () => `Voor ${pick(["500", "5.000", "50.000"])} euro: slaap je zonder gordijnen en zonder licht?`,
    () => `Hoeveel geld moet je krijgen om op te nemen als je eigen nummer belt?`
  ],
  Choices: [
    () => `Wat kies je: ${pick(["voetstappen", "gefluister", "gekrab"])} horen, of ${pick(["een schaduw", "een gezicht", "een handafdruk"])} zien?`,
    () => `Wat kies je: het geheim weten, of veilig blijven?`,
    () => `Wat kies je: de verkeerde deur openen, of de juiste waarschuwing negeren?`
  ],
  Impossible: [
    () => `Wat kies je: ${pick(["iemand van wie je houdt", "jezelf", "je partner"])} redden, of ${pick(["tien vreemden", "een bus vol gezinnen", "mensen die jouw naam nooit weten"])}?`,
    () => `Wat kies je: de waarheid die rust kapotmaakt, of de leugen die vanavond redt?`,
    () => `Wat kies je: gehaat worden om de juiste keuze, of geliefd worden om de foute?`
  ],
  Dares: [
    () => `Dare: fluister "${pick(["doe hem niet open", "we moeten weg", "het kent ons"])}" alsof je het meent.`,
    () => `Dare: wijs naar ${pick(["een hoek", "een deur", "een raam", "een object"])} en zeg waarom het verdacht is.`,
    () => `Dare: maak een waarschuwing voor ons in zes woorden.`
  ],
  Chaos: [
    () => `Wat is onze slechtste keuze als ${pick(["de lampen uitgaan", "de telefoon gaat", "iemand klopt"])}?`,
    () => `Wat laat ons als eerste panieken in ${pick(["een bos", "een gang", "een kelder", "een leeg hotel"])}?`,
    () => `Welk object hier verraadt ons in een horrorfilm?`
  ],
  Funny: [
    () => `Hoe verpesten wij een enge scene met ${pick(["snacks", "ruzie", "slechte grappen", "zingen"])}?`,
    () => `Wat is onze domme ghost-hunting-regel?`,
    () => `Welke snack redt ons van het monster?`
  ],
  Future: [
    () => `Waarvoor zou future-us ons waarschuwen?`,
    () => `Welke kamer mag ons toekomstige huis nooit hebben?`,
    () => `Welke foto uit de toekomst maakt jou het bangst?`
  ],
  Flirty: [
    () => `Welke fluisterzin voelt spannend in het donker?`,
    () => `Wat maakt mysterie aantrekkelijk in plaats van eng?`,
    () => `Wat doe je als ik zeg: kom dichterbij, maar kijk niet om?`
  ],
  Wildcard: [
    () => `Welke vraag mag je nooit na middernacht stellen?`,
    () => `Welk bijgeloof zou je vanavond volgen?`,
    () => `Welk object neem je nooit mee uit een verlaten huis?`
  ]
});

Object.assign(generatedTemplates, {
  Love: [
    () => `What would change if ${pick(["honesty", "comfort", "trust", "freedom"])} mattered more than being right?`,
    () => `What would you choose if love made ${pick(["one truth", "one habit", "one excuse", "one doubt"])} impossible to hide?`,
    () => `Which small relationship rule would break your brain if we followed it for one month?`
  ],
  Relationship: [
    () => `What should we do differently when ${pick(["one of us shuts down", "we both want to be right", "life gets busy", "a small thing keeps returning"])}?`,
    () => `Which agreement would protect us from ${pick(["silent resentment", "lazy apologies", "old patterns", "guessing instead of asking"])}?`,
    () => `What do you need from me when you are ${pick(["overthinking", "quiet", "stressed", "trying to stay strong"])}?`
  ],
  Deep: [
    () => `Which truth would you choose if the reason mattered more than the answer?`,
    () => `What part of yourself is hardest to explain without making it smaller?`,
    () => `What would you admit if nobody could judge the answer, only the honesty?`
  ],
  Weird: [
    () => `What if your ${pick(["memory", "mood", "taste", "pride"])} was trying to protect you from a better choice?`,
    () => `What if the answer changed every time you explained it?`,
    () => `What if being certain was the least smart option?`
  ],
  Cash: [
    () => `For $${pick(["100", "1,000", "10,000", "100,000"])}: would you say one uncomfortable truth out loud?`,
    () => `For $${pick(["500", "5,000", "50,000"])}: would you let the other person choose your answer?`,
    () => `How much money would it take to give up one useless pride for a year?`
  ],
  Choices: [
    () => `Would you rather know the reason or keep the peace?`,
    () => `Would you rather be right and misunderstood, or wrong and loved?`,
    () => `Would you rather choose fast and honest, or slow and perfect?`
  ],
  Impossible: [
    () => `Would you choose the truth that costs peace, or the lie that costs self-respect?`,
    () => `Would you disappoint someone else or betray yourself?`,
    () => `Would you keep the easy life or take the answer you cannot ignore?`
  ],
  Dares: [
    () => `Challenge: answer in three words, then explain the missing part.`,
    () => `Challenge: give the opposite answer first, then your real answer.`,
    () => `Challenge: let the other person guess your choice before you explain.`
  ],
  Chaos: [
    () => `What if both answers are right, but only one reason is honest?`,
    () => `What if the funniest answer is also the most true?`,
    () => `What if nobody may say "it depends" for the next question?`
  ],
  Funny: [
    () => `What is dumber: winning the argument or saving the mood?`,
    () => `Which tiny opinion would you defend like it is a life philosophy?`,
    () => `What answer sounds stupid until you explain it too well?`
  ],
  Future: [
    () => `What would future-us say was a small choice with a huge effect?`,
    () => `Which promise sounds romantic now but needs a smarter version later?`,
    () => `What would we start today if we were not trying to look cool?`
  ],
  Flirty: [
    () => `What is more tense: eye contact after honesty, or silence before an answer?`,
    () => `Which truth would feel bold but still sweet?`,
    () => `What would you admit if the answer had to be playful and honest?`
  ],
  Wildcard: [
    () => `Which breaks your brain more: choice or chance?`,
    () => `What if your best reason is not your real reason?`,
    () => `Is a good lie better than a truth used badly?`
  ]
});

Object.assign(generatedTemplatesNl, {
  Love: [
    () => `Wat verandert er als ${pick(["eerlijkheid", "rust", "vertrouwen", "vrijheid"])} belangrijker is dan gelijk krijgen?`,
    () => `Wat kies je als liefde ${pick(["een waarheid", "een gewoonte", "een smoes", "een twijfel"])} onmogelijk maakt om te verbergen?`,
    () => `Welke kleine relatie-regel breekt je hoofd als we hem een maand volgen?`
  ],
  Relationship: [
    () => `Wat moeten wij anders doen wanneer ${pick(["een van ons dichtklapt", "we allebei gelijk willen", "het leven druk wordt", "een klein ding blijft terugkomen"])}?`,
    () => `Welke afspraak beschermt ons tegen ${pick(["stille irritatie", "luie excuses", "oude patronen", "raden in plaats van vragen"])}?`,
    () => `Wat heb je van mij nodig als je ${pick(["te veel nadenkt", "stil wordt", "stress hebt", "sterk probeert te blijven"])}?`
  ],
  Deep: [
    () => `Welke waarheid kies je als de reden belangrijker is dan het antwoord?`,
    () => `Welk deel van jezelf is het moeilijkst uit te leggen zonder het kleiner te maken?`,
    () => `Wat zou je toegeven als niemand het antwoord mag beoordelen, alleen de eerlijkheid?`
  ],
  Weird: [
    () => `Wat als je ${pick(["geheugen", "mood", "smaak", "trots"])} jou probeert te beschermen tegen een betere keuze?`,
    () => `Wat als het antwoord verandert elke keer dat je het uitlegt?`,
    () => `Wat als zeker zijn de minst slimme optie is?`
  ],
  Cash: [
    () => `Voor ${pick(["100", "1.000", "10.000", "100.000"])} euro: zeg je een ongemakkelijke waarheid hardop?`,
    () => `Voor ${pick(["500", "5.000", "50.000"])} euro: laat je de ander jouw antwoord kiezen?`,
    () => `Hoeveel geld moet je krijgen om een nutteloze trots een jaar op te geven?`
  ],
  Choices: [
    () => `Wat kies je: de reden weten, of de rust houden?`,
    () => `Wat kies je: gelijk hebben en niet begrepen worden, of fout zitten en geliefd blijven?`,
    () => `Wat kies je: snel en eerlijk, of langzaam en perfect?`
  ],
  Impossible: [
    () => `Wat kies je: de waarheid die rust kost, of de leugen die zelfrespect kost?`,
    () => `Wat kies je: iemand teleurstellen, of jezelf verraden?`,
    () => `Wat kies je: het makkelijke leven, of het antwoord dat je niet kunt negeren?`
  ],
  Dares: [
    () => `Challenge: antwoord in drie woorden en leg daarna uit wat mist.`,
    () => `Challenge: geef eerst het tegenovergestelde antwoord en daarna je echte antwoord.`,
    () => `Challenge: laat de ander jouw keuze raden voordat je uitlegt.`
  ],
  Chaos: [
    () => `Wat als beide antwoorden kloppen, maar maar een reden eerlijk is?`,
    () => `Wat als het grappigste antwoord ook het meest waar is?`,
    () => `Wat als niemand bij de volgende vraag "ligt eraan" mag zeggen?`
  ],
  Funny: [
    () => `Wat is dommer: de discussie winnen of de sfeer redden?`,
    () => `Welke mini-mening verdedig jij alsof het een levensfilosofie is?`,
    () => `Welk antwoord klinkt dom totdat je het te goed uitlegt?`
  ],
  Future: [
    () => `Welke kleine keuze zou future-us later enorm noemen?`,
    () => `Welke belofte klinkt nu romantisch maar heeft later een slimmere versie nodig?`,
    () => `Waar zouden we vandaag mee beginnen als we niet cool probeerden te lijken?`
  ],
  Flirty: [
    () => `Wat is spannender: oogcontact na eerlijkheid, of stilte voor een antwoord?`,
    () => `Welke waarheid voelt brutaal maar nog steeds lief?`,
    () => `Wat zou je toegeven als het antwoord speels en eerlijk moet zijn?`
  ],
  Wildcard: [
    () => `Wat breekt je hoofd meer: keuze of toeval?`,
    () => `Wat als je beste reden niet je echte reden is?`,
    () => `Is een goede leugen beter dan een waarheid die verkeerd gebruikt wordt?`
  ]
});

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
  language: loadLanguage(),
  filters: new Set(["All"]),
  mood: "Any",
  queue: [],
  history: [],
  historyIndex: -1,
  turn: 0,
  visualPulse: 0,
  seen: new Set(),
  seenTexts: new Set(),
  saved: loadSaved()
};

const els = {
  visualizer: document.querySelector("#visualizer"),
  questionStage: document.querySelector(".question-stage"),
  questionCard: document.querySelector(".question-card"),
  brandSubtitle: document.querySelector("#brandSubtitle"),
  languageButton: document.querySelector("#languageButton"),
  roundNumber: document.querySelector("#roundNumber"),
  seenCount: document.querySelector("#seenCount"),
  deckLeft: document.querySelector("#deckLeft"),
  roundLabel: document.querySelector("#roundLabel"),
  seenLabel: document.querySelector("#seenLabel"),
  queuedLabel: document.querySelector("#queuedLabel"),
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
  playersTitle: document.querySelector("#playersTitle"),
  playerOneLabel: document.querySelector("#playerOneLabel"),
  playerTwoLabel: document.querySelector("#playerTwoLabel"),
  categoryTitle: document.querySelector("#categoryTitle"),
  moodTitle: document.querySelector("#moodTitle"),
  savedTitle: document.querySelector("#savedTitle"),
  nextButtonText: document.querySelector("#nextButtonText"),
  spaceKeyLabel: document.querySelector("#spaceKeyLabel"),
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
  const categoryMatch = state.filters.has("All") || state.filters.has(question.category);
  const moodMatch = state.mood === "Any" || question.mood === state.mood;
  return categoryMatch && moodMatch;
}

function filteredBaseDeck() {
  const exactMatches = deck.filter(matchesFilters);
  if (exactMatches.length > 0) {
    return exactMatches;
  }

  return deck.filter((question) => state.filters.has("All") || state.filters.has(question.category));
}

function generateQuestion(categoryOverride) {
  const selectedCategories = state.filters.has("All") ? null : state.filters;
  const possibleCategories = Object.keys(generatedTemplates).filter((category) => {
    const categoryMatch = categoryOverride ? category === categoryOverride : !selectedCategories || selectedCategories.has(category);
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
    nlText: generatedTemplatesNl[category] ? pick(generatedTemplatesNl[category])() : undefined,
    generated: true
  };
}

function normalizeQuestionText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[^\p{L}\p{N} $€.,!?-]/gu, "")
    .trim();
}

function questionTextKeys(question) {
  const displayedText = state.language === "nl" ? questionText(question) : "";
  return [question.text, question.nlText, displayedText]
    .filter(Boolean)
    .map(normalizeQuestionText)
    .filter(Boolean);
}

function hasSeenQuestionText(question, extraSeen = new Set()) {
  return questionTextKeys(question).some((key) => state.seenTexts.has(key) || extraSeen.has(key));
}

function markQuestionSeen(question) {
  questionTextKeys(question).forEach((key) => state.seenTexts.add(key));
}

function generateUniqueQuestions(count, categoryOverride) {
  const generated = [];
  const generatedTexts = new Set();
  let attempts = 0;
  const maxAttempts = count * 120;

  while (generated.length < count && attempts < maxAttempts) {
    attempts += 1;
    const candidate = generateQuestion(categoryOverride);
    if (hasSeenQuestionText(candidate, generatedTexts)) {
      continue;
    }
    questionTextKeys(candidate).forEach((key) => generatedTexts.add(key));
    generated.push(candidate);
  }

  return generated;
}

function refillQueue() {
  const base = filteredBaseDeck();
  const unseen = base.filter((question) => !state.seen.has(question.id) && !hasSeenQuestionText(question));
  const source = unseen.length > 0 ? unseen : base;
  const generated = generateUniqueQuestions(24);
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
  question.followIndex = Math.floor(Math.random() * 3);
  state.history.push(question);
  state.historyIndex = state.history.length - 1;
  state.seen.add(question.id);
  markQuestionSeen(question);
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
  const defaults = uiCopy[state.language].defaultPlayers;
  const first = els.playerOne.value.trim() || defaults[0];
  const second = els.playerTwo.value.trim() || defaults[1];
  return [first, second];
}

function turnText(turnIndex = state.turn) {
  const players = getPlayers();
  const asker = players[turnIndex];
  const answerer = players[1 - turnIndex];
  return uiCopy[state.language].asking(asker, answerer);
}

function categoryLabel(category) {
  const labels = uiCopy[state.language].filters;
  if (labels[category]) {
    return labels[category];
  }

  if (category === "Funny") {
    return "Jokes";
  }

  if (category === "Wildcard") {
    return "Wild";
  }

  if (category === "Mindbend") {
    return "Weird";
  }

  return category;
}

function stableIndex(value, length) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) >>> 0;
  }

  return hash % length;
}

function questionDeckIndex(question) {
  const match = String(question.id || "").match(/-(\d+)$/);
  return match ? Number(match[1]) : null;
}

function questionText(question) {
  if (state.language === "en") {
    return question.text;
  }

  if (question.nlText) {
    return question.nlText;
  }

  const list = dutchQuestionDeck[question.category] || dutchQuestionDeck.Wildcard;
  const index = questionDeckIndex(question);
  if (Number.isInteger(index) && index < list.length) {
    return list[index];
  }

  return list[stableIndex(question.id || question.text, list.length)];
}

function followText(question) {
  const list = state.language === "nl"
    ? (followUpsNl[question.category] || followUpsNl.Love)
    : (followUps[question.category] || followUps.Love);
  const index = Number.isInteger(question.followIndex)
    ? question.followIndex
    : stableIndex(question.id || question.text, list.length);

  return list[index % list.length];
}

function render() {
  const question = currentQuestion();
  if (!question) {
    return;
  }

  const style = categoryStyles[question.category] || categoryStyles.Love;
  els.categoryBadge.textContent = categoryLabel(question.category);
  els.categoryBadge.style.background = style.background;
  els.categoryBadge.style.color = style.color;
  els.turnBadge.textContent = turnText(question.turn ?? state.turn);
  els.moodLabel.textContent = uiCopy[state.language].moods[question.mood] || moodCopy[question.mood] || question.mood;
  els.questionText.textContent = questionText(question);
  els.followText.textContent = followText(question);
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
      text: question.text,
      nlText: question.nlText
    });
  }

  saveSaved();
  render();
}

function renderSaved() {
  if (state.saved.length === 0) {
    els.savedList.innerHTML = `<p class="empty-state">${escapeHtml(uiCopy[state.language].emptySaved)}</p>`;
    return;
  }

  els.savedList.innerHTML = state.saved.map((item) => {
    const safeCategory = escapeHtml(categoryLabel(item.category));
    const safeText = escapeHtml(questionText({
      category: item.category,
      text: item.text,
      id: item.text,
      nlText: item.nlText
    }));
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

function loadLanguage() {
  try {
    const savedLanguage = localStorage.getItem("love-loop-language");
    return savedLanguage === "en" || savedLanguage === "nl" ? savedLanguage : "nl";
  } catch {
    return "nl";
  }
}

function saveLanguage() {
  try {
    localStorage.setItem("love-loop-language", state.language);
  } catch {
    // Language switching still works for the current session.
  }
}

function setText(element, value) {
  if (element) {
    element.textContent = value;
  }
}

function setButtonTitle(button, value) {
  if (!button) {
    return;
  }

  button.title = value;
  button.setAttribute("aria-label", value);
}

function replaceDefaultPlayerNames(previousLanguage) {
  const oldDefaults = uiCopy[previousLanguage].defaultPlayers;
  const newDefaults = uiCopy[state.language].defaultPlayers;

  if (els.playerOne.value === oldDefaults[0]) {
    els.playerOne.value = newDefaults[0];
  }

  if (els.playerTwo.value === oldDefaults[1]) {
    els.playerTwo.value = newDefaults[1];
  }
}

function updateSegmentLabels(container, values) {
  container.querySelectorAll("button").forEach((button) => {
    const key = button.dataset.filter || button.dataset.mood;
    if (values[key]) {
      button.textContent = values[key];
    }
  });
}

function applyLanguage(previousLanguage = state.language) {
  const copy = uiCopy[state.language];
  if (document.documentElement) {
    document.documentElement.lang = state.language;
  }

  setText(els.brandSubtitle, copy.brandSubtitle);
  setText(els.roundLabel, copy.round);
  setText(els.seenLabel, copy.seen);
  setText(els.queuedLabel, copy.queued);
  setText(els.playersTitle, copy.players);
  setText(els.playerOneLabel, copy.playerOne);
  setText(els.playerTwoLabel, copy.playerTwo);
  setText(els.categoryTitle, copy.category);
  setText(els.moodTitle, copy.mood);
  setText(els.savedTitle, copy.saved);
  setText(els.clearSavedButton, copy.clear);
  setText(els.nextButtonText, copy.next);
  setText(els.spaceKeyLabel, copy.space);
  setText(els.languageButton, copy.languageButton);

  if (els.languageButton) {
    els.languageButton.title = copy.languageTitle;
    els.languageButton.setAttribute("aria-label", copy.languageTitle);
  }

  setButtonTitle(els.previousButton, copy.previousTitle);
  setButtonTitle(els.nextButton, copy.nextTitle);
  setButtonTitle(els.shuffleButton, copy.shuffleTitle);
  setButtonTitle(els.saveButton, copy.saveTitle);
  updateSegmentLabels(els.categoryFilters, copy.filters);
  updateSegmentLabels(els.moodFilters, copy.moods);
  replaceDefaultPlayerNames(previousLanguage);
  render();
}

function toggleLanguage() {
  const previousLanguage = state.language;
  state.language = state.language === "nl" ? "en" : "nl";
  saveLanguage();
  applyLanguage(previousLanguage);
}

function setActiveButton(container, attribute, value) {
  container.querySelectorAll("button").forEach((button) => {
    const currentValue = button.dataset[attribute];
    const isActive = attribute === "filter"
      ? state.filters.has(currentValue)
      : currentValue === value;
    button.classList.toggle("is-active", isActive);
  });
}

function toggleCategoryFilter(filter) {
  if (filter === "All") {
    state.filters = new Set(["All"]);
    return;
  }

  if (state.filters.has("All")) {
    state.filters.delete("All");
  }

  if (state.filters.has(filter)) {
    state.filters.delete(filter);
  } else {
    state.filters.add(filter);
  }

  if (state.filters.size === 0) {
    state.filters.add("All");
  }
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
els.languageButton.addEventListener("click", toggleLanguage);
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

  toggleCategoryFilter(button.dataset.filter);
  setActiveButton(els.categoryFilters, "filter");
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

  const categories = ["All", "Love", "Deep", "Weird", "Cash", "Choices", "Dares", "Chaos", "Funny", "Future", "Flirty", "Wildcard"];
  const numericIndex = Number(event.key);
  if (numericIndex >= 1 && numericIndex <= categories.length) {
    toggleCategoryFilter(categories[numericIndex - 1]);
    setActiveButton(els.categoryFilters, "filter");
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
applyLanguage("nl");
resetRound();
startVisualizer();
