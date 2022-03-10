import { Link } from 'react-router-dom'
import './CardProduct.css'
import Heart from './imgs/heart (2).png'

function CardProduct(props) {
    return (
        <>
           
                <div className="container-card">
                    <ul className="lista-produtos">
                        <li className="item-produto">
                            <div className="fav">
                                <a className="fav-icon"><img src={ Heart }width="25px" height="25px" /></a>
                                <br />
                            </div>
                            <img src="../paginas/imgs/2.jpg" className={ props.Image } width="215" height="215" />
                            <br />
                            <div className="nome-produto">Bebê reborn Emilly</div>

                            <div className="precos">
                                <div className="preco">R$ 619,00</div>
                                <div className="parcelado">OU 10X DE R$ 61,90</div>
                            </div>

                            <button type="button" className="comprar"><a href="../paginas/PaginaItem2.html">Comprar</a></button>

                        </li>
                    </ul>
                </div>
               
            </>

            )
}


            export default CardProduct