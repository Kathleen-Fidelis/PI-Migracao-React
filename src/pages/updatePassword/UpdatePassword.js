import './UpdatePassword.css'
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

function UpdatePassword() {
    return (
        <>
            <Header></Header>
            <div class="container-fluid mt-5 mb-5">
                <div class="row">
                    <div class="col-md-12">

                        <div class="container">
                            <div class="card border-card">

                                <div class="row justify-content-center">
                                    <div class="col-md-10">

                                        <h1 class="text-center text-title mt-3">Atualizar Senha</h1>
                                        <hr class="line-title-atualizar"/>

                                            <div class="card card-input mb-4">
                                                <div class="form-group font-weight-bold mb-3 mt-3 custom-input">
                                                    <label class="mb-2" for="usuario">Nova Senha:</label>
                                                    <input class="form-control" type="password" placeholder="Insira a nova senha"/>
                                                </div>

                                                <div class="form-group font-weight-bold mb-3 mt-3 custom-input">
                                                    <label class="mb-2" for="usuario">Confirmar Senha:</label>
                                                    <input class="form-control" type="password" placeholder="Confirme a nova senha"/>
                                                </div>

                                                <div class="d-flex justify-content-center">
                                                    <Link to="../sucesso-atualizacao-senha/index.html"><button type="button" class="btn custom-button-update">Atualizar</button></Link>
                                                </div>

                                                {/*} <div class="d-flex justify-content-center">
                                                    <button class="custom-button-cancelar">
                                                        <p>Cancelar</p>
                                                        <hr class="line-cancelar">
                                                    </button>
                                                    <hr class="line-cancelar">
                                                 </div> */}
                                                {/* OU */}
                                                <div class="d-flex justify-content-center mt-3">
                                                    <p class="text-atualizar-senha"><Link to="">Cancelar</Link></p>
                                                </div>

                                            </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<Footer />*/}
        </>
    )
}

export default UpdatePassword