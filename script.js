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

// Music starts on first click (browser requirement)
document.addEventListener('click', () => {
    if (music) music.play().catch(() => {});
}, { once: true });

function handleYesClick() { 
    window.location.href = 'yes.html'; 
}

function handleNoClick() {
    noClickCount++;
    if (noClickCount < noMessages.length) {
        noBtn.textContent = noMessages[noClickCount];
    }
    
    // Change GIF mood
    catGif.src = gifStages[Math.min(noClickCount, gifStages.length - 1)];
    
    // Grow Yes Button
    const scale = 1 + (noClickCount * 0.3);
    yesBtn.style.transform = `scale(${scale})`;
    
    // Runaway Logic after 4 clicks
    if (noClickCount >= 4) {
        noBtn.style.position = 'fixed';
        const x = Math.random() * (window.innerWidth - 150);
        const y = Math.random() * (window.innerHeight - 100);
        noBtn.style.left = x + 'px';
        noBtn.style.top = y + 'px';
    }
}

// Slideshow transition: Set 1 fades out, Set 2 fades in
window.onload = () => {
    const s1 = document.querySelectorAll('.side-pic');
    const s2 = document.querySelectorAll('.side-pic-2');
    
    setTimeout(() => {
        // Fade out set 1
        s1.forEach(p => p.classList.add('fade-out'));
        
        // Wait for the fade out to finish, then show set 2
        setTimeout(() => {
            s2.forEach(p => p.classList.add('fade-in'));
        }, 1500); 
    }, 5000); // 5 seconds display time for the first set
};
