import * as React from 'react';
import * as ReactDOM from 'react-dom';
import INavItem from './INavItem';
import styles from '../GroupNavigation.module.scss';

export default function LinkElement(props) {

    //destructure item
    const { title, entity, navGroup, linkUrl } = props.navItem;

    return (
        <div className={styles.groupNavigation}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <p>This is the list item</p>
                    <a href={linkUrl}>{title}</a>
                </div>
            </div>
        </div>
    );

}