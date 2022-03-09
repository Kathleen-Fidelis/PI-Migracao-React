import './Product.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import FreightBanner from '../../components/freightBanner/FreightBanner'
import ProductBanner from '../../components/productBanner/ProductBanner'

function Product() {
    return (
        <>
            <FreightBanner />
            <Header/>
            <ProductBanner />

           {/*<Footer/>*/}
        </>
    )
}

export default Product