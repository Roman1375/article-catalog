# Spaceflight News SPA 

A Single Page Application (SPA) built with **React** and **TypeScript** for browsing space news with intelligent search and result highlighting.

**API:** [Spaceflight News API v4](https://spaceflightnewsapi.net/)

## 🛠 Tech Stack
- **Core**: React 18 (Vite), TypeScript
- **UI Framework**: MUI (Material UI) — layout and components
- **Styles**: SASS (SCSS)
- **Data Fetching**: Axios
- **Routing**: React Router DOM v6

## 💡 Key Features
- **Smart Search**: The search query is split into individual keywords. Priority is given to matches in titles (weight: 10) over matches in descriptions (weight: 1).
- **Text Highlighting**: A custom component that dynamically highlights search keywords using RegExp.
- **Performance**: Optimized with `useMemo` for complex filtering and custom hooks to decouple logic from the UI.
- **Content Constraints**: Article descriptions are truncated to 100 characters per technical requirements.

## 📂 Project Structure
- `src/api` — API request configurations.
- `src/components` — UI elements (ArticleCard, Highlighter, etc.).
- `src/hooks` — custom hooks (filtering, data fetching).
- `src/types` — TypeScript interfaces and types.

## 🚀 Getting Started
```bash
# Install dependencies
npm install

# Run the development server
npm run dev