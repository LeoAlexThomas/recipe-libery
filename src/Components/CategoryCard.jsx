import React from "react";

const CategoryCard = ({ category, onCategoryClicked }) => {
  return (
    <div
      className="p-2 rounded-lg overflow-hidden shrink-0 flex flex-col items-center cursor-pointer"
      onClick={() => onCategoryClicked(category)}
    >
      <img
        src={category.strCategoryThumb}
        alt={category.strCategory}
        className="w-24 object-contain drop-shadow-lg"
      />

      <div className="p-4">
        <h2 className="text-lg  font-semibold">{category.strCategory}</h2>
      </div>
    </div>
  );
};

export default CategoryCard;
