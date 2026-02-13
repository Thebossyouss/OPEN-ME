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
    
    // Yes button growth
    const scale = 1 + (noClickCount * 0.4);
    yesBtn.style.transform = `scale(${scale})`;

    // DYNAMIC SCREEN CALCULATION
    if (noClickCount >= 4) {
        noBtn.style.position = 'fixed';
        
        // Get the actual width and height of the No button
        const btnRect = noBtn.getBoundingClientRect();
        const btnWidth = btnRect.width;
        const btnHeight = btnRect.height;

        // Calculate maximum allowed coordinates
        // We subtract the button's size and an extra 20px "safety buffer"
        const maxX = window.innerWidth - btnWidth - 20;
        const maxY = window.innerHeight - btnHeight - 20;

        // Pick a random spot, but ensure it's at least 20px away from the top/left
        const randomX = Math.max(20, Math.floor(Math.random() * maxX));
        const randomY = Math.max(20, Math.floor(Math.random() * maxY));

        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
        noBtn.style.zIndex = "10000";
    }
}

// 15-Second Slide Transition
window.onload = () => {
    const s1 = document.querySelectorAll('.side-pic');
    const s2 = document.querySelectorAll('.side-pic-2');
    
    setTimeout(() => {
        s1.forEach(p => p.classList.add('fade-out'));
        setTimeout(() => {
            s2.forEach(p => p.classList.add('fade-in'));
        }, 1500); 
    }, 15000); 
};
