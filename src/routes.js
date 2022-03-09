import { Switch, Route } from "react-router-dom";
import Home from './pages/home/Home'
import Header from './components/header/Header'
import Product from './pages/product/Product'
import Cart from './pages/cart/Cart'
import ForgotPassword from './pages/forgotPassword/ForgotPassword'
import Register from './pages/register/Register'
import UpdatePassword from "./pages/updatePassword/UpdatePassword";
import Assessments from "./pages/assessments/Assessments";
import MoreDetails from './pages/moreDetails/MoreDetails'
import FreightBanner from "./components/freightBanner/FreightBanner";
import ProductBanner from "./components/productBanner/ProductBanner";
import Filter from "./components/filter/Filter";

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/header" component={Header} />
            <Route path="/product" component={Product} />
            <Route path="/cart" component={Cart} />
            <Route path="/forgotPassword" component={ForgotPassword} />
            <Route path="/register" component={Register} />
            <Route path="/updatePassword" component={UpdatePassword} />
            <Route path="/assessments" component={Assessments} />
            <Route path="/moreDetails" component={MoreDetails} />
            <Route path="/freightBanner" component={FreightBanner} />
            <Route path="/productBanner" component={ProductBanner} />
            <Route path="/filter" component={Filter} />
        </Switch>
    )
}