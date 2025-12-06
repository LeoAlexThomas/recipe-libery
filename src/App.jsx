import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import RecipeDetails from "./Pages/RecipeDetails";
import NotFound from "./Pages/NotFound";

const App = () => {
  return (
    <div className="h-screen bg-back">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Dynamic Route */}
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          {/* No Match Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
