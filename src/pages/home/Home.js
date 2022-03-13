import './Home.css'
import Freight from '../../components/freightBanner/FreightBanner'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Avaliation from '../../components/assessmentsHome/AssessmentsHome'
import CarrouselBanner from '../../components/bannerCarrousel/BannerCarrousel'
import BannerSecondary from '../../components/bannerSecondary/BannerSecondary'
import Categories from '../../components/categories/Categories'
import Nav from '../../components/nav/Nav'
import CardP from '../../components/cardProduct/CardProduct'


import Emilly from '../product/imgs/arthur.jpg'
import Bruna from '../product/imgs/bruna.jpg'
import Bianca from '../product/imgs/bianca1.jpg'
import Alice from '../../components/card/imgs/samuelMain.jpg'



function Home() {
    return (
        <>
            <Freight/>
            <Header/>
            <Nav/>
            <CarrouselBanner/>
            <BannerSecondary/>
            <Categories/>
            <p className="destaques"> PRODUTOS EM DESTAQUE </p>
            <div className="cards">

                <CardP Image={ Bruna } Name="Bebê Reborn Bruna" price="499" parcel="49,90"/>
                <CardP Image={ Emilly } Name="Bebê Reborn Arthur" price="499" parcel="49,90"/>
                <CardP Image={ Bianca } Name="Bebê Reborn Bianca" price="599" parcel="59,90"/>
                <CardP Image={ Alice } Name="Bebê Reborn Samuel" price="659" parcel="45,90"/>
            </div>
            <div className="cards">
                <CardP Image={ Emilly } Name="Bebê Reborn Emilly" price="619" parcel="61,90"/>
                <CardP Image={ Bruna } Name="Bebê Reborn Bruna" price="499" parcel="49,90"/>
                <CardP Image={ Bianca } Name="Bebê Reborn Bianca" price="599" parcel="59,90"/>
                <CardP Image={ Alice } Name="Bebê Reborn Alice" price="659" parcel="65,90"/>
            </div>
            <div className="cards">
                <CardP Image={ Emilly } Name="Bebê Reborn Emilly" price="619" parcel="61,90"/>
                <CardP Image={ Bruna } Name="Bebê Reborn Bruna" price="499" parcel="49,90"/>
                <CardP Image={ Bianca } Name="Bebê Reborn Bianca" price="599" parcel="59,90"/>
                <CardP Image={ Alice } Name="Bebê Reborn Alice" price="659" parcel="65,90"/>
            </div>
            <Avaliation/>
            <Footer />
        </>
    )
}
export default Home