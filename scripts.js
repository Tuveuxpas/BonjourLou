const texts = [
    "Bonjour", // Français
    "Hello", // Anglais
    "Guten Morgen", // Allemand
    "Buenos días", // Espagnol
    "Buongiorno", // Italien
    "Доброе утро", // Russe
    "Bom dia", // Portugais
    "Bonan matenon", // Espéranto
    "좋은 아침이에요", // Coréen
    "おはよう", // Japonais
    "早上好", // Chinois ( simplifié )
    "早安", // Chinois ( traditionnel )
    "সুপ্রভাত", // Bengali
    "Buna dimineata", // Roumain
    "Miremengjes", // Albanais
    "Բարի առավոտ", // Arménien
    "Καλημέρα", // Grec
    "Добрий ранок", // Ukrainien
    "Dzień dobry" // Polonais
];

let currentIndex = 0;
let charIndex = 0;
const textElement = document.getElementById('text');
const cursorElement = document.getElementById('cursor');

function typeText() {
    if (charIndex < texts[currentIndex].length) {
        textElement.textContent += texts[currentIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100); // Vitesse de frappe
    } else {
        setTimeout(eraseText, 2000); // Temps d'affichage avant d'effacer
    }
}

function eraseText() {
    if (charIndex > 0) {
        textElement.textContent = texts[currentIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 50); // Vitesse d'effacement
    } else {
        currentIndex = (currentIndex + 1) % texts.length;
        setTimeout(typeText, 500); // Temps avant de commencer à taper le prochain texte
    }
}

// Initialiser l'affichage
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeText, 1000); // Temps avant de commencer à taper le premier texte
});