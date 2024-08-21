function displayRecipe(response) {
  console.log(response.data.answer);

  new Typewriter(".recipe", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}

function recipeGenerator(ingredients) {
  let apiKey = "a62bt3c87f1eoc3b004febcaf4a111f5";
  let context =
    "You know a lot of traditional recipes, worldwide. You can generate recipe which contains given ingredient/ingreadients. Receipes should be easy to understand and no more then 1 and half hour long";
  let prompt = ingredients;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.add("recipe");
  recipeElement.innerHTML = "Generating a recipe for you.. please wait";

  console.log("called the AI api");
  axios.get(apiUrl).then(displayRecipe);
}

function searchHendler(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#text-input");
  recipeGenerator(searchInputElement.value);
  console.log(searchInputElement.value);
}

let searchForm = document.querySelector("#form");
searchForm.addEventListener("submit", searchHendler);
