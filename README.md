# Recipe Liberty

Recipe Liberty is a web application that allows users to search and discover various recipes from around the world. The application is built using React, React Router, and Tailwind CSS.

## Technologies Used

- React 19
- Vite 7
- Tailwind CSS 4
- React Icons
- Lodash
- Axios for API calls
- TheMealDB API for recipe data

## Project Structure

```
RECIPE-LIBRARY/
├── public/
│   ├── Images/
│   │   ├── recipe-logo.png
├── src/
│   ├── Components/
│   │   ├── CategoryCard.jsx
│   │   ├── EmptyMessage.jsx
│   │   ├── ErrorMessage.jsx
│   │   ├── FavoriteCard.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Loading.jsx
│   │   ├── Logo.jsx
│   │   ├── RecipeCard.jsx
│   │   ├── RecipeCategories.jsx
│   │   ├── RecipeCategoryBadge.jsx
│   │   ├── RecipeList.jsx
│   │   └── SearchBar.jsx
│   ├── Hooks/
│   │   ├── useApiCall.jsx
│   ├── Pages/
│   │   ├── HomePage.jsx
│   │   ├── PageNotFound.jsx
│   │   ├── RecipeDetails.jsx
│   │   ├── RecipeWithCategory.jsx
│   │   ├── SearchRecipe.jsx
│   ├── Utils/
│   │   ├── favoriteManage.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── netlify.toml
├── vite.config.js
├── eslint.config.js
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/LeoAlexThomas/recipe-libery.git
   cd recipe-libery
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Development

To start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173` by default.

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

To preview the production build:

```bash
npm run preview
# or
yarn preview
```

## Features

- Search for recipes by name
- Filter recipes by category
- Display recipe details, including ingredients and instructions
- Allow users to save and view their favorite recipes [Browser Local Storage]
- Responsive design for optimal user experience on desktop and mobile devices
