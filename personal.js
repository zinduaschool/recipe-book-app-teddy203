// Example saved recipes data
let savedRecipes = [
    { id: 1, title: 'Spaghetti Bolognese', image: 'spaghetti.jpg', ingredients: ['Pasta', 'Tomato Sauce', 'Ground Beef'], instructions: 'Cook pasta, brown ground beef, combine with sauce.' },
    { id: 2, title: 'Chicken Curry', image: 'chicken_curry.jpg', ingredients: ['Chicken', 'Curry Powder', 'Coconut Milk'], instructions: 'Cook chicken with curry powder and coconut milk.' }
  ];
  
  document.addEventListener('DOMContentLoaded', function() {
    const savedRecipesSection = document.getElementById('saved-recipes');
  
    // Display all saved recipes on page load
    displaySavedRecipes();
  
    function displaySavedRecipes() {
      savedRecipesSection.innerHTML = ''; // Clear previous recipes
  
      savedRecipes.forEach(recipe => {
        const recipeElement = createRecipeElement(recipe);
        savedRecipesSection.appendChild(recipeElement);
      });
    }
  
    function createRecipeElement(recipe) {
      const recipeDiv = document.createElement('div');
      recipeDiv.classList.add('recipe');
  
      recipeDiv.innerHTML = `
        <h2>${recipe.title}</h2>
        <img src="${recipe.image}" alt="${recipe.title}">
        <ul>
          <li><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</li>
          <li><strong>Instructions:</strong> ${recipe.instructions}</li>
        </ul>
        <button class="edit-button" data-id="${recipe.id}">Edit</button>
        <button class="delete-button" data-id="${recipe.id}">Delete</button>
        <form class="edit-form">
          <textarea rows="4" id="edit-ingredients-${recipe.id}">${recipe.ingredients.join('\n')}</textarea>
          <textarea rows="4" id="edit-instructions-${recipe.id}">${recipe.instructions}</textarea>
          <button type="button" class="save-edit-button" data-id="${recipe.id}">Save</button>
          <button type="button" class="cancel-edit-button" data-id="${recipe.id}">Cancel</button>
        </form>
      `;
  
      // Event listener for edit button
      const editButton = recipeDiv.querySelector('.edit-button');
      editButton.addEventListener('click', function() {
        recipeDiv.querySelector('.edit-form').style.display = 'block';
      });
  
      // Event listener for delete button
      const deleteButton = recipeDiv.querySelector('.delete-button');
      deleteButton.addEventListener('click', function() {
        deleteRecipe(recipe.id);
      });
  
      // Event listener for save edit button
      const saveEditButton = recipeDiv.querySelector('.save-edit-button');
      saveEditButton.addEventListener('click', function() {
        saveEditedRecipe(recipe.id);
      });
  
      // Event listener for cancel edit button
      const cancelEditButton = recipeDiv.querySelector('.cancel-edit-button');
      cancelEditButton.addEventListener('click', function() {
        recipeDiv.querySelector('.edit-form').style.display = 'none';
      });
  
      return recipeDiv;
    }
  
    function deleteRecipe(id) {
      savedRecipes = savedRecipes.filter(recipe => recipe.id !== id);
      displaySavedRecipes();
    }
  
    function saveEditedRecipe(id) {
      const editedIngredients = document.getElementById(`edit-ingredients-${id}`).value.split('\n');
      const editedInstructions = document.getElementById(`edit-instructions-${id}`).value;
  
      const index = savedRecipes.findIndex(recipe => recipe.id === id);
      if (index !== -1) {
        savedRecipes[index].ingredients = editedIngredients;
        savedRecipes[index].instructions = editedInstructions;
        displaySavedRecipes();
        document.getElementById(`edit-ingredients-${id}`).value = ''; // Clear textarea after save
        document.getElementById(`edit-instructions-${id}`).value = ''; // Clear textarea after save
        document.querySelector(`.recipe[data-id="${id}"] .edit-form`).style.display = 'none'; // Hide edit form after save
      }
    }
  });
  
