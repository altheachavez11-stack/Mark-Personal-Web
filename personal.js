const videoBtn = document.getElementById("videoBtn");
const modal = document.getElementById("videoModal");
const closeBtn = document.querySelector(".close");
const myVideo = document.getElementById("myVideo");

videoBtn.addEventListener("click", () => {
modal.style.display = "flex";
myVideo.play();
});

function closeModal() {
modal.style.display = "none";
myVideo.pause();
myVideo.currentTime = 0;
}

closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", (e) => {
if(e.target == modal){
closeModal();
}
});