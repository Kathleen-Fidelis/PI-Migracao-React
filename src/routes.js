import { Switch, Route } from "react-router-dom";
import Home from './pages/home/Home'
import Product from './pages/product/Product'
import Cart from './pages/cart/Cart'
import ItemPage from './pages/itemPage/ItemPage'
import Profile from './pages/profile/Profile'

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/product" component={Product} />
            <Route path="/cart" component={Cart} />
            <Route path="/itemPage" component={ItemPage} />
            <Route path="/profile" component={Profile} />
        </Switch>
    )
}