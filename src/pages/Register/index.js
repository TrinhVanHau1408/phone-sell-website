import React from 'react';
import classNames from 'classnames/bind';
import styles from './Register.module.css';
import Input from '../../compoments/Input';
import Button from '../../compoments/Button';
import { icons } from '../../constants/icons';

const cx = classNames.bind(styles);

function Register () {
    return (
        <div className={cx('container_register')}>
            <div className={cx('wrap_form')}>
                <div className={cx('wrap_input')}>
                    <div className={cx('title_form')}>
                        <span>Đăng ký</span>
                        <div className={cx('wrap_icon')}>
                            <img src={icons['google-icon']} height={'40px'} width={'40px'}/>
                            <img src={icons['facebook-icon']} height={'40px'} width={'40px'}/>
                        </div>
                        <span>our sure your email for regisiration</span>
                    </div>
                    <div>
                        <Input label={'Họ tên'} inputName={'name'} />
                        <Input label={'Email'} inputName={'email'} />
                        <Input label={'Mật khẩu'} inputName={'password'} />
                        <Button name={'Đăng ký'} />
                    </div>
                </div>

                <div className={cx('wrap_infomation')}>
                    <span>Welcome Back!</span>
                    <span>To keep connected with us please login with your personal info</span>
                    <button className={cx('btn_login')}>Đăng nhập</button>
                </div>
            </div>
        </div>
    );
}

export default Register;