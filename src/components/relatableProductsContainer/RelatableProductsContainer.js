import './RelatableProductsContainer.css'
import RelatableProduct from '../../components/relatableProduct/RelatableProduct'



import Product1 from '../card/imgs/5.jpg'
import Product2 from '../card/imgs/4.jpg'
import Product3 from '../card/imgs/6.jpg'
import Product4 from '../card/imgs/7.jpg'

function RelatableProductsContainer(props) {
  return (
    <>
      <div class="container containerConteudo col-11">
        <h4 class="nomeBebe">Produtos Relacionados</h4>
        <div class="row justify-content-evenly">

          <RelatableProduct
            rProductName="Bebê reborn Renata"
            rProductPrice="659,00"
            rProductParcel="65,90"
            image={Product1} />



          <RelatableProduct
            rProductName="Bebê Reborn Mayara"
            rProductPrice="799,00"
            rProductParcel="79,90"
            image={Product2} />


          <RelatableProduct
            rProductName="Bebê Reborn Joelma"
            rProductPrice="619,00"
            rProductParcel="61,90"
            image={Product3} />


          <RelatableProduct
            rProductName="Bebê Reborn Camila"
            rProductPrice="459,00"
            rProductParcel="45,90"
            image={Product4} />


        </div>
      </div>

    </>

  );
}

export default RelatableProductsContainer