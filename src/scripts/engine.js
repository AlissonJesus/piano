const pianoKeys = document.querySelector(".piano-keys");
const volumeSlider = document.querySelector(".volume-slider");
const keyChecks = document.querySelector(".keys-check");
const keyLetter = [
  "A",
  "W",
  "S",
  "E",
  "D",
  "F",
  "T",
  "G",
  "Y",
  "H",
  "U",
  "J",
  "K",
  "O",
  "L",
  "P",
  ";"
];
const audioKey = new Audio("");

const playTunes = (key) => {
  audioKey.src = `src/tunes/${key}.wav`;
  audioKey.play();
};

const showEffectActive = (element) => {
  element.classList.toggle("active");
  setTimeout(() => {
    element.classList.toggle("active");
  }, 150);
};

const handleVolume = ({ target: element }) => {
  const value = element.value;
  audioKey.volume = value;
};

const showKeyletter = () => {
  const keys = pianoKeys.querySelectorAll("span");
  const test = [];
  keys.forEach((key) => {
    test.push(key.outerText);
    key.classList.toggle("hide");
  });
  console.log(test);
};

pianoKeys.addEventListener("click", (e) => {
  const element = e.target;
  const key = element.textContent.toLowerCase();
  showEffectActive(element);
  playTunes(key);
});

document.addEventListener("keydown", (e) => {
  const key = e.key;
  const isIncluidedLetter = keyLetter.includes(key.toUpperCase());
  if (isIncluidedLetter) {
    playTunes(key);
  }
});

keyChecks.addEventListener("click", showKeyletter);

volumeSlider.addEventListener("input", handleVolume);
