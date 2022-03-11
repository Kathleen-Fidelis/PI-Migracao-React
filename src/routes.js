import { Switch, Route } from "react-router-dom";
import Home from './pages/home/Home'
import Product from './pages/product/Product'
import Cart from './pages/cart/Cart'
import Footer from './components/footer/Footer'
import Contact from './pages/contact us/Contact'
import SuccessPassword from './pages/success_password/SuccessPassword'
import Wishlist from "./pages/wishlist/Wishlist";

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

        </Switch>
    )
}