import React from 'react';
import classNames from 'classnames/bind';

import styles from './Input.module.css';

const cx = classNames.bind(styles);

function Input (props) {

    const {label, inputName} =props;
    return (
        <div className={cx('container')}>
            <input type='text' id={`input_${inputName}`} className={cx('input_form')} placeholder=''/>
            <label htmlFor={`input_${inputName}`} className={cx('input_label')}>{label}</label>
            <span className={cx('input_bottom_line')}></span>
        </div>

    );
}

export default Input;