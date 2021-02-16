import React from 'react';
import s from './Products.module.css';
import ProductContainer from './Product/Product';

import { connect } from 'react-redux';
import { getAllPizza, getMeatPizza, getPizzaType, getSpicyPizza, getSweetPizza, getVegetarianPizza } from '../../redux/products-selector';
import { setPizzaType } from '../../redux/products-reducer';

const Products = ({ allPizzas, meatPizza, vegetarianPizza, sweetPizza, spicyPizza, typePizza }) => {
   return (
       <div className={s.products__container}>
          <div className={s.products}>
             { typePizza === "all" &&
             allPizzas.map(p => <ProductContainer image={p.image} title={p.title}
                                                  description={p.description} productPrice={p.price} />)
             }
             { typePizza === "meat" &&
             meatPizza.map(p => <ProductContainer image={p.image} title={p.title}
                                                  description={p.description} productPrice={p.price} />)
             }
             { typePizza === "vegetarian" &&
             vegetarianPizza.map(p => <ProductContainer image={p.image} title={p.title}
                                                        description={p.description} productPrice={p.price} />)
             }
             { typePizza === "spicy" &&
             spicyPizza.map(p => <ProductContainer image={p.image} title={p.title}
                                                   description={p.description} productPrice={p.price} />)
             }
             { typePizza === "sweet" &&
             sweetPizza.map(p => <ProductContainer image={p.image} title={p.title}
                                                   description={p.description} productPrice={p.price} />)
             }
          </div>
       </div>
   )
}

const mapStateToProps = state => {
   return {
      allPizzas: getAllPizza(state),
      meatPizza: getMeatPizza(state),
      vegetarianPizza: getVegetarianPizza(state),
      sweetPizza: getSweetPizza(state),
      spicyPizza: getSpicyPizza(state),
      typePizza: getPizzaType(state)
   }
}

class ProductsComponentContainer extends React.Component {
   componentDidMount() {
      this.props.setPizzaType('all');
   }

   render() {
      return <Products {...this.props} />
   }
}

const ProductsContainer = connect(mapStateToProps, { setPizzaType })(ProductsComponentContainer);

export default ProductsContainer;