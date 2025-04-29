const scenes = [
    // STORY: Quest Begins
    {
      id: "titanscurse-quest-start",
      type: "story",
      title: "The Titan's Curse - The Hunt Begins",
      questId: 3,
      panels: [
        {
          imageDescription: "Alex, Percy, Annabeth, and Thalia standing outside a military school in the snow",
          imagename:"military_school",
          dialogue: "We’re just here to help Grover find the new demigods. No monsters. Hopefully.",
          narration: "You step through the icy gates of Westover Hall. But trouble is never far behind."
        },
        {
            imageDescription: "Alex and friends standing in between of a huge party trying to find grover",
            imagename:"party_crowd",
            dialogue: "We need to find grover and get out of here.We are going to atract too many monsters.",
            narration: "You push through the crowd, but the party is too loud and crowded. where is grover?."
          },
          {
            imageDescription: "grover sitting on a chair eyeing two children-nico and bianca",
            imagename:"grover_sitting",
            dialogue: "There you are! I was looking for you guys.Those to kids are demiods..we need to get them out of here.",
            narration: "You realize that grover is right, those two kids are demigods.you decide to go to them and maybe talk them into coming with them."
          },
          {
            imageDescription: "Alex and friends go to nico and bianca and introduce themselves",
            imagename:"alex_friends_introduce",
            dialogue: "Hi! my name is Alex.I'm here to help you guys get to safer place, with absolutely no monsters you've been seeing.",
            narration: "You introduce yourself to the kids and tell them about the monsters they have been seeing. They seem to be a little scared but they are willing to come with you."
          }, 
          {
            imageDescription: "Alex, friends, nico and biana suddenly hear growling.They look worried",
            imagename:"Alex_hears_growling",
            dialogue: "I think we should get out of here. I hear growling and it doesn't sound good.",
            narration: "You hear a growling sound and you know that it is not good. You tell the kids to follow you and you all start running towards the exit of the party."
          }, 
          
        {
          imageDescription: "A manticore lunging from the shadows",
          imagename:"manticore_attack",
          dialogue: "Hope you brought your swords!",
          narration: "The trap is sprung. A Manticore attacks, All of run for the exit."
        },
        {
            imageDescription: "Alex and friends get to a cliff witha huge drop",
            imagename:"cliff",
            dialogue: "There is no place to go! We have to fight!",
            narration: "Everybody is ready to battle.The manticore is coming closer and closer. You have to fight it."
          },
          {
            imageDescription: "suddenly the amnticore charges right at annabeth and pushes her off the cliff!",
            imagename:"annabeth_falls",
            dialogue: "Noo! Annabeth!",
            narration: "The manticore charges right at annabeth and pushes her off the cliff! You are shocked and you don't know what to do. You have to fight the manticore but you also have to save annabeth."
          }
      ],
      nextScene: "battle-manticore"
    },
  
    // BATTLE: Manticore Attack
    {
      id: "battle-manticore",
      type: "battle",
      title: "Dr. Thorn's Ambush",
      questId: 3,
      imageDescription: "The Manticore looming over the snowy cliff with glowing eyes",
      imagename:"manticore_battle",
      introText: "The Manticore reveals itself as Dr. Thorn and launches a deadly ambush.",
      enemy: {
        name: "Manticore",
        level: 5,
        health: 130,
        baseDamage: 25,
        initialRage: 20,
        description: "Claws like razors, a tail full of poison—this beast doesn’t go down easy."
      },
      victoryImageDescription: "The Manticore retreating with a snarl",
      victoryimagename:"manticore_victory",
      victoryText: "You hold your ground—but Annabeth is gone. Artemis and her Hunters arrive just in time.",
      defeatImageDescription: "Percy wounded in the snow",
      defeatimageename:"Alex_wounded",
      defeatText: "You’re overwhelmed—but Artemis’s Hunters arrive and drive the Manticore away.",
      rewards: {
        drachmas: 15,
        xp: 100,
        items: []
      },
      victoryScene: "story-hunters",
      defeatScene: "story-hunters"
    },
  
    // STORY: Meet the Hunters of Artemis
    {
      id: "story-hunters",
      type: "story",
      title: "The Hunters of Artemis",
      questId: 3,
      panels: [
        {
            imageDescription: "Artemis with her silver bow, surrounded by Hunters",
            imagename:"artemis_hunters",
            dialogue: "We are the Hunters of Artemis. We’ll take it from here.",
            narration: "Artemis commands a calm authority—but she’s worried. Titans are stirring."
        },
        {
            imageDescription: "Artemis looks at Alex and friends with concern",
            imagename:"artemis_concern",  
            dialogue: "annabeth is not dead.she is captured, but to save her and the world, you need to go on a quest, while i go on mine",
            narration: "To save annabeth and the world you need to go on a quest. You are not sure if you are ready for this but you have to do it."
          },
        {
            imageDescription: "Zoe Nightshade staring coldly at Percy",
            imagename:"zoe_nightshade", 
            dialogue: "You mortals always bring disaster.",
            narration: "A tension hangs in the air. we’ll need to work together—whether you like it or not."
        }
      ],
      nextScene: "decision-join-quest"
    },
  
   // STORY: who will do the quest?
   {
    id: "who-will-do-quest",
    type: "story",
    title: "The Hunters who will do the quest?",
    questId: 3,
    panels: [
      {
          imageDescription: "all the hunters are standing in a circle and talking, while artemis is talking to Alex and friends",
          imagename:"hunters_talking",
          dialogue: "This quest will need to be taken by you,- Alex,percy,zoe nightshade and bianca.",
          narration: "You agree with a confident smmile. You are ready to take on this quest and save annabeth.But one thing is bothering you...why bianca?"
      },
      {
          imageDescription: "Alex looks at artemis with a puzzled face",
          imagename:"alex_puzzled",  
          dialogue: "why bianca? she is not ready for this, she isn't even a hunter.",
          narration: "You try to convince artemis that bianca is not ready for this quest but she doesn't listen to you."
        },
      {
          imageDescription: "artemis looks at Alex with a serious face",
          imagename:"artemis_serious", 
          dialogue: "I asked bianca to join the hunters...she agreed, i believe she is ready",
          narration: "you are surprised by the fact that bianca is now a hunter.he wonders how her brother nico will react to this."
      },
      {
        imageDescription: "Alex and group are regaining strength and getting ready for quest",
        imagename:"Alex_group_ready", 
        dialogue: "its time to get ready for the quest.",
        narration: "you feel excited and scared, you have to be brave."
    }
    ],
    nextScene: "story-pegasus"
  },
 
  
    // STORY: Ride the Pegasus
    {
      id: "story-pegasus",
      type: "story",
      title: "Blackjack to the Rescue",
      questId: 3,
      panels: [
        {
          imageDescription: "Blackjack flying over snowy mountains with Percy on his back",
          imagename:"blackjack_flying",
          dialogue: "Yo, boss! Where to? We flyin' or dyin'?",
          narration: "You fly after the group, determined to help your friends—and uncover the Titan's plans."
        },
        {
            imageDescription: "blackjack and the rest of the pegasus group are slowly getting closer to the sea",
            imagename:"blackjack_group",
            dialogue: "there he is!Nereus! he will help us find the titan.",
            narration: "You fly after the group, determined to help your friends—and uncover the Titan's plans."
          }
      ],
      nextScene: "puzzle-nereus"
    },
  
    // PUZZLE: Riddle of Nereus
    {
      id: "puzzle-nereus",
      type: "puzzle",
      title: "Old Man of the Sea",
      questId: 3,
      imagename:"nereus",
      imageDescription: "Nereus shapeshifting into a fish",
      riddle: "I have no doors, no roof, no floor,Yet treasure lies within my core.I crash and roar, yet hold no breath —Sailors fear me, and some meet death.What am I?",
      hint: "It’s not just a sea creature—it’s what Nereus is known for.",
      correctAnswer: "ocean",
      successMessage: "You cling tight to Nereus despite his transformations.",
      failureMessage: "He slips away....you have failed,but there must be another way",
      successScene: "story-artemis-trap",
      failureScene: "nereids-clue"
    },
  
    // STORY: Artemis is Captured
    {
      id: "story-artemis-trap",
      type: "story",
      title: "The Trap of the Titans",
      questId: 3,
      panels: [
        {
            imageDescription: "Alex and group settle in a small island to rest.zoe looks really sleepy",
            imagename:"rest_island",
            dialogue: "i must go to sleep now, we have to be ready for the quest tomorrow.",
            narration: "she goes to sleep when suddenly she wakes up with tears in her eyes"
          },
          {
            imageDescription: "zoe is scared",
            imagename:"zoe_scared",
            dialogue: "its artemis..shes in trouble!",
            narration: "you realise that zoe had seen a vision."
          },
        {
            imageDescription: "A vision of Artemis holding up the sky",
            imagename:"artemis_trapped",
            dialogue: "She’s holding the sky itself... to buy us time.",
            narration: "The Titans have set a cruel trap—forcing the goddess to bear an unbearable weight."
        }
      ],
      nextScene: "battle-nemean"
    },

  // PUZZLE: The clue from nereids
  {
    id: "clue-nereids",
    type: "puzzle",
    title: "The Nereids' Clue",
    questId: 3,
    imagename:"nereids",
    imageDescription: "Nereids swimming in the ocean circling around you",
    riddle: "I dance without feet,I bite without teeth.My mood shifts fast, calm or wild —Yet I cradle every ship like a child.What am I?", 
    hint: "It’s not just a sea creature—it’s what Nereus is known for.",
    correctAnswer: "waves",
    successMessage: "nereids tosses you a clue...you have succeeded.",
    failureMessage: "you have failed this too you must try again.",
    successScene: "to-the-lion",
    failureScene: "ride-pegasus"
  },
  
  // STORY: going to the nemean lion
   {
    id: "to-the-lion",
    type: "story",
    title: "Going to the nemean lion",
    questId: 3,
    panels: [
      {
          imageDescription: "Alex and group are flying on pegasus towards the nemean lion",
          imagename:"to_the_lion",
          dialogue: "if we want to save artemis,annabeth and the world we willl have to face the nemean lion on the way",
          narration: "your heart beats in excitement...this is going to be a tough battle but you are ready for it."
        },
      {
        imageDescription: "A vision of Artemis holding up the sky",
        dialogue: "She’s holding the sky itself... to buy us time.",
        narration: "The Titans have set a cruel trap—forcing the goddess to bear an unbearable weight."
      }
    ],
    nextScene: "battle-nemean"
  },

    // BATTLE: Nemean Lion
    {
      id: "battle-nemean",
      type: "battle",
      title: "The Nemean Lion",
      questId: 3,
      imageDescription: "The golden-maned lion roaring from atop a hill",
      introText: "The Lion’s hide is impenetrable. Its claws? Not so much...",
      enemy: {
        name: "Nemean Lion",
        level: 6,
        health: 150,
        baseDamage: 30,
        initialRage: 25,
        description: "Invulnerable hide, but with the right strategy, you can outsmart it."
      },
      victoryImageDescription: "The lion retreating as Percy holds a golden pelt",
      victoryText: "You distract it, strike its mouth, and drive it off. The golden pelt is yours.",
      defeatImageDescription: "The lion slamming you down",
      defeatText: "You’re nearly crushed—but Zoe blinds it with moonlight.",
      rewards: {
        drachmas: 20,
        xp: 120,
        items: [
          {
            id: "golden-pelt",
            name: "Nemean Pelt",
            description: "Provides temporary invulnerability in battle.",
            type: "armor"
          }
        ]
      },
      victoryScene: "puzzle-atlas-sky",
      defeatScene: "puzzle-atlas-sky"
    },
  
    // PUZZLE: Atlas's Burden
    {
      id: "puzzle-atlas-sky",
      type: "puzzle",
      title: "The Weight of the World",
      questId: 3,
      imageDescription: "The sky shimmering with energy above a trembling figure",
      riddle: "I do not speak, yet I can be heard. I do not hold, yet I can crush. What am I?",
      hint: "It's what's crushing Artemis.",
      correctAnswer: "sky",
      successMessage: "You take the burden—if only for a moment—and the trap is undone.",
      failureMessage: "You hesitate. Artemis groans beneath the crushing force.",
      successScene: "final-battle-atlas",
      failureScene: "final-battle-atlas"
    },
  
    // BATTLE: Final Battle with Atlas
    {
      id: "final-battle-atlas",
      type: "battle",
      title: "The Titan’s Curse",
      questId: 3,
      imageDescription: "Atlas towering over you with a massive spear",
      introText: "Atlas, the Titan General, has returned. He cannot be allowed to escape.",
      enemy: {
        name: "Atlas",
        level: 8,
        health: 200,
        baseDamage: 35,
        initialRage: 30,
        description: "Strong enough to crush gods—but his arrogance may be his weakness."
      },
      victoryImageDescription: "Atlas beneath the sky once more",
      victoryText: "You trick him into reclaiming the burden. The curse returns to its rightful bearer.",
      defeatImageDescription: "Atlas swinging you across the mountain",
      defeatText: "You fall—but Artemis takes the sky back just in time, saving you.",
      rewards: {
        drachmas: 30,
        xp: 200,
        items: []
      },
      victoryScene: "epilogue-bianca",
      defeatScene: "epilogue-bianca"
    },
  
    // FINAL STORY: Bianca’s Fate
    {
      id: "epilogue-bianca",
      type: "story",
      title: "A Sister’s Farewell",
      questId: 3,
      panels: [
        {
          imageDescription: "Nico standing alone, holding a figurine",
          dialogue: "Bianca is gone. She died a hero—but she promised she'd come back...",
          narration: "You try to comfort Nico, but the darkness is already creeping into his heart."
        },
        {
          imageDescription: "Percy watching Nico walk away from camp",
          dialogue: "You said you'd protect her. You lied.",
          narration: "The prophecy looms. The Titan’s Curse has only just begun."
        }
      ],
      nextScene: "camp-halfblood-return"
    }
  ];
  