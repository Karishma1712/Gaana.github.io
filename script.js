
console.log("welcome to gaana");
//initialize variables
let songIndex=1;
let audioElement = new Audio('1.mp3');
let time = audioElement.currentTime;
let masterPlay=document.getElementById('masterPlay');
let myProgressbar = document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItem=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName: "Apna bana le", filePath:"1.mp3", coverPath:"1.jpg"},
    {songName: "Besharam rang", filePath:"2.mp3", coverPath:"2.jpg"},
    {songName: "Doobey", filePath:"3.mp3", coverPath:"3.jpg"},
    {songName: "Humraah", filePath:"4.mp3", coverPath:"4.jpg"},
    {songName: "Meri jaan", filePath:"5.mp3", coverPath:"5.jpg"},
    {songName: "Tu hi haqeeqat", filePath:"6.mp3", coverPath:"6.jpg"},
    {songName: "Mann mera", filePath:"7.mp3", coverPath:"7.jpg"},
    {songName: "Tere naina", filePath:"8.mp3", coverPath:"8.jpg"},
    {songName: "Pehla pyaar", filePath:"9.mp3", coverPath:"9.jpg"},
    {songName: "kaho na kaho", filePath:"10.mp3", coverPath:"10.jpg"},
]

songItem.forEach((element,i)=>{
  element.getElementsByTagName("img")[0].src= songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
//audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        time=audioElement.currentTime;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        makeallplays();
        document.getElementById(songIndex).classList.remove('fa-play-circle');
        document.getElementById(songIndex).classList.add('fa-pause-circle');
        gif.style.opacity=1;

    }
    else{
        time=audioElement.currentTime;
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        makeallplays();
        document.getElementById(songIndex).classList.remove('fa-pause-circle');
        document.getElementById(songIndex).classList.add('fa-play-circle');
        gif.style.opacity=0;
    }

})
//listen to events
audioElement.addEventListener('timeupdate', ()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressbar.value=progress;
})
myProgressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressbar.value * audioElement.duration/100;
    time=audioElement.currentTime;
})
const makeallplays = ()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

let k=0;
Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
     element.addEventListener('click',(e)=>{
        r=parseInt(e.target.id);
        if(k!=r){
            makeallplays();
            songIndex = parseInt(e.target.id);
            k=songIndex;
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src=`${songIndex}.mp3`;
            masterSongName.innerText=songs[songIndex-1].songName;
            audioElement.currentTime=0;
            audioElement.play();
            gif.style.opacity=1;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        } 

         else if(audioElement.paused){
         console.log(e.target);
         makeallplays();
         songIndex = parseInt(e.target.id);
         k=songIndex;
         e.target.classList.remove('fa-play-circle');
         e.target.classList.add('fa-pause-circle');
         audioElement.src=`${songIndex}.mp3`;
         masterSongName.innerText=songs[songIndex-1].songName;
         audioElement.currentTime=time;
         audioElement.play();
         gif.style.opacity=1;
         masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');
         }
         else{
            
                console.log(e.target);
                 makeallplays();
                 songIndex = parseInt(e.target.id);
                 k=songIndex;
                 time=audioElement.currentTime;
                 e.target.classList.remove('fa-pause-circle');
                 e.target.classList.add('fa-play-circle');
                 audioElement.src=`${songIndex}.mp3`;
                 masterSongName.innerText=songs[songIndex-1].songName;
                 audioElement.currentTime=time;
                 audioElement.pause();
                 gif.style.opacity=0;
                 masterPlay.classList.remove('fa-pause-circle');
                 masterPlay.classList.add('fa-play-circle');
         }   

     })

})

document.getElementById('next').addEventListener('click',()=>{

    if(songIndex>10){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    makeallplays();
    document.getElementById(songIndex).classList.remove('fa-play-circle');
    document.getElementById(songIndex).classList.add('fa-pause-circle');
    audioElement.src=`${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex-1].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{

    if(songIndex<=1){
        songIndex=1;
    }
    else{
        songIndex-=1;
    }
    makeallplays();
    document.getElementById(songIndex).classList.remove('fa-play-circle');
    document.getElementById(songIndex).classList.add('fa-pause-circle');
    audioElement.src=`${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex-1].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

audioElement.addEventListener('ended', ()=>{
   if(songIndex==10){
       songIndex=1;
      
   }
   else{
       songIndex+=1;
   }
   makeallplays();
    document.getElementById(songIndex).classList.remove('fa-play-circle');
    document.getElementById(songIndex).classList.add('fa-pause-circle');
   audioElement.src=`${songIndex}.mp3`;
   masterSongName.innerText=songs[songIndex-1].songName;
   audioElement.currentTime=0;
   audioElement.play();
   gif.style.opacity=1;
   masterPlay.classList.remove('fa-play-circle');
   masterPlay.classList.add('fa-pause-circle');
})