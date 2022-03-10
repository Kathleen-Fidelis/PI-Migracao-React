import './Product.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import FreightBanner from '../../components/freightBanner/FreightBanner'
import ProductBanner from '../../components/productBanner/ProductBanner'
import Pagination  from '../../components/pagination/Pagination'
import Card from '../../components/card/Card'
import CardP from '../../components/card/CardProduct'
import Product1 from '../../components/card/imgs/heart (2).png'

function Product() {
    return (
        <>
            <FreightBanner />
            <Header />
            <ProductBanner />
            <div className="row nomePagina">
                <h2>MENINAS</h2>
            </div>

            {/*<div className="cards">
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
            </div>*/}



            <Card productName="Bebê Reborn Mayara" imgProduct="./imgs/heart (2).png" valueProduct=" R$ 799,00 "  parcel=" Ou 10x sem juros"/>
           <Card productName="Bebê Reborn Mayara" valueProduct=" R$ 799,00 "  parcel=" Ou 10x sem juros"/>
           <CardP Image={ Product1 }/>

            <Pagination />
            {/*<Footer/>*/}
        </>
    )
}

export default Product