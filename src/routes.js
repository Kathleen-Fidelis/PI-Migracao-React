import { Switch, Route } from "react-router-dom";
import Home from './pages/home/Home'
import Product from './pages/product/Product'
import Cart from './pages/cart/Cart'
import Footer from './components/footer/Footer'
import Contact from './pages/contact us/Contact'
import SuccessPassword from './pages/success_password/SuccessPassword'
import Wishlist from "./components/wishlist/Wishlist";
import ForgotPassword from './pages/forgotPassword/ForgotPassword'
import Register from './pages/register/Register'
import UpdatePassword from "./pages/updatePassword/UpdatePassword";
import Assessments from "./components/assessments/Assessments";
import MyRequests from './components/myRequests/MyRequests'
import ItemPage from './pages/itemPage/ItemPage'
import Profile from './pages/profile/Profile'

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/product" component={Product} />
            <Route path="/cart" component={Cart} />
            <Route path="/Footer" component={Footer} />
            <Route path="/Contact" component={Contact} />
            <Route path="/SuccessPassword" component={SuccessPassword} />
            <Route path="/Wishlist" component={Wishlist}/>
            <Route path="/forgotPassword" component={ForgotPassword} />
            <Route path="/register" component={Register} />
            <Route path="/updatePassword" component={UpdatePassword} />
            <Route path="/assessments" component={Assessments} />
            <Route path="/myRequests" component={MyRequests} />
            <Route path="/itemPage" component={ItemPage} />
            <Route path="/profile" component={Profile} />

        </Switch>
    )
}