const liXi = document.getElementById("li-xi");
const liXiImage = document.getElementById("li-xi-image");
const moneyImage = document.getElementById("money-image");
const instruction = document.querySelector(".instruction");
const reopenButton = document.getElementById("reopen-button");
const happyNewYearText = document.querySelector("h2");
const music = document.getElementById("music");  

const moneyImages = [
  { image: "10k.png", probability: 0.5, message: "Bạn đã trúng 10.000 VNĐ! 🎉", song: "sounds/10kSong.mp3" },  // 50%
  { image: "20k.png", probability: 0.3, message: "Bạn đã trúng 20.000 VNĐ! 🎉", song: "sounds/20kSong.mp3" },  // 30%
  { image: "50k.png", probability: 0.2, message: "Bạn đã trúng 50.000 VNĐ! 🎉" , song: "sounds/500kSong.mp3" },  // 20%
];
let isLiXiOpen = false;

function getRandomMoneyImage() {
  const random = Math.random();
  let cumulativeProbability = 0;

  for (const money of moneyImages) {
    cumulativeProbability += money.probability;
    if (random < cumulativeProbability) {
      return money;
    }
  }
}


function openLiXi() {
  if (isLiXiOpen) return;

  isLiXiOpen = true;

  const selectedMoney = getRandomMoneyImage();

  liXiImage.style.animation = "none";
  liXiImage.style.animation = "fadeOut 0.5s ease forwards";

  setTimeout(() => {
    liXiImage.classList.add("hidden");
    moneyImage.src = selectedMoney.image;
    moneyImage.classList.remove("hidden");
    moneyImage.style.animation = "fadeIn 0.5s ease forwards";

    happyNewYearText.textContent = selectedMoney.message;

    instruction.classList.add("hidden");
    reopenButton.classList.remove("hidden");

    music.src = selectedMoney.song; 
    music.play(); 
  }, 500);
}


function closeLiXi() {
  isLiXiOpen = false;

 
  moneyImage.classList.add("hidden");
  liXiImage.classList.remove("hidden");
  liXiImage.style.animation = "shake 4s infinite";


  happyNewYearText.textContent = "Happy New Year";

 
  reopenButton.classList.add("hidden");
  instruction.classList.remove("hidden");

 
  music.pause();
  music.currentTime = 0;
}

liXi.addEventListener("click", openLiXi);
reopenButton.addEventListener("click", closeLiXi);