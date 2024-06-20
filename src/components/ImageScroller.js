import React from 'react';
import { useRef } from 'react';
import styles from './ImageScroller.module.css';

function ImageScroller(props) {
    const imagesRef = useRef();
    let images = [];

    props.propsArray.forEach(item => {
        images.push(<img src={item.src} alt={item.alt} className={styles.logo} />)
    })

    return (
        <div className={styles.container}>
            <div className={styles.images} ref={imagesRef}>
                {images}
            </div>
        </div>
    )
}

export default ImageScroller;