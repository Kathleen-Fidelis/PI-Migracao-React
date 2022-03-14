import { Switch, Route } from "react-router-dom";
import Home from './pages/home/Home'
import Product from './pages/product/Product'
import Cart from './pages/cart/Cart'
import ItemPage from './pages/itemPage/ItemPage'
import Profile from './pages/profile/Profile'
import Nav from "./components/nav/Nav";
import AssessmentsHome from "./components/assessmentsHome/AssessmentsHome";
import Contact from './pages/contact us/Contact'
import SuccessPassword from './pages/success_password/SuccessPassword'
import Wishlist from "./components/wishlist/Wishlist";
import ForgotPassword from './pages/forgotPassword/ForgotPassword'
import Register from './pages/register/Register'
import UpdatePassword from "./pages/updatePassword/UpdatePassword";
import Assessments from "./pages/assessments/Assessments";
import MoreDetails from './components/moreDetails/MoreDetails'
import ExchangesReturn from './pages/exchangesReturn/exchangesReturn'
import Login from './pages/login/Login'
import Delivery from './pages/delivery/Delivery'



export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/product" component={Product} />
            <Route path="/cart" component={Cart} />
            <Route path="/itemPage" component={ItemPage} />
            <Route path="/profile" component={Profile} />
            <Route path="/product" component={Product} />
            <Route path="/cart" component={Cart} />
            <Route path="/nav" component={Nav} exact/>
            <Route path="/assessmentsHome" component={AssessmentsHome} exact/>
            

            <Route path="/forgotPassword" component={ForgotPassword} />
            <Route path="/register" component={Register} />
            <Route path="/updatePassword" component={UpdatePassword} />
            <Route path="/assessments" component={Assessments} />
            <Route path="/moreDetails" component={MoreDetails} />
            <Route path="/" component={Home} exact/>
            <Route path="/product" component={Product} />
            <Route path="/cart" component={Cart} />
            <Route path="/Contact" component={Contact} />
            <Route path="/SuccessPassword" component={SuccessPassword} />
            <Route path="/Wishlist" component={Wishlist}/>
            <Route path="/exchangesReturn" component={ExchangesReturn} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/delivery" component={Delivery} />

        </Switch>
    )
}