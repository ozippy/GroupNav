import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styles from '../GroupNavigation.module.scss';
import LinkElement from './LinkElement';
import EntitySelector from './EntitySelector';
import INavItem from './INavItem';
import useNavState from './NavState';


const initialEntity = "sanitarium.com.au";

export default function NavList() {

  let { navItems, isLoading } = useNavState(initialEntity);

  return (
    <div className={styles.groupNavigation}>
      <p>List</p>
      {/* <EntitySelector /> */}
      {isLoading ? <p>Loading</p> : <p>Not loading</p>}
      {console.log(navItems)}
      <ul>
        {/* {!isLoading ? navItems.map((navItem: INavItem) => {
          return <LinkElement navItem={navItem} />
        })} */}
      </ul>
    </div>
  );

}


