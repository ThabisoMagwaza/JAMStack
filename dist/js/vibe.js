const vibes = [
  "...and you are awesome!",
  "...have a wonderful day!",
  "...and you've got this!",
  "...and so is this puppy!🐶",
];

// choose vibe at random
let vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

// display good vube
document.querySelector(".vibe").append(vibe);
