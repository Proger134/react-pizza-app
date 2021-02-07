// Pizza selectors
export const getAllPizza = (state) => {
   return state.productsPage.pizza.all;
}

export const getMeatPizza = (state) => {
   return state.productsPage.pizza.meat;
}

export const getVegetarianPizza = (state) => {
   return state.productsPage.pizza.vegetarian;
}

export const getSpicyPizza = (state) => {
   return state.productsPage.pizza.spicy;
}

export const getSweetPizza = (state) => {
   return state.productsPage.pizza.sweet;
}

export const getPizzaType = (state) => {
   return state.productsPage.pizza.pizzaType;
}
