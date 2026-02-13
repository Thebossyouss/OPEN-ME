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

// --- MUSIC HELPER FUNCTION ---
function playMusic() {
    if (music && music.paused) {
        music.play().catch(err => console.log("Music play attempt..."));
    }
}

// 1. Start music if she clicks anywhere on the background
document.addEventListener('click', () => {
    playMusic();
}, { once: true });

function handleYesClick() { 
    playMusic(); // Ensure music plays on Yes
    window.location.href = 'yes.html'; 
}

function handleNoClick() {
    playMusic(); // --- THE FIX: Music starts as soon as she clicks No ---
    
    noClickCount++;
    if (noClickCount < noMessages.length) {
        noBtn.textContent = noMessages[noClickCount];
    }
    
    catGif.src = gifStages[Math.min(noClickCount, gifStages.length - 1)];
    
    // Grow Yes Button
    const scale = 1 + (noClickCount * 0.4);
    yesBtn.style.transform = `scale(${scale})`;
    yesBtn.style.transition = "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)";

    // Runaway Logic with Screen Bounds
    if (noClickCount >= 4) {
        noBtn.style.position = 'fixed';
        const btnRect = noBtn.getBoundingClientRect();
        const maxX = window.innerWidth - btnRect.width - 20;
        const maxY = window.innerHeight - btnRect.height - 20;

        const randomX = Math.max(20, Math.floor(Math.random() * maxX));
        const randomY = Math.max(20, Math.floor(Math.random() * maxY));

        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
        noBtn.style.zIndex = "10000";
    }
}

// 15-Second Manual Transition
window.onload = () => {
    const set1 = document.querySelectorAll('.side-pic');
    const set2 = document.querySelectorAll('.side-pic-2');

    setTimeout(() => {
        // Fade Out Set 1
        set1.forEach(img => {
            img.style.transition = "opacity 2s ease";
            img.style.opacity = "0";
            setTimeout(() => { img.style.visibility = "hidden"; }, 2000);
        });

        // Fade In Set 2
        set2.forEach(img => {
            img.style.visibility = "visible";
            img.style.transition = "opacity 2s ease";
            setTimeout(() => { img.style.opacity = "1"; }, 50);
        });
    }, 15000); 
};
