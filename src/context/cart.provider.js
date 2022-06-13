import React, { useState, createContext } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartContext = createContext({})



function CartProvider(props) {
    const [produto, setProduto] = useState({
        quantidade: 1,
        doll1:props.doll1,
        id: props.codProduto,
        name: props.nome,
        price: props.preco,
        product: props.item,
        incrementar: props.incrementarQuantidade,
        decrementar: props.decrementarQuantidade,
        quantidade: props.quantidade,
        total: props.total
      })

    const [cart, setCart] = useState([])
    const [cartQty, setCartQty] = useState(0) 
 

    const getCartStorage = () => {
        if(localStorage.getItem('cart')) {
            return JSON.parse(localStorage.getItem('cart'))
        }

        return []
    }


    const addToCart = (item) => {


        let cartList = localStorage.getItem('cart')
        ? JSON.parse(localStorage.getItem('cart'))
        : []

        

        let isInCart = false

        cartList.forEach(element => {
            if(element.codProduto == item.codProduto){
                element.quantidade++
                element.total = element.preco * element.quantidade
                isInCart = true
            }
        });

        if (isInCart == false){
            item.quantidade = 1
            item.total = item.preco * item.quantidade
            cartList.push(item)
        }

        
        
        localStorage.setItem("cart", JSON.stringify(cartList))
        localStorage.setItem("qtyCart", JSON.stringify(cartList.length))
        setCart(cartList)
        setCartQty(cartList.length)
    }

    const getCart = () => {
        let cartList = getCartStorage()
        setCart(cartList)
        console.log(cartList)
    }

  

    const deleteCart = (id) => {
        let cartList = getCartStorage()
        for(let i = 0; i < cartList.length; i++){
            if(cartList[i].codProduto == id){
                cartList.splice(i, 1)
             
            }
        }
        setCart(cartList)
        setCartQty(cartList.length)
        localStorage.setItem("cart", JSON.stringify(cartList))
        localStorage.setItem("qtyCart", JSON.stringify(cartList.length))
       
    }


    const getCartQty = () => {
        let cartList = getCartStorage()
        setCartQty(cartList.length)
    }

   
    
    const incrementarQuantidade = (operacao, codProduto) => {
        let cartList = localStorage.getItem('cart')
        ? JSON.parse(localStorage.getItem('cart'))
        : []
        
        cartList.forEach(element => {
            
            if(element.codProduto == codProduto){
                
                if(operacao == "+") 
                    element.quantidade++
                
                

                element.total = element.preco * element.quantidade

                
           
            }
        });




        localStorage.setItem("cart", JSON.stringify(cartList))
        setCart(cartList)
    }

    const decrementarQuantidade = (operacao, codProduto) => {
        let cartList = localStorage.getItem('cart')
        ? JSON.parse(localStorage.getItem('cart'))
        : []
        
        cartList.forEach(element => {
            
            if(element.codProduto == codProduto){

                if(operacao == "-" && element.quantidade > 1) {
                   element.quantidade--
                   
                }

                element.total = element.preco * element.quantidade

                
           
            }
        });

        


        localStorage.setItem("cart", JSON.stringify(cartList))
        setCart(cartList)
    }

    // const alterarQuantidade = (operacao, codProduto) => {
    //     let cartList = localStorage.getItem('cart')
    //     ? JSON.parse(localStorage.getItem('cart'))
    //     : []
        
    //     cartList.forEach(element => {
            
    //         if(element.codProduto == codProduto){

    //             if(operacao == "-" && element.quantidade > 1) {
    //                element.quantidade--
    //             }
                
    //             if(operacao == "+") element.quantidade++

                

    //             element.total = element.preco * element.quantidade

                
           
    //         }
    //     });


    //     localStorage.setItem("cart", JSON.stringify(cartList))
    //     setCart(cartList)
    // }

    function incrementoQuantidadeProduto(item) {
        if (cart.find(produto => item.id == produto.id)) {
            incrementarQuantidadeCart(item) 
            console.log("tem no carrinho")
        } else {
            if (item.estoque == item.quantidade) {
                console.log("valor igual ao estue maximo" )
                console.log( item)
            } else {
                console.log("adicionou + 1 ") 
               console.log("adicionou") 
               console.log(item.quantidade++ )
               console.log( item)

            }
        }
    }
    function decrementoQuantidadeProduto(item) {
        if (cart.find(produto => item.id == produto.id)) {
            decrementarQuantidadeCart(item)
        } else {
            if (item.quantidade == 1) {
                console.log("valor igual a 1 " )
            } else {
               console.log("adicionou - 1") 
               console.log(item.quantidade-- )
               console.log( item)
            }
        }
    }
    

    return (
        <CartContext.Provider value={{cart, cartQty, addToCart, getCartQty, getCart, deleteCart , incrementarQuantidade , decrementarQuantidade , decrementoQuantidadeProduto , incrementoQuantidadeProduto}}>
            {props.children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext
