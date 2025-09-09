var dogNames = getColumn("Dogs", "Name");
var dogImages = getColumn("Dogs", "Image");
var dogHeight = getColumn("Dogs", "Maximum Height");
var filteredDogImages=[];
var filteredDogNames=[];

var index = 0;

//Filters dogs based on size

function filterDogs(dogSize) {
  for (var i = 0; i < dogHeight.length; i++) {
    if ((dogHeight[i])<=20&&dogSize=="Small") {
      appendItem(filteredDogNames, dogNames[i]);
      appendItem(filteredDogImages, dogImages[i]);
    } else if (dogHeight[i]>20&& dogSize=="Large") {
      appendItem(filteredDogNames, dogNames[i]);
      appendItem(filteredDogImages, dogImages[i]);
    }
  }
  console.log((dogSize + " Dogs:\n") + filteredDogNames);
  updateScreen();
}

//When the start button is clicked by the user,the screen will change
onEvent("startButton", "click", function( ) {
  setScreen("chooseSizeScreen");
  playSound("assets/category_app/app_interface_click_3.mp3", false);
});
//Users can select whether they want a small or large dog by clicking one of the two options

onEvent("smallDogButton", "click", function( ) {
  setScreen("selectDogScreen");
  filterDogs("Small");
  playSound("assets/category_app/app_interface_click_3.mp3", false);
});
onEvent("bigDogButton", "click", function( ) {
  setScreen("selectDogScreen");
  filterDogs("Large");
  playSound("assets/category_app/app_interface_click_3.mp3", false);
});

//Allows users to scroll through a list of dogs based on prior selections
onEvent("leftButton", "click", function( ) {
  if (index>0) {
    index = index-1;
  }
  updateScreen();
  playSound("assets/category_app/app_interface_click_3.mp3", false);
});
onEvent("rightButton", "click", function( ) {
  if (index<filteredDogNames.length) {
    index = index+1;
  }
  updateScreen();
  playSound("assets/category_app/app_interface_click_3.mp3", false);
});


//Allows users to choose/select the dog they see on their screen
onEvent("selectDogButton", "click", function( ) {
  setScreen("nameDogScreen");
  setProperty("chosenDog", "image", getImageURL("dogImageScroll"));
  playSound("assets/category_app/app_interface_click_3.mp3", false);
});

//Moves on to the end screen and displays the final dog details
onEvent("adoptButton", "click", function( ) {
  setScreen("endScreen");
  setText("dogNameLabel", getText("nameYourDog"));
  setText("adoptedDogBreedLabel", getText("dogBreedName"));
  setProperty("adoptedDog", "image", getImageURL("dogImageScroll"));
  playSound("assets/category_achievements/vibrant_game_postive_achievement_2.mp3", false);
});

//Allows users to go back to the selectDogScreen
onEvent("backButton", "click", function( ) {
  setScreen("selectDogScreen");
  playSound("assets/category_app/app_interface_click_3.mp3", false);
});

//Allows users to go back to the beginning screen
onEvent("homeButton", "click", function( ) {
  setScreen("beginningScreen");
  playSound("assets/category_app/app_interface_click_3.mp3", false);
});

//Allows users to go back to the previous screen
onEvent("goBack", "click", function( ) {
  setScreen("chooseSizeScreen");
  restart();
});

//Resets the program and goes back to the beginning screen
onEvent("restart", "click", function( ) {
  setScreen("beginningScreen");
  setText("nameYourDog", "");
  restart();
});


function restart() {
  playSound("assets/category_app/app_interface_click_3.mp3", false);
  filteredDogImages = [];
  filteredDogNames = [];
  index = 0;
}

function updateScreen() {
  setText("dogBreedName", "Breed: " + filteredDogNames[index]);
  setProperty("dogImageScroll", "image", filteredDogImages[index]);
}


//Citations
//Dataset Used for Dog Breeds and Dog Images: "Dogs" from Code.org 
//(Original source of dataset: https://thedogapi.com/) 
//Dog Image on Front Cover from rawpixel.com 
