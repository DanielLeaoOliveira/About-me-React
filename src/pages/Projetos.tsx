import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useState } from "react"
import { Projeto } from "../types/Projeto"
import projetosData from "../data/projetos.json"
import { BarraPesquisa } from "../components/BarraPesquisa"
import { BotoesFiltro } from "../components/BotoesFiltro"
import { ProjetoCard } from "../components/ProjetoCard"


export function Projetos() {

    const projetos: Projeto[] = projetosData

    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("Todos")

    const projetosFiltrados = projetos.filter((projeto) => {
        const matchesPesquisa =
            projeto.titulo
                .toLowerCase()
                .includes(search.toLowerCase())

        const matchesFilter =
            filter === "Todos" ||
            projeto.tecnologias.includes(filter)

        return matchesPesquisa && matchesFilter
    })

    return (
        <>
            <Navbar />
            <section className="conteudo rounded-5 m-3">
                <div className="container p-5">
                <h1 className="titulo mt-5">
                    Meus Projetos
                </h1>

                <BarraPesquisa
                    value={search}
                    onChange={setSearch}
                />

                <BotoesFiltro
                    selected={filter}
                    onSelect={setFilter}
                />

                <div className="row g-4">
                    {projetosFiltrados.map((projeto) => (
                        <div
                            key={projeto.id}
                            className="col-md-4"
                        >
                            <ProjetoCard
                                projeto={projeto}
                            />
                        </div>
                    ))}
                </div>
            </div>
            </section>
            <Footer />
        </>
    )

}