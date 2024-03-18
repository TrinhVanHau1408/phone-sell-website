import React, {useState, useEffect} from 'react';
import classNames from 'classnames/bind';
import styles from './Banner.module.css';
import { images } from '../../constants/images';


const cx = classNames.bind(styles);
const banner_img = [images.banner_1, images.banner_2, images.banner_3];

function Banner () {

    const [currentImage, setCurrentImage] = useState(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(banner_img[Math.floor(Math.random() * banner_img.length)]);
        }, 4000)
        
        return () => clearInterval(intervalId);
    }, [])
    return (
        <div className={cx('container_banner')}>
            <img src={currentImage}/>
           
        </div>
    );
}

export default Banner;