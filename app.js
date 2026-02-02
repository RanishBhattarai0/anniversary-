const startDate = new Date("2025-04-02"); // CHANGE to your date

function updateCounter() {
  const today = new Date();
  const diffTime = today - startDate;
  
  const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffTime / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diffTime / (1000 * 60)) % 60);
  const seconds = Math.floor((diffTime / 1000) % 60);
  
  document.getElementById("counter").innerText = `${days}d · ${hours}h · ${minutes}m · ${seconds}s`;
}

updateCounter(); // Initial call
setInterval(updateCounter, 1000); // Update every second

const notes = [
  "The way you understand me without words.",
  "How you make ordinary days feel safe.",
  "The calm I feel when I am with you.",
  "Your laughter that brightens my darkest days.",
  "The little things you do that show you care.",
  "Your angry face that I secretly adore.",
  "The way you show your clingy side with me.",
  "How you always know what to say to cheer me up.",
  "The warmth of your hand in mine.",
  "Your unwavering support in all I do.",
  "The way you look at me when you think I'm not noticing.",
  "Your silly jokes that never fail to make me smile.",
  "The comfort of your hugs after a long day.",
  "Your adventurous spirit that inspires me.",
  "The way you challenge me to be my best self.",
  "Your kindness that touches everyone around you.",
  "The way you remember the little details about me.",
  "Your passion for the things you love.",
  "The way you make me feel special every single day.",
  "Choosing you, every single day."
];

let index = 0;

function revealNote() {
  const note = document.getElementById("note");
  note.classList.remove("hidden");
  document.querySelector("button").innerText= "Tap Again";
  note.innerText = notes[index % notes.length];
  index++;

}