const quotes = [
  "Do it scared. Do it messy. Do it anyway.",
  "Stars can’t shine without darkness.",
  "Be kind. Everyone you meet is fighting a battle you know nothing about.",
  "You don’t need more time; you need more focus.",
  "Dream big. Work quietly. Let success make the noise.",
  "Courage doesn’t always roar; sometimes it’s the quiet voice saying, ‘I’ll try again tomorrow.’",
  "Discipline is choosing what you want most over what you want now.",
  "A flower doesn’t think of competing with the one next to it — it just blooms.",
  "The comeback is always stronger than the setback.",
  "If you want to fly, give up everything that weighs you down.",
  "You owe yourself the love that you so freely give to others.",
  "In the middle of chaos lies opportunity. — Bruce Lee",
  "Progress, not perfection.",
  "Be fearless in the pursuit of what sets your soul on fire.",
  "You become what you believe. — Oprah Winfrey",
  "Fall seven times, stand up eight. — Japanese Proverb",
  "Don’t adapt to the energy in the room. Influence it.",
  "The only limit to our realization of tomorrow is our doubts of today. — F.D. Roosevelt",
  "Sometimes you win, sometimes you learn.",
  "Be the reason someone believes in the goodness of people."
];

const elem=document.querySelector('button');
const quote= document.querySelector('h1');
elem.addEventListener('click', ()=>{
    const index=Math.floor(Math.random()*20);
    quote.textContent=quotes[index];
})
