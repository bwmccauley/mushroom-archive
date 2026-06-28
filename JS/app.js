const messages = [
  "humidity stable",
  "fruiting body detected",
  "sensor drift observed",
  "organic mass increasing",
  "flush cycle incomplete",
  "do not open chamber"
];

setInterval(() => {
  document.title = messages[Math.floor(Math.random() * messages.length)];
}, 3000);