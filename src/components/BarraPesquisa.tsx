interface BarraPesquisaProps{
    value: string
    onChange: (value: string) => void
}

export function BarraPesquisa({
    value,
    onChange
}: BarraPesquisaProps){
    return (
        <input type="text"
        className="form-control mb-4 p-3 rounded-4"
        placeholder="Buscar projeto..."
        value={value}
        onChange={(e)=>onChange(e.target.value)} 
        />
    )
}