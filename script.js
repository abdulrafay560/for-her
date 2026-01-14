// TYPING EFFECT
const typingText = "Hey Begum Ge 💖";
let i = 0;
const typingEl = document.getElementById("typing");
if (typingEl) {
  typingEl.innerText = "";
  const typing = setInterval(() => {
    if (i < typingText.length) typingEl.innerText += typingText.charAt(i++);
    else clearInterval(typing);
  }, 120);
}

// FLOATING HEARTS
const hearts = ["💖","💕","💞","💗","❤️","🌸"];
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 80 + 15 + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 400);

// MUSIC PLAY ONCE
const bgm = document.getElementById("bgm");
window.addEventListener("click", () => { if (bgm.paused) bgm.play(); });

document.querySelectorAll("button, .btn").forEach(btn => {
  btn.addEventListener("click", () => {
    haptic();
    clickSound.currentTime = 0;
    clickSound.play();
  });
});

function haptic() {
  if (navigator.vibrate) {
    navigator.vibrate(30); // 30ms soft vibration
  }
}

const heartbeat = document.getElementById("heartbeat");

function loveEffect() {
  // vibration (mobile)
  if (navigator.vibrate) {
    navigator.vibrate([100, 50, 100]); // heartbeat pattern
  }

  // heartbeat sound
  heartbeat.currentTime = 0;
  heartbeat.play();
}

const sparkleSound = document.getElementById("sparkleSound");

document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", () => {
    sparkleSound.currentTime = 0;
    sparkleSound.play();

    if (navigator.vibrate) {
      navigator.vibrate(20); // soft tap
    }
  });
});



// SECTION NAVIGATION
function showSection(id) {
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}
