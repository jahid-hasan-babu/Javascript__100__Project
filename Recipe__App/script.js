const form = document.querySelector("form");
const searchInput = document.getElementById("search");
const mealList = document.getElementById("meal");
const mealModal = document.querySelector(".meal-modal");
const recipe = document.querySelector(".recipe-content");
const colseBtn = document.querySelector(".close-btn");


const searchURL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";
const lookupURL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

form.addEventListener('submit', getMeals);
mealList.addEventListener('click', getMealRecipe)
colseBtn.addEventListener('click', ()=>{
    mealModal.style.display = "none"
})

async function getMeals(){
    let searchInputValue = searchInput.value.trim();
    const res = await fetch(`${searchURL}${searchInputValue}`)
    const data = await res.json()
    displayMeals(data?.meals)
}

function displayMeals(meals){    
    let html = ``;


    if(meals){
       meals.forEach((meal)=>{
        html += `
      <div class="meal" data-id="${meal.idMeal}">
      <div class="meal-img">
        <img src="${meal.strMealThumb}" alt="" />
      </div>
      <div class="meal-name">
        <h3>${meal.strMeal}</h3>
        <a href="#" class="recipe-btn">View Recipe &rarr;</a>
      </div>
    </div>
      `;
       }) 
    }else{
        html = `<h2>No meal was found, please try again</h2>`
    }

    mealList.innerHTML = html;
}


async function getMealRecipe(e){
   if(e.target.classList.contains('recipe-btn')){
    const mealItem = e.target.parentElement.parentElement.dataset.id
    const res = await fetch(`${lookupURL}${mealItem}`);
    const data = await res.json();
    displayRecipe(data.meals[0]);
   }
}

function displayRecipe(meal){
    let html = `
      <div class="recipe-img">
      <img src="${meal.strMealThumb}" alt="" />
    </div>
    <h2 class="recipe-title">${meal.strMeal}</h2>

    <div class="recipe-instruction">
      <h3>Instruction</h3>
      <p>
      ${meal.strInstructions}
      </p>
    </div>

    <div class="recipe-link">
      <a href="${meal.strYoutube}" target="_blank">Watch Video</a>
    </div>
  `;

  recipe.innerHTML = html;
  mealModal.style.display = "block";

}