console.log("Welcome to Spotify");

//Initialize the Variables
let songIndex= 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar =document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName =document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName:"Barbaad",filePath: "songs/1.mp3" , coverPath: "covers/1.jpg"},
    {songName:"Azul",filePath: "songs/2.mp3" , coverPath: "covers/2.jpg"},
    {songName:"Co2",filePath: "songs/3.mp3" , coverPath: "covers/3.jpg"},
    {songName:"Dhun",filePath: "songs/4.mp3" , coverPath: "covers/4.jpg"},
    {songName:"Ishq",filePath: "songs/5.mp3" , coverPath: "covers/5.jpg"},
    {songName:"Jhol",filePath: "songs/6.mp3" , coverPath: "covers/6.jpg"},
    {songName:"Qatal",filePath: "songs/7.mp3" , coverPath: "covers/7.jpg"},
    {songName:"Sajde",filePath: "songs/8.mp3" , coverPath: "covers/8.jpg"},
    {songName:"Sirra",filePath: "songs/9.mp3" , coverPath: "covers/9.jpg"},
    {songName:"Saiyaara",filePath: "songs/10.mp3" , coverPath: "covers/10.jpg"},
]

songItems.forEach((element,i) =>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
}

)

// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click' , ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1; // Show the GIF when playing
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0; // Hide the GIF when paused
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    //Update Seekbar
    let progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

Array.from(document.getElementsByClassName('songlistplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        
        songIndex = parseInt(e.target.id);
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[e.target.id].songName; // Update the song name
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1; // Show the GIF when playing
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex >= 9){
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName; // Update the song name
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1; // Show the GIF when playing
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex <= 0){
        songIndex = 9;
    } else {
        songIndex -= 1;
    }   
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName; // Update the song name
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1; // Show the GIF when playing
})