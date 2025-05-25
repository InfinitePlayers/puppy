const schedule = [
  {
    time: "06:00",
    activity: "Wake & Toilet",
    mood: "color-yellow",
    tip: {
      title: "Start the day with structure",
      purpose: "Reinforce early toileting and calm transitions.",
      actions: ['Carry to toileting area if needed', 'Use toilet cue', 'Calm praise after success'],
      commands: ['Toilet', 'Be quick']
    }
  },
  {
    time: "06:15",
    activity: "Bonding & Calm Handling",
    mood: "color-green",
    tip: {
      title: "Build the bond",
      purpose: "Offer calm contact and security after waking.",
      actions: ['Sit quietly on the floor', 'Gently stroke or massage', 'Offer calm verbal praise'],
      commands: ['Settle', 'Touch']
    }
  },
  {
    time: "06:30",
    activity: "Breakfast & Steadiness Practice",
    mood: "color-blue",
    tip: {
      title: "Teach patience before food",
      purpose: "Use sit-wait-release around food for self-control.",
      actions: ['Ask for sit', 'Wait 3–5 seconds with bowl down', "Release with 'OK'"],
      commands: ['Sit', 'Wait', 'OK']
    }
  },
  {
    time: "06:45",
    activity: "Post-Meal Toilet",
    mood: "color-yellow",
    tip: {
      title: "Reinforce routine after meals",
      purpose: "Help digestion and reinforce house training.",
      actions: ['Same toilet area', 'Use cue softly', 'Low-key reward'],
      commands: ['Toilet', 'Good dog']
    }
  },
  {
    time: "07:00",
    activity: "Field Skills: Retrieve & Recall",
    mood: "color-green",
    tip: {
      title: "Start early with core spaniel cues",
      purpose: "Develop engagement and basic fieldwork behaviours.",
      actions: ['Mini retrieves with sit before release', 'Short recall with praise', 'End on success'],
      commands: ['Sit', 'Wait', 'Come', 'Fetch']
    }
  },
  {
    time: "07:30",
    activity: "Structured Exploration Walk",
    mood: "color-green",
    tip: {
      title: "Use walks as training",
      purpose: "Reinforce focus and confidence outdoors.",
      actions: ['Walk to heel with lead', 'Practice stops and changes of pace', 'Reward eye contact'],
      commands: ['Heel', 'Let’s go', 'Sit', 'Watch me']
    }
  },
  {
    time: "08:00",
    activity: "Toilet Break",
    mood: "color-yellow",
    tip: {
      title: "End walk with focus",
      purpose: "Anchor walk routine with a final toilet.",
      actions: ['Go to designated spot', 'Say cue once', 'Reward calmly'],
      commands: ['Toilet', 'Good job']
    }
  },
  {
    time: "08:15",
    activity: "Crate / Nap Time",
    mood: "color-pink",
    tip: {
      title: "Support rest after activity",
      purpose: "Prevent overstimulation with quiet crate time.",
      actions: ['Guide to crate', 'Use soothing tone or white noise', 'Leave quietly'],
      commands: ['Crate', 'Settle', 'Nap time']
    }
  },
  {
    time: "10:00",
    activity: "Wake & Toilet",
    mood: "color-yellow",
    tip: {
      title: "Keep toilet first",
      purpose: "Solidify the habit of post-nap toileting.",
      actions: ['Open crate, lead directly outside', 'Use your cue', 'Praise success'],
      commands: ['Toilet', 'Be quick']
    }
  },
  {
    time: "10:15",
    activity: "Foundation Training Session",
    mood: "color-green",
    tip: {
      title: "Reinforce core obedience",
      purpose: "Short, structured reps to build fluency.",
      actions: ['Practice sit, down, name response', 'Use treats sparingly', 'End on a win'],
      commands: ['Sit', 'Down', 'Name recall']
    }
  },
  {
    time: "10:45",
    activity: "Calm Chew or Puzzle Time",
    mood: "color-green",
    tip: {
      title: "Encourage independent focus",
      purpose: "Promote calm chewing or foraging.",
      actions: ['Offer stuffed Kong or snuffle mat', 'Avoid direct interaction', 'Praise quiet engagement'],
      commands: ['Settle', 'Good work']
    }
  },
  {
    time: "11:15",
    activity: "Potty Break",
    mood: "color-yellow",
    tip: {
      title: "Repeat cues consistently",
      purpose: "Keep training habits tight.",
      actions: ['Same area', 'Say cue once', 'Reward quietly'],
      commands: ['Toilet', 'Be quick']
    }
  },
  {
    time: "11:30",
    activity: "Midday Nap",
    mood: "color-pink",
    tip: {
      title: "Reset with calm",
      purpose: "Let the puppy process the morning.",
      actions: ['Dim lights', 'Soft blanket in crate', 'Leave them to settle'],
      commands: ['Crate', 'Nap time']
    }
  },
  {
    time: "13:00",
    activity: "Wake & Potty",
    mood: "color-yellow",
    tip: {
      title: "Toilet before feeding",
      purpose: "Maintain rhythm and avoid accidents.",
      actions: ['Open crate calmly', 'Lead outside', 'Give cue'],
      commands: ['Toilet', 'Good dog']
    }
  },
  {
    time: "13:15",
    activity: "Lunch & Manners",
    mood: "color-blue",
    tip: {
      title: "Repeat meal ritual",
      purpose: "Consistency builds confidence.",
      actions: ['Sit before bowl', 'Wait for eye contact', 'Use release word'],
      commands: ['Sit', 'Wait', 'OK']
    }
  },
  {
    time: "13:30",
    activity: "Handler Engagement & Light Training",
    mood: "color-green",
    tip: {
      title: "Use gentle focus games",
      purpose: "Work the brain gently post-meal.",
      actions: ['Short recall practice indoors', "Nose touch or 'find it'", 'Calm praise'],
      commands: ['Find it', 'Come', 'Touch']
    }
  },
  {
    time: "14:00",
    activity: "Toilet & Crate Nap",
    mood: "color-yellow",
    tip: {
      title: "Settle in routine",
      purpose: "Keep pup rested for evening.",
      actions: ['Final toilet for midday', 'Crate with soft chew', 'No eye contact'],
      commands: ['Toilet', 'Crate', 'Settle']
    }
  },
  {
    time: "15:30",
    activity: "Wake, Potty & Field Basics",
    mood: "color-yellow",
    tip: {
      title: "Stretch & reinforce",
      purpose: "Reintroduce spaniel behaviours gently.",
      actions: ['Practice short lead walk', 'Recall from short distance', 'Mini sit-to-whistle if ready'],
      commands: ['Come', 'Sit', 'Wait']
    }
  },
  {
    time: "16:00",
    activity: "Retrieve & Focus Games",
    mood: "color-green",
    tip: {
      title: "Make work fun",
      purpose: "Satisfy spaniel drive with structured games.",
      actions: ['Roll soft dummy or toy', 'Ask for sit before release', 'End with calm praise'],
      commands: ['Sit', 'Wait', 'Fetch', 'Drop']
    }
  },
  {
    time: "16:30",
    activity: "Evening Walk or Garden Time",
    mood: "color-green",
    tip: {
      title: "Evening decompression",
      purpose: "Let the pup explore but remain engaged.",
      actions: ['Use long line for freedom', 'Recall occasionally', 'Avoid overstimulation'],
      commands: ['Let’s go', 'This way', 'Come']
    }
  },
  {
    time: "17:00",
    activity: "Toilet",
    mood: "color-yellow",
    tip: {
      title: "Keep routine clear",
      purpose: "Associate movement with toileting.",
      actions: ['Lead to same spot', 'Use toilet cue', 'Quiet praise'],
      commands: ['Toilet', 'Good dog']
    }
  },
  {
    time: "17:15",
    activity: "Dinner & Settle",
    mood: "color-blue",
    tip: {
      title: "Wind down with manners",
      purpose: "Build calm end-of-day habits.",
      actions: ['Sit and wait before eating', 'Feed slowly if needed', 'Let pup rest nearby'],
      commands: ['Sit', 'Wait', 'OK']
    }
  },
  {
    time: "18:00",
    activity: "Evening Crate Rest",
    mood: "color-pink",
    tip: {
      title: "Create a safe pause",
      purpose: "Allow for digestion and calm.",
      actions: ['Crate with chew', 'Use familiar routine', 'Dim lighting'],
      commands: ['Crate', 'Settle']
    }
  },
  {
    time: "19:00",
    activity: "Handler Bonding / Grooming",
    mood: "color-green",
    tip: {
      title: "Make connection routine",
      purpose: "Build touch tolerance and trust.",
      actions: ['Groom calmly', 'Use quiet praise', 'Avoid stimulating play'],
      commands: ['Touch', 'Settle']
    }
  },
  {
    time: "20:00",
    activity: "Toilet & Evening Wind-Down",
    mood: "color-yellow",
    tip: {
      title: "Final outdoor chance",
      purpose: "Prevent overnight accidents.",
      actions: ['Quietly go out', 'Say cue once', 'Minimal talking'],
      commands: ['Toilet', 'Be quick']
    }
  },
  {
    time: "20:15",
    activity: "Settle for Final Nap",
    mood: "color-pink",
    tip: {
      title: "Ease into night routine",
      purpose: "Help the pup prepare for bed.",
      actions: ['Guide to resting space', 'Use crate or bed', 'Keep lights low'],
      commands: ['Settle', 'Nap time']
    }
  },
  {
    time: "22:30",
    activity: "Final Potty",
    mood: "color-yellow",
    tip: {
      title: "No fuss toilet trip",
      purpose: "Teach night toileting is not play time.",
      actions: ['Carry or guide pup out', 'Use toilet cue once', 'Straight back in'],
      commands: ['Toilet', 'Quickly']
    }
  },
  {
    time: "22:45",
    activity: "Crate & Lights Out",
    mood: "color-pink",
    tip: {
      title: "End the day consistently",
      purpose: "Help puppy feel secure overnight.",
      actions: ['Place in crate', 'Say ‘bedtime’ softly', 'Do not check unless needed'],
      commands: ['Bedtime', 'Goodnight']
    }
  }
];