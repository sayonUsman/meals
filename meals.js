const loadMeals = async (searchItem) => {
  try {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`;
    const response = await fetch(url);
    const data = await response.json();
    displayMeals(data.meals);
  } catch (error) {
    document.querySelector(
      ".container h1"
    ).innerHTML = `<h1 class="text-center text-warning fw-bold mt-4 mb-5">This item not available for this time!!! Please try again.</h1>`;
  }
};

const loadMealDetails = async (idMeal) => {
  try {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    const response = await fetch(url);
    const data = await response.json();
    displayMealImage(data.meals[0]);
  } catch (error) {
    document.querySelector(
      ".container h1"
    ).innerHTML = `<h1 class="text-center text-warning fw-bold mt-4 mb-5">This item not available for this time!!! Please try again.</h1>`;
  }
};

const displayMeals = (meals) => {
  document.querySelector(
    ".container h1"
  ).innerHTML = `<h1 class="text-center text-primary fw-bold mt-4 mb-5">Take Your Favourite Meal</h1>`;

  const mealsContainer = document.getElementById("meals-container");
  mealsContainer.innerHTML = "";

  meals.forEach((meal) => {
    const mealsSection = document.createElement("div");
    mealsSection.innerHTML = `
      <div class="card h-100">
        <img src="${meal.strMealThumb}" class="img-fluid rounded-top" alt="...">

        <div class="card-body">
          <h1 class="card-title fw-bold">${meal.strMeal}</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusamus nam corporis. Voluptatum, at tempore. Vitae optio dolor eveniet, cum enim natus laboriosam similique itaque, iure minima perferendis eligendi ea, aut rerum odio!.</p>
          <button onclick="loadMealDetails(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
            View Image
          </button>
        </div>
      </div>
    `;

    mealsContainer.appendChild(mealsSection);
  });
};

const displayMealImage = (meal) => {
  const mealName = document.getElementById("mealDetailsLabel");
  const mealImage = document.getElementById("mealImage");

  mealName.innerText = `${meal.strMeal}`;
  mealImage.innerHTML = `<img src="${meal.strMealThumb}" class="img-fluid rounded" alt="...">`;
};

const searchMeals = () => {
  const searchItem = document.getElementById("search-field").value;
  loadMeals(searchItem.toLowerCase());
};

loadMeals("");
