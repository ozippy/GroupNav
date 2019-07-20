import * as React from 'react';
import * as ReactDOM from 'react-dom';

import styles from '../GroupNavigation.module.scss';

export default function LinkElement() {




    return (
        <div className={styles.groupNavigation}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <p>This is the list item</p>
                </div>
            </div>
        </div>
    );

}