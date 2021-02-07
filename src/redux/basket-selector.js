export const getBasketPizza = (state) => {
   return state.basketPage.pizza;
}

export const getBasketPizzaLength = (state) => {
   let totalPizzaCount = 0;
   for (let i in state.basketPage.pizza) {
      if (!state.basketPage.pizza[i].isUsed) {
         totalPizzaCount += state.basketPage.pizza[i].count;
      }
   }
   return totalPizzaCount;
}

export const getBasketTotalOrderPrice = (state) => {
   let pizzaOrders = state.basketPage.pizza;
   let totalPrice = 0;
   for (let i = 0; i < pizzaOrders.length; i++) {
      if (!pizzaOrders[i].isUsed) {
         totalPrice = totalPrice + pizzaOrders[i].price
      }
   }
   return totalPrice;
}
