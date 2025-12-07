import { IoMdClose } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";

const SearchBar = ({ search, setSearch, handleClearSearch }) => {
  return (
    <div className={`w-full max-w-full mx-auto lg:max-w-[700px] relative `}>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Recipes"
        name="recipeSearch"
        type="text"
        className="h-12 sm:h-18 w-full bg-secondary rounded-lg sm:rounded-2xl p-2 font-Body text-lg sm:text-2xl text-black outline-none pl-12 sm:pl-18 pr-9"
      />
      <IoSearchSharp className="w-6 h-6 absolute top-1/2 -translate-1/2 left-6 sm:left-10 text-primary" />
      {search.length !== 0 && (
        <IoMdClose
          className="w-6 h-6 absolute top-1/2 right-3 sm:right-5 -translate-y-1/2 cursor-pointer"
          onClick={handleClearSearch}
        />
      )}
    </div>
  );
};

export default SearchBar;
