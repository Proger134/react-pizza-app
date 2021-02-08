import React from 'react';
import s from './App.module.css';
import { Route } from 'react-router-dom';

import HeaderContainer from './components/Header/Header';
import SidebarContainer from './components/Sidebar/Sidebar';
import ProductsContainer from './components/Products/Products';
import BasketContainer from './components/Basket/Basket';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <div className={s.container}>
      <HeaderContainer />
      <div className={s.elements__container}>

        <Route exact path="/" render={() => <SidebarContainer />} />
        <Route exact path="/" render={() => <ProductsContainer />} />
        <Route path="basket/" render={() => <BasketContainer />} />
      </div>

      <Route exact path="react-pizza-app/" render={() => <Footer />} />
    </div>
  )
}

export default App;
