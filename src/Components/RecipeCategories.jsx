import React, { Fragment } from "react";
import CategoryCard from "./CategoryCard";
import useApiCall from "../Hooks/useApiCall";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";
import EmptyMessage from "./EmptyMessage";
import { useNavigate } from "react-router-dom";

const RecipeCategories = () => {
  const navigate = useNavigate();
  const { item, isLoading, error } = useApiCall({
    url: "https://www.themealdb.com/api/json/v1/1/categories.php",
  });

  if (error) {
    return <ErrorMessage message="Failed to load categories." />;
  }
  if (isLoading) {
    return <Loading label="Loading Categories" />;
  }

  if (!item || item.categories.length === 0) {
    return <EmptyMessage message="Categories not available" />;
  }

  const handleCategoryClicked = (category) => {
    navigate(`/recipe/category/${category.strCategory}`);
  };

  return (
    <div className="p-4 max-w-[1440px] mx-auto">
      <h3 className="font-Title text-2xl font-bold my-4">CATEGORIES</h3>
      <div className="flex flex-nowrap gap-2 columns-2xl w-full overflow-x-auto">
        {item.categories.map((category) => {
          return (
            <Fragment key={category.idCategory}>
              <CategoryCard
                category={category}
                onCategoryClicked={handleCategoryClicked}
              />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default RecipeCategories;
