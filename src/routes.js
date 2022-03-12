import { Switch, Route } from "react-router-dom";
import Home from './pages/home/Home'
import Product from './pages/product/Product'
import Cart from './pages/cart/Cart'
import Header from './components/header/Header'
import Nav from "./components/nav/Nav";
import AssessmentsHome from "./components/assessmentsHome/AssessmentsHome";
import Footer from './components/footer/Footer'
import RelatableProductsContainer from "./components/relatableProductsContainer/RelatableProductsContainer";


export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/header" component={Header} exact/>
            <Route path="/product" component={Product} />
            <Route path="/cart" component={Cart} />
            <Route path="/nav" component={Nav} exact/>
            <Route path="/assessmentsHome" component={AssessmentsHome} exact/>
            <Route path="/footer" component={Footer}/>
            <Route path='/relatableProductsContainer' component={RelatableProductsContainer}/>
            

        </Switch>
    )
}