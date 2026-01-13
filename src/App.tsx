import * as React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <React.Fragment>
                        Hello, World!
                    </React.Fragment>
                }/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;