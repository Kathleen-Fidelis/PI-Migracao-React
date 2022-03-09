import { Link } from 'react-router-dom'

import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import InfoMain from '../../components/productInfoMain/ProductInfoMain'
import Description from '../../components/productInfoDescription/ProductInfoDescription'
import RelatableContainer from '../../components/relatableProductsContainer/RelatableProductsContainer'

import MainImage from '../../components/card/imgs/ArthurMain.jpg'
import MiniImg1 from '../../components/card/imgs/Arthur1.png'
import MiniImg2 from '../../components/card/imgs/Arthur2.png'
import MiniImg3 from '../../components/card/imgs/Arthur3.png'


function ItemPage() {
    return (
        <>
            <Header />
            <InfoMain
                nameProduct="Bebê Reborn Arthur"
                MainImg={MainImage} 
                miniImg1={MiniImg1} 
                miniImg2={MiniImg2} 
                miniImg3={MiniImg3} 
                codeProduct="S48002"
                brand="PIMPOLHOS"
                price="549,00"
                parcel="54,90" />
            <br />
            <Description 
            sex="Menino"
            size="55"
            material="100% de silicone"
            weight="1.500 g"
            content="Um bebe reborn + Roupas igual da foto + Chupeta Magnética + Mamadeira + Certidão de Nascimento"/>
            
            <br />
            <RelatableContainer>
            </RelatableContainer>

            <Footer />
        </>
    )
}

function trocarImagem(el) {
    var imgProduto = document.getElementById("imgProduto");
    imgProduto.src = el.src;
  }


export default ItemPage