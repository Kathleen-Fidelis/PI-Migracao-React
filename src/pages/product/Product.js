import './Product.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import FreightBanner from '../../components/freightBanner/FreightBanner'
import ProductBanner from '../../components/productBanner/ProductBanner'
import Pagination  from '../../components/pagination/Pagination'

function Product() {
    return (
        <>
            <FreightBanner />
            <Header />
            <ProductBanner />
            <div className="row nomePagina">
                <h2>MENINAS</h2>
            </div>

            <div className="cards">
                <div className="container-card">
                    <ul className="lista-produtos">
                        <li className="item-produto">
                            <div className="fav">
                                <a className="fav-icon"><img src="./imgs/heart (2).png" width="25px" height="25px" /></a>
                                <br />
                            </div>
                            <img src="../paginas/imgs/2.jpg" className="imagem-produto" width="215" height="215" />
                            <br />
                            <div className="nome-produto">Bebê reborn Emilly</div>

                            <div className="precos">
                                <div className="preco">R$ 619,00</div>
                                <div className="parcelado">OU 10X DE R$ 61,90</div>
                            </div>

                            <button type="button" className="comprar"><a href="../paginas/PaginaItem2.html">Comprar </a></button>

                        </li>
                    </ul>
                </div>
            </div>


            <Pagination />
            {/*<Footer/>*/}
        </>
    )
}

export default Product