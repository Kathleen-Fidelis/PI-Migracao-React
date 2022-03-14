import './Wishlist.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import bebe1 from './img_wishlist/bebe1.png'
import bebe2 from './img_wishlist/bebe2.jpg'
import bebe3 from './img_wishlist/bebe3.jpg'
import lixeira from './img_wishlist/lixeira.png'


function Wishlist() {
    return (
        <>
                {/* <!-- INICIO DO CONTEUDO NAV/TAB --> */}
                
                            <div className="titleCard" id="titleCardMinhaConta">

                                <div className="nome row row-wishlist">
                                    <div className="col-12">
                                        <h1>Lista de Desejos</h1>
                                    </div>
                                </div>

                                <div className=" row row-wishlist">
                                    <div className="produtosFav  row row-wishlist">
                                        <div className="col-lg-12">

                                            {/* <!-- Lista 1 --> */}

                                            <div className="cardContent">
                                                <div className="produtoFav">
                                                    <div className="col-md-2 col-8 ">
                                                        <img src={bebe1} width="75%"/>
                                                    </div>
                                                    <div className="col-sm-10 col-lg-5">
                                                        <ul type="none">
                                                            <li className="nomeBB"><strong>Bebê Reborn Guilherme</strong></li>
                                                            <li className="cod">CÓDIGO: S48002</li><br/>
                                                            <li><strong>R$549,00</strong></li>
                                                        </ul>
                                                    </div>
                                                    <div className=" lixeiraBtnAdd">

                                                        <div className="col-md-4 col-lg-3">
                                                                <button><img src={lixeira} width="35px"/></button>
                                                        </div>
                                                        <div className="lineVertical col-1">.
                                                            <div className="btnCarrinho col-3">
                                                                <button><strong>Adicionar ao Carrinho</strong> </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <!-- Lista 2 --> */}

                                            <div className="cardContent">
                                                <div className="produtoFav">
                                                    <div className="col-md-2 col-8">
                                                        <img src={bebe2} width="75%"/>
                                                    </div>
                                                    <div className="col-sm-10 col-lg-5">
                                                        <ul type="none">
                                                            <li className="nomeBB"><strong>Bebê Reborn Nicole Pandinha</strong></li>
                                                            <li className="cod">CÓDIGO: S48004</li><br/>
                                                            <li><strong>R$569,00</strong></li>
                                                        </ul>
                                                    </div>
                                                    <div className="lixeiraBtnAdd">
                                                        <div className="col-md-4 col-lg-3">
                                                                <button><img src={lixeira} width="35px"/></button>
                                                        </div>
                                                        <div className="lineVertical col-1">.
                                                            <div className="btnCarrinho col-3">
                                                                <button><strong>Adicionar ao Carrinho</strong> </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </div>


                                            {/* <!-- Lista 3 --> */}

                                            <div className="cardContent">
                                                <div className="produtoFav">
                                                    <div className="col-md-2 col-8">
                                                        <img src={bebe3} width="75%"/>
                                                    </div>
                                                    <div className="col-sm-10 col-lg-5">
                                                        <ul type="none">
                                                            <li className="nomeBB"><strong>Bebe Reborn Leo Sonequinha</strong></li>
                                                            <li className="cod">CÓDIGO: S48044</li><br/>
                                                            <li><strong>R$299,00</strong></li>
                                                        </ul>
                                                    </div>
                                                    <div className="lixeiraBtnAdd">
                                                        <div className="col-md-4 col-lg-3">
                                                                <button><img src={lixeira} width="35px"/></button>
                                                        </div>
                                                        <div className="lineVertical col-1">.
                                                            <div className="btnCarrinho col-3">
                                                                <button><strong>Adicionar ao Carrinho</strong> </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
     

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
            crossorigin="anonymous"></script>
        </>
    )
}
export default Wishlist