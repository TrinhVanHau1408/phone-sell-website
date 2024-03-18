import React from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.css';
import Header from '../../compoments/common/Header';
import Footer from '../../compoments/common/Footer';
import Banner from '../../compoments/Banner';
import CardProduct from '../../compoments/CardProduct';
import { icons } from '../../constants/icons';

const cx = classNames.bind(styles);

function Home () {
    return (
        <div className={cx('container_home')}>
            <Header />
            <div className={cx('content_home')}>
                <Banner />
                <div className={cx('content_list')}>
                    <span className={cx('title')}>Sản phẩm bán chạy</span>
                    <div className={cx('line')}></div>
                    <div className={cx('list_product')}>
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                    </div>
                </div>

                <div className={cx('content_list')}>
                    <span className={cx('title')}>Danh sách sản phẩm</span>
                    <div className={cx('line')}></div>
                    <div className={cx('list_product')}>
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                    </div>
                    <div className={cx('wrap_button')}><button>Xem tất cả</button></div>
                </div>

                <div className={cx('wrap_policy')}>
                    <h3>Chính sách tại TVH</h3>
                    <div className={cx('content_policy')}>
                        <div className={cx('item_policy')}>
                            <img src={icons['facebook-icon']} height={25} width={25}/>
                            <span>Miễn phí vận chuyển</span>
                            <span>Miễn phí vận chuyển cho đơn hàng trên 10 triệu đồng</span>
                        </div>
                        <div className={cx('item_policy')} >
                            <img src={icons['facebook-icon']} height={25} width={25}/>
                            <span>Sản phẩm chính hãng</span>
                            <span>Nhà phân phối chính hãng của nhãn hàng điện thoại lớn</span>
                        </div>
                        <div className={cx('item_policy')}>
                            <img src={icons['facebook-icon']} height={25} width={25}/>
                            <span>Giá cả hợp lý</span>
                            <span>Cung cấp các sản phẩm chất lượng và giá cả tốt nhất</span>
                        </div>
                        <div className={cx('item_policy')}>
                            <img src={icons['facebook-icon']} height={25} width={25}/>
                            <span>Bảo hành, hoàn trả</span>
                            <span>Chính sách bảo hành trong 6 tháng, hoàn trả trong 24h</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;