
import './MyAccount.css'
import Freight from '../../components/freightBanner/FreightBanner'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Nav from '../../components/nav/Nav'
import cadastro from './img-myAccount/cadastro.png'
import localizacao from './img-myAccount/localizacao.png'
import lixeira from './img-myAccount/lixeira.png'
import mastercard from './img-myAccount/mastercard.png'
import american from './img-myAccount/american.png'
import chip from './img-myAccount/chip.png'
import elo from './img-myAccount/elo.png'
import hipercard from './img-myAccount/hipercard.png'
import miniLixeira from './img-myAccount/miniLixeira.png'
import visa from './img-myAccount/visa.png'
import checklist from './img-myAccount/checklist.png'
import desejos from './img-myAccount/desejos.png'
import user from './img-myAccount/user.png'


function MyAccount() {
    return (
        <>
            <Freight />
            <Header />
            <Nav />
            {/* <!-- INÍCIO DO NAV/TAB --> */}
            <div class="container navtabContainer">

                <ul class="nav nav-tabs" id="myTab" role="tablist">

                    <li class="nav-item principal" role="presentation">
                        <button class="nav-link principal col-12 " id="pedidos-tab" data-bs-toggle="tab" data-bs-target="#MeusPedidos"
                            type="button" role="tab" aria-controls="pedidos" aria-selected="false">
                            <img class="emotes" src={user} /> Minha conta</button>
                    </li>




                    <li class="nav-item principal" role="presentation">
                        <button class="nav-link principal col-12 " id="pedidos-tab" data-bs-toggle="tab" data-bs-target="#MeusPedidos"
                            type="button" role="tab" aria-controls="pedidos" aria-selected="false">
                            <img class="emotes" src={checklist} /> Meus Pedidos</button>
                    </li>



                    <li class="nav-item principal" role="presentation">
                        <button class="nav-link principal" id="desejos-tab" data-bs-toggle="tab" data-bs-target="#ListadeDesejos"
                            type="button" role="tab" aria-controls="desejos" aria-selected="false"> <img class="emotes"
                                src={desejos} />Lista de desejos</button>
                    </li>



                    <li class="nav-item principal" role="presentation">
                        <button class="nav-link principal" id="avaliacoes-tab" data-bs-toggle="tab" data-bs-target="#Avaliacoes"
                            type="button" role="tab" aria-controls="avaliacoes" aria-selected="false">
                            <svg class="emotes" width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20 13.9163C19.0477 13.4281 17.9663 13.2507 16.9079 13.4092C15.8496 13.5676 14.8675 14.0539 14.1 14.7997C13.1637 15.7372 12.6377 17.008 12.6377 18.333C12.6377 19.658 13.1637 20.9288 14.1 21.8663L18.8167 26.6663C18.9716 26.8226 19.1559 26.9465 19.359 27.0312C19.5621 27.1158 19.78 27.1593 20 27.1593C20.22 27.1593 20.4379 27.1158 20.641 27.0312C20.8441 26.9465 21.0284 26.8226 21.1833 26.6663L25.9 21.9497C26.8363 21.0122 27.3623 19.7413 27.3623 18.4163C27.3623 17.0913 26.8363 15.8205 25.9 14.883C25.1421 14.1237 24.1646 13.6218 23.1059 13.4483C22.0471 13.2748 20.9606 13.4386 20 13.9163ZM23.5333 19.5163L20 23.0497L16.4667 19.5163C16.3105 19.3614 16.1865 19.1771 16.1019 18.974C16.0172 18.7709 15.9737 18.553 15.9737 18.333C15.9737 18.113 16.0172 17.8951 16.1019 17.692C16.1865 17.4889 16.3105 17.3046 16.4667 17.1497C16.7789 16.8393 17.2014 16.665 17.6417 16.665C18.082 16.665 18.5044 16.8393 18.8167 17.1497C18.9716 17.3059 19.1559 17.4299 19.359 17.5145C19.5621 17.5991 19.78 17.6427 20 17.6427C20.22 17.6427 20.4379 17.5991 20.641 17.5145C20.8441 17.4299 21.0284 17.3059 21.1833 17.1497C21.4956 16.8393 21.918 16.665 22.3583 16.665C22.7986 16.665 23.2211 16.8393 23.5333 17.1497C23.6896 17.3046 23.8135 17.4889 23.8982 17.692C23.9828 17.8951 24.0263 18.113 24.0263 18.333C24.0263 18.553 23.9828 18.7709 23.8982 18.974C23.8135 19.1771 23.6896 19.3614 23.5333 19.5163ZM20 3.33301C17.8113 3.33301 15.644 3.7641 13.6219 4.60168C11.5999 5.43926 9.76254 6.66692 8.21489 8.21456C5.08929 11.3402 3.33334 15.5794 3.33334 19.9997C3.31877 23.8482 4.65133 27.5806 7.10001 30.5497L3.76667 33.883C3.53541 34.1174 3.37875 34.415 3.31646 34.7383C3.25417 35.0616 3.28904 35.3962 3.41667 35.6997C3.5551 35.9996 3.77951 36.2515 4.06142 36.4237C4.34332 36.5958 4.67001 36.6802 5.00001 36.6663H20C24.4203 36.6663 28.6595 34.9104 31.7851 31.7848C34.9107 28.6592 36.6667 24.4199 36.6667 19.9997C36.6667 15.5794 34.9107 11.3402 31.7851 8.21456C28.6595 5.08896 24.4203 3.33301 20 3.33301ZM20 33.333H9.01667L10.5667 31.783C10.8771 31.4707 11.0513 31.0483 11.0513 30.608C11.0513 30.1677 10.8771 29.7453 10.5667 29.433C8.38432 27.2531 7.0253 24.3839 6.72116 21.3143C6.41702 18.2448 7.18658 15.1647 8.89872 12.5989C10.6109 10.0331 13.1597 8.14027 16.1109 7.24296C19.0621 6.34565 22.2331 6.49935 25.0837 7.67786C27.9343 8.85638 30.2881 10.9868 31.7441 13.7062C33.2 16.4255 33.6681 19.5656 33.0686 22.5914C32.469 25.6171 30.8389 28.3414 28.4559 30.3001C26.073 32.2587 23.0846 33.3306 20 33.333Z"
                                    fill="black" />
                            </svg>
                            Avaliações</button>
                    </li>




                </ul>

                {/* <!-- FIM DO NAV/TAB --> */}



                {/* <!-- INICIO DO CONTEUDO NAV/TAB --> */}
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">




                        <h1>Minha Conta</h1>
                        <div className="container row">


                            <div className="col-md-6 col-12">
                                <div className="cardContentTitleDC"> <img className="emotes" src={cadastro} />Dados Cadastrais</div>
                                <div className="container">
                                    <div className="cardContent row">
                                        <div className="col-12">
                                            <label for="inputAddressEndereco" id="InputEnderecoTitle">
                                                Nome:</label>
                                            <input type="text" className="form-control " id="inputAddressEndereco" placeholder="Osvaldo Silva"
                                                aria-label="Disabled input example" Disabled />
                                        </div>

                                        <div className="col-6">
                                            <label for="inputAddressBairro" id="InputBairroTitle">
                                                Sexo:</label>
                                            <input type="text" className="form-control col-12" id="inputAddressBairro" placeholder="Masculino"
                                                aria-label="Disabled input example" Disabled />
                                        </div>


                                        <div className="col-6">
                                            <label for="inputAddressCidade" id="InputCidadeTitle">
                                                Nascimento:</label>
                                            <input type="text" className="form-control" id="inputAddressCidade" placeholder="01/01/2021"
                                                aria-label="Disabled input example" Disabled />
                                        </div>

                                        <div className="col-12">
                                            <label for="inputAddressCEP" id="InputCEPTitle">E-mail:</label>
                                            <input type="text" className="form-control" id="inputAddressCEP" placeholder="osvaldoSilva@gmail.com"
                                                aria-label="Disabled input example" Disabled />
                                        </div>



                                        <div className="col-6">
                                            <label for="inputAddressComplemento" id="InputComplementoTitle">Telefone:</label>
                                            <input type="text" className="form-control" id="inputAddressComplemento" placeholder="(11) 99999-9999 "
                                                aria-label="Disabled input example" Disabled />
                                        </div>

                                        <div className="col-6">
                                            <label for="inputAddressPontodeReferencia" id="InputPontodeReferenciaTitle"> Celular:</label>
                                            <input type="text" className="form-control" id="inputAddressPontodeReferencia"
                                                placeholder=" (11) 99999-9999 " aria-label="Disabled input example" Disabled />
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="col-md-6 col-12">
                                <div className="cardContentTitleDC"><img className="emotes" src={localizacao} alt="" /> Endereço Principal
                                </div>
                                <div className="cardContent row">

                                    <div className="col-12">
                                        <label for="inputAddressEndereco" id="InputEnderecoTitle">
                                            Endereço:</label>
                                        <input type="text" className="form-control" id="inputAddressEndereco"
                                            placeholder="Av. Corifeu de Azevedo Marques, 3097" aria-label="Disabled input example" Disabled />
                                    </div>

                                    <div className="col-5">
                                        <label for="inputAddressBairro" id="InputBairroTitle">
                                            Bairro:</label>
                                        <input type="text" className="form-control" id="inputAddressBairro" placeholder="Vila Butantã"
                                            aria-label="Disabled input example" Disabled />
                                    </div>

                                    <div className="col-4">
                                        <label for="inputAddressCidade" id="InputCidadeTitle">
                                            Cidade:</label>
                                        <input type="text" className="form-control" id="inputAddressCidade" placeholder="São Paulo"
                                            aria-label="Disabled input example" Disabled />
                                    </div>

                                    <div className="col-3">
                                        <label for="inputAddressUF" id="InputUFTitle">
                                            UF:</label>
                                        <input type="text" className="form-control" id="inputAddressUF" placeholder="SP"
                                            aria-label="Disabled input example" Disabled />
                                    </div>


                                    <div className="col-4">
                                        <label for="inputAddressCEP" id="InputCEPTitle">
                                            CEP:</label>
                                        <input type="text" className="form-control" id="inputAddressCEP" placeholder="05212040"
                                            aria-label="Disabled input example" Disabled />
                                    </div>

                                    <div className="col-6">
                                        <label for="inputAddressComplemento" id="InputComplementoTitle">
                                            Complemento:</label>
                                        <input type="text" className="form-control" id="inputAddressComplemento" placeholder=" "
                                            aria-label="Disabled input example" Disabled />
                                    </div>

                                    <div className="col-10">
                                        <label for="inputAddressPontodeReferencia" id="InputPontodeReferenciaTitle">
                                            Ponto de Referência:</label>
                                        <input type="text" className="form-control" id="inputAddressPontodeReferencia"
                                            placeholder=" Em frente a USP " aria-label="Disabled input example" Disabled />
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Modal Cadastro botão --> */}

                            <button type="button" className="btn edit col-md-6 col-8" data-bs-toggle="modal"
                                data-bs-target="#modalEditarDados">Editar Dados Cadastrais</button>

                            {/* <!-- Modal Cadastro botão --> */}

                            <div className="modal fade" id="modalEditarDados" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div className="modal-dialog modal-xl">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <div className="modalcontentTitle" id="exampleModalLabel">Editar Dados</div>
                                            <button type="button" className="btn modalclose" data-bs-dismiss="modal" aria-label="Close">X</button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="container row">


                                                <div className="col-md-6 col-12">
                                                    <div className="cardContentTitleDC"><img className="emotes" src={cadastro} />

                                                        Dados Cadastrais</div>
                                                    <div className="container">
                                                        <div className="cardContent row">
                                                            <div className="col-12">
                                                                <label for="inputAddressNome" id="inputNome">
                                                                    Nome:</label>
                                                                <input type="text" className="form-control " id="inputAddressNome" placeholder="Osvaldo Silva" />
                                                            </div>

                                                            <div className="col-6">
                                                                <label for="inputAddressSexo" id="inputSexo">
                                                                    Sexo:</label>
                                                                <input type="text" className="form-control col-12" id="inputAddressSexo" placeholder="Masculino"
                                                                    aria-label="Disabled input example" Disabled />
                                                            </div>


                                                            <div className="col-6">
                                                                <label for="inputAddressNascimento" id="inputNascimento">
                                                                    Nascimento:</label>
                                                                <input type="text" className="form-control" id="inputAddressNascimento" placeholder="01/01/2021"
                                                                    aria-label="Disabled input example" Disabled />
                                                            </div>

                                                            <div className="col-12">
                                                                <label for="inputAddressEmail" id="inputEmail">E-mail:</label>
                                                                <input type="text" className="form-control" id="inputAddressEmail"
                                                                    placeholder="osvaldoSilva@gmail.com" aria-label="Disabled input example" Disabled />
                                                            </div>



                                                            <div className="col-6">
                                                                <label for="inputAddressTelefone" id="inputTelefone">Telefone:</label>
                                                                <input type="text" className="form-control" id="inputAddressTelefone"
                                                                    placeholder="(11) 99999-9999 " />
                                                            </div>

                                                            <div className="col-6">
                                                                <label for="inputAddress" id="inputCelular"> Celular:</label>
                                                                <input type="text" className="form-control" id="inputCelular" placeholder=" Em frente a USP " />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="col-md-6 col-12">
                                                    <div className="cardContentTitleDC"><img className="emotes" src={localizacao} />
                                                        Endereço Principal</div>

                                                    <div className="cardContent row modalEndereco">

                                                        <div className="col-9">
                                                            <label for="inputAddress" id="inputEndereco">
                                                                Endereço:</label>
                                                            <input type="text" className="form-control" id="inputEndereco"
                                                                placeholder="Av. Corifeu de Azevedo Marques" />
                                                        </div>

                                                        <div className="col-md-2 col-3">
                                                            <label for="inputAddress" id="inputNumero">
                                                                Nº:</label>
                                                            <input type="text" className="form-control" id="inputNumero" placeholder="3097" />
                                                        </div>

                                                        <div className="col-4">
                                                            <label for="inputAddress" id="InputBairroTitle">
                                                                Bairro:</label>
                                                            <input type="text" className="form-control" id="inputAddressBairro" placeholder="Vila Butantã" />
                                                        </div>

                                                        <div className="col-5">
                                                            <label for="inputAddress" id="InputCidadeTitle">
                                                                Cidade:</label>
                                                            <input type="text" className="form-control" id="inputAddressCidade" placeholder="São Paulo" />
                                                        </div>

                                                        <div className="col-2">
                                                            <label for="inputAddress" id="InputUFTitle">
                                                                UF:</label>
                                                            <input type="text" className="form-control" id="inputAddressUF" placeholder="SP" />
                                                        </div>



                                                        <div className="col-md-5 col-4">
                                                            <label for="inputAddress" id="InputCEPTitle">
                                                                CEP:</label>
                                                            <input type="text" className="form-control" id="inputAddressCEP" placeholder="05212040" />
                                                        </div>


                                                        <div className="col-5">
                                                            <label for="inputAddress" id="InputComplementoTitle">
                                                                Complemento:</label>
                                                            <input type="text" className="form-control" id="inputAddressComplemento" placeholder=" " />
                                                        </div>

                                                        <div className="col-10">
                                                            <label for="inputAddress" id="InputPontodeReferenciaTitle">
                                                                Ponto de Referência:</label>
                                                            <input type="text" className="form-control" id="inputAddressPontodeReferencia"
                                                                placeholder=" Em frente a USP " />
                                                        </div>
                                                    </div>
                                                </div>



                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn cancelar" data-bs-dismiss="modal">Cancelar</button>
                                            <button type="button" className="btn salvar" data-bs-dismiss="modal">Salvar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Outros Endereços --> */}

                            <div className="cardContent" id="cardenderecos">
                                <div className="row titleContainer">
                                    <div className="col-md-5 col-8 titleContainersecondary">Outros Endereços</div>

                                    <div className="textoapoio col-md-3 col-5" id="AdicionarEnde">Adicione novos endereços</div>
                                </div>
                                <br />
                                <div className="row enderecoCartao">
                                    <div className="col-8">
                                        <div className="row  enderecoCartao">
                                            <div className="col-md-8 col-12" id="listaEnde"> Endereços Adicionais:</div><br /><br />

                                            <div className="col-12 col-md-7">
                                                <div className="input-group">
                                                    <img className="imgLocation" src={localizacao} height="15%" />
                                                    <input type="text" className="form-control" id="enderecoExtra1" placeholder="Rua Lorem,1689"
                                                        aria-label="Disabled input example" Disabled />
                                                    <button className="btn "><img src={lixeira} alt="" width="35%" /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-8 col-md-4">
                                        <div className="col-md-12 col-12">
                                            <button type="button" className="btn Cadastro" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                <strong>+</strong> Cadastrar novo endereço
                                            </button>
                                        </div>
                                    </div>
                                </div>


                                {/* <!-- Modal --> */}
                                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div className="modal-dialog modal-lg">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <div className="modalcontentTitle" id="exampleModalLabel">Cadastre um novo endereço</div>
                                                <button type="button" className="btn modalclose" data-bs-dismiss="modal" aria-label="Close">X</button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="cardContent row modalEndereco">

                                                    <div className="col-10">
                                                        <label for="inputEndereco" id="inputEndereco">
                                                            Endereço:</label>
                                                        <input type="text" className="form-control" id="inputEndereco"
                                                            placeholder="Av. Corifeu de Azevedo Marques" />
                                                    </div>

                                                    <div className="col-2">
                                                        <label for="inputAdressNumCadastroEnde" id="inputNumCadastroEnde">
                                                            Nº:</label>
                                                        <input type="text" className="form-control" id="inputAdressNumCadastroEnde" placeholder="3097" />
                                                    </div>

                                                    <div className="col-4">
                                                        <label for="inputAddressBairro" id="InputBairroTitle">
                                                            Bairro:</label>
                                                        <input type="text" className="form-control" id="inputAddressBairro" placeholder="Vila Butantã" />
                                                    </div>

                                                    <div className="col-5">
                                                        <label for="inputCidade" id="inputCidade">
                                                            Cidade:</label>
                                                        <input type="text" className="form-control" id="inputAddressCidade" placeholder="São Paulo" />
                                                    </div>

                                                    <div className="col-3">
                                                        <label for="inputAddressUF" id="InputUFTitle">
                                                            UF:</label>
                                                        <input type="text" className="form-control" id="inputAddressUF" placeholder="SP" />
                                                    </div>


                                                    <div className="col-4">
                                                        <label for="inputAddressCEP" id="InputCEPTitle">
                                                            CEP:</label>
                                                        <input type="text" className="form-control" id="inputAddressCEP" placeholder="05212040" />
                                                    </div>

                                                    <div className="col-6">
                                                        <label for="inputAddressComplemento" id="InputComplementoTitle">
                                                            Complemento:</label>
                                                        <input type="text" className="form-control" id="inputAddressComplemento" placeholder=" " />
                                                    </div>

                                                    <div className="col-10">
                                                        <label for="inputAddressPontodeReferencia" id="InputPontodeReferenciaTitle">
                                                            Ponto de Referência:</label>
                                                        <input type="text" className="form-control" id="inputAddressPontodeReferencia"
                                                            placeholder=" Em frente a USP " />
                                                    </div>



                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn cancelar" data-bs-dismiss="modal">Cancelar</button>
                                                <button type="submit" className="btn salvar" data-bs-dismiss="modal">Salvar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* <!--  Final Outros Endereços --> */}

                            <div className="cardContent" id="cardenderecos">
                                <div className="row  teste titleContainer">
                                    <div className=" col-md-5 col-12 titleContainersecondary">Meus Cartões</div>
                                </div>
                                <br />
                                <div className="row enderecoCartao">
                                    <div className="col-12 col-md-8">
                                        <div className="row enderecoCartao">
                                            <div className="col-9 col-md-8">
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text"><img className="cartaocadastrado" src={mastercard}
                                                        alt="" /></span>
                                                    <input type="text" className="form-control" id="enderecoExtra1" placeholder="4658 XXXX XXXX XXXX 9867"
                                                        aria-label="Disabled input example" Disabled />
                                                    <button className="btn "><img src={lixeira} alt="" width="35%" /></button>
                                                </div>


                                                <div className="input-group mb-3">
                                                    <span className="input-group-text"><img src={visa} alt="" /></span>
                                                    <input type="text" className="form-control" id="enderecoExtra1" placeholder="4658 XXXX XXXX XXXX 9867"
                                                        aria-label="Disabled input example" Disabled />
                                                    <button className="btn "><img src={lixeira} alt="" width="35%" /></button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                    <div className="col-8 col-md-4">
                                        <button type="button" className="btn Cadastro" data-bs-toggle="modal" data-bs-target="#novocartao">
                                            <strong>+</strong> Cadastrar novo cartão
                                        </button>
                                    </div>
                                </div>
                            </div>


                            {/* <!--Modal Cartão--> */}

                            <div className="modal fade" id="novocartao" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <div className="modalcontentTitle" id="exampleModalLabel">Novo Cartão</div>
                                            <button type="button" className="btn modalclose" data-bs-dismiss="modal" aria-label="Close">x</button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="pag">
                                                <div className="row">
                                                    <div className=" imagens col-12">
                                                        <a href="#"><img src={mastercard} width="7%" /></a>
                                                        <a href="#"> <img src={visa} width="34px" /></a>
                                                        <a href="#"> <img src={american} width="34px" /></a>
                                                        <a href="#"> <img src={elo} width="34px" /></a>
                                                        <a href="#"> <img src={hipercard} width="42px" /></a>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className="cartFake col-9">
                                                        <div className="row">
                                                            <div className="col-3">
                                                                <img src={chip} alt="" />
                                                            </div>
                                                        </div><br />
                                                        <div className="row">
                                                            <div className="num col-8">
                                                                <strong>5858 6858 6989 5875</strong>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="nomeCartao col-7">
                                                                <strong>Osvaldo Silva</strong>
                                                            </div>
                                                            <div className="data col-3">
                                                                <strong>05/25</strong>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form">
                                                    <div className="row">
                                                        <div className=" col-8">
                                                            <label for=""><strong>Número do cartão</strong> </label>
                                                            <input className="form-control form-control-lg" type="" placeholder="5858 6858 6989 5875"
                                                                aria-label=".form-control-lg example" />
                                                            <br />
                                                        </div>

                                                        <div className=" col-4">
                                                            <label for=""><strong>Validade</strong> </label>
                                                            <input className="form-control form-control-lg" type="" placeholder="05/25"
                                                                aria-label=".form-control-lg example" />
                                                            <br />

                                                        </div>

                                                        <div className="row">
                                                            <div className="col-12">
                                                                <label for=""><strong>Nome do Títular</strong> </label>
                                                                <input className="form-control form-control-lg" type="" placeholder="Osvaldo Silva"
                                                                    aria-label=".form-control-lg example" />
                                                                <br />

                                                            </div>

                                                            <div className="row">
                                                                <div className="col-3">
                                                                    <label for=""><strong>Cod. Seg</strong> </label>
                                                                    <input className="form-control form-control-lg" type="" placeholder="CCV"
                                                                        aria-label=".form-control-lg example" />
                                                                </div>
                                                                <a className="helpCard" href="">?</a>



                                                            </div>
                                                            <div className="modal-footer Card">
                                                                <button type="button" className="btn cancelar" data-bs-dismiss="modal">Cancelar</button>
                                                                <button type="button" className="btn salvar" data-bs-dismiss="modal">Salvar</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default MyAccount