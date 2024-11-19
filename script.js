let isOpen = false;
let isPlaying = true; 
const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');

function toggleCard() {
    const cardContainer = document.querySelector('.card-container');
    if (isOpen) {
        cardContainer.classList.remove('open');
    } else {
        cardContainer.classList.add('open');
    }
    isOpen = !isOpen;
}

function changeSong() {
    const songSelector = document.getElementById('songSelector');
    const audioSource = document.getElementById('audioSource');
    audioSource.src = songSelector.value;
    audioPlayer.load();
    audioPlayer.play();
    playPauseBtn.style.backgroundImage = "url('pause.png')";
    isPlaying = true;
}

function togglePlayPause() {
    if (isPlaying) {
        audioPlayer.pause();
        playPauseBtn.style.backgroundImage = "url('cd.png')";
    } else {
        audioPlayer.play();
        playPauseBtn.style.backgroundImage = "url('pause.png')"; // You need to have a pause.png image to indicate the pause state
    }
    isPlaying = !isPlaying;
}

function playFirstSong() {
    audioPlayer.play();
    playPauseBtn.style.backgroundImage = "url('pause.png')";
}