import React from 'react';
import styles from './Button.module.css';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);

function Button (props) { 
    const {name} = props;
    return (
        <div className={cx('container_button')}>
            <button className={cx('btn')}>
                {name}
            </button>
        </div>
    );

}

export default Button;