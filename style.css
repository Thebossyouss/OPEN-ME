const gifStages = [
    "https://media.tenor.com/EBV7OT7ACfwAAAAj/u-u-qua-qua-u-quaa.gif",
    "https://media1.tenor.com/m/uDugCXK4vI4AAAAd/chiikawa-hachiware.gif",
    "https://media.tenor.com/f_rkpJbH1s8AAAAj/somsom1012.gif",
    "https://media.tenor.com/OGY9zdREsVAAAAAj/somsom1012.gif",
    "https://media1.tenor.com/m/uDugCXK4vI4AAAAC/chiikawa-hachiware.gif"
];
const noMessages = ["No", "Are you sure? 🥺", "Pookie please...", "😢", "You can't catch me!"];

let noClickCount = 0;
const music = document.getElementById('bg-music');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const catGif = document.getElementById('cat-gif');

// Music handling: Play on first interaction
document.addEventListener('click', () => {
    if (music && music.paused) {
        music.play().catch(err => console.log("Audio play blocked"));
    }
}, { once: true });

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
    const scale = 1 + (noClickCount * 0.4); // Increased growth slightly for effect
    yesBtn.style.transform = `scale(${scale})`;
    yesBtn.style.transition = "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)";

    // Runaway Logic
    if (noClickCount >= 4) {
        noBtn.style.position = 'fixed';
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
        noBtn.style.zIndex = "2000"; // Ensure it stays above photos
    }
}

// Slideshow transition logic
window.addEventListener('load', () => {
    const s1 = document.querySelectorAll('.side-pic');
    const s2 = document.querySelectorAll('.side-pic-2');

    // Start transition after 5 seconds
    setTimeout(() => {
        // 1. Fade out set 1
        s1.forEach(p => p.classList.add('fade-out'));
        
        // 2. Cross-fade: Start showing set 2 halfway through set 1's fade
        setTimeout(() => {
            s2.forEach(p => {
                p.style.display = "block"; // Ensure it's not display:none
                // We use a tiny delay so the browser notices the display change before animating opacity
                setTimeout(() => p.classList.add('fade-in'), 50);
            });
        }, 800); 

    }, 5000); 
});
