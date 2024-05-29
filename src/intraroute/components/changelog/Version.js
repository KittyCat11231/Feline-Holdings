import React from 'react';
import styles from './Version.module.css';

function SubList(props) {
    let renderSubList = [];

    props.list.forEach(element => {
        renderSubList.push(<li className={`${styles.subListItem} ${styles.grayText}`}>{element}</li>)
    })

    return (
        <li className={`${styles.listItem} ${styles.grayText}`}>
            {props.header}
            <ul className={`${styles.subList} ${styles.grayText}`}>
                {renderSubList}
            </ul>
        </li>
    )
}

function Version(props) {
    let renderElements = [];

    props.list.forEach(element => {
        if (typeof element === 'string') {
            renderElements.push(<li className={`${styles.listItem} ${styles.grayText}`}>{element}</li>);
        } else if (typeof element === 'object') {
            renderElements.push(<SubList header={element.header} list={element.list} />)
        }
    })    

    return (
        <div className={styles.versionContainer}>
            <h2 className={`${styles.versionNumber} ${styles.grayText}`}>{props.version}</h2>
            <p className={`${styles.released} ${styles.grayText}`}>Released on {props.releaseDate}</p>
            <ul className={`${styles.list} ${styles.grayText}`}>
                {renderElements}
            </ul>
        </div>
    )
}

export default Version;