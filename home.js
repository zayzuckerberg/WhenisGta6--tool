const releaseDate = new Date("2025-10-01T00:00:00").getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = releaseDate - now;

  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerText = "GTA VI is out!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerText =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);
