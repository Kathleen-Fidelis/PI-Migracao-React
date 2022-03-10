import './Product.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Card from '../../components/card/Card'
import CardP from '../../components/card/CardProduct'




import Product1 from '../../components/card/imgs/heart (2).png'

function Product() {
    return (
        <>
            <Header/>
           <Card productName="Bebê Reborn Mayara" imgProduct="./imgs/heart (2).png" valueProduct=" R$ 799,00 "  parcel=" Ou 10x sem juros"/>
           <Card productName="Bebê Reborn Mayara" valueProduct=" R$ 799,00 "  parcel=" Ou 10x sem juros"/>
           <CardP Image={ Product1 }/>

           <Footer/>
        </>
    )
}

export default Product