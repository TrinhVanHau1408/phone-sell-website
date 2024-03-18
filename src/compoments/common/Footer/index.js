import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.css';
import { icons } from '../../../constants/icons';

const cx = classNames.bind(styles);

function Footer () {
    return (
        <div className={cx('container_footer')}>
            <div className={cx('wrap_header_top')}>
                <div className={cx('container_item')}>
                    <div className={cx('list_item')}>
                        <span>Danh mục</span>
                        <button>Hàng mới về</button>
                        <button>Bán chạy</button>
                        <button>Đang giảm giá</button>
                        <button>Danh sách sản phẩm</button>
                    </div>
                    <div className={cx('list_item')}>
                        <span>Nhãn hiệu</span>
                        <button>Iphone</button>
                        <button>Samsung</button>
                        <button>Realme</button>
                        <button>Xiaomi</button>
                        <button>Oppo </button>
                    </div>
                    <div className={cx('list_item')}>
                        <span>Tvh mobile</span>
                        <button>Về chúng tôi</button>
                        <button>Địa chỉ</button>
                        <button>Liên hệ</button>
                        <button>Chính sách</button>
                    </div>
                </div>
                <div className={cx('container_item')}></div>
                <div className={cx('container_item')}>
                    <span>Đăng ký ngay</span>
                    <div className={cx('wrap_register')}>
                        <input type='text' id="register_now" />
                        <button>Đăng ký</button>
                    </div>
                </div>
            </div>
           
            <div className={cx('wrap_header_bottom')}>
                <div className={cx('line')}></div>
                <div className={cx('content')}>
                    <div>Copyright 2024 Avion LTD</div>
                    <div className={cx('wrap_icon')}>
                        <img src={icons['facebook-icon']} height={30} width={30}/>
                        <img src={icons['google-icon']} height={30} width={30}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;