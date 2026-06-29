import close from '../assets/img/close.jpeg';
import bs from '../assets/img/bs.svg';
import css3 from '../assets/img/css3.svg';
import html5 from '../assets/img/html5.svg';
import js from '../assets/img/js.svg';
import react from '../assets/img/react-original.svg';
import reactbootstrap from '../assets/img/reactbootstrap.svg';
import github from '../assets/img/github-original.svg';
import git from '../assets/img/git-original.svg';
import linkedin from '../assets/img/linkedin-original.svg';
import { Link } from 'react-router-dom';


export function ContentHome() {
    return (
        <main>
            <section className="p-5 d-flex justify-content-center conteudo m-3 rounded-5">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                            <h1 className="display-4 titulo p-2 mb-0 pb-0">Bem-vindo ao meu portfólio!</h1>
                            <p className="p-2 texto-descricao">Desenvolvedor Full Stack com ênfase em Front-End </p>
                            <i><h5>Principais Tecnologias:</h5></i>
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
                </div>
            </section>
            <section className="conteudo rounded-5 p-5 d-flex justify-content-center m-3">
                <div className="container d-flex justify-content-center">
                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 d-flex justify-content-center">
                        <div className="col d-flex my-auto">
                            <Link to="https://github.com/DanielLeaoOliveira" className="btn github mx-auto my-auto" target="_blank">Meu Github
                                <img src={github} className="img-fluid icone-btn m-1" alt="Imagem de exemplo" />
                            </Link>
                        </div>
                        <div className="col my-auto">
                            <Link to="www.linkedin.com/in/daniel-henrique-leão-de-oliveira-6020a0369" className="btn linkedin mx-auto my-auto p-2" target="_blank">Meu LinkedIn
                                <img src={linkedin} className="img-fluid icone-btn lnkdn m-1" alt="Imagem de exemplo" />
                            </Link>
                        </div>
                        <div className="col my-auto">
                            <Link to="https://drive.google.com/uc?export=download&id=1AKwmuWjfERZjO3Qk2_b6gx-pW8c0XR8C" className="btn curriculo mx-auto my-auto" target="_blank">Baixe meu Currículo</Link>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    )
}