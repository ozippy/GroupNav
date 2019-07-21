import * as React from 'react';
import styles from './GroupNavigation.module.scss';
import { IGroupNavigationProps } from './IGroupNavigationProps';
import { escape } from '@microsoft/sp-lodash-subset';
import NavList from './FunctionComponents/NavList';
import { sp } from "@pnp/sp";

export default class GroupNavigation extends React.Component<IGroupNavigationProps, {}> {

  public render(): React.ReactElement<IGroupNavigationProps> {
    return (
      <div className={styles.groupNavigation}>
        <NavList />
      </div>
    );
  }
}
