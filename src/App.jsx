import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import SearchResult from "./components/SearchResult";
import { AppContext } from "./utils/ContextApi";
import { useState } from "react";

function App() {
    // const [darkTheme, setDarkTheme] = useState(false);

    return (
        <AppContext>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route
                        exact
                        path="/:query/:startIndex"
                        element={<SearchResult />}
                    />
                </Routes>
            </BrowserRouter>
        </AppContext>
    );
}

export default App;
