import { Link } from 'react-router-dom'
import './Nav.css'




function Nav() {
    return (
        <>

            <ul className="menu nav menu-a">
                <Link to="" className="nav-link-nav dropdown-toggle" id="navbarDropdown" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Categorias
                </Link>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                        <Link to="./pages/product/Product.js" className="dropdown-item" >Meninas</Link>
                    </li>
                    <li>
                        <Link to="./paginas/ProdutosMeninos" className="dropdown-item" >Meninos</Link></li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li><Link to="./paginas/Acessorios" className="dropdown-item" >Acessórios</Link></li>
                </ul>


                <li className="nav-item menu-li">
                    <Link to="./meus-pedidos/index.html" className="nav-link menu-a" >Meus Pedidos</Link>
                </li>
                <li className="nav-item menu-li">
                    <Link to="./paginas/TermosDevolucao.html" className="nav-link menu-a" >Trocas & Devoluções</Link>
                </li>
                <li className="nav-item menu-li">
                    <Link to="./fale-conosco/index.html" className="nav-link menu-a" >Atendimento</Link>
                </li>
                <li className="nav-item menu-li">
                    <Link to="./meu-Perfil/meuperfil.html" className="nav-link menu-a">Meu Perfil</Link>
                </li>
            </ul>


            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
                crossorigin="anonymous"></script>
        </>
    )
}

<script>

    {/* function id(el2) {
    return document.getElementById(el2);
}
    window.onload = function () {
        id('mais2').onclick = function () {
            id('format2').value = parseInt(id('format2').value) + 1;


        }
    id('menos2').onclick = function () {
        if (id('format2').value > 0)
    id('format2').value = parseInt(id('format2').value) - 1;

        
    }
} */}
</script>
export default Nav