async function appetizerCategory(recipeInfo) {
  let apiKey = `ce681a90851b4bf28d743385de191be2`;
  let endPoint = `https://api.spoonacular.com/recipes/complexSearch?query=${recipeInput}&apiKey=${apiKey}&number=10&type=appetizer`;

  try {
    const response = await fetch(endPoint);
    const recipeInfo = await response.json();
    console.log(recipeInfo);

    printRecipeCards(recipeInfo);
  } catch (err) {
    console.log(`error fetching data`);
  }
}

async function breakfastCategory(recipeInfo) {
  let apiKey = `ce681a90851b4bf28d743385de191be2`;
  let endPoint = `https://api.spoonacular.com/recipes/complexSearch?query=${recipeInput}&apiKey=${apiKey}&number=10&type=breakfast`;

  try {
    const response = await fetch(endPoint);
    const recipeInfo = await response.json();
    console.log(recipeInfo);

    printRecipeCards(recipeInfo);
  } catch (err) {
    console.log(`error fetching data`);
  }
}

async function maincourseCategory(recipeInfo) {
  let apiKey = `ce681a90851b4bf28d743385de191be2`;
  let endPoint = `https://api.spoonacular.com/recipes/complexSearch?query=${recipeInput}&apiKey=${apiKey}&number=10&type="main course"`;

  try {
    const response = await fetch(endPoint);
    const recipeInfo = await response.json();
    console.log(recipeInfo);

    printRecipeCards(recipeInfo);
  } catch (err) {
    console.log(`error fetching data`);
  }
}

async function dessertCategory(recipeInfo) {
  let apiKey = `ce681a90851b4bf28d743385de191be2`;
  let endPoint = `https://api.spoonacular.com/recipes/complexSearch?query=${recipeInput}&apiKey=${apiKey}&number=10&type=dessert`;

  try {
    const response = await fetch(endPoint);
    const recipeInfo = await response.json();
    console.log(recipeInfo);

    printRecipeCards(recipeInfo);
  } catch (err) {
    console.log(`error fetching data`);
  }
}

async function allCategory() {
  let apiKey = `ce681a90851b4bf28d743385de191be2`;
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
}

export {
  appetizerCategory,
  breakfastCategory,
  maincourseCategory,
  dessertCategory,
  allCategory,
};
