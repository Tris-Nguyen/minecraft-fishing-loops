// Functionize Minecraft Fishing Start Code

// Save HTML element as variable
let resultImgEl = document.getElementById("result-img");
let codOutEl = document.getElementById("num-cod");
let salmonOutEl = document.getElementById("num-salmon");
let TropicalOutEl = document.getElementById("num-tropical");
let PufferfishOutEl = document.getElementById("num-puffer");
let plus5Btn = document.getElementById("plus5");
let until200Btn = document.getElementById("until200");
let inputNumEl = document.getElementById("input-num");
let inventoryEl = document.getElementById("inventory");
let sortFishBtn = document.getElementById("sort-fish");

// Fish count variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

inputNumEl.value = "";

// Event Listeners for buttons
document
  .getElementById("fish-btn")
  .addEventListener("click", fishButtonClicked);
plus5Btn.addEventListener("click", plus5FishClicked);
until200Btn.addEventListener("click", until200ButtonClicked);
inputNumEl.addEventListener("change", textInputChange);
sortFishBtn.addEventListener("click", sortFishes);

function addFishes(fishesCount) {
  let inventoryHTML = inventoryEl.innerHTML;

  for (let i = 0; i < fishesCount; i++) {
    //  Determine selected character
    let character = document.getElementById("character-select").value;
    let imageSource;

    // Steve fish simulator
    if (character == "Steve") {
      let randNum = Math.random();

      if (randNum < 0.7) {
        imageSource = "img/Raw-Cod.png";
        numCod = numCod += 1;
        codOutEl.innerHTML = numCod;
      } else if (randNum < 0.9) {
        imageSource = "img/Raw-Salmon.png";
        numSalmon = numSalmon += 1;
        salmonOutEl.innerHTML = numSalmon;
      } else if (randNum < 0.95) {
        imageSource = "img/Tropical-Fish.png";
        numTropical = numTropical += 1;
        TropicalOutEl.innerHTML = numTropical;
      } else {
        imageSource = "img/Pufferfish.png";
        numPuffer = numPuffer += 1;
        PufferfishOutEl.innerHTML = numPuffer;
      }
      // Alex fish simulator
    } else if (character == "Alex") {
      let randNum = Math.random();

      if (randNum < 0.1) {
        imageSource = "img/Raw-Cod.png";
        numCod = numCod += 1;
        codOutEl.innerHTML = numCod;
      } else if (randNum < 0.2) {
        imageSource = "img/Raw-Salmon.png";
        numSalmon = numSalmon += 1;
        salmonOutEl.innerHTML = numSalmon;
      } else if (randNum < 0.5) {
        imageSource = "img/Tropical-Fish.png";
        numTropical = numTropical += 1;
        TropicalOutEl.innerHTML = numTropical;
      } else {
        imageSource = "img/Pufferfish.png";
        numPuffer = numPuffer += 1;
        PufferfishOutEl.innerHTML = numPuffer;
      }
      // Villager fish simulator
    } else {
      let randNum = Math.random();

      if (randNum < 0.25) {
        imageSource = "img/Raw-Cod.png";
        numCod = numCod += 1;
        codOutEl.innerHTML = numCod;
      } else if (randNum < 0.5) {
        imageSource = "img/Raw-Salmon.png";
        numSalmon = numSalmon += 1;
        salmonOutEl.innerHTML = numSalmon;
      } else if (randNum < 0.75) {
        imageSourcec = "img/Tropical-Fish.png";
        numTropical = numTropical += 1;
        TropicalOutEl.innerHTML = numTropical;
      } else {
        imageSource = "img/Pufferfish.png";
        numPuffer = numPuffer += 1;
        PufferfishOutEl.innerHTML = numPuffer;
      }
    }

    resultImgEl.src = imageSource;
    inventoryHTML += '<img src="' + imageSource + '">';
  }

  inventoryEl.innerHTML = inventoryHTML;
}

function fishButtonClicked() {
  addFishes(1);
}

function plus5FishClicked() {
  addFishes(5);
}

function until200ButtonClicked() {
  addFishes(200);
}

function textInputChange() {
  addFishes(inputNumEl.value);
}

// Function for sorting the fish
function sortFishes() {
  // Clear the inventory
  inventoryEl.innerHTML = "";

  // Add all cod
  for (let i = 0; i < numCod; i++) {
    inventoryEl.innerHTML += '<img src="' + "img/Raw-Cod.png" + '" />';
  }

  // Add all salmon
  for (let i = 0; i < numSalmon; i++) {
    inventoryEl.innerHTML += '<img src="' + "img/Raw-Salmon.png" + '" />';
  }

  // Add all tropical fish
  for (let i = 0; i < numTropical; i++) {
    inventoryEl.innerHTML += '<img src="' + "img/Tropical-Fish.png" + '" />';
  }

  // Add all pufferfish
  for (let i = 0; i < numPuffer; i++) {
    inventoryEl.innerHTML += '<img src="' + "img/Pufferfish.png" + '" />';
  }
}
