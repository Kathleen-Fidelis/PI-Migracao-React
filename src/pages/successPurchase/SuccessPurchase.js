import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './SuccessPurchase.css'
import BannerFreight from '../../components/freightBanner/FreightBanner'
import ImagemSucesso from './imgs/checked.png'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Nav from '../../components/nav/Nav'
import SuccessPurschaseItens from '../../components/successPurchaseItens/SuccessPurchaseItens'
import ItensProducts from '../../components/successPurchaseItens/ItensProducts'


function SucessPurchase(props) {



    return (
        <>
        <div className="pageSucessPurchase">
        <BannerFreight/>
        <Header/>
        <Nav/>
        <div className="container-fluid mt-5">
    <div className="row justify-content-center">
      <div className="col-md-8">

        
          <div className="card cardSuccessPurchase">

            <div className="row  rowCentralized justify-content-center">
            <div className="col-lg-1 col-2">
              <img src={ImagemSucesso} alt="" className='img-checked' />
              </div>
          </div>

          <div className="row  rowCentralized justify-content-center">
              <div className="col-md-10">
                <div className="row justify-content-center">
              <div className="p-sucesso col-11">
                <p className="p-sucesso-title p">
                    Compra realizada com sucesso!!
                </p >

               
                <SuccessPurschaseItens formPagment="Cartão de Crédito" parcel="4 X Vezes Sem Juros" delivery="Correios"/>
            </div>
              <div className="col-11">
                
                <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Cod.</th>
                        <th scope="col">Produto</th>
                        <th scope="col">Preço</th>
                    </tr>
                </thead>
                <tbody>
                  
                <ItensProducts id="1" name="Bebe Reborn Emilly"  value=" 619,00"/>
                <ItensProducts id="3" name="Bebe Reborn Arthur"  value=" 549,00"/>
                <ItensProducts id="17" name="Chupeta Rosa Simples" value=" 29,00"/>
        
                        
                    
                <ItensProducts id="Total"  value="1.197,00"/>
                </tbody>
            </table>
            </div>
            <div className="d-flex justify-content-center">
            <Link to="/profile"> <button type="button" className="btn custom-button1"> Meus Pedidos</button></Link>
            </div>
            </div>
                </div>
                </div>
            </div>

   
        </div>
      </div>
    </div>
    <Footer/>
    </div>
        </>
    )
}

export default SucessPurchase


  