import React from 'react';
import s from './Header.module.css';
import logoImage from './../../assets/images/logo.png';

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { getBasketTotalOrderPrice, getBasketPizzaLength } from './../../redux/basket-selector';

const Header = ({ totalOrderPrice, totalPizzaCount }) => {
   return (
      <>
         <div className={s.header}>
            <div className={s.header__content__container}>
               <NavLink className={s.link} to="/">
                  <div className={s.logo}>
                     <img className={s.logo__image} src={logoImage} alt="Logo" />
                     <div className={s.logo__container}>
                        <span className={s.logo__title}>React Pizza</span>
                        <span className={s.logo__text}>Найкраща піца в світі</span>
                     </div>
                  </div>
               </NavLink>

               <NavLink className={s.link} to="/basket">
                  <div className={s.basket}>
                     {totalOrderPrice > 0 &&
                        <div className={s.basket__price}>{totalOrderPrice} ₴</div>
                     }
                     {totalOrderPrice === 0 &&
                        <div className={s.basket__price}>Корзина</div>
                     }
                     <div><FontAwesomeIcon icon={faShoppingCart} /></div>
                     <div className={s.basket__count}>{totalPizzaCount}</div>
                  </div>
               </NavLink>

            </div>
         </div>
      </>
   )
}

let mapStateToProps = (state) => {
   return {
      totalOrderPrice: getBasketTotalOrderPrice(state),
      totalPizzaCount: getBasketPizzaLength(state)
   }
}

const HeaderContainer = connect(mapStateToProps, {})(Header)

export default HeaderContainer;