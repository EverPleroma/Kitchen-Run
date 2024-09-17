const recipeForm = document.getElementById("search-input-field");
const recipeSearchInput = document.getElementById("hero-input");
const recipeContainer = document.getElementById("recipe_result-container");
const category = document.querySelectorAll(".category");
const categoryContainer = document.getElementById("categories-container");

import printRecipeCards from "./printRecipeCards.js";
// import allCategory from "./allAPI.js";
// allCategory();

recipeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let queryInput = recipeSearchInput.value.toLowerCase();

  recipeAccess(queryInput);

  recipeForm.reset();
});

async function recipeAccess(queryInput) {
  let apiKey = `ce681a90851b4bf28d743385de191be2`;
  let endPoint = `https://api.spoonacular.com/recipes/complexSearch?query=${queryInput}&apiKey=${apiKey}&number=2&addRecipeInformation=true&addRecipeNutrition=true&sort=popularity`;

  try {
    const response = await fetch(endPoint);
    const recipeInfo = await response.json();
    let recipeArray = recipeInfo.results;

    // recipeArray.forEach((recipe) => {
    //   printRecipeCards(recipe, recipeContainer);
    // });

    printRecipeCards(recipeArray, recipeContainer);
  } catch (err) {
    console.log(`error fetching data`);
  }
}

async function allAccess(cuisineCategory) {
  let apiKey = `ce681a90851b4bf28d743385de191be2`;
  let endPoint = `https://api.spoonacular.com/recipes/complexSearch?type=${cuisineCategory}&apiKey=${apiKey}&number=2&addRecipeInformation=true&addRecipeNutrition=true&sort=popularity`;

  try {
    const response = await fetch(endPoint);
    const recipeInfo = await response.json();
    let recipeArray = recipeInfo.results;

    printRecipeCards(recipeArray, recipeContainer);
  } catch (err) {
    console.log(`error fetching data`);
  }
}

async function allCategory() {
  let apiKey = `ce681a90851b4bf28d743385de191be`;
  let endPoint = `https://api.spoonacular.com/recipes/random?number=2&apiKey=${apiKey}&includeNutrition=true`;

  try {
    const response = await fetch(endPoint);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const recipeInfo = await response.json();
    let recipeArray = recipeInfo.recipes;

    console.log(recipeInfo);

    printRecipeCards(recipeArray, recipeContainer);

    console.log(recipeInfo);
  } catch (err) {
    console.log(`error fetching data`);
  }

  category[0].focus();
}
allCategory();

// Event delegation
categoryContainer.addEventListener("click", categorySelect);
function categorySelect(e) {
  let userTarget = e.target;
  let categoryTarget = userTarget.closest(".category");
  let cuisineCategory = categoryTarget.dataset.action;

  category.forEach((categoryItem) => {
    categoryItem.classList.remove("active");
  });

  categoryTarget.classList.add("active");

  if (cuisineCategory === "appetizers") {
    allAccess(cuisineCategory);
  } else if (cuisineCategory === "main course") {
    allAccess(cuisineCategory);
  } else if (cuisineCategory === "dessert") {
    allAccess(cuisineCategory);
  } else if (cuisineCategory === "drink") {
    allAccess(cuisineCategory);
  } else if (cuisineCategory === "all") {
    allCategory();
  }

  // console.log(categoryTarget);
}
