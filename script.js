const gifStages = [
    "https://media.tenor.com/EBV7OT7ACfwAAAAj/u-u-qua-qua-u-quaa.gif",
    "https://media1.tenor.com/m/uDugCXK4vI4AAAAd/chiikawa-hachiware.gif",
    "https://media.tenor.com/f_rkpJbH1s8AAAAj/somsom1012.gif",
    "https://media.tenor.com/OGY9zdREsVAAAAAj/somsom1012.gif",
    "https://media1.tenor.com/m/uDugCXK4vI4AAAAC/chiikawa-hachiware.gif"
];

const noMessages = ["No", "Are you sure? 🥺", "Pookie please...", "😢", "You can't catch me!"];

let noClickCount = 0;

// Grab elements
const music = document.getElementById('bg-music');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const catGif = document.getElementById('cat-gif');

// --- MUSIC FIX: Play on first interaction anywhere ---
document.addEventListener('click', () => {
    if (music && music.paused) {
        music.play().catch(err => console.log("Waiting for user interaction to play audio."));
    }
}, { once: true }); // 'once: true' ensures this only runs on the very first click

function handleYesClick() { 
    window.location.href = 'yes.html'; 
}

function handleNoClick() {
    noClickCount++;
    
    // Update No button text
    if (noClickCount < noMessages.length) {
        noBtn.textContent = noMessages[noClickCount];
    }
    
    // Change GIF mood
    catGif.src = gifStages[Math.min(noClickCount, gifStages.length - 1)];
    
    // Grow Yes Button smoothly
    const scale = 1 + (noClickCount * 0.4);
    yesBtn.style.transform = `scale(${scale})`;
    yesBtn.style.transition = "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)";

    // Runaway Logic with Screen Bounds Fix
    if (noClickCount >= 4) {
        noBtn.style.position = 'fixed';
        
        // Get button dimensions to keep it on screen
        const btnRect = noBtn.getBoundingClientRect();
        const btnWidth = btnRect.width;
        const btnHeight = btnRect.height;

        // Calculate maximum allowed coordinates (with 20px safety margin)
        const maxX = window.innerWidth - btnWidth - 20;
        const maxY = window.innerHeight - btnHeight - 20;

        // Pick a random spot inside the visible window
        const randomX = Math.max(20, Math.floor(Math.random() * maxX));
        const randomY = Math.max(20, Math.floor(Math.random() * maxY));

        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
        noBtn.style.zIndex = "10000"; 
    }
}

// 15-Second Slide Transition Logic
window.addEventListener('load', () => {
    const s1 = document.querySelectorAll('.side-pic');
    const s2 = document.querySelectorAll('.side-pic-2');

    // Wait exactly 15 seconds
    setTimeout(() => {
        // 1. Fade out set 1
        s1.forEach(p => p.classList.add('fade-out'));
        
        // 2. Fade in set 2 after a slight delay for a smooth dissolve
        setTimeout(() => {
            s2.forEach(p => {
                p.classList.add('fade-in');
            });
        }, 1500); 

    }, 15000); 
});
