import React, { useState } from 'react';
import s from './Sidebar.module.css';
import classNames from 'classnames';

import { setPizzaType } from '../../redux/products-reducer';

import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from 'react-redux';

const Sidebar = (props) => {
   let [pizzaType, setPizzaType] = useState("all");
   let [sortPizzaBy, setSortPizzaBy] = useState("popularity");

   let [isSortVisible, setSortVisible] = useState(false);

   const setNavigatorClassName = (value) => {
      if (pizzaType === value) {
         return s.selected__sidebar__navigator__item;
      }
   }

   const setSortMenuItemClassName = (value) => {
      if (sortPizzaBy === value) {
         return s.selected__sort__menu__item;
      }
   }

   const onSortByClick = () => {
      if (!isSortVisible) {
         setSortVisible(true)
      } else {
         setSortVisible(false)
      }
   }

   const setSidebarSortType = () => {
      if (sortPizzaBy === 'popularity') {
         return 'популярності';
      } else if (sortPizzaBy === 'price') {
         return 'ціні'
      } else if (sortPizzaBy === 'ABC') {
         return 'алфавіту'
      }
   }

   // change state pizzaType
   const setPizzaTypeReducer = (value) => {
      setPizzaType(value)
      props.setPizzaType(value);
   }

   const getPizzaTypes = () => {
      if (pizzaType === 'all') {
         return 'Всі'
      } else if (pizzaType === 'meat') {
         return 'Мясні'
      } else if (pizzaType === 'spicy') {
         return 'Гострі'
      } else if (pizzaType === 'vegetarian') {
         return 'Вегетиріанські'
      } else if (pizzaType === 'sweet') {
         return 'Солодкі'
      }
   }

   return (
      <div>
         <div className={s.sidebar}>
            <div className={s.sidebar__navigator}>
               <div className={`${setNavigatorClassName('all')} ${s.sidebar__navigator__item}`}
                  onClick={() => setPizzaTypeReducer('all')}>Всі</div>
               <div className={`${setNavigatorClassName('meat')} ${s.sidebar__navigator__item}`}
                  onClick={() => setPizzaTypeReducer('meat')}>М'ясні</div>
               <div className={`${setNavigatorClassName('vegetarian')} ${s.sidebar__navigator__item}`}
                  onClick={() => setPizzaTypeReducer('vegetarian')}>Вегетиріанські</div>
               <div className={`${setNavigatorClassName('spicy')} ${s.sidebar__navigator__item}`}
                  onClick={() => setPizzaTypeReducer('spicy')}>Гострі</div>
               <div className={`${setNavigatorClassName('sweet')} ${s.sidebar__navigator__item}`}
                  onClick={() => setPizzaTypeReducer('sweet')}>Солодкі</div>
            </div>
            <div className={s.sidebar__sort} onClick={onSortByClick}>

               {isSortVisible && <FontAwesomeIcon className={s.sidebar__sort__item} icon={faCaretUp} />}
               {!isSortVisible && <FontAwesomeIcon className={s.sidebar__sort__item} icon={faCaretDown} />}

               <div className={s.sidebar__sort__item}>Сортувати по: </div>
               <div className={classNames(s.sidebar__sort__item, s.sidebar__sort__type)}>{setSidebarSortType()}</div>
               {isSortVisible &&
                  <div className={s.sidebar__sort__menu}>
                     <div className={`${setSortMenuItemClassName('popularity')} ${s.sort__menu__item}`}
                        onClick={() => setSortPizzaBy('popularity')}>по популярності</div>
                     <div className={`${setSortMenuItemClassName('price')} ${s.sort__menu__item}`}
                        onClick={() => setSortPizzaBy('price')}>по ціні</div>
                     <div className={`${setSortMenuItemClassName('ABC')} ${s.sort__menu__item}`}
                        onClick={() => setSortPizzaBy('ABC')}>по алфавіту</div>
                  </div>
               }
            </div>
         </div>
         <div className={s.sidebar__title}>
            {getPizzaTypes()} піци
         </div>
      </div >
   )
}

const mapStateToProps = (state) => { return {} }

const SidebarContainer = connect(mapStateToProps, { setPizzaType })(Sidebar);

export default SidebarContainer;