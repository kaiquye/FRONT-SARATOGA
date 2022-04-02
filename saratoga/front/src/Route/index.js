import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../page/home";

export function Routes_Page(){


    return(
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}