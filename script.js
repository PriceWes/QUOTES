const quotes =[
    "You are enough.",
    "Keep on winning.",
    "Push on.",
    "Believe in yourself.",
    "Your potential is endless.",
    "You’re doing better than you think.",
    "Small steps lead to big results."
];

const randomIndex = Math.floor(Math.random() * quotes.length);
const randomQuote = quotes[randomIndex];

document.getElementById('quote').textContent = randomQuote;