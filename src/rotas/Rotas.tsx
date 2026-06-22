import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Lista } from "../pages/Lista";

export function Rotas() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
            <Routes>
                <Route path='/login' element={<Login />} />
            </Routes>
            <Routes>
                <Route path='/lista' element={<Lista />} />
            </Routes>
        </>
    )
}