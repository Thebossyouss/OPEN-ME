const gifStages = [
    "https://media.tenor.com/EBV7OT7ACfwAAAAj/u-u-qua-qua-u-quaa.gif",
    "https://media1.tenor.com/m/uDugCXK4vI4AAAAd/chiikawa-hachiware.gif",
    "https://media.tenor.com/f_rkpJbH1s8AAAAj/somsom1012.gif",
    "https://media.tenor.com/OGY9zdREsVAAAAAj/somsom1012.gif",
    "https://media1.tenor.com/m/uDugCXK4vI4AAAAC/chiikawa-hachiware.gif"
];
const noMessages = ["No", "Are you sure? 🥺", "Pookie please...", "😢", "You can't catch me!"];

let noClickCount = 0;
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const catGif = document.getElementById('cat-gif');

function handleYesClick() { 
    window.location.href = 'yes.html'; 
}

function handleNoClick() {
    noClickCount++;
    if (noClickCount < noMessages.length) {
        noBtn.textContent = noMessages[noClickCount];
    }
    catGif.src = gifStages[Math.min(noClickCount, gifStages.length - 1)];
    
    // Yes button grows
    const scale = 1 + (noClickCount * 0.4);
    yesBtn.style.transform = `scale(${scale})`;

    // Runaway Logic with Safe Zone (stays on screen)
    if (noClickCount >= 4) {
        noBtn.style.position = 'fixed';
        const padding = 150; // Keeps it away from edges
        const x = Math.random() * (window.innerWidth - padding) + (padding / 2);
        const y = Math.random() * (window.innerHeight - padding) + (padding / 2);
        
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
        noBtn.style.zIndex = "10000";
    }
}

// 15 Second Transitions
window.onload = () => {
    const s1 = document.querySelectorAll('.side-pic');
    const s2 = document.querySelectorAll('.side-pic-2');
    
    setTimeout(() => {
        s1.forEach(p => p.classList.add('fade-out'));
        setTimeout(() => {
            s2.forEach(p => p.classList.add('fade-in'));
        }, 1500); 
    }, 15000); // Set to 15 seconds
};
