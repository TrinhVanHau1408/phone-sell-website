import React, {useState, useEffect} from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.css';
import {icons} from '../../../constants/icons';
const cx = classNames.bind(styles);

function Header () {

    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [headerVisible, setHeaderVisible] = useState(true);
  
    // useEffect(() => {
    //   function handleScroll() {
    //     const currentScroll = window.screenY || document.documentElement.scrollTop;
  
    //     console.log('currentScroll', currentScroll);
    //     if (currentScroll > lastScrollTop) {
    //       // Scroll down
    //       setHeaderVisible(false);
    //     } else {
    //       // Scroll up
    //       setHeaderVisible(true);
    //     }
  
    //     setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    //   }
  
    //   window.addEventListener('scroll', handleScroll);
    //   return () => {
    //     window.removeEventListener('scroll', handleScroll);
    //   };
    // }, [lastScrollTop]);
    return (
        <div className={cx(`container_header`)}>
            <div className={cx('logo_header')}>
                <img src={icons['logo-header']} height={100} width={300}/>
            </div>
            <div className={cx('wrap_search_input')}>
                <input type='text' id='search_input' className={cx('search_input')} />
            </div>
            <div className={cx('wrap_personal')}>
                <div className={cx('shopping_cart')}>
                    <img src={icons['shopping-cart']} height={70} width={70}/>
                    <span className={cx('number')}>1</span>
                </div>
                <div className={cx('wrap_button')}>
                    <button>Đăng nhập</button> 
                    <span>/</span>
                    <button>Đăng ký</button>
                </div>
            </div>
        </div>
    );
}

export default Header;