import React from 'react';
import s from './BasketField.module.css';

import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BasketField = ({ id, image, title, describe, count, price, isUsed, deleteOrderItem, addOrderedPizzaCount }) => {
   const onClickDeleteItem = (id) => {
      deleteOrderItem(id);
   }

   const onClickAdd = (id) => {
      addOrderedPizzaCount(id, true);
   }

   const onClickSubtract = (id) => {
      addOrderedPizzaCount(id, false);
   }

   return (
      <div>
         {!isUsed &&
            <div className={s.basket__field}>
               <img className={s.basket__field__image} src={image} alt="" />
               <div className={s.basket__field__info}>
                  <div className={s.basket__field__info__title}>{title}</div>
                  <div className={s.basket__field__info__description}>{describe}</div>
               </div>
               <div className={s.basket__field__counter}>
                  <FontAwesomeIcon className={s.field__counter__icon} onClick={() => onClickSubtract(id)} icon={faMinus} />
                  <div className={s.field__counter__text}>{count}</div>
                  <FontAwesomeIcon className={s.field__counter__icon} onClick={() => onClickAdd(id)} icon={faPlus} />
               </div>
               <div className={s.field__price}>{price} ₴</div>
               <FontAwesomeIcon className={s.basket__field__delete} onClick={() => onClickDeleteItem(id)} icon={faTimesCircle} />
            </div>
         }
      </div>
   )
}

export default BasketField;