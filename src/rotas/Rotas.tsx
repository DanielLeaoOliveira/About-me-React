import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Projetos } from "../pages/Projetos";
import { Sobre } from "../pages/Sobre";

export function Rotas() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Sobre' element={<Sobre />} />
                <Route path='/Projetos' element={<Projetos />} />
            </Routes>
        </>
    )
}