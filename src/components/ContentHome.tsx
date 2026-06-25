import close from '../assets/img/close.jpeg';
import bs from '../assets/img/bs.svg';
import css3 from '../assets/img/css3.svg';
import html5 from '../assets/img/html5.svg';
import js from '../assets/img/js.svg';
import react from '../assets/img/react-original.svg';
import reactbootstrap from '../assets/img/reactbootstrap.svg';
import github from '../assets/img/github-original.svg';
import git from '../assets/img/git-original.svg';

export function ContentHome() {
    return (
        <main>
            <section className="p-5 d-flex justify-content-center conteudo m-3 border rounded-5">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                            <h1 className="display-4 titulo p-2 mb-0">Bem-vindo ao meu portfólio!</h1>
                            <p className="p-2 texto-descricao">Eu sou Daniel Henrique Leão de Oliveira, tenho 19 anos e sou um desenvolvedor full-stack apaixonado por criar soluções inovadoras e experiências digitais memoráveis. <i><br/> Meu Stack logo abaixo:</i></p>
                            <img src={bs} className="img-fluid rounded-5 icone-tech p-1" alt="Imagem de exemplo" />
                            <img src={css3} className="img-fluid rounded-5 icone-tech p-1" alt="Imagem de exemplo" />
                            <img src={html5} className="img-fluid rounded-5 icone-tech p-1" alt="Imagem de exemplo" />
                            <img src={js} className="img-fluid rounded-5 icone-tech p-1" alt="Imagem de exemplo" />
                            <img src={react} className="img-fluid rounded-5 icone-tech p-1" alt="Imagem de exemplo" />
                            <img src={reactbootstrap} className="img-fluid rounded-5 icone-tech p-1" alt="Imagem de exemplo" />
                            <img src={github} className="img-fluid rounded-5 icone-tech p-1" alt="Imagem de exemplo" />
                            <img src={git} className="img-fluid rounded-5 icone-tech p-1" alt="Imagem de exemplo" />
                        </div>
                        <div className="col">
                            <img src={close} className="img-fluid rounded-5 perfil" alt="Imagem de exemplo" />
                        </div>
                    </div>
                    <div className="row"></div>
                </div>
            </section>
        </main>
    )
}