import { INavLinkGroup, Nav } from 'office-ui-fabric-react/lib/Nav';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';
import * as React from 'react';
import styles from '../GroupNavigation.module.scss';
import { EntitySelector } from './EntitySelector';
import useNavState from './NavState';


const initialEntity = "companya.com";

//This is the main component which will lis the navigation
export const NavList = () => {

  //Get the state data from the custom hook
  const { navItemsGroup, isLoading, selectedEntity, setSelectedEntity } = useNavState(initialEntity);

  const _onRenderGroupHeader = (group: INavLinkGroup): JSX.Element => {
    return <h3>{group.name}</h3>;
  };

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

};