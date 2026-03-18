const videoBtn = document.getElementById("videoBtn");
const videoModal = document.getElementById("videoModal");
const closeBtn = document.querySelector("#videoModal .close");
const myVideo = document.getElementById("myVideo");
const psdBtn = document.getElementById("psdBtn");
const psdModal = document.getElementById("psdModal");
const closePsdBtn = document.querySelector("#psdModal .close");

const profilePic = document.getElementById("profilePic");
const profileModal = document.getElementById("profileModal");
const closeProfileBtn = document.querySelector("#profileModal .close");

// Video Modal Logic

if(videoBtn){
  videoBtn.addEventListener("click", () => {
    videoModal.style.display = "flex";
    if(myVideo) myVideo.play();
  });
}

if(closeBtn){
  closeBtn.addEventListener("click", () => {
    videoModal.style.display = "none";
    if(myVideo){
     myVideo.pause();
     myVideo.currentTime = 0;
    }
  });
}

// PSD Modal Logic

if(psdBtn){
  psdBtn.addEventListener("click", () => {
    psdModal.style.display = "flex";
  });
}

if(closePsdBtn){
  closePsdBtn.addEventListener("click", () => {
    psdModal.style.display = "none";
  });
}

// Profile Modal Logic
if(profilePic){
  profilePic.addEventListener("click", () => {
    profileModal.style.display = "flex";
  });
}

if(closeProfileBtn){
  closeProfileBtn.addEventListener("click", () => {
    profileModal.style.display = "none";
  });
}

// Window Click Logic

window.addEventListener("click", (e) => {
  if (e.target == videoModal) {
    videoModal.style.display = "none";
    if(myVideo){
      myVideo.pause();
      myVideo.currentTime = 0;
    }
  }
  if (e.target == psdModal) {
    psdModal.style.display = "none";
  }
  if (e.target == profileModal) {
    profileModal.style.display = "none";
  }
});

// Function to handle missing images
function handleImageError(img) {
  // Sets a fallback image (gray box with "No Preview") if the JPG is missing
  img.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMTUwIiB2aWV3Qm94PSIwIDAgMjAwIDE1MCI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxNTAiIGZpbGw9IiM0NDQiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9ImFyaWFsIiBmb250LXNpemU9IjIyIiBmaWxsPSIjZmZmIj5NoCBQcmV2aWV3PC90ZXh0Pjwvc3ZnPg==";
  img.onerror = null; 
}