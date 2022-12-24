const main = document.querySelector("main");
const submitButton = document.querySelector(".submit-button");
const ratingFinalized = document.querySelector(".rating-finalized");

function showRating() {
    main.style.display = "none";
    ratingFinalized.style.display = "block";

}

submitButton.addEventListener("click", showRating);