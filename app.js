const sound = document.getElementById('sound')

sound.addEventListener('click', playPronunciation);

function playPronunciation() {
    const audio = new Audio('audio/bonjour.mp3');
    audio.play()
}