import { Link } from 'react-router-dom'
import './ProductWishlist.css';
import Heart from './imgs/heart (2).png'
function ProductWishlist(props) {
  return (

    <>
      <div className="cardContent">
        <div className="produtoFav">
          <div className="col-md-2 col-8 ">
            <img src={bebe1} width="75%" />
          </div>
          <div className="col-sm-10 col-lg-5">
            <ul type="none">
              <li className="nomeBB"><strong>Bebê Reborn Guilherme</strong></li>
              <li className="cod">CÓDIGO: S48002</li><br />
              <li><strong>R$549,00</strong></li>
            </ul>
          </div>
          <div className=" lixeiraBtnAdd">

            <div className="col-md-4 col-lg-3">
              <button><img src={lixeira} width="35px" /></button>
            </div>
            <div className="lineVertical col-1">.
              <div className="btnCarrinho col-3">
                <button><strong>Adicionar ao Carrinho</strong> </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default ProductWishlist
