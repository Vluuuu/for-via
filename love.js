function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";
  document.getElementById("love-container").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);

const style = document.createElement('style');
style.innerHTML = `
  .heart {
    width: 20px;
    height: 20px;
    background: #1b6ca8; /* biru utama */
    position: fixed;
    top: -20px;
    left: 0;
    pointer-events: none;
    transform: rotate(45deg);
    animation: fall linear;
  }

  .heart::before,
  .heart::after {
    content: '';
    width: 20px;
    height: 20px;
    background: #1b6ca8; /* biru juga */
    position: absolute;
    border-radius: 50%;
  }

  .heart::before {
    top: -10px;
    left: 0;
  }

  .heart::after {
    left: 10px;
    top: 0;
  }

  @keyframes fall {
    to {
      transform: translateY(100vh) rotate(360deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
