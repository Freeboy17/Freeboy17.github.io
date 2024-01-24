function openFullscreen() {
    var elem = document.documentElement;

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }


  function playAudio(src, duration, callback) {
    var audio = new Audio(src);
    audio.play();

    setTimeout(function() {
      audio.pause();
      if (callback) {
        callback();
      }
    }, duration * 1000);
  }
let start_button = document.querySelector(".btn");
let desc = document.querySelector(".desription");

start_button.addEventListener("click", () => {
    desc.classList.add("shown");
    openFullscreen();
    
  playAudio("1-08. Minecraft (mp3cut.net).mp3", 20, function() {
    
    playAudio("1-08. Minecraft (mp3cut.net).mp3", 10);
  });
})

  playAudio("1-08. Minecraft (mp3cut.net).mp3", 15, function() {
    
    playAudio("239737-34ac55c2-f09d-4990-9c72-eecd484c123d.mp3", 10); 
  });