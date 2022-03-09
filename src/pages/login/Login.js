import React from 'react'
import './Login.css'
import babyLogin from './imgs/baby-login.png'
function Login() {



    return (
      <>
        {/*  INÍCIO DO CARD LOGIN  */}
    <div className="container-fluid mt-5">
        <div className="row">
            <div className="col-md-12">

                <div className="container">
                    <div className="card">

                        <div className="row justify-content-center">
                            <div className="col-md-10">
                            <img src={babyLogin} alt="" className='user-login'/>
                                <h1 className="text-center text-title">Já é nosso cliente?</h1>
                                <hr/>

                                <div className="card card-input mb-4">

                                    <div className="form-group font-weight-bold mb-2 mt-3 custom-input">
                                        <label className="mb-2" for="usuario">E-mail:</label>
                                        <input className="form-control" type="text" placeholder="Insira o e-mail"/>
                                    </div>

                                    <div className="form-group font-weight-bold mb-2 mt-3 custom-input">
                                        <label className="mb-2" for="usuario">Senha:</label>
                                        <input className="form-control" type="password" placeholder="Insira o e-mail"/>
                                    </div>

                                    <div className="d-flex justify-content-center">
                                        <p className="text-esqueci-senha"><a href="../esqueci-minha-senha/index.html">Esqueceu sua senha?</a></p>
                                    </div>

                                    <div className="d-flex justify-content-center">
                                        <button type="button" className="btn custom-button">Login</button>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

        
      </>
    )
}

export default Login