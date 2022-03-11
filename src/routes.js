import { Switch, Route } from "react-router-dom";
import Home from './pages/home/Home'
import Product from './pages/product/Product'
import Cart from './pages/cart/Cart'
import Footer from './components/footer/Footer'
import Contact from './pages/contact us/Contact'
import SuccessPassword from './pages/success_password/SuccessPassword'
import Wishlist from "./pages/wishlist/Wishlist";
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
            <Route path="/Footer" component={Footer} />
            <Route path="/Contact" component={Contact} />
            <Route path="/SuccessPassword" component={SuccessPassword} />
            <Route path="/Wishlist" component={Wishlist}/>
            <Route path="/forgotPassword" component={ForgotPassword} />
            <Route path="/register" component={Register} />
            <Route path="/updatePassword" component={UpdatePassword} />
            <Route path="/assessments" component={Assessments} />
            <Route path="/moreDetails" component={MoreDetails} />
            <Route path="/itemPage" component={ItemPage} />

        </Switch>
    )
}