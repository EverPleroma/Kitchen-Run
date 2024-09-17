function printRecipeCards(recipeArray, recipeContainer) {
  recipeContainer.innerHTML = "";
  // console.log(recipeArray);

  recipeArray.forEach((recipe, index) => {
    let id = recipe.id;
    let title = recipe.title;
    let image = recipe.image;
    let cookingTime = recipe.readyInMinutes;
    let calories = recipe.nutrition.nutrients[0].amount.toFixed();
    let diet = recipe.diets[0];
    let cusine = recipe.cuisines[0];
    let type = recipe.dishTypes[2];
    let recipeUrl = recipe.sourceUrl;

    // let summary = recipe.summary;

    // console.log(recipe);

    let recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");
    recipeCard.id = `${index}`;
    let recipeID = Number(recipeCard.id);

    let recipeImageContainer = document.createElement("div");
    recipeImageContainer.classList.add("recipe_card-image");

    let recipeImage = document.createElement("img");
    recipeImage.src = image;
    recipeImage.alt = title;

    let recipeTags = document.createElement("div");
    recipeTags.classList.add("recipe-tags");

    let cuisineTag = document.createElement("tag");
    cuisineTag.classList.add("tag");
    cuisineTag.textContent = `${cusine}`;

    let dietTag = document.createElement("tag");
    dietTag.classList.add("tag");
    dietTag.textContent = `${diet}`;

    let typeTag = document.createElement("tag");
    typeTag.classList.add("tag");
    typeTag.textContent = `${type}`;

    let likeContainer = document.createElement("div");
    likeContainer.classList.add("like-button");

    let likeIcon = document.createElement("i");
    likeIcon.classList.add("fa-regular", "fa-heart");
    likeIcon.setAttribute("data-action", "like");

    // let likedIcon = document.createElement("i");
    // likedIcon.classList.add("fa-solid", "fa-heart");

    let recipeDetails = document.createElement("div");
    recipeDetails.classList.add("recipe-details");

    let recipeTitle_Descr = document.createElement("div");
    recipeTitle_Descr.classList.add("recipe_informations");

    let recipeTitleContainer = document.createElement("div");
    recipeTitleContainer.classList.add("recipe_info-title");

    let recipeTitle = document.createElement("h1");
    recipeTitle.textContent = title;

    let recipeDescrContainer = document.createElement("div");
    recipeDescrContainer.classList.add("recipe_info-descr");

    let recipeDscr = document.createElement("p");
    recipeDscr.textContent = `Meal made with kidney beans, plantain, okra, and hearty vegetables.`;

    let recipeCardBottomContainer = document.createElement("div");
    recipeCardBottomContainer.classList.add("recipe_card_bottom-container");

    let recipeCardBottomDetails = document.createElement("div");
    recipeCardBottomDetails.classList.add("recipe_card_bottomDetails");

    let recipeTimeDetails = document.createElement("div");
    recipeTimeDetails.classList.add("time_details");

    let timeIcon = document.createElement("i");
    timeIcon.innerHTML = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path
                                              d="M12.7922 4.92835L13.7729 3.94758L14.7274 4.90203L13.7466 5.8828C14.7157 7.09589 15.1836 8.63402 15.0541 10.1813C14.9246 11.7286 14.2076 13.1675 13.0503 14.2027C11.893 15.2378 10.3833 15.7905 8.83124 15.7473C7.27916 15.7041 5.80253 15.0682 4.70462 13.9703C3.60671 12.8724 2.97086 11.3958 2.92765 9.84371C2.88444 8.29163 3.43716 6.78191 4.47229 5.62462C5.50742 4.46733 6.94639 3.75031 8.49366 3.62082C10.0409 3.49133 11.5791 3.95921 12.7922 4.92835V4.92835ZM9 14.4C9.6205 14.4 10.2349 14.2777 10.8082 14.0403C11.3814 13.8028 11.9023 13.4548 12.3411 13.016C12.7798 12.5773 13.1279 12.0564 13.3653 11.4831C13.6028 10.9099 13.725 10.2954 13.725 9.67495C13.725 9.05445 13.6028 8.44003 13.3653 7.86677C13.1279 7.29351 12.7798 6.77263 12.3411 6.33387C11.9023 5.89511 11.3814 5.54707 10.8082 5.30962C10.2349 5.07217 9.6205 4.94995 9 4.94995C7.74686 4.94995 6.54503 5.44776 5.65892 6.33387C4.77281 7.21998 4.275 8.4218 4.275 9.67495C4.275 10.9281 4.77281 12.1299 5.65892 13.016C6.54503 13.9021 7.74686 14.4 9 14.4V14.4ZM8.325 6.29995H9.675V10.35H8.325V6.29995ZM6.3 1.57495H11.7V2.92495H6.3V1.57495Z"
                                              fill="currentColor" />
                                      </svg>`;
    timeIcon.classList.add("time_details");

    let timeText = document.createElement("p");
    timeText.textContent = `${cookingTime} mins`;

    let recipeCalorieDetails = document.createElement("div");
    recipeCalorieDetails.classList.add("time_details");

    let caloriesIcon = document.createElement("i");
    caloriesIcon.innerHTML = ` <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path
                                              d="M11.7611 6.68668C11.7611 5.86814 12.8508 5.65083 13.1395 6.41763C13.839 8.26994 14.3481 9.92979 14.3481 10.8259C14.3481 12.1982 13.803 13.5142 12.8327 14.4846C11.8624 15.4549 10.5463 16 9.17407 16C7.80182 16 6.48577 15.4549 5.51545 14.4846C4.54512 13.5142 4 12.1982 4 10.8259C4 9.86356 4.58777 8.02055 5.36802 6.0006C6.37697 3.38459 6.88195 2.07659 7.50595 2.00622C7.70463 1.98345 7.92298 2.02381 8.10097 2.11694C8.65666 2.40669 8.65666 3.8337 8.65666 6.68668C8.65666 7.09835 8.8202 7.49317 9.11129 7.78427C9.40239 8.07536 9.79721 8.2389 10.2089 8.2389C10.6206 8.2389 11.0154 8.07536 11.3065 7.78427C11.5976 7.49317 11.7611 7.09835 11.7611 6.68668Z"
                                              stroke="currentColor" />
                                          <path
                                              d="M8.13844 16.0008L7.86628 15.3209C7.63404 14.7421 7.55986 14.1119 7.65132 13.4949C7.74278 12.878 7.99661 12.2964 8.38679 11.8098C8.48112 11.6918 8.60078 11.5966 8.73692 11.5311C8.87306 11.4656 9.02219 11.4316 9.17325 11.4316C9.32431 11.4316 9.47343 11.4656 9.60957 11.5311C9.74572 11.5966 9.86538 11.6918 9.95971 11.8098C10.7524 12.8012 10.9511 14.1423 10.4802 15.3209L10.2081 16.0008"
                                              stroke="currentColor" />
                                      </svg>`;
    caloriesIcon.classList.add("calorie_details");

    let caloriesText = document.createElement("p");
    caloriesText.textContent = `${calories} kcal`;

    let viewRecipeBtn = document.createElement("button");

    let viewRecipeBtnLink = document.createElement("a");
    viewRecipeBtnLink.textContent = `View recipe`;
    viewRecipeBtnLink.href = recipeUrl;
    viewRecipeBtnLink.target = "_blank";

    // Appending
    recipeTimeDetails.append(timeIcon, timeText);
    recipeCalorieDetails.append(caloriesIcon, caloriesText);
    recipeCardBottomDetails.append(recipeTimeDetails, recipeCalorieDetails);
    viewRecipeBtn.append(viewRecipeBtnLink);
    recipeCardBottomContainer.append(recipeCardBottomDetails, viewRecipeBtn);

    recipeTitleContainer.append(recipeTitle);
    recipeDescrContainer.append(recipeDscr);
    recipeTitle_Descr.append(recipeTitleContainer, recipeDescrContainer);
    recipeDetails.append(recipeTitle_Descr, recipeCardBottomContainer);

    likeContainer.append(likeIcon);
    recipeTags.append(cuisineTag, dietTag, typeTag);
    recipeImageContainer.append(recipeImage, recipeTags, likeContainer);
    recipeCard.append(recipeImageContainer, recipeDetails);

    recipeContainer.append(recipeCard);

    likeIcon.addEventListener("click", () => toggleLikeIcon(likeIcon, recipe));
  });
}

let favoriteRecipes = [];
// console.log(favoriteRecipes);

function toggleLikeIcon(likeIcon, recipe) {
  let favoriteLiteral = {
    id: recipe.id,
    title: recipe.title,
  };

  const recipeIndex = favoriteRecipes.findIndex(
    (likedrecipe) => likedrecipe.id === recipe.id
  );

  console.log(favoriteRecipes);

  if (recipeIndex === -1) {
    likeIcon.classList.toggle("fa-solid");
    favoriteRecipes.push(favoriteLiteral);
    localStorage.setItem("favoriteRecipes", JSON.stringify(favoriteRecipes));
  } else {
    likeIcon.classList.remove("fa-solid");
    likeIcon.classList.add("fa-regular");
    favoriteRecipes.splice(recipeIndex, 1);
    localStorage.setItem("favoriteRecipes", JSON.stringify(favoriteRecipes));
  }
}

// function fetchRecipes() {
//   if (localStorage.getItem("favoriteRecipes")) {
//     favoriteRecipes = JSON.parse(localStorage.getItem("favoriteRecipes"));
//   }
// }
// fetchRecipes();

export default printRecipeCards;
