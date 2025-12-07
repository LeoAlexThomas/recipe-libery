import { Fragment } from "react";
import useApiCall from "../Hooks/useApiCall";
import ErrorMessage from "../Components/ErrorMessage";
import Loading from "../Components/Loading";
import EmptyMessage from "../Components/EmptyMessage";
import RecipeCard from "../Components/RecipeCard";

const RecipeList = () => {
  const { item, isLoading, error } = useApiCall({
    url: "https://www.themealdb.com/api/json/v1/1/search.php?f=a",
  });
  if (error) {
    return <ErrorMessage message="Failed to load recipes." />;
  }

  if (isLoading) {
    return <Loading label="Loading Recipes" showFullScreen={true} />;
  }

  if (!item || item.meals.length === 0) {
    return <EmptyMessage message="Recipes not available" />;
  }

  return (
    <div className="p-4 max-w-[1440px] mx-auto">
      <h1 className="font-Title text-2xl font-bold mb-4">POPULAR RECIPES</h1>
      <div className="flex gap-6 xl:gap-10 flex-wrap justify-center">
        {item.meals.map((meal) => (
          <Fragment key={meal.idMeal}>
            <RecipeCard meal={meal} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
