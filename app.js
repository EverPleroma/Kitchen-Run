const recipeForm = document.querySelectorAll(".search-input-field");
const recipeSearchInput = document.querySelectorAll(".hero-input");
const category = document.querySelectorAll(".category");
const categoryContainer = document.getElementById("categories-container");
let searchResults = document.querySelector(".search_Results");
// let searchResults_text = document.querySelector(".search_Results p");

import { recipeDummyData } from "./data.js";
import {
  printRecipeCards,
  printFavouriteRecipes,
  favouriteRecipes,
} from "./printRecipeCards.js";
console.log(favouriteRecipes);

recipeForm.forEach((form, index) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let queryInput = recipeSearchInput[index].value;

    // console.log(queryInput);
    recipeAccess(queryInput);
    searchResults.style.display = "block";

    form.reset();
  });
});

console.log(favouriteRecipes);

async function recipeAccess(queryInput) {
  let apiKey = `ce681a90851b4bf28d743385de191be2`;
  let endPoint = `https://api.spoonacular.com/recipes/complexSearch?query=${queryInput}&apiKey=${apiKey}&number=2&sort=popularity`;

  try {
    const response = await fetch(endPoint);
    const recipeInfo = await response.json();
    let recipeInfoArray = recipeInfo.results;
    let recipeArray = [];
    for (const recipe of recipeInfoArray) {
      let ID = recipe.id;
      console.log(ID);

      let detailedRecipe = await extRecipeInfo(ID);
      recipeArray.push(detailedRecipe);
    }
    console.log(recipeArray);
    printRecipeCards(recipeArray, queryInput);
  } catch (err) {
    console.log(`error fetching data`, err);
  }
}

async function extRecipeInfo(ID) {
  let apiKey = `ce681a90851b4bf28d743385de191be2`;
  let endPoint = `https://api.spoonacular.com/recipes/${ID}/information?apiKey=${apiKey}&includeNutrition=true`;

  try {
    const res = await fetch(endPoint);
    const recipeInfo = await res.json();
    return recipeInfo;
  } catch (err) {
    console.log(`error fetching data`);
  }
}

async function allAccess(cuisineCategory) {
  let apiKey = `ce681a90851b4bf28d743385de191be2`;
  let endPoint = `https://api.spoonacular.com/recipes/complexSearch?type=${cuisineCategory}&apiKey=${apiKey}&number=4&addRecipeInformation=true&addRecipeNutrition=true&sort=popularity`;

  try {
    // const response = await fetch(endPoint);
    // const recipeInfo = await response.json();
    // let recipeArray = recipeInfo.results;

    let recipeArray = recipeDummyData;
    console.log(recipeArray);

    printRecipeCards(recipeArray);
  } catch (err) {
    console.log(`error fetching data`);
  }
}

async function allCategory() {
  let apiKey = `ce681a90851b4bf28d743385de191be2`;
  let endPoint = `https://api.spoonacular.com/recipes/random?number=15&apiKey=${apiKey}&includeNutrition=true`;

  try {
    // const response = await fetch(endPoint);
    // if (!response.ok) {
    //   throw new Error(`HTTP error! status: ${response.status}`);
    // }
    // const recipeInfo = await response.json();
    // let recipeArray = recipeInfo.recipes;
    let recipeArray = recipeDummyData;

    printRecipeCards(recipeArray);
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
