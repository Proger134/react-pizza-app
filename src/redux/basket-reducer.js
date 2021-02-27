const ADD_PIZZA_ITEM_TO_BASKET = "ADD_PIZZA_ITEM_TO_BASKET";
const CLEAN_ALL_BASKET = "CLEAN_ALL_BASKET";
const DELETE_OREDER_ITEM = "DELETE_OREDER_ITEM";
const ADD_ORDERED_PIZZA_COUNT = "ADD_ORDERED_PIZZA_COUNT";

let initialState = {
   pizza: []
}

const basketReducer = (state = initialState, action) => {
   switch (action.type) {
      case CLEAN_ALL_BASKET: {
         return { ...state, pizza: [] }
      }
      case DELETE_OREDER_ITEM: {
         return { ...state, pizza: state.pizza.filter(o => o.id !== action.id) }
      }
      case ADD_PIZZA_ITEM_TO_BASKET: {
         const checkIsUsed = (state) => {
            let isUsed = false;
            for (let i in state) {
               if (state[i].name === action.name && state[i].settings === action.settings) {
                  isUsed = true;
               }
            }
            return isUsed;
         }
         let newPizza = {
            id: Date.now(),
            isUsed: checkIsUsed(state.pizza),
            image: action.pizzaImage,
            name: action.name,
            settings: action.settings,
            price: action.price,
            fixedPrice: action.fixedPrice,
            count: 1
         }
         return { ...state, pizza: [...state.pizza, newPizza] };
      }
      case ADD_ORDERED_PIZZA_COUNT: {
         const changeCount = (state, id, sign) => {
            for (let i in state) {
               if (state[i].id === id) {
                  if (sign && state[i].count < 20) {
                     state[i].count += 1;
                     state[i].price += state[i].fixedPrice;
                  } else if (!sign && state[i].count > 1) {
                     state[i].count -= 1;
                     state[i].price -= state[i].fixedPrice;
                  }
               }
            }
         }
         changeCount(state.pizza, action.id, action.sign);
         return { ...state, pizza: [...state.pizza] }
      }
      default:
         return state
   }
}

export const addOrderedPizzaCount = (id, sign) => ({ type: ADD_ORDERED_PIZZA_COUNT, id, sign });
export const addPizza = (pizzaImage, name, settings, price, fixedPrice) => ({ type: ADD_PIZZA_ITEM_TO_BASKET, pizzaImage, name, settings, price, fixedPrice });
export const cleanAllBasket = () => ({ type: CLEAN_ALL_BASKET });
export const deleteOrderItem = (id) => ({ type: DELETE_OREDER_ITEM, id })

export default basketReducer;