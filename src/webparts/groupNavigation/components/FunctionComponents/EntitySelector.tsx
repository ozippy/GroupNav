import * as React from 'react';
import * as ReactDOM from 'react-dom';

import styles from '../GroupNavigation.module.scss';

export default function EntitySelector() {


    return (
        <div className={styles.groupNavigation}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <p>This is the entity selector</p>
                </div>
            </div>
        </div>
    );


}