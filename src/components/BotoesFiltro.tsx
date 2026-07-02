interface BotoesFiltroProps {
    selected: string
    onSelect: (tech: string) => void
}

const tecnologias = [
    "Todos",
    "React",
    "TypeScript",
    "Node",
    "Bootstrap",
    "EJS",
    "Python"
]

export function BotoesFiltro({
    selected,
    onSelect
}: BotoesFiltroProps) {
    return (
        <div className="my-4">
            {tecnologias.map((tech) => (
                <button
                    key={tech}
                    className={`btn btn-pesquisa me-2 ${selected === tech
                        ? "btn-primary"
                        : "btn-outline-primary"
                        }`}
                    onClick={() => onSelect(tech)}
                >
                    {tech}
                </button>
            ))}
        </div>
    )
}