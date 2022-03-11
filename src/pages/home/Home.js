import './Home.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Avaliation from '../../components/assessmentsHome/AssessmentsHome'
import CarrouselBanner from '../../components/bannerCarrousel/BannerCarrousel'
import BannerSecondary from '../../components/bannerSecondary/BannerSecondary'
import Categories from '../../components/categories/Categories'



function Home() {
    return (
        <>
            <Header/>
            <CarrouselBanner/>
            <BannerSecondary/>
            <Categories/>
            <p className=""/>
            <Avaliation/>
            <Footer />
        </>
    )
}

export default Home