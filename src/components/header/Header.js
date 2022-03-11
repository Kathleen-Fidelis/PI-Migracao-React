import { Link } from 'react-router-dom'
import './Header.css'
<<<<<<< HEAD
import user from '../header/imgs/baby-user.png';
import logo from '../header/imgs/logo-pimpolhos-certo.gif';

=======
import logo from '../header/imgs/logo-pimpolhos-certo.gif';
import user from '../header/imgs/baby-user.png';
>>>>>>> c48a26cc988165996ff5634b9fd6aa45a23944c1

function Header() {
    return (
        <>
            <header>
<<<<<<< HEAD
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg custom-nav">
                        <div className="container-fluid">
                            <Link to="../header/index.html"><img src={logo} alt="Logo" className='logo' /></Link>


                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <form className="d-flex custom-form ">
                                    <input className="form-control me-2" type="search" placeholder="Pesquise" aria-label="Search" />
                                </form>

                                <div className="teste2">
                                    <button type="button" className="btn custom-btn cart ">
                                        <p> | 0,00</p>
                                    </button>

                                    <div className="login-cadatro ">
                                        <img src={user} alt="user" className='icone' />
                                        <p><Link to href="../login/index.html"> login ou</Link>  <br /><Link to href="../cadastro/index.html">cadastre-se</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
=======
               <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg custom-nav">
                        <div className="container-fluid">
                        <Link to="../header/index.html"><img src={logo} alt="Logo" className='logo'/></Link>
                        
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <form className="d-flex custom-form ">
                                <input className="form-control me-2" type="search" placeholder="Pesquise" aria-label="Search"/>
                            </form>
                            
                            <div className="teste2">
                                <button type="button" className="btn custom-btn cart ">
                                    <p> | 0,00</p>
                                </button>

                                <div className="login-cadatro ">
                                <img src={user} alt="User" className='icone'/> 
                                    <p><Link to="../login/index.html"> login ou</Link>  <br/><Link to="../cadastro/index.html">cadastre-se</Link></p>
                                </div>
                            </div>
                        </div>
                        </div>
>>>>>>> c48a26cc988165996ff5634b9fd6aa45a23944c1
                    </nav>
                </div>
            </header>

<<<<<<< HEAD
           
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
                crossorigin="anonymous"></script>
=======

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
            crossorigin="anonymous"></script>
>>>>>>> c48a26cc988165996ff5634b9fd6aa45a23944c1
        </>
    )
}

export default Header