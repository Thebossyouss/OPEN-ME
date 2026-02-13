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

// Music Fix
document.addEventListener('click', () => {
    if (music && music.paused) {
        music.play().catch(err => console.log("Music playing..."));
    }
}, { once: true });

function handleYesClick() { 
    window.location.href = 'yes.html'; 
}

function handleNoClick() {
    noClickCount++;
    if (noClickCount < noMessages.length) noBtn.textContent = noMessages[noClickCount];
    catGif.src = gifStages[Math.min(noClickCount, gifStages.length - 1)];
    const scale = 1 + (noClickCount * 0.4);
    yesBtn.style.transform = `scale(${scale})`;

    if (noClickCount >= 4) {
        noBtn.style.position = 'fixed';
        const btnRect = noBtn.getBoundingClientRect();
        const maxX = window.innerWidth - btnRect.width - 20;
        const maxY = window.innerHeight - btnRect.height - 20;
        noBtn.style.left = Math.max(20, Math.floor(Math.random() * maxX)) + "px";
        noBtn.style.top = Math.max(20, Math.floor(Math.random() * maxY)) + "px";
        noBtn.style.zIndex = "10000";
    }
}

// THE FORCED TRANSITION (15 SECONDS)
window.addEventListener('load', () => {
    const s1 = document.querySelectorAll('.side-pic');
    const s2 = document.querySelectorAll('.side-pic-2');

    // Ensure Set 2 is ready but invisible
    s2.forEach(p => {
        p.style.display = "block"; 
        p.style.opacity = "0";
    });

    setTimeout(() => {
        // 1. Force Set 1 to vanish
        s1.forEach(p => {
            p.style.transition = "opacity 2s ease";
            p.style.opacity = "0";
        });
        
        // 2. Force Set 2 to appear after a 1-second delay
        setTimeout(() => {
            s2.forEach(p => {
                p.style.transition = "opacity 2s ease";
                p.style.opacity = "1";
            });
        }, 1000); 

    }, 15000); 
});
