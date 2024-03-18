import React from 'react';
import classNames from 'classnames/bind';
import Input from '../../compoments/Input';
import Button from '../../compoments/Button';
import styles from './LogIn.module.css';
import {icons} from '../../constants/icons'
// import Header from '../../compoments/common/Header';
// import Footer from '../../compoments/common/Footer';
const cx = classNames.bind(styles);
function LogIn() {
    return (
        <div className={cx('container_login')}>
           <div className={cx('wrap_form')}>
                <div className={cx('container_infomation')}>
                   <span>Nice to see you again</span>
                   <span>Wellcome back</span>
                   <span></span>
                   <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                </div>
                <div className={cx('container_form')}>
                    <div className={cx('title_form')}>
                        <span>đăng nhập</span>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    </div>
                    <div className={cx('content_form')}>
                        <Input key={'email'} label={'Địa chỉ email'} inputName={'email'}/>
                        <Input key={'password'} label={'Mật khẩu'} inputName={'password'}/>
                        <div className={cx('wrap_input')}>
                            <div className={cx('checkbox')}>
                                <input type='checkbox' id='remember' className={cx('input_remember')} />
                                <label htmlFor='remember' className={cx('label_remember')}><span>Remember me</span></label>
                            </div>
                            <button className={cx('btn_forgotPassword')}>Quên mật khẩu?</button>
                        </div>

                        <Button name={'Đăng nhập'} />
                        <div>
                            <button className={cx('btn_Register')}>Đăng ký</button>
                        </div>

                        <div className={cx('wrap_loginAnother')}>
                            <h3>Đăng nhập bằng</h3>
                            <div className={cx('loginAnother')}>
                                <img src={icons['google-icon']} height={50} width={50}/>
                                <img src={icons['facebook-icon']} height={50} width={50}/>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
}


export default LogIn;