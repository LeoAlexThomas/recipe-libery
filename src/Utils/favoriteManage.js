// Handling favorite recipes in localStorage of the browser

// Retrieve favorite recipes from localStorage
export const getFavoriteRecipes = () => {
  const favorites = localStorage.getItem("favoriteRecipes");
  return favorites ? JSON.parse(favorites) : [];
};

// Check if a recipe is a favorite
export const isRecipeFavorite = (recipeId) => {
  const favorites = getFavoriteRecipes();
  return favorites.some((storedRecipeId) => storedRecipeId === recipeId);
};

// Add a recipe from favorites
export const addFavoriteRecipe = (recipeId) => {
  const favorites = getFavoriteRecipes();
  favorites.push(recipeId);
  localStorage.setItem("favoriteRecipes", JSON.stringify(favorites));
};

// Remove a recipe from favorites
export const removeFavoriteRecipe = (recipeId) => {
  let favorites = getFavoriteRecipes();
  favorites = favorites.filter((storedRecipeId) => storedRecipeId !== recipeId);
  localStorage.setItem("favoriteRecipes", JSON.stringify(favorites));
};
