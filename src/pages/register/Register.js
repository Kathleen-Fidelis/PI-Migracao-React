import './Register.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import babyCadastro from './imgs/baby-cadastro.png'

function Register() {
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
                                        <img src={babyCadastro} alt="" className='user-cadastro'/>
                                        <h1 className="text-center text-title">Cadastre-se</h1>
                                        <hr/>

                                        <div className="card card-input mb-4">

                                            <div className="form-group font-weight-bold mb-2 mt-3 custom-input">
                                                <label className="mb-2" for="usuario">Nome completo:</label>
                                                <input className="form-control" type="text" placeholder="Insira o e-mail"/>
                                            </div>

                                            <div className="d-flex custom-input">
                                                <div className="form-group font-weight-bold col-12 col-md-6">
                                                    <label className="mb-2" for="usuario">CPF:</label>
                                                    <input type="text" className="form-control" placeholder="Insira o CPF"/>
                                                </div>

                                                <div className="form-group font-weight-bold col-12 col-md-5 input-media">
                                                    <label className="mb-2" for="usuario">Data Nascimento:</label>
                                                    <input type="text" className="form-control input-login" placeholder="Insira a data de nascimento"/>
                                                </div>
                                            </div>

                                            <div className="form-group font-weight-bold mb-2 mt-3 custom-input">
                                                <label className="mb-2" for="usuario">E-mail:</label>
                                                <input className="form-control" type="text" placeholder="Insira o e-mail"/>
                                            </div>

                                            <div className="form-group font-weight-bold mb-2 mt-3 custom-input">
                                                <label className="mb-2" for="usuario">Confirme o e-mail:</label>
                                                <input className="form-control" type="text" placeholder="Confirme o e-mail"/>
                                            </div>

                                            <div className="d-flex custom-input">
                                                <div className="form-group font-weight-bold col-12 col-md-6">
                                                    <label className="mb-2" for="usuario">Senha:</label>
                                                    <input type="password" className="form-control" placeholder="Insira a senha"/>
                                                </div>

                                                <div className="form-group font-weight-bold col-12 col-md-5 input-media">
                                                    <label className="mb-2" for="usuario">Confirme a senha:</label>
                                                    <input type="password" className="form-control input-login" placeholder="Confirme a senha"/>
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-center">
                                                <button type="button" className="btn custom-button">Cadastrar</button>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<Footer/>*/}
        </>
    )
}

export default Register