import React from "react";

const RecipeCard = ({ meal, mealCategory }) => {
  return (
    <div className="mb-6 p-4 rounded-lg max-w-[320px] flex flex-col justify-start gap-2 shadow-none hover:scale-105 hover:shadow-highlight cursor-pointer">
      <div className="relative">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="object-cover rounded-lg relative"
        />
        <div className="rounded-lg bg-accent p-2 w-fit text-white font-medium absolute bottom-2 right-2 ">
          {meal.strCategory ?? mealCategory}
        </div>
      </div>
      <h2 className="font-Title text-xl font-semibold line-clamp-2">
        {meal.strMeal}
      </h2>
    </div>
  );
};

export default RecipeCard;
