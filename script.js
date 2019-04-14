$(document).ready(function(){


  let movieList = [
    "Captain America: The First Avenger",
    "Captain Marvel",
    "Iron Man",
    "The Incredible Hulk",
    "Iron Man 2",
    "Thor",
    "The Avengers",
    "Iron Man 3",
    "Thor: The Dark World",
    "Captain America: The Winter Soldier",
    "Guardians of the Galaxy",
    "Guardians of the Galaxy Vol. 2",
    "Avengers: Age of Ultron",
    "Ant-Man",
    "Captain America: Civil War",
    "Doctor Strange",
    "Black Panther",
    "Spider-Man-Homecoming",
    "Thor: Ragnarok",
    "Ant-Man and the Wasp",
    "Avengers: Infinity War",
  ]
for (let i = 0; i < movieList.length ; i++) {
let newElement = `<p>${movieList[i]}</p>`
console.log(newElement)
$("#display-area").append(newElement)
}









































//NAVIGATION BAR

$("#nav-home").click(goHome);
function goHome() {
  $("#display-area").empty();
  let homeContent = `
    <div class="navPage">
      <p>Welcome to Fun With Marvel!<p>
      <p>Challenge: Build out this homepage with interesting information.</p>
    </div>
  `
  $("#display-area").append(homeContent)
}

$("#nav-mcu-timeline").click(sortByMCUTimeline);
function sortByMCUTimeline() {
  $("#display-area").empty();
  let sortedMCU = `
    <div class="navPage">
      <p>Challenge: Display here movies sorted by MCU Timeline.<p>
      <p>Hint: "movieListDetailed" array of objects is already sorted by MCU Timeline. Link this nav button to that.</p>
    </div>
  `
  $("#display-area").append(sortedMCU)
}

$("#nav-release-date").click(sortByReleaseDate);
function sortByReleaseDate() {
  $("#display-area").empty();
  let sortedReleaseDate = `
    <div class="navPage">
      Challenge: Display here movies sorted by Release Date.
    </div>
  `
  $("#display-area").append(sortedReleaseDate)
}

$("#nav-credits").click(showCredits);
function showCredits() {
  $("#display-area").empty();
  let credits = `
    <div class="navPage">
      All images, descriptions, and data releated to Marvel on this Website is property of Marvel.
    </div>
  `
  $("#display-area").append(credits)
}



});
