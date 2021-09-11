import Topbar from "./Component/topbar/Topbar";
import Sidebar from "./Component/sidebar/Sidebar";
import Home from "./pages/home/Home";
import User from "./pages/user/User";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import UserList from "./pages/userList/UserList";

import "./app.css";
import NewUser from "./pages/newUser/NewUser";
import Products from "./pages/productList/Products";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
function App() {
  return (
    <Router>
      <Topbar></Topbar>
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/newProduct">
            <NewProduct />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
