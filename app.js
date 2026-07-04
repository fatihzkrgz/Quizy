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
  Deep: { background: "rgba(76, 201, 240, 0.18)", color: "#c9f3ff" },
  Weird: { background: "rgba(245, 80, 255, 0.2)", color: "#f8c2ff" },
  Cash: { background: "rgba(84, 255, 140, 0.2)", color: "#b9ffd0" },
  Choices: { background: "rgba(255, 89, 180, 0.2)", color: "#ffc0e3" },
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
  filter: "All",
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

  for (let index = 0; index < count; index += 1) {
    let candidate = generateQuestion(categoryOverride);

    for (let attempt = 0; attempt < 18 && hasSeenQuestionText(candidate, generatedTexts); attempt += 1) {
      candidate = generateQuestion(categoryOverride);
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
  const generated = generateUniqueQuestions(24, state.filter === "All" ? undefined : state.filter);
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

  const categories = ["All", "Love", "Deep", "Weird", "Cash", "Choices", "Dares", "Chaos", "Funny", "Future", "Flirty", "Wildcard"];
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
applyLanguage("nl");
resetRound();
startVisualizer();
