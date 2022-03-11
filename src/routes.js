import { Switch, Route } from "react-router-dom";
import Home from './pages/home/Home'
import Product from './pages/product/Product'
import ExchangesReturn from './pages/exchangesReturn/exchangesReturn'
import Login from './pages/login/Login'
import SuccessPurchase from './pages/successPurchase/SuccessPurchase'
import Delivery from './pages/delivery/Delivery'
import Cart from './pages/cart/Cart'
import ForgotPassword from './pages/forgotPassword/ForgotPassword'
import Register from './pages/register/Register'
import UpdatePassword from "./pages/updatePassword/UpdatePassword";
import Assessments from "./pages/assessments/Assessments";
import MoreDetails from './pages/moreDetails/MoreDetails'
import ItemPage from './pages/itemPage/ItemPage'



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
            <Route path="/forgotPassword" component={ForgotPassword} />
            <Route path="/register" component={Register} />
            <Route path="/updatePassword" component={UpdatePassword} />
            <Route path="/assessments" component={Assessments} />
            <Route path="/moreDetails" component={MoreDetails} />
            <Route path="/itemPage" component={ItemPage} />
            

        </Switch>
    )
}