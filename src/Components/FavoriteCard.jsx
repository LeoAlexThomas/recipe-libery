import { useEffect, useState } from "react";
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import {
  addFavoriteRecipe,
  isRecipeFavorite,
  removeFavoriteRecipe,
} from "../Utils/favoriteManage";

const FavoriteCard = ({ mealId, showText }) => {
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    setFavorite(isRecipeFavorite(mealId));
  }, []);

  const handleToggleFavorite = () => {
    if (favorite) {
      removeFavoriteRecipe(mealId);
      setFavorite(false);
    } else {
      addFavoriteRecipe(mealId);
      setFavorite(true);
    }
  };

  return (
    <div
      className="border border-white bg-[#ffffffCC] rounded-md p-2 z-10 cursor-pointer flex gap-2 items-center"
      onClick={handleToggleFavorite}
    >
      {favorite ? (
        <IoMdHeart className="w-5 h-5 text-error" />
      ) : (
        <IoIosHeartEmpty className="w-5 h-5 text-error" />
      )}
      {showText && (
        <p className="text-base font-Body text-error font-bold tracking-wide hidden sm:block">
          FAVORITE
        </p>
      )}
    </div>
  );
};

export default FavoriteCard;
