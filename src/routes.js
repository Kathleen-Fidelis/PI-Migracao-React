import { Switch, Route } from "react-router-dom";
import Home from './pages/home/Home'
import Product from './pages/product/Product'
import Cart from './pages/cart/Cart'
import ExchangesReturn from './pages/exchangesReturn/exchangesReturn'
import Login from './pages/login/Login'
import SuccessPurchase from './pages/successPurchase/SuccessPurchase'
import Delivery from './pages/delivery/Delivery'
import MyRequests from "./pages/myrequests/MyRequests"

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/product" component={Product} />
            <Route path="/cart" component={Cart} />
            <Route path="/exchangesReturn" component={ExchangesReturn} />
            <Route path="/login" component={Login} />
            <Route path="/successPurchase" component={SuccessPurchase} />
            <Route path="/delivery" component={Delivery} />
            <Route path="/myrequests" component={MyRequests} />

        </Switch>
    )
}