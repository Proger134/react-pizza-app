import paperoniImage from './../assets/images/pizza-images/meat-paperoni.jpg';
import hawaianImage from './../assets/images/pizza-images/meat-hawaiian.jpg';
import caesarImage from './../assets/images/pizza-images/vegetarian-caesar.jpeg';
import sourSweetChikenImage from './../assets/images/pizza-images/meat-sour-sweet-chiken.jpg';
import cheesImage from './../assets/images/pizza-images/vegetarian-cheese.jpg';
import pieImage from './../assets/images/pizza-images/sweet-pie.jpg';
import backedAppleImage from './../assets/images/pizza-images/sweet-backed-apple.jpeg';
import mexicaImage from './../assets/images/pizza-images/spicy-mexica.jpg';
import arriveImage from './../assets/images/pizza-images/spicy-arriva.jpeg';

const SET_PIZZA_TYPE = "SET_PIZZA_TYPE";

let initialState = {
   pizza: {
      all: [
         { id: 1, title: 'Папероні', description: 'Папероні, моцарелла, томатний соус', price: 115, image: paperoniImage, popularity: 10 },
         { id: 2, title: 'Гавайська', description: 'Курятина, ананаси, моцарелла, томатний соус', price: 105, image: hawaianImage, popularity: 8 },
         { id: 3, title: 'Цезар', description: 'Салат айзберг, курка, помідори черрі, сир пармезан, соус цезар', price: 155, image: caesarImage, popularity: 7 },
         { id: 4, title: 'Кисла курка', description: 'Курча, кисло-солодкий соус, моцарела, томатний соус', price: 136, image: sourSweetChikenImage, popularity: 5 },
         { id: 5, title: 'Сирна', description: 'Збільшена порція моцарели, сири чеддер і пармезан, соус Альфредо', price: 120, image: cheesImage, popularity: 8 },
         { id: 6, title: 'Піца періг', description: 'Ананаси, брусниця, згущене молоко', price: 110, image: pieImage, popularity: 7 },
         { id: 7, title: 'Запечене яблуко', description: 'Яблука, чорна смородина, соус пломбір, пелюстки мигдалю, кориця', price: 110, image: backedAppleImage, popularity: 7 },
         { id: 8, title: 'Мексика', description: 'Гострий курча, гострий перець халапеньо,', price: 110, image: mexicaImage, popularity: 7 },
         { id: 9, title: 'Арріва', description: 'Курча, гостра чоризо, соус бургер, солодкий перець', price: 110, image: arriveImage, popularity: 7 }
      ],
      meat: [
         { id: 1, title: 'Папероні', description: 'Папероні, моцарелла, томатний соус', price: 115, image: paperoniImage, popularity: 10 },
         { id: 2, title: 'Гавайська', description: 'Курятина, ананаси, моцарелла, томатний соус', price: 105, image: hawaianImage, popularity: 8 },
         { id: 3, title: 'Кисла курка', description: 'Курча, кисло-солодкий соус, моцарела, томатний соус', price: 136, image: sourSweetChikenImage, popularity: 5 },
         { id: 4, title: 'Мексика', description: 'Гострий курча, гострий перець халапеньо', price: 110, image: mexicaImage, popularity: 7 },
         { id: 5, title: 'Арріва', description: 'Курча, гостра чоризо, соус бургер, солодкий перець,', price: 110, image: arriveImage, popularity: 7 }
      ],
      vegetarian: [
         { id: 1, title: 'Цезар', description: 'Салат айзберг, курка, помідори черрі, сир пармезан, соус цезар', price: 155, image: caesarImage, popularity: 7 },
         { id: 2, title: 'Сирна', description: 'Збільшена порція моцарели, сири чеддер і пармезан, соус Альфредо', price: 120, image: cheesImage, popularity: 8 }
      ],
      spicy: [
         { id: 1, title: 'Мексика', description: 'Гострий курча, гострий перець халапеньо', price: 110, image: mexicaImage, popularity: 7 },
         { id: 2, title: 'Арріва', description: 'Курча, гостра чоризо, соус бургер, солодкий перець,', price: 110, image: arriveImage, popularity: 7 }
      ],
      sweet: [
         { id: 1, title: 'Піца періг', description: 'Ананаси, брусниця, згущене молоко', price: 110, image: pieImage, popularity: 7 },
         { id: 2, title: 'Запечене яблуко', description: 'Яблука, чорна смородина, соус пломбір, пелюстки мигдалю, кориця', price: 110, image: backedAppleImage, popularity: 7 }
      ],
      pizzaType: 'all'
   }
}

const productsReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_PIZZA_TYPE: {
         return { ...state, pizza: { ...state.pizza, pizzaType: action.pizzaType } }
      }
      default:
         return state;
   }
}

export const setPizzaType = (pizzaType) => ({ type: SET_PIZZA_TYPE, pizzaType })

export default productsReducer;