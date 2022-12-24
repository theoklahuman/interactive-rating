const title = document.querySelector("title");
const main = document.querySelector("main");
const submitButton = document.querySelector(".submit-button");
const ratingFinalized = document.querySelector(".rating-finalized");
const ratings = document.querySelector(".ratings-container");
const ratingMessage = document.querySelector(".rating-summary-message");

let userRating;

function showRating() {
  main.style.display = "none";
  ratingFinalized.style.display = "block";
  title.textContent = "Thank you!";
  ratingMessage.textContent = `You selected ${userRating} out of 5`;
}

ratings.addEventListener("click", (event) => {
  userRating = event.target.textContent;
  return userRating;
});

submitButton.addEventListener("click", showRating);
