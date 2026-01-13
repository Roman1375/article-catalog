import * as React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import ArticlePage from "./pages/ArticlePage.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/articles/:id" element={<ArticlePage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;