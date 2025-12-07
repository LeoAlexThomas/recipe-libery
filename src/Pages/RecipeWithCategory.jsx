import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import ErrorMessage from "../Components/ErrorMessage";
import Loading from "../Components/Loading";
import EmptyMessage from "../Components/EmptyMessage";
import useApiCall from "../Hooks/useApiCall";
import RecipeCard from "../Components/RecipeCard";

const RecipeWithCategory = () => {
  const location = useLocation();
  const category = location.pathname.split("/").pop();

  const { item, isLoading, error } = useApiCall({
    url: `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
  });

  if (error) {
    return <ErrorMessage message="Failed to load recipes." />;
  }

  if (isLoading) {
    return <Loading />;
  }

  if (!item || item.meals.length === 0) {
    return <EmptyMessage message="Recipes not available" />;
  }

  return (
    <div className="max-w-[1440px] mx-auto p-4">
      <h3 className="font-Title text-2xl font-bold mb-4">
        Recipes with {category}
      </h3>
      <div className="flex gap-4 flex-wrap justify-center">
        {item.meals.map((meal) => (
          <Fragment key={meal.idMeal}>
            <RecipeCard meal={meal} mealCategory={category} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default RecipeWithCategory;
