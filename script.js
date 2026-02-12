const gifStages = [
    "https://media.tenor.com/EBV7OT7ACfwAAAAj/u-u-qua-qua-u-quaa.gif",
    "https://media1.tenor.com/m/uDugCXK4vI4AAAAd/chiikawa-hachiware.gif",
    "https://media.tenor.com/f_rkpJbH1s8AAAAj/somsom1012.gif",
    "https://media.tenor.com/OGY9zdREsVAAAAAj/somsom1012.gif",
    "https://media1.tenor.com/m/WGfra-Y_Ke0AAAAd/chiikawa-sad.gif",
    "https://media.tenor.com/CivArbX7NzQAAAAj/somsom1012.gif",
    "https://media.tenor.com/5_tv1HquZlcAAAAj/chiikawa.gif",
    "https://media1.tenor.com/m/uDugCXK4vI4AAAAC/chiikawa-hachiware.gif"
];

const noMessages = ["No", "Are you positive? 🤔", "Pookie please... 🥺", "I will be very sad... 😢", "Don't do this to me...", "You can't catch me! 😜"];

let noClickCount = 0;
let musicPlaying = true;
const music = document.getElementById('bg-music');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const catGif = document.getElementById('cat-gif');

// --- MUSIC HANDLING ---
music.muted = true;
music.volume = 0.3;
music.play().then(() => {
    music.muted = false;
}).catch(() => {
    document.addEventListener('click', () => {
        music.muted = false;
        music.play().catch(() => {});
    }, { once: true });
});

function toggleMusic() {
    if (musicPlaying) { 
        music.pause(); 
        musicPlaying = false; 
        document.getElementById('music-toggle').textContent = '🔇'; 
    } else { 
        music.play(); 
        musicPlaying = true; 
        document.getElementById('music-toggle').textContent = '🔊'; 
    }
}

// --- BUTTON LOGIC ---
function handleYesClick() { 
    // Redirects directly to the Yes page for Maii
    window.location.href = 'yes.html'; 
}

function handleNoClick() {
    noClickCount++;
    const msgIndex = Math.min(noClickCount, noMessages.length - 1);
    noBtn.textContent = noMessages[msgIndex];
    
    // Grow Yes Button to make it easier to click
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = `${currentSize * 1.3}px`;
    
    // Change Cat GIF mood
    const gifIndex = Math.min(noClickCount, gifStages.length - 1);
    catGif.src = gifStages[gifIndex];
    
    // "No" button starts running away after 5 clicks
    if
