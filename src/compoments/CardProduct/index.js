import React from 'react';
import classNames from 'classnames/bind';
import styles from './CardProduct.module.css';
import { images } from '../../constants/images';

const cx = classNames.bind(styles);


function CardProduct () {
    return (
        <div className={cx('container_card_product')}>
            <img src={images.phone_1} height={180} width={200}/>
            <div className={cx('info')}>
                <span className={cx('name')}>ZEBRONICS Zeb-Reaper 2.4GHz Wireless</span>
                <div className={cx('price')}>
                    <span>₹1,599.00</span>
                    <span>40%</span>
                </div>
                <button className={cx('btn_add_to_cart')}>Add to cart</button>
            </div>
        </div>
    );
}

export default CardProduct;