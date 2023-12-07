var appContainer = document.getElementById('app');
var startContainer = document.querySelector('.start');
var image1 = null
var image2 = null

var images = [
  "https://static.wikia.nocookie.net/paw-patrol/images/6/64/Marshall_PNG.png",
  "https://i.pinimg.com/564x/c7/88/40/c788400e776933775153a036c97619b1.jpg",
  "https://static.wikia.nocookie.net/paw-patrol-patrulla-de-cachorros/images/a/ae/Skye.png",
  "https://static.wikia.nocookie.net/paw-patrol/images/5/59/Zuma_PNG.png",
  "https://static.wikia.nocookie.net/paw-patrol-patrulla-de-cachorros/images/1/14/Rubble.png",
  "https://static.wikia.nocookie.net/paw-patrol-patrulla-de-cachorros/images/3/38/Everest.png",
  "https://static.wikia.nocookie.net/paw-patrol-patrulla-de-cachorros/images/8/82/Rocky.png"
]

images = [...images, ...images]

startContainer.addEventListener("click", () => {
  startContainer.classList.add("hidden")
  appContainer.classList.add("flex")
  appContainer.classList.remove("hidden")
  start()
})

function start() {
  var audio = new Audio('assets/sounds/game.mp3');
  audio.loop = true;
  audio.volume = 0.005;
  audio.play();
  shuffleArray(images)
  image1 = null
  image2 = null

  appContainer.innerHTML = "";

  images.forEach((url) => {
    var img = document.createElement("img")
    var div = document.createElement("div")
    div.setAttribute("class", "click-me img-container w-[100px] h-[100px] flex items-center justify-center m-auto")
    img.setAttribute("src", url)
    img.setAttribute("class", "flex items-center w-full h-full justify-center w-full h-full")
    div.appendChild(img)
    appContainer.appendChild(div)
    div.addEventListener("click", handleClick)
  })
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

function handleClick(e) {
  var clicked = e.target
  if (image1 != null && image2 != null) {
    return
  }

  // check if it has class img-container and in that case return
  if (!clicked.classList.contains("img-container")) {
    console.log("already revealed")
    return
  }

  clicked.classList.remove("img-container")
  if (image1 == null) {
    image1 = clicked
  } else {
    image2 = clicked
    if (image1.querySelector("img").src == image2.querySelector("img").src) {
      console.log("same")
      image1 = null
      image2 = null
      var audio = new Audio('assets/sounds/guessed.mp3');
      audio.play();
      // check if all images were found
      if (document.querySelectorAll(".img-container").length == 0) {
        var audio = new Audio('assets/sounds/win.mp3');
        audio.play();
        setTimeout(() => {
          start()
        }, 2000)
      }
    } else {
      var audio = new Audio('assets/sounds/error.mp3');
      audio.play();
      setTimeout(() => {
        image1.classList.add("img-container")
        image2.classList.add("img-container")
        image1 = null
        image2 = null
      }, 1000)
    }
  }
}
