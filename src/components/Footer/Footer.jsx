import React from 'react';
import s from './Footer.module.css';

import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { faFacebookSquare, faYoutube, faInstagram, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NavLink } from 'react-router-dom';

const Footer = () => {
   return (
      <div className={s.footer}>
         <div className={s.footer__main}>
            <div className={s.main__title}>React Pizza</div>
            <div >
               <div className={s.main__item}>Меню</div>
               <div className={s.main__item}>Піцерії</div>
               <div className={s.main__item}>Франчайзинг</div>
               <div className={s.main__item}>Інформація щодо вмісту алергенів та харчова цінність</div>
            </div>
         </div>
         <div className={s.footer__services}>
            <div className={s.services__title}>Сервіси</div>
            <div className={s.services__content}>
               <FontAwesomeIcon className={s.services__content__icon} icon={faCommentDots} />
               <span className={s.services__content__text}>Pizza Tracker</span>
            </div>
         </div>
         <div className={s.footer__contacts}>
            <div className={s.contacts__title}>Контакти</div>
            <div>
               <div className={s.contacts__content__item}>info@reactpizza.ua</div>
               <div className={s.contacts__content__item}>Залишити відгук</div>
               <div className={s.contacts__content__item}>044 222 11 11</div>
            </div>
         </div>
         <div className={s.footer__info}>
            <div className={s.info__site}>
               <div className={s.info__site__logo}>
                  <NavLink to="/" className={s.link}>
                     <img className={s.site__image} src="https://cdn1.iconfinder.com/data/icons/restaurants-and-food/95/pizza-512.png" alt="Logo" />
                     <span className={s.site__title}>React Pizza</span>
                  </NavLink>
               </div>
               <div className={s.site__address}>© 2021 React Pizza Україна</div>
            </div>
            <div className={s.info__social__networks}>
               <div className={s.social__networks__title}>СЛІДКУВАТИ</div>
               <div className={s.social__networks__content}>
                  <FontAwesomeIcon className={s.social__networks__content__item} icon={faFacebookSquare} />
                  <FontAwesomeIcon className={s.social__networks__content__item} icon={faYoutube} />
                  <FontAwesomeIcon className={s.social__networks__content__item} icon={faInstagram} />
                  <FontAwesomeIcon className={s.social__networks__content__item} icon={faTelegram} />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Footer;