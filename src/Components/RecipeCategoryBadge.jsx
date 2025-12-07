import React from "react";

const RecipeCategoryBadge = ({ category }) => {
  return (
    <div className="rounded-lg bg-accent p-2 w-fit text-xs text-white font-semibold tracking-widest">
      {category.toUpperCase()}
    </div>
  );
};

export default RecipeCategoryBadge;
