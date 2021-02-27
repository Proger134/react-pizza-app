import basketReducer, {addPizza, cleanAllBasket} from './basket-reducer';

let state = {
    pizza: []
};

test('is added to basket', () => {
    let newPizza = {pizzaImage: null, name: 'Paperoni', settings: '30 sm', price: 100, fixedPrice: 100}
    let action = addPizza(newPizza);

    let newState = basketReducer(state, action);

    expect(newState.pizza.length).toBe(1);
});

test('is basket cleaned', () => {
    let action  = cleanAllBasket();

    let newState = basketReducer(state, action);

    expect(newState.pizza.length).toBe(0);
})


