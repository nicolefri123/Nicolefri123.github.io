function yourName(){
  //code here belongs to yourName function
  console.log("Function started");
  let name = prompt("Enter Your Name");
  console.log(name);
  var pTag = document.getElementById("name");
  pTag.innerHTML = ("Hi " + name + ":) I hope your day has been going well! Welcome again, to my blog.")
}
      
function yourAge(){
  console.log("Function started");
  let age = prompt("Enter Your Age");
  console.log(age);
  var pTag = document.getElementById("age");
  pTag.innerHTML = ("Wow only " + age + " years young! Live life to the fullest.")
}

function favoriteSport(){
  console.log("Function started");
  let sport = prompt("Enter Favorte Sport");
  console.log(sport);
  var pTag = document.getElementById("sport");
  pTag.innerHTML = ("I love " + sport + " too! You must be very athletic or quick minded to love " + sport + " !")
}

function favoriteFood(){
  console.log("Function started");
  let food = prompt("Enter Favorte Food");
  console.log(food);
  var pTag = document.getElementById("food");
  pTag.innerHTML = ("I am hungry now! " + food + " is a great go to meal.")
}

var amountOfLikes = 0
//Like Button Code
function handleLike(){
  amountOfLikes++
  console.log(amountOfLikes)
  var likesDisplay = document.getElementById("likes")
  likesDisplay.innerHTML = amountOfLikes
}

var amountOImpartial = 0
function handleImpartial(){
  amountOfImpartial++
  console.log(amountOfImpartial)
  var impartialDisplay = document.getElementById("impartial")
  impartialDisplay.innerHTML = amountOfImpartial
}

var amountOfDislikes = 0
//Like Button Code
function handleDisikes(){
  amountOfDislikes++
  console.log(amountOfDislikes)
  var dislikesDisplay = document.getElementById("dislikes")
  dislikesDisplay.innerHTML = amountOfDislikes
}