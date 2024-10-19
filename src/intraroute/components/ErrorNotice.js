import React from 'react';
import styles from './ErrorNotice.module.css';

function ErrorNotice(props) {
  let text1;
  let text2;
  if (props.text1 === 'default') {
    text1 = 'IntraRoute is currently experiencing errors following an update to our route data.'
  } else {
    text1 = props.text1;
  }
  if (props.text2 = 'default') {
    text2 = 'We appreciate your patience while we work to resolve the issue.'
  } else {
    text2 = props.text2;
  }
    return (
        <div className={styles.container}>
            <h1 className={`${styles.text} ${styles.text1}`}>{props.date}</h1>
            <h1 className={`${styles.text} ${styles.text2}`}>{props.text1}</h1>
            <h1 className={`${styles.text} ${styles.text3}`}>{props.text2}</h1>
        </div>
    )
}

export default ErrorNotice;