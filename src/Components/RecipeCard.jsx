import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RecipeCategoryBadge from "./RecipeCategoryBadge";
import {
  addFavoriteRecipe,
  isRecipeFavorite,
  removeFavoriteRecipe,
} from "../Utils/favoriteManage";
import FavoriteCard from "./FavoriteCard";

const RecipeCard = ({ meal, mealCategory }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${meal.idMeal}`);
  };

  return (
    <div className="relative">
      <div
        className="px-0 sm:px-4 py-4 rounded-lg max-w-[320px] flex flex-col justify-start gap-2 hover:scale-105 cursor-pointer"
        onClick={handleClick}
      >
        <div className="relative w-full">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            loading="eager"
            className="object-cover rounded-lg"
          />
          <div className="absolute bottom-2 right-2 ">
            <RecipeCategoryBadge category={meal.strCategory ?? mealCategory} />
          </div>
        </div>
        <h2 className="font-Title text-xl sm:text-2xl font-semibold">
          {meal.strMeal}
        </h2>
      </div>
      <div className="absolute top-6 left-2 sm:left-6 ">
        <FavoriteCard mealId={meal.idMeal} />
      </div>
    </div>
  );
};

export default RecipeCard;
