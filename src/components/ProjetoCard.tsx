import { Projeto } from '../types/Projeto'
import github from '../assets/img/github-original.svg'


interface ProjetoCardProps {
    projeto: Projeto
}

export function ProjetoCard({
    projeto
}: ProjetoCardProps) {
    return (
        <div className="card h-100 shadow-sm rounded-4 p-3 card-projetos">
            <div className="card-body">

                <h5 className="titulo mb-0">{projeto.titulo}</h5>
                <p className="texto-descricao">{projeto.descricao}</p>
                <div className="mb-1">
                    {projeto.tecnologias.map((tech) => (
                        <span
                            key={tech}
                            className="badge bg-secondary me-2 my-1 p-2 rounded-5">
                            {tech}
                        </span>

                    ))}{projeto.featured && (
                        <span className="badge bg-warning text-dark w-25 p-2 rounded-5">
                            Destaque
                        </span>
                    )}
                </div>

                <div className="d-flex justify-content-center">
                    <a href={projeto.github}
                        target="_blank"
                        className="btn proj-github p-1 mt-auto">
                        GitHub
                        <img src={github} className="img-fluid icone-tech p-1" alt="Imagem de exemplo" />
                    </a>
                </div>

            </div>
        </div>
    )
}