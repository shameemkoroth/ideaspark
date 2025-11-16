// Spark Generator
const ideas = [
  "A fridge that suggests recipes based on what's inside 🍳",
  "Shoes that change color with your mood 👟",
  "A pen that writes what you’re thinking 🖊️",
  "A mirror that gives you daily pep talks 🪞",
  "A plant that dances to your playlist 🌿🎶"
];

function generateIdea() {
  const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
  document.getElementById('ideaOutput').textContent = randomIdea;
}

// Countdown Timer for Challenges
function startCountdown() {
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 7); // 7 days challenge
  const countdownElement = document.getElementById('countdown');

  function updateCountdown() {
    const now = new Date();
    const diff = endDate - now;
    if (diff <= 0) {
      countdownElement.textContent = "Challenge ended!";
      return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  setInterval(updateCountdown, 1000);
}
if (document.getElementById('countdown')) startCountdown();

// Random Image in Gallery
function randomImage() {
  const images = [
    "images/kitten.jpg",
    "images/bear.jpg",
    "images/beard.jpg"
  ];
  const random = images[Math.floor(Math.random() * images.length)];
  document.getElementById('randomOutput').textContent = `Random pick: ${random}`;
}

// Confetti Effect on Join Form
function confettiEffect(event) {
  event.preventDefault();
  alert("🎉 Welcome to the Spark Squad! 🎉");
}
