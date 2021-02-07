import React from 'react';
import { connect } from 'react-redux';
import s from './Basket.module.css';

import { getBasketPizza, getBasketPizzaLength, getBasketTotalOrderPrice } from '../../redux/basket-selector';
import { cleanAllBasket, deleteOrderItem, addOrderedPizzaCount } from './../../redux/basket-reducer';

import BasketBody from './BasketBody/BasketBody';
import EmptyBasketBodyContainer from './EmptyBasketBody/EmptyBasketBody';

const Basket = ({ pizzaOrders, pizzaOrdersLength, cleanAllBasket, totalOrderPrice, deleteOrderItem, addOrderedPizzaCount }) => {
   return (
      <div className={s.basket}>
         {pizzaOrdersLength < 1 &&
            <EmptyBasketBodyContainer />
         }
         { pizzaOrdersLength >= 1 &&
            <BasketBody pizzaOrders={pizzaOrders}
               pizzaOrdersLength={pizzaOrdersLength}
               totalOrderPrice={totalOrderPrice}
               cleanAllBasket={cleanAllBasket}
               deleteOrderItem={deleteOrderItem}
               addOrderedPizzaCount={addOrderedPizzaCount} />
         }
      </div>
   )
}

const mapStateToProps = (state) => {
   return {
      pizzaOrders: getBasketPizza(state),
      pizzaOrdersLength: getBasketPizzaLength(state),
      totalOrderPrice: getBasketTotalOrderPrice(state)
   }
}

const BasketContainer = connect(mapStateToProps, { cleanAllBasket, deleteOrderItem, addOrderedPizzaCount })(Basket);

export default BasketContainer;