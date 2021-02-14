import React from 'react';
import s from './EmptyBasketBody.module.css';

import emptyBasketImage from './../../../assets/images/empty-basket-image.png';
import { NavLink } from 'react-router-dom';

const EmptyBasketBody = () => {
   return (
      <div className={s.empty__basket}>
         <div className={s.empty__basket__title}>Корзина пуста</div>
         <div className={s.empty__basket__text}>
            Скоріш за все, ви не замовляли ще піцу.
            Для того, щоб замовити піцу, перейди на головну сторінку.
         </div>
         <img className={s.empty__basket__image} src={emptyBasketImage} alt="" />
         <NavLink className={s.empty__basket__button} to="/">Вернутися назад</NavLink>
      </div>
   )
}

class EmptyBasketBodyContainer extends React.Component {
   render() {
      return (
         <div>
            <EmptyBasketBody />
         </div>
      )
   }
}

export default EmptyBasketBodyContainer;