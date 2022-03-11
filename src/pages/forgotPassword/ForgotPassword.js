import './ForgotPassword.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

function ForgotPassword() {
    return (
        <>
            <Header></Header>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-12">

                        <div className="container">
                            <div className="card border-card">

                                <div className="row justify-content-center">
                                    <div className="col-md-10">

                                        <h1 className="text-center text-title mt-3">Esqueci Minha Senha</h1>
                                        <hr/>

                                        <div className="text-esqueci-senha">
                                            <p>
                                                Para redefinir sua senha, informe o e-mail cadastrado na sua conta e lhe enviaremos um link com as instruções.
                                            </p>
                                        </div>

                                        <div className="card card-input mb-4">
                                            <div className="form-group font-weight-bold mb-2 mt-3 custom-input">
                                                <label className="mb-2" for="usuario">E-mail</label>
                                                <input className="form-control" type="text" placeholder="Insira o e-mail"/>
                                            </div>

                                            <div className="d-flex justify-content-center">
                                                <a href="../atualizar-senha/index.html"><button type="button" className="btn custom-button">Próximo</button></a>
                                            </div>

                                            <div className="d-flex justify-content-center">
                                            <a href="../login/index.html"><button className="custom-button-cancelar">
                                                    <p>Cancelar</p>
                                                </button></a>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<Footer></Footer>*/}
        </>
    )
}

export default ForgotPassword