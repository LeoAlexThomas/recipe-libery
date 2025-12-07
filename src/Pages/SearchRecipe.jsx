import React, { Fragment, useState } from "react";
import SearchBar from "../Components/SearchBar";
import ErrorMessage from "../Components/ErrorMessage";
import Loading from "../Components/Loading";
import useApiCall from "../Hooks/useApiCall";
import RecipeCard from "../Components/RecipeCard";
import EmptyMessage from "../Components/EmptyMessage";
import { isEmpty } from "lodash";

const SearchRecipe = () => {
  const [search, setSearch] = useState("");

  const { item, isLoading, error } = useApiCall({
    url: `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`,
  });

  const renderRecipes = () => {
    if (error) {
      return <ErrorMessage message="Failed to load recipes." />;
    }
    if (isLoading) {
      return <Loading />;
    }
    if (!item || item.meals === null || item.meals.length === 0) {
      return <EmptyMessage message="No recipes found." />;
    }
    return (
      <div>
        <div className="flex gap-8 flex-wrap justify-center">
          {item.meals.map((meal) => (
            <Fragment key={meal.idMeal}>
              <RecipeCard meal={meal} />
            </Fragment>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="p-4 max-w-[1440px] mx-auto">
      <div className="my-4 ">
        <SearchBar
          search={search}
          setSearch={setSearch}
          handleClearSearch={() => setSearch("")}
        />
      </div>
      <h4 className="font-Title text-2xl font-bold text-accent">
        {isEmpty(search) ? "Initial results" : `Results of ${search}`}:
      </h4>
      {renderRecipes()}
    </div>
  );
};

export default SearchRecipe;
