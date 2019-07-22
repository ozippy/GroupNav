import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styles from '../GroupNavigation.module.scss';
import LinkElement from './LinkElement';
import EntitySelector from './EntitySelector';
import ISPNavItem from './INavItem';
import useNavState from './NavState';
import { Nav, INavLinkGroup } from 'office-ui-fabric-react/lib/Nav';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';
import { INavGroup, IGroupLink } from './INavItem';


const initialEntity = "companyb.com";

export default function NavList() {

  const { navItemsGroup, isLoading } = useNavState(initialEntity);

  return (
    <div className={styles.groupNavigation}>
      <p>List</p>
      <EntitySelector />
      {isLoading ? <Spinner size={SpinnerSize.large} /> : ''}

      <div>
        <Nav
          onRenderGroupHeader={_onRenderGroupHeader}
          groups={navItemsGroup}
        />
      </div>
    </div>
  );

}

function _onRenderGroupHeader(group: INavLinkGroup): JSX.Element {
  return <h3>{group.name}</h3>;
}