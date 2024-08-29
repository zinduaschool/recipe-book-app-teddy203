document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-bar');
    const searchButton = document.getElementById('search-button');
    const recipesList = document.getElementById('recipes');
  
    
    const popularRecipes = [
      { id: 1, title: 'Spaghetti Bolognese', image: 'sphagetti.jpeg', ingredients: ['Pasta', 'Tomato Sauce', 'Ground Beef'], instructions: 'Cook pasta, brown ground beef, combine with sauce.' },
      { id: 2, title: 'Chicken Curry', image: 'Curry.jpeg', ingredients: ['Chicken', 'Curry Powder', 'Coconut Milk'], instructions: 'Cook chicken with curry powder and coconut milk.' },
      { id: 3, title: 'Beef Stroganoff', image: 'beef.jpeg', ingredients: ['Beef', 'Mushrooms', 'Sour Cream'], instructions: 'Cook beef, add mushrooms and sour cream.' }
    ];
  
    
    function displayPopularRecipes(recipes) {
      recipesList.innerHTML = ''; 
  
      recipes.forEach(recipe => {
        const li = document.createElement('li');
        li.innerHTML = `
          <h3>${recipe.title}</h3>
          <img src="${recipe.image}" alt="${recipe.title}">
          <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
          <p><strong>Instructions:</strong> ${recipe.instructions}</p>
        `;
        recipesList.appendChild(li);
      });
    }
  
    
    displayPopularRecipes(popularRecipes);
  

    searchButton.addEventListener('click', function() {
      const searchTerm = searchInput.value.toLowerCase();
  
      const filteredRecipes = popularRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchTerm)
      );
  
      
      displayPopularRecipes(filteredRecipes);
    });
  });
  
