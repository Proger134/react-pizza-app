import React, { useState } from 'react';
import s from './Product.module.css';

import classNames from 'classnames';
import { connect } from 'react-redux';
import { addPizza } from './../../../redux/basket-reducer';

const Product = ({ image, title, description, productPrice, count = 0, addPizza }) => {
   let [dough, setDough] = useState('тонке');
   let [pizzaSize, setPizzaSize] = useState(26);

   const getProductPrice = (price) => {
      let productPrice = price;
      if (pizzaSize === 30) {
         productPrice += 45;
      } else if (pizzaSize === 40) {
         productPrice += 80;
      }
      return productPrice;
   }

   const onClickAddToBasket = () => {
      addPizza(image, title, `${pizzaSize} см, ${dough}`, getProductPrice(productPrice), getProductPrice(productPrice))
   }

   const getConfiguratorPizzaWidthClass = (value) => {
      let elementClass = s.configurator__second__row__item
      if (pizzaSize === value) {
         elementClass = s.configurator__second__row__item__selected
      }
      return elementClass;
   }

   return (
      <div className={s.products__item}>
         <img className={s.item__image} src={image} alt="" />
         <div className={s.item__title}>{title}</div>
         <div className={s.item__description}>{description}</div>
         <div className={s.item__configurator}>
            <div className={s.item__configurator__row}>
               <div className={classNames(s.configurator__first__row__item,
                  { [s.configurator__first__row__item__selected]: dough === 'тонке' })}
                  onClick={() => setDough('тонке')}>тонке</div>
               <div className={classNames(s.configurator__first__row__item,
                  { [s.configurator__first__row__item__selected]: dough === 'традиційне' })}
                  onClick={() => setDough('традиційне')}>традиційне</div>
            </div>
            <div className={s.item__configurator__row}>
               <div className={getConfiguratorPizzaWidthClass(26)} onClick={() => setPizzaSize(26)}>26см</div>
               <div className={getConfiguratorPizzaWidthClass(30)} onClick={() => setPizzaSize(30)}>30см</div>
               <div className={getConfiguratorPizzaWidthClass(40)} onClick={() => setPizzaSize(40)}>40см</div>
            </div>
         </div>
         <div className={s.item__add}>

            {getProductPrice(productPrice) === productPrice &&
               <div className={s.item__add__price}>від {getProductPrice(productPrice)}  ₴</div>
            }
            {getProductPrice(productPrice) !== productPrice &&
               <div className={s.item__add__price}>ціна {getProductPrice(productPrice)}  ₴</div>
            }

            <div className={s.item__add__button} onClick={onClickAddToBasket}>
               <div className={s.button__item}>В кошик</div>
            </div>
         </div>
      </div >
   )
}

let mapStateToProps = () => { return {} }

const ProductContainer = connect(mapStateToProps, { addPizza })(Product)

export default ProductContainer;