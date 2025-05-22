const schedule = [
  {
    time: "06:00",
    activity: "Wake & Toilet",
    mood: "color-yellow",
    tip: {
      title: "Start the day outside",
      purpose: "Encourage toileting in the right place first thing.",
      actions: [
        "Carry pup to garden if needed",
        "Use your toilet cue quietly",
        "Praise calmly after success"
      ],
      commands: ["Toilet", "Be quick"]
    }
  },
  {
    time: "06:15",
    activity: "Cuddle / Calm Wake-Up",
    mood: "color-green",
    tip: {
      title: "Ease into the day",
      purpose: "Build calm confidence from the start.",
      actions: [
        "Sit on the floor with pup",
        "Offer a chew or soft toy",
        "Avoid exciting energy"
      ],
      commands: ["Come", "Settle"]
    }
  },
  {
    time: "06:30",
    activity: "Breakfast & Basic Training",
    mood: "color-blue",
    tip: {
      title: "Use food for learning",
      purpose: "Focus attention before releasing to eat.",
      actions: [
        "Ask for sit and wait",
        "Use eye contact before 'ok'",
        "Praise gentle eating"
      ],
      commands: ["Sit", "Wait", "Ok"]
    }
  },
  {
    time: "06:45",
    activity: "Toilet",
    mood: "color-yellow",
    tip: {
      title: "Quick follow-up potty",
      purpose: "Help create strong post-meal habits.",
      actions: [
        "Go to same spot as earlier",
        "Give your cue softly",
        "Ignore distractions, praise success"
      ],
      commands: ["Toilet", "Good girl/boy"]
    }
  },
  {
    time: "07:00",
    activity: "Interactive Play",
    mood: "color-green",
    tip: {
      title: "Play with learning built in",
      purpose: "Burn energy and bond while reinforcing cues.",
      actions: [
        "Tug with rules (drop it)",
        "Try hide and seek with toy",
        "Do mini recalls indoors"
      ],
      commands: ["Drop it", "Come", "Sit"]
    }
  },
  {
    time: "07:30",
    activity: "Short Walk or Explore Garden",
    mood: "color-green",
    tip: {
      title: "Safe outdoor exploration",
      purpose: "Support curiosity and confidence outside.",
      actions: [
        "Use harness and lead",
        "Let them sniff and pause",
        "Keep voice calm and reassuring"
      ],
      commands: ["Let’s go", "Easy", "Leave it"]
    }
  },
  {
    time: "08:00",
    activity: "Toilet",
    mood: "color-yellow",
    tip: {
      title: "After walk potty break",
      purpose: "Reinforce that movement triggers toileting.",
      actions: [
        "Say cue as you reach toilet spot",
        "Be quiet and patient",
        "Reward success"
      ],
      commands: ["Toilet", "Good job"]
    }
  },
  {
    time: "08:15",
    activity: "Nap / Crate Time",
    mood: "color-pink",
    tip: {
      title: "Encourage independence",
      purpose: "Prevent overstimulation and support crate training.",
      actions: [
        "Guide pup to crate calmly",
        "Use soft voice or white noise",
        "Close door once they settle"
      ],
      commands: ["Crate", "Settle", "Nap time"]
    }
  },
  {
    time: "10:00",
    activity: "Wake & Toilet",
    mood: "color-yellow",
    tip: {
      title: "Straight outside",
      purpose: "Prevent accidents by making potty the first move.",
      actions: [
        "Open crate, lead to door",
        "Use your potty phrase",
        "Reward quickly"
      ],
      commands: ["Toilet", "Be quick"]
    }
  },
  {
    time: "10:15",
    activity: "Chew Toy / Solo Play",
    mood: "color-green",
    tip: {
      title: "Build focus & independence",
      purpose: "Help puppy play calmly near you.",
      actions: [
        "Offer filled Kong or natural chew",
        "Stay nearby but don’t engage",
        "Praise calm chewing"
      ],
      commands: ["Leave it", "Good chew"]
    }
  },
  {
    time: "10:45",
    activity: "Training Session",
    mood: "color-green",
    tip: {
      title: "Practice basic cues",
      purpose: "Build foundation before lunch.",
      actions: [
        "Short reps: sit, down, name",
        "Mix in reward games",
        "End on success"
      ],
      commands: ["Sit", "Down", "Name recall"]
    }
  },
  {
    time: "11:15",
    activity: "Potty Break",
    mood: "color-yellow",
    tip: {
      title: "Reinforce daytime toileting",
      purpose: "Keep consistency as energy builds.",
      actions: [
        "Use the usual spot",
        "Give cue only once",
        "Calmly reward success"
      ],
      commands: ["Toilet", "Be quick"]
    }
  },
  {
    time: "11:30",
    activity: "Nap",
    mood: "color-pink",
    tip: {
      title: "Reset before lunch",
      purpose: "Allow the pup to rest and process learning.",
      actions: [
        "Dim lights or lower blinds",
        "Crate with familiar blanket",
        "No talking, keep quiet"
      ],
      commands: ["Nap time", "Crate"]
    }
  },
  {
    time: "12:30",
    activity: "Wake & Potty",
    mood: "color-yellow",
    tip: {
      title: "Quick outdoor break",
      purpose: "Flush bladder after rest.",
      actions: [
        "Calmly open crate",
        "Walk pup out slowly",
        "Cue and praise outside"
      ],
      commands: ["Toilet", "Good dog"]
    }
  },
  {
    time: "12:45",
    activity: "Lunch & Manners",
    mood: "color-blue",
    tip: {
      title: "Reinforce calm before food",
      purpose: "Avoid jumping and grabbing behaviour.",
      actions: [
        "Hold bowl, ask for sit",
        "Wait for quiet before release",
        "Feed slowly if needed"
      ],
      commands: ["Sit", "Wait", "Ok"]
    }
  },
  {
    time: "13:00",
    activity: "Gentle Play / Puzzle Toy",
    mood: "color-green",
    tip: {
      title: "Build brain not just body",
      purpose: "Encourage problem solving and calm engagement.",
      actions: [
        "Use snuffle mat or slow feeder",
        "Supervise, don’t interfere",
        "End with calm praise"
      ],
      commands: ["Find it", "Sniff", "Good work"]
    }
  },
  {
    time: "13:45",
    activity: "Potty Break",
    mood: "color-yellow",
    tip: {
      title: "Keep the habit",
      purpose: "Every play needs a potty follow-up.",
      actions: [
        "Head to the usual area",
        "Use same cue words",
        "Avoid overexciting praise"
      ],
      commands: ["Toilet", "Be quick"]
    }
  },
  {
    time: "14:00",
    activity: "Nap / Quiet Time",
    mood: "color-pink",
    tip: {
      title: "Midday reset",
      purpose: "Help your pup stay calm for the rest of the day.",
      actions: [
        "Crate with chew or soft toy",
        "Lower noise and lighting",
        "Avoid eye contact or chat"
      ],
      commands: ["Nap time", "Crate", "Settle"]
    }
  },
  {
    time: "15:30",
    activity: "Wake & Potty",
    mood: "color-yellow",
    tip: {
      title: "Quick break after nap",
      purpose: "Maintain house training consistency.",
      actions: [
        "Use same potty area",
        "Keep routine predictable",
        "Give calm praise"
      ],
      commands: ["Toilet", "Be quick"]
    }
  },
  {
    time: "15:45",
    activity: "Enrichment / Solo Play",
    mood: "color-green",
    tip: {
      title: "Boost confidence alone",
      purpose: "Encourage independent play and calm chewing.",
      actions: [
        "Offer puzzle toy or safe chew",
        "Stay in same room but avoid interaction",
        "Mark calm behaviour occasionally"
      ],
      commands: ["Good settle", "Leave it"]
    }
  },
  {
    time: "16:30",
    activity: "Short Training Walk",
    mood: "color-green",
    tip: {
      title: "Explore with purpose",
      purpose: "Build lead confidence and reinforce basic cues outdoors.",
      actions: [
        "Walk calmly on harness",
        "Practice 'sit' and 'look at me'",
        "Avoid overstimulating areas"
      ],
      commands: ["Let’s go", "Sit", "Watch me"]
    }
  },
  {
    time: "17:00",
    activity: "Potty Break",
    mood: "color-yellow",
    tip: {
      title: "Wind down the walk",
      purpose: "Finish the outing with a clear potty cue.",
      actions: [
        "Go to quiet spot before home",
        "Use cue and wait patiently",
        "Give small reward"
      ],
      commands: ["Toilet", "All done"]
    }
  },
  {
    time: "17:30",
    activity: "Dinner & Settle",
    mood: "color-blue",
    tip: {
      title: "Feed and relax",
      purpose: "Signal that evening is approaching.",
      actions: [
        "Repeat meal-time manners",
        "Stay nearby for calm feeding",
        "Let pup rest after"
      ],
      commands: ["Sit", "Wait", "Ok"]
    }
  },
  {
    time: "18:00",
    activity: "Potty",
    mood: "color-yellow",
    tip: {
      title: "Post-dinner potty",
      purpose: "Always follow up meals with toilet opportunity.",
      actions: [
        "Quietly guide to toilet area",
        "Limit interaction until done",
        "Praise gently"
      ],
      commands: ["Toilet", "Be quick"]
    }
  },
  {
    time: "18:15",
    activity: "Wind-Down Play",
    mood: "color-green",
    tip: {
      title: "Reduce energy gradually",
      purpose: "Help pup transition to calmer evening.",
      actions: [
        "Use soft toy or chew game",
        "Keep tone low and soothing",
        "Avoid chase or squeaky toys"
      ],
      commands: ["Come", "Settle"]
    }
  },
  {
    time: "19:00",
    activity: "Crate Nap / TV Time",
    mood: "color-pink",
    tip: {
      title: "Let pup rest during your evening",
      purpose: "Teach puppy that quiet time happens during human downtime.",
      actions: [
        "Encourage crate or playpen rest",
        "Give chew if needed",
        "Keep lighting and noise low"
      ],
      commands: ["Crate", "Settle"]
    }
  },
  {
    time: "20:00",
    activity: "Potty & Gentle Interaction",
    mood: "color-yellow",
    tip: {
      title: "Bedtime potty 1",
      purpose: "Empty bladder before winding down for bed.",
      actions: [
        "No stimulation",
        "Let pup go, then come in",
        "Soft praise only"
      ],
      commands: ["Toilet", "Good dog"]
    }
  },
  {
    time: "20:15",
    activity: "Quiet Cuddles / Grooming",
    mood: "color-green",
    tip: {
      title: "Bond gently",
      purpose: "Make calm connection before final nap.",
      actions: [
        "Use soft brushing or stroking",
        "Reward stillness with voice",
        "Avoid active play"
      ],
      commands: ["Settle", "Touch"]
    }
  },
  {
    time: "21:00",
    activity: "Final Nap Before Bed",
    mood: "color-pink",
    tip: {
      title: "Let pup settle undisturbed",
      purpose: "Prepare for final outing and sleep.",
      actions: [
        "Place pup in crate or bed area",
        "Use soothing sound or dim lights",
        "Ignore mild fussing"
      ],
      commands: ["Crate", "Bedtime"]
    }
  },
  {
    time: "22:30",
    activity: "Final Potty",
    mood: "color-yellow",
    tip: {
      title: "No talk, no games",
      purpose: "Teach toilet means toilet — not play.",
      actions: [
        "Go out calmly",
        "Give cue once",
        "Straight back in after"
      ],
      commands: ["Toilet", "Quickly"]
    }
  },
  {
    time: "22:45",
    activity: "Crate & Lights Out",
    mood: "color-pink",
    tip: {
      title: "End the day the same way",
      purpose: "Repetition builds security at bedtime.",
      actions: [
        "Carry or walk pup to crate",
        "Say 'bedtime' and close door",
        "Avoid checking after unless needed"
      ],
      commands: ["Bedtime", "Goodnight"]
    }
  }
];