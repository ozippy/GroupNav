import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styles from '../GroupNavigation.module.scss';
import LinkElement from './LinkElement';
import { EntitySelector } from './EntitySelector';
import ISPNavItem from './INavItem';
import useNavState from './NavState';
import { Nav, INavLinkGroup } from 'office-ui-fabric-react/lib/Nav';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';
import { INavGroup, IGroupLink } from './INavItem';


const initialEntity = "companya.com";

export default function NavList() {

  const { navItemsGroup, isLoading, selectedEntity, setSelectedEntity } = useNavState(initialEntity);

  return (
    <div className={styles.groupNavigation}>
      <div className={styles.row}>
        <EntitySelector entity={selectedEntity} updateEntity={setSelectedEntity} />
      </div>
      <div>
        {isLoading ? <Spinner size={SpinnerSize.large} /> : ''}
      </div>
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