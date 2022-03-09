import './Product.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Card from '../../components/card/Card'

function Product() {
    return (
        <>
            <Header/>
           <Card productName="Bebê Reborn Mayara" imgProduct="./imgs/heart (2).png" valueProduct=" R$ 799,00 "  parcel=" Ou 10x sem juros"/>
           <Card productName="Bebê Reborn Mayara" valueProduct=" R$ 799,00 "  parcel=" Ou 10x sem juros"/>
           <Footer/>
        </>
    )
}

export default Product