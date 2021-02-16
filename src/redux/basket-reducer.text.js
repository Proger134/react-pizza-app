import basketReducer, {addPizza} from './basket-reducer';

let state = {
    pizza: []
};

test('is added to basket', () => {
    let newPizza = {pizzaImage: null, name: 'Paperoni', settings: '30 sm', price: 100, fixedPrice: 100}
    let action = addPizza(null, 'Paperoni', '30 sm', 100, 100);

    let newState = basketReducer(state, action);

    expect(newState.pizza[0].id).toBe(1);
});

