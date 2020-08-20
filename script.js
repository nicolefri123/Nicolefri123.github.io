function yourName(){
  //code here belongs to yourName function
  console.log("Function started");
  let name = prompt("Enter Your Name");
  console.log(name);
  var pTag = document.getElementById("name");
  pTag.innerHTML = ("Hi " + name + ":) I hope your day has been going well! Welcome again, to my blog.")}
function yourAge(){
  console.log("Function started");
  let age = prompt("Enter Your Age");
  console.log(age);
  var pTag = document.getElementById("age");
  pTag.innerHTML = ("Wow only " + age + " years young! Live life to the fullest.")}
function favoriteSport(){
  console.log("Function started");
  let sport = prompt("Enter Favorte Sport");
  console.log(sport);
  var pTag = document.getElementById("sport");
  pTag.innerHTML = ("I love " + sport + " too! You must be very athletic or quick minded to love " + sport + " !")}
function favoriteFood(){
  console.log("Function started");
  let food = prompt("Enter Favorte Food");
  console.log(food);
  var pTag = document.getElementById("food");
  pTag.innerHTML = ("I am hungry now! " + food + " is a great go to meal.")}


var amountOfLikes = 0
function handleLikes(){
  amountOfLikes++
  console.log(amountOfLikes)
  var likesDisplay = document.getElementById("likes")
  likesDisplay.innerHTML = amountOfLikes}
var amountOfImpartial = 0
function handleImpartial(){
  amountOfImpartial++
  console.log(amountOfImpartial)
  var impartialDisplay = document.getElementById("impartial")
  impartialDisplay.innerHTML = amountOfImpartial}
var amountOfDislikes = 0
function handleDislikes(){
  amountOfDislikes++
  console.log(amountOfDislikes)
  var dislikesDisplay = document.getElementById("dislikes")
  dislikesDisplay.innerHTML = amountOfDislikes}

function likeGif(){
console.log("Function started");
  let sport = prompt("Enter Favorte Sport");
  console.log(sport);
  var pTag = document.getElementById("sport");
  pTag.innerHTML = ("I love " + sport + " too! You must be very athletic or quick minded to love " + sport + " !")}

var $ = jQuery;
$('.thumbnail img').click(function(event) {
  $('.hero img').replaceWith($(this).clone());
});


function theButton(){
  console.log("Function started");
  let theButton = prompt("Thank You! Your information has been received. Enter initials and press ok to confirm.");
  console.log("Thank you! Your information has been received. Enter initials and press ok to confirm.");
  var pTag = document.getElementById("theButton");
  pTag.innerHTML = (".")}