import React from 'react';
import shoppingCart from './../../../assets/icons/icons8-корзина-48.png';
import s from './BasketBody.module.css';

import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NavLink } from 'react-router-dom';
import BasketField from './BasketField/BasketFIeld';

const BasketBody = ({ pizzaOrders, cleanAllBasket, pizzaOrdersLength, totalOrderPrice, deleteOrderItem, addOrderedPizzaCount }) => {
   return (
      <div>
         <div className={s.basket__container}>
            <div className={s.basket__header}>
               <div className={s.header__title}>
                  <img className={s.header__title__icon} src={shoppingCart} alt="" />
                  <div className={s.header__title__text}>Корзина</div>
               </div>
               <div className={s.basket__clear}>
                  <FontAwesomeIcon className={s.basket__clear__icon} icon={faTrashAlt} />
                  <div className={s.basket__clear__text} onClick={() => { cleanAllBasket() }}>Очистити корзину</div>
               </div>
            </div>
            <div className={s.basket__body}>
               {
                  pizzaOrders.map(o =>
                     <BasketField
                        id={o.id} image={o.image}
                        title={o.name} describe={o.settings}
                        count={o.count} price={o.price}
                        deleteOrderItem={deleteOrderItem} isUsed={o.isUsed}
                        addOrderedPizzaCount={addOrderedPizzaCount} />)
               }
            </div>
            <div className={s.basket__info}>
               <div className={s.basket__info__count}>Всього піцц: <span>{pizzaOrdersLength} шт.</span></div>
               <div className={s.basket__info__price}>Сума наказу: <span>{totalOrderPrice} ₴</span></div>
            </div>
            <div className={s.basket__pay}>
               <NavLink className={s.link} to="/">
                  <div className={s.come__back}>
                     <FontAwesomeIcon className={s.come__back__icon} icon={faChevronLeft} />
                     <div className={s.come__back__text}><span>Вернутися</span> назад</div>
                  </div>
               </NavLink>
               <div className={s.pay__button}>Оплатити</div>
            </div>
         </div>
      </div>
   )
}

export default BasketBody;