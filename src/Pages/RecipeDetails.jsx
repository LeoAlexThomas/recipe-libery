import React from "react";
import { useLocation } from "react-router-dom";
import Loading from "../Components/Loading";
import ErrorMessage from "../Components/ErrorMessage";
import EmptyMessage from "../Components/EmptyMessage";
import useApiCall from "../Hooks/useApiCall";
import { FaLocationDot } from "react-icons/fa6";
import RecipeCategoryBadge from "../Components/RecipeCategoryBadge";
import { range } from "lodash";
import FavoriteCard from "../Components/FavoriteCard";

const RecipeDetails = () => {
  const location = useLocation();
  const mealId = location.pathname.split("/").pop();
  const { item, isLoading, error } = useApiCall({
    url: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`,
  });

  if (error) return <ErrorMessage message="Failed to load recipe details." />;
  if (isLoading) return <Loading />;

  if (!item || item.meals.length === 0)
    return <EmptyMessage message="Recipe not available" />;
  const meal = item.meals[0];
  return (
    <div className="max-w-[1440px] mx-auto p-4">
      <div className="relative w-full h-[350px] sm:h-[750px] mb-4 ">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="object-cover rounded-xl mb-4 absolute top-0 left-0 w-full h-full"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-transparent to-[#000000CC] rounded-xl " />
        <div className="absolute bottom-4 left-4 mb-2 text-white p-0 sm:p-4">
          <h2 className="font-Title text-2xl sm:text-5xl font-bold mb-4">
            {meal.strMeal}
          </h2>
          <div className="flex justify-stretch items-center gap-6 text-sm sm:text-lg">
            <RecipeCategoryBadge category={meal.strCategory} />
            <div className="flex gap-2 items-center text-medium">
              <FaLocationDot />
              {meal.strArea}
            </div>
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <FavoriteCard mealId={meal.idMeal} showText={true} />
        </div>
      </div>
      <SectionHeader title="INGREDIENTS" />
      <p className="text-sm sm:text-base text-justify ">
        {meal.strInstructions}
      </p>
      <SectionHeader title="MEASUREMENTS" />
      {...range(0, 20).map((index) => {
        return (
          <div key={index}>
            {meal[`strIngredient${index}`] && (
              <div className="text-sm sm:text-base flex gap-2 items-center mb-1">
                <span className="font-bold">
                  {meal[`strIngredient${index}`]}
                </span>
                <span>({meal[`strMeasure${index}`]})</span>
              </div>
            )}
          </div>
        );
      })}
      {meal.strYoutube && (
        <>
          <SectionHeader title="TUTORIAL VIDEO" />
          <div className="w-full max-w-[700px] rounded-lg aspect-video mt-4 mb-8">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${
                meal.strYoutube.split("=")[1]
              }`}
              title={meal.strMeal}
              allowFullScreen
            ></iframe>
          </div>
        </>
      )}
    </div>
  );
};

const SectionHeader = ({ title }) => (
  <h3 className="font-Title text-xl sm:text-3xl font-bold mb-4 mt-8">
    {title}
  </h3>
);

export default RecipeDetails;
