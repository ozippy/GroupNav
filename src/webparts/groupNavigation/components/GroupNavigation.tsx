import * as React from 'react';
import { NavList } from './FunctionComponents/NavList';
import styles from './GroupNavigation.module.scss';
import { IGroupNavigationProps } from './IGroupNavigationProps';

export default class GroupNavigation extends React.Component<IGroupNavigationProps, {}> {

  public render(): React.ReactElement<IGroupNavigationProps> {
    return (
      <div className={styles.groupNavigation}>
        <NavList />
      </div>
    );
  }
}
