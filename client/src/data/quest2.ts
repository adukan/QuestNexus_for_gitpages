  
  const scenes = [
  // STORY - Arriving at Camp Half-Blood after attack
    {
      id: "sea-of-monsters-intro",
      type: "story",
      title: "The Sea of Monsters - Camp Under Siege",
      questId: 2,
      panels: [
        { 
            imageDescription: "Alex and friends enjoying camp half-blood.",
            imagename: "alex_camp_halfblood",
            dialogue: "Aah...It's another great morning at camp half-blood!",
            narration: "Your friends are all around you, enjoying the sun and the camp activities."
        },
        {
            imageDescription: "Camp Half-Blood borders smoldering, smoke in the air",
            imagename: "camp_borders_burning",
            dialogue: "Camp's magical borders have been broken. Something terrible is happening.",
            narration: "You rush to Camp Half-Blood only to find chaos and destruction. Trees are burning and satyrs are injured."
        },
        {
            imageDescription: "Colchis Bull stomping into the clearing with fire trailing its steps",
            imagename: "colchis_bull",
            dialogue: "It’s a Colchis Bull! Everyone get back!",
            narration: "The ground shakes as the massive metal creature charges through, flames licking its bronze hide."
        }
      ],
      nextScene: "colchis-bull-battle"
    },

    // BATTLE - Colchis Bull
    {
      id: "colchis-bull-battle",
      type: "battle",
      title: "Battle with the Colchis Bull",
      questId: 2,
      imageDescription: "The Colchis Bull breathing fire as campers prepare to fight",
     imagename: "colchis_bull_battle",
      introText: "The Colchis Bull is tearing through Camp! You must help stop it before it destroys everything!",
      enemy: {
        name: "Colchis Bull",
        level: 4,
        health: 120,
        baseDamage: 25,
        initialRage: 30,
        description: "A fire-breathing mechanical bull crafted by Hephaestus. Extremely tough and dangerous."
      },
      victoryImageDescription: "The bull crumbling into molten metal",
      victoryimagename: "colchis_bull_crumbles",
      victoryText: "You've defeated the Colchis Bull! The camp is saved, but the damage is great.",
      defeatImageDescription: "The bull knocks the player back, fire everywhere",
      defeatimagename: "colchis_bull_defeat",
      defeatText: "You’re overwhelmed, but Tyson jumps in to save you at the last second. The bull retreats.",
      rewards: {
        drachmas: 10,
        xp: 70,
        items: [
            {
                id: "bull-gear",
                name: "Molten Bull Gear",
                description: "Still warm from the Colchis Bull's body. Could be useful later.",
                type: "collectible"
            }
        ]
      },
      victoryScene: "chiron-explains-fleece",
      defeatScene: "recovery-camp-one"
    },

// STORY - Recovery camp
    {
        id: "recovery-camp-one",
        type: "story",
        title: "Recovery Camp",
        questId: 2,
        panels:[
            {
                imageDescription: "Alex lies on the bed in the infirmary, bandaged up", 
                imagename: "alex_infirmary",
                dialogue: "What happened?",
                narration: "You wake up in the infirmary, bandaged and sore. Your friends are waiting for you."
            },
            {
                imageDescription: "Chiron looking worried",
                imagename: "chiron_worried",
                dialogue: "The camp is in danger. We need to figure out how to save it.",
                narration: "Chiron’s voice is grim. You’ve never seen him so worried."
            },
            {
                imageDescription: "Chiron tells you to gather your friends",
                imagename: "chiron_gather_friends",
                dialogue: "Gather your friends. We need to discuss the situation.",
                narration: "You nod, knowing this is serious. You need to be ready for anything."
            }
        ],
        nextScene: "chiron-explains-fleece"
    },
    
        // STORY - Chiron explains about the Fleece
    {
        id: "chiron-explains-fleece",
        type: "story",
        title: "The Golden Fleece",
        questId: 2,
        panels: [
            {
                imageDescription: "Campers gathered around Chiron in the Big House",
                imagename: "big_house_group",
                dialogue: "The borders failed because Thalia’s tree is dying. Only the Golden Fleece can save it.",
                narration: "Chiron’s voice is grim. You’ve never seen him so worried."
            },
            {
                imageDescription: "Map showing the Sea of Monsters",
                imagename: "map_sea_of_monsters",
                dialogue: "The Fleece is located on Polyphemus’s island in the Sea of Monsters. You must retrieve it.",
                narration: "The quest is dangerous, but necessary. If the Fleece isn’t recovered, the camp is doomed."
            },
            {
                imageDescription: "Chiron looks at you and your friends with a serious expression",
                imagename: "chiron_serious",
                dialogue: "I choose you - Alex, Annabeth, Percy, Grover and Tyson to go on this quest.",
                narration: "You feel a mix of excitement and fear. This is a big responsibility."
            },
            {
                imageDescription: "Alex, Annabeth, Percy, Grover and Tyson standing together",
                imagename: "friends_standing_together",
                dialogue: "We can’t let the camp fall.",
                narration: "You and your friends step forward, ready to take on the challenge."
            },
            {
                imageDescription: "Chiron nodding in approval",
                imagename: "chiron_nodding",
                dialogue: "Good. You’ll need all your skills to survive the Sea of Monsters.",
                narration: "Chiron gives you a serious look. He knows this will be a tough journey."
            }
        ],
        nextScene: "ship-departure"
    },

// STORY - Recovery camp
    {
      id: "recovery-camp-two",
      type: "story",
      title: "Recovery camp",
      questId: 2,
      panels: [
            {
                imageDescription: "Alex lies on the bed in the infirmary, bandaged up", 
                imagename: "alex_infirmary",
                dialogue: "I messed up. I should have been more careful.",
                narration: "You wake up in the infirmary, bandaged and sore. your friends are waiting for you."
            },
            {
                imageDescription: "Percy looking at you with concern",
                imagename: "percy_concerned",
                dialogue: "You’re okay. We need to get back to the quest.", 
                narration: "You are still shaken but your friends are here to help. You decide to get back to the quest."
            }, 
        ],
      nextScene: "ship-departure"
    },

// STORY - Departure on the ship
    {
      id: "ship-departure",
      type: "story",
      title: "Journey Begins",
      questId: 2,
      panels: [
            {
                imageDescription: "Friends boarding the ship, looking determined",
                imagename: "friends_boarding_ship",
                dialogue: "We’re ready. Let’s go get that Fleece.",
                narration: "The journey begins, but trouble is already brewing beneath the surface."
            },
            {
                imageDescription: "Luke's ship is seen from a distance",
                imagename: "luke_ship",
                dialogue: "You'll have to be careful. The Sea of Monsters is full of dangers.",
                narration: "You cast off, feeling a mix of excitement and fear."
            }
        ],
      nextScene: "sirens-hydra-choice"
    },
   

    // DECISION - Sirens or Hydra
    {
        id: "sirens-hydra-choice",
        type: "decision",
        title: "A Fork in the Ocean",
        questId: 2,
        imageDescription: "The ocean ahead splitting into two currents",
        imagename: "current_splitting_ocean",
        dialogue: "One way leads to the Sirens, while the other one to the Hydra.",
        narration: "Annabeth and Tyson argue over which path is safer.",
        followupDialogue: "You must choose quickly. The currents are strong.",
        choices: [
                {
                id: "sirens",
                title: "Face the Sirens",
                description: "Temptation lies ahead. But, so might knowledge.",
                hint: "Puzzle-focused path.",
                nextScene: "sirens-riddle"
                },
                {
                id: "hydra",
                title: "Face the Hydra",
                description: "A deadly multi-headed beast awaits.",
                hint: "Combat-focused path.",
                nextScene: "hydra-battle"
                }
            ],
        defaultNextScene: "sirens-riddle"
    },

    // PUZZLE - Sirens Riddle
    {
        id: "sirens-riddle",
        type: "puzzle",
        title: "Lure of the Sirens",
        questId: 2,
        imageDescription: "Beautiful Sirens singing on rocky shores",
        imagename: "beautiful_sirens",
        riddle: "I whisper truths, reveal your fate,\nBut listen close and risk the gate.\nWhat am I?",
        hint: "Temptation can be dangerous.",
        correctAnswer: "sirensong",
        successMessage: "You resist their call and uncover a clue to Polyphemus’s lair.",
        failureMessage: "The Sirens’ song is too strong. You fail to give the right answer. You will have to face the Hydra.",
        successScene: "approach-island",
        failureScene: "hydra-battle"
    },

    // BATTLE - Hydra
    {
        id: "hydra-battle",
        type: "battle",
        title: "Hydra Battle",
        questId: 2,
        imageDescription: "The Hydra rising from the sea with many heads",
        imagename: "hydra_rising_sea",
        introText: "A monstrous Hydra blocks your path. Every head you cut grows back two more!",
        enemy: {
            name: "Hydra",
            level: 5,
            health: 140,
            baseDamage: 18,
            initialRage: 25,
            description: "A regenerating sea monster. It requires strategy to defeat."
        },
        victoryImageDescription: "Hydra collapsing into the sea",
        victoryimagename: "hydra_collapsing",
        victoryText: "The Hydra sinks beneath the waves. You move on toward the island.",
        defeatImageDescription: "Player caught by Hydra tendrils",
        defeatimagename: "hydra_defeat",
        defeatText: "You’re knocked out but saved by Tyson. You continue, shaken but alive.",
        rewards: {
            drachmas: 15,
            xp: 80,
            items: [
                {
                    id: "hydra-scale",
                    name: "Hydra Scale",
                    description: "A rare scale from the sea beast. Magical properties unknown.",
                    type: "collectible"
                }
            ]
        },
      victoryScene: "approach-island",
      defeatScene: "recovery-camp-two"
    },

    // STORY - Nearing Polyphemus’s Island
    {
        id: "approach-island",
        type: "story",
        title: "The Island of the Cyclops",
        questId: 2,
        panels: [
            {
                imageDescription: "The island in the distance with storm clouds above",
                imagename: "island_in_distance",
                dialogue: "That’s it. Polyphemus’s island. The Fleece is in there.",
                narration: "You feel a chill as the island looms closer. The final challenge awaits."
            },
            {
                imageDescription: "The group preparing their gear",
                imagename: "group_preparing_gear",
                dialogue: "Let’s get ready. We can do this together.",
                narration: "You and your friends prepare for the final battle."
            }
        ],
        nextScene: "polyphemus-battle"
    },

    // BATTLE - Polyphemus
    {
        id: "polyphemus-battle",
        type: "battle",
        title: "Battle with Polyphemus",
        questId: 2,
        imageDescription: "Polyphemus stomping through jungle, holding a tree as a club",
        imagename: "polyphemus_roaring",
        introText: "The Cyclops roars in fury. He guards the Fleece with everything he’s got.",
        enemy: {
            name: "Polyphemus",
            level: 6,
            health: 150,
            baseDamage: 30,
            initialRage: 20,
            description: "A huge and cunning Cyclops. Not easy to beat with brute strength alone."
        },
        victoryImageDescription: "Polyphemus falling backward, stunned",
        victoryimagename: "polyphemus_falls_backwards",
        victoryText: "Polyphemus collapses! You snatch the Golden Fleece from its perch.",
        defeatImageDescription: "Polyphemus roaring triumphantly with the player pinned",
        defeatimagename: "polyphemus_roaring",
        defeatText: "You’re captured, but Grover deceives Polyphemus with a trick. you realise that you are not a match for polyphemus.",
        rewards: {
            drachmas: 20,
            xp: 120,
            items: [
            {
                id: "golden-fleece",
                name: "Golden Fleece",
                description: "Glows with healing energy. The only hope to save Camp Half-Blood.",
                type: "quest-item"
            }
            ]
        },
        victoryScene: "fleece-return",
        defeatScene: "hydra-scale"
    },


// DECISION - Do you have the hydra scale?
    {
      id: "hydra-scale",
      type: "decision",
      title: "do you have the hydra scale?",
      questId: 2,
      imageDescription: "Alex and friends are stranded at a beach",
      imagename: "beach_stranded",
      dialogue: "there is only one way to defeat polyphemus...And thats with the hydra scale.",
      narration: "You need to make a choice. Do you have the hydra scale?",
      followupDialogue: "if you dont have the hydra scale go battle the hydras",
      choices: [
        {
          id: "you-have-it",
          title: "You have the hydra scale",
          description: "This just made your quest easier!you have it!",
          hint: "You have the hydra scale!",
          nextScene: "polyphemus-battle"
        },
        {
          id: "you-dont-have-it",
          title: "Face the Hydra",
          description: "A deadly multi-headed beast awaits.",
          hint: "Combat-focused path.",
          nextScene: "hydra-battle"
        }
      ],
      defaultNextScene: "polyphemus-battle"
    },

    // STORY - Return with the Fleece
    {
        id: "fleece-return",
        type: "story",
        title: "Return of the Fleece",
        questId: 2,
        panels: [
            {
            imageDescription: "Thalia’s tree glowing as the Fleece is placed on it",
            imagename: "thalia_tree_glowing",
            dialogue: "It’s working. The magic is restoring the tree!",
            narration: "The air shimmers as the power of the Fleece pulses through Camp Half-Blood."
            },
        ],
        nextScene: "thalia-awakens"
    },

    // STORY - Thalia Awakens
    {
      id: "thalia-awakens",
      type: "story",
      title: "Daughter of Zeus",
      questId: 2,
      panels: [
        {
          imageDescription: "A bolt of lightning striking the tree",
          imagename: "lightning_strike",
          dialogue: "What just happened?!",
          narration: "A shape steps out of the lightning. It’s a girl about your age with fierce eyes."
        },
        {
          imageDescription: "Thalia standing tall under the branches",
          imagename: "thalia_tall_under_branches",
          dialogue: "I’m... Thalia. What year is it?",
          narration: "Zeus’s daughter, once turned into a tree, has returned. The prophecy just changed."
        }
      ],
      nextScene: "titan-curse-tease"
    },

    // CLIFFHANGER - Tease Titan's Curse
    {
      id: "titan-curse-tease",
      type: "story",
      title: "A New Prophecy",
      questId: 2,
      panels: [
        {
          imageDescription: "Oracle’s eyes glowing green",
          imagename: "oracle_glowing",
          dialogue: "The prophecy has shifted. Two children of the Big Three now stand.",
          narration: "The Oracle speaks cryptically. You realize the war isn’t over—it’s just beginning."
        },
        {
          imageDescription: "A dark figure in the shadows holding a scythe",
          imagename: "dark_figure",
          dialogue: "Kronos stirs...",
          narration: "Somewhere far away, the Titan Lord opens a single glowing eye."
        }
      ],
      nextScene: "end"
    }
];

export default scenes;
