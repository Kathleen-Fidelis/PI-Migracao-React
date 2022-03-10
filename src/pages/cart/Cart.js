import { Link } from "react-router-dom";
import './Cart.css'
import lixeira from './imgs/lixeira.png';
import doll1 from './img/alice.jpg'
import doll2 from './img/gabi.jpg'
// import './app.js'


function Cart(props) {
    return (
        <>

            <div className="container">
                <div className="carrinho">
                    <p className="resumo">Resumo do pedido</p>
                    <div className="sub-menu col-12">
                        <ul className="sub">
                            <li className="cat-resumo-1">Produtos</li>
                            <li className="desc">Descrição</li>
                            <li className="cat-resumo">Preço unitario</li>
                            <li className="cat-resumo">Quantidade</li>
                            <li className="cat-resumo">Subtotal</li>
                            <li className="cat-resumo">Excluir</li>
                        </ul>
                    </div>

                    <div className="menu-produto col-12">
                        <ul className="sub-produto">
                            <li className="img-produto">
                                <img src={doll1} alt="doll1" width="100px" height="100px" />
                            </li>
                            <li className="descricao-produto">{props.name}</li>
                            <li className="sub-preco">R${props.price}</li>
                            <li className="qtd">
                                <input type="button" className="adicionar" name="mais2" id="mais2" value="+" />
                                <input type="text" className="campo-qtd" name="format2" value="0" id="format2" size="2" />
                                <input type="button" className="subtrair" name="menos2" id="menos2" value="-" />
                            </li>
                            <li className="sub-total">R${props.total}</li>
                            <li className="lixeira">
                                <img src={lixeira} alt="lixeira" width="30px" height="30px" />
                            </li>
                        </ul>

                        <hr></hr>

                        <ul className="sub-produto">
                            <li className="img-produto">
                                <img src={doll2} alt="doll2" width="100px" height="100px" />
                            </li>
                            <li className="descricao-produto">{props.name}</li>
                            <li className="sub-preco">R${props.price}</li>
                            <li className="qtd">
                                <input type="button" className="adicionar" name="mais2" id="mais2" value="+" />
                                <input type="text" className="campo-qtd" name="format2" value="0" id="format2" size="2" />
                                <input type="button" className="subtrair" name="menos2" id="menos2" value="-" />
                            </li>
                            <li className="sub-total">R${props.total}</li>
                            <li className="lixeira">
                                <img src={lixeira} alt="lixeira" width="30px" height="30px" /></li>
                        </ul>
                    </div >

                    <div className="sub-menu-frete col-12">
                        <ul className="frete">
                            <li className="cal-frete">Calcule o frete</li>
                            <li className="btn-cal"><input type="text"></input></li>
                            <li className="cep">Não sei meu cep</li>
                        </ul>
                        <ul className="total">
                            <li className="vl-total">TOTAL</li>
                            <li className="avista">R${props.vlrTotal}</li>
                            <br></br>
                            <li className="vl-parcelado">ou em 10x de R$ {props.parcela}</li>
                        </ul>
                    </div>

                    <div className="botao-comprar col-12">

                        <Link to="../header/index.html">
                            <button type="button" className="btn-continuar btn btn-primary btn-lg">Continuar comprando</button>
                        </Link>
                        <Link to="../login/index.html">
                            <button type="button" className="btn-finalizar btn  btn-secondary btn-lg">Finalizar compra</button>
                        </Link>
                        
                    </div>


                </div >

            </div >
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
                crossorigin="anonymous"></script>

        </>
    )
}

{/* <script>
function id(el) {
    return document.getElementById(el);
}
window.onload = function () {
    id('mais').onclick = function () {
        id('format').value = parseInt(id('format').value) + 1;

     
    }
    id('menos').onclick = function () {
        if (id('format').value > 0)
            id('format').value = parseInt(id('format').value) - 1;

        
    }
}
</script> */}


export default Cart