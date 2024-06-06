function playMusic(){
    var music = new Audio('musicfile.mp3');
    music.play();
    }
  <input type="button" value="sound" onclick="playMusic()" />