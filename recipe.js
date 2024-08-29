// Example recipe data
const recipe = {
    title: 'Spaghetti Bolognese',
    image: 'spaghetti.jpg',
    ingredients: ['Pasta', 'Tomato Sauce', 'Ground Beef'],
    instructions: 'Cook pasta, brown ground beef, combine with sauce.'
  };
  
  document.addEventListener('DOMContentLoaded', function() {
    const recipeTitle = document.getElementById('recipe-title');
    const recipeImage = document.getElementById('recipe-image');
    const recipeIngredients = document.getElementById('recipe-ingredients');
    const recipeInstructions = document.getElementById('recipe-instructions');
    const saveRecipeButton = document.getElementById('save-recipe-button');
    const unsaveRecipeButton = document.getElementById('unsave-recipe-button');
  
    // Display recipe details
    displayRecipe(recipe);
  
    // Function to display recipe details
    function displayRecipe(recipe) {
      recipeTitle.textContent = recipe.title;
      recipeImage.src = recipe.image;
      recipeIngredients.innerHTML = recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('');
      recipeInstructions.textContent = recipe.instructions;
    }
  
    // Function to handle saving and unsaving recipe
    let isRecipeSaved = false; // Example state, should be managed in real application
  
    function saveRecipe() {
      // Example: Toggle save/unsave functionality
      if (!isRecipeSaved) {
        // Save the recipe
        console.log('Recipe saved');
        isRecipeSaved = true;
        saveRecipeButton.style.display = 'none';
        unsaveRecipeButton.style.display = 'inline-block';
      } else {
        // Unsave the recipe
        console.log('Recipe unsaved');
        isRecipeSaved = false;
        saveRecipeButton.style.display = 'inline-block';
        unsaveRecipeButton.style.display = 'none';
      }
    }
  
    // Event listener for save recipe button
    saveRecipeButton.addEventListener('click', saveRecipe);
  
    // Event listener for unsave recipe button
    unsaveRecipeButton.addEventListener('click', saveRecipe);
  });
  
