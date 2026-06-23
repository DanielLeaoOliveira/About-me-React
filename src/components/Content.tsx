import close from '../assets/img/close.jpeg';

export function Content() {
    return (
        <main>
            <section className="py-5 d-flex justify-content-center conteudo m-3 border rounded-5">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                            <h1 className="display-4 titulo">Bem-vindo ao meu portfólio!</h1>
                            <p>Eu sou Daniel Henrique, um desenvolvedor full-stack apaixonado por criar soluções inovadoras e experiências digitais memoráveis.</p>
                        </div>
                        <div className="col">
                            <img src={close} className="img-fluid rounded-5" alt="Imagem de exemplo" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}