import React, { useState } from 'react'
//import './Header.css'

function Header() {

    const [nome, setNome] = useState('')

    const modeloFuncao = () => {
         setNome('SeuNome')
    }

    return (
        <>
           <!-- HEADER -->
  <header>
    <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom-nav">
            <div className="container-fluid">
              <a href="../header/index.html"><img className="logo" src="../header/imgs/logo-pimpolhos-certo.gif" alt="" width="137" height="90"></a>
             
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <form className="d-flex custom-form">
                  <input className="form-control me-2" type="search" placeholder="Pesquise" aria-label="Search">
                </form>

                <link href="../carrinho/carrinho.html"><button type="button" className="btn custom-btn cart">
                    <p> | 0,00</p>
                </button></a>

                <div className="login-cadatro">
                  <img src="../header/imgs/baby-user.png" alt="" className="icone">  
                  <p> <a className="link-login-cadastro" href="../login/index.html"> login ou</a>   <br> <a className="link-login-cadastro" href="../cadastro/index.html">cadastre-se</a></p>
                </div>
              </div>
            </div>
          </nav>
    </div>
</header>
        </>
    )
}

export default Header