import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import './bootstrap.min.css'
import './index.css'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'
import SubHeader from './components/SubHeader'
import CategoryScreen from './screens/CategoryScreen'
import SearchScreen from './screens/SearchScreen'

function App() {
  return (
    <Router>
      <Header/>
      <SubHeader/>
      <main className="py-3">
        <Container>
          <Route path="/login" component={LoginScreen}/>
          <Route path="/register" component={RegisterScreen}/>
          <Route path="/profile" component={ProfileScreen}/>
          <Route path="/product/:id" component={ProductScreen}/>
          <Route path="/cart/:id?" component={CartScreen}/>
          <Route path="/shipping" component={ShippingScreen}/>
          <Route path="/payment" component={PaymentScreen}/>
          <Route path="/placeorder" component={PlaceOrderScreen}/>
          <Route path="/order/:id" component={OrderScreen}/>
          <Route path="/admin/userlist" component={UserListScreen}/>
          <Route path="/admin/user/:id" component={UserEditScreen}/>
          <Route exact path="/admin/productlist" component={ProductListScreen}/>
          <Route exact path="/admin/productlist/:pageNumber" component={ProductListScreen}/>
          <Route path="/admin/product/:id/edit" component={ProductEditScreen}/>
          <Route path="/admin/orderlist" component={OrderListScreen}/>
          <Route exact path="/categories/:category" component={CategoryScreen} />
          <Route path="/categories/:category/page/:pageNumber" component={CategoryScreen} />
          <Route exact path="/search/:keyword" component={SearchScreen}/>
          <Route path="/search/:keyword/page/:pageNumber" component={SearchScreen}/>
          <Route exact path="/" component={HomeScreen}/>
          {/* <Route component={NotFoundScreen}/> */}
        </Container>
      </main>
      <Footer/>  
    </Router>
  );
}

export default App;
