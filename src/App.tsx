import * as React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import ArticlePage from "./pages/ArticlePage.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <React.Fragment>
                        <HomePage/>
                    </React.Fragment>
                }/>
                <Route path="/articles/:id" element={
                    <React.Fragment>
                        <ArticlePage/>
                    </React.Fragment>
                }/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;