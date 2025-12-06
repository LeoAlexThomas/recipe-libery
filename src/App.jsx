import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import RecipeDetails from "./Pages/RecipeDetails";
import PageNotFound from "./Pages/NotFound";
import { ToastContainer } from "react-toastify";
import RecipeWithCategory from "./Pages/RecipeWithCategory";

const App = () => {
  return (
    <div className="h-screen bg-back font-body">
      <ToastContainer />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Dynamic Route */}
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/recipe/category/:id" element={<RecipeWithCategory />} />
          {/* No Match Route */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
