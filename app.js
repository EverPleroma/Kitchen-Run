const recipeForm = document.getElementById("search-input-field");
const recipeSearchInput = document.getElementById("hero-input");

recipeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let recipeInput = recipeSearchInput.value.toLowerCase();

  console.log(recipeInput);
});
