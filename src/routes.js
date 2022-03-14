import { Switch, Route } from "react-router-dom";
import Home from './pages/home/Home'
import Product from './pages/product/Product'
import Cart from './pages/cart/Cart'
import ItemPage from './pages/itemPage/ItemPage'
import Profile from './pages/profile/Profile'
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import AssessmentsHome from "./components/assessmentsHome/AssessmentsHome";
import ForgotPassword from './pages/forgotPassword/ForgotPassword'
import Register from './pages/register/Register'
import UpdatePassword from "./pages/updatePassword/UpdatePassword";
import Assessments from "./pages/assessments/Assessments";
import MoreDetails from './components/moreDetails/MoreDetails'
import ContactUs from './pages/contact us/Contact'
import SuccessPassword from './pages/success_password/SuccessPassword'
import Wishlist from './components/wishlist/Wishlist'
import Delivery from './pages/delivery/Delivery'
import ExchangesReturn from './pages/exchangesReturn/exchangesReturn'
import Login from './pages/login/Login'


export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/product" component={Product} />
            <Route path="/cart" component={Cart} />
            <Route path="/itemPage" component={ItemPage} />
            <Route path="/profile" component={Profile} />
            <Route path="/" component={Home} exact/>
            <Route path="/header" component={Header} exact/>
            <Route path="/product" component={Product} />
            <Route path="/cart" component={Cart} />
            <Route path="/nav" component={Nav} exact/>
            <Route path="/assessmentsHome" component={AssessmentsHome} exact/>
            

            <Route path="/forgotPassword" component={ForgotPassword} />
            <Route path="/register" component={Register} />
            <Route path="/updatePassword" component={UpdatePassword} />
            <Route path="/assessments" component={Assessments} />
            <Route path="/moreDetails" component={MoreDetails} />
            <Route path="/contact" component={ContactUs} />
            <Route path="/successPassword" component={SuccessPassword} />
            <Route path="/wishlist" component={Wishlist} />
            <Route path="/delivery" component={Delivery} />
            <Route path="/exchangesReturn" component={ExchangesReturn} />
            <Route path="/login" component={Login} />
        </Switch>
    )
}