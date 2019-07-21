import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styles from '../GroupNavigation.module.scss';
import LinkElement from './LinkElement';
import EntitySelector from './EntitySelector';
import ISPNavItem from './INavItem';
import useNavState from './NavState';
import { Nav, INavLinkGroup } from 'office-ui-fabric-react/lib/Nav';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';

const initialEntity = "companyb.com";

export default function NavList() {

  let { navItems, isLoading } = useNavState(initialEntity);

  return (
    <div className={styles.groupNavigation}>
      <p>List</p>
      <EntitySelector />
      {isLoading ? <Spinner size={SpinnerSize.medium} /> : <p>Not loading</p>}

      <div>
        <Nav
          onRenderGroupHeader={_onRenderGroupHeader}
          groups={[
            {
              name: 'Pages',
              links: [
                // prettier-ignore
                { name: 'Activity', url: 'http://msn.com', key: 'key1', target: '_blank' },
                { name: 'News', url: 'http://msn.com', key: 'key2', target: '_blank' }
              ]
            },
            {
              name: 'More pages',
              links: [
                // prettier-ignore
                { name: 'Settings', url: 'http://msn.com', key: 'key3', target: '_blank' },
                { name: 'Notes', url: 'http://msn.com', key: 'key4', target: '_blank' }
              ]
            }
          ]}
        />
      </div>
    </div>




  );

}


// import * as React from 'react';
// import { Nav, INavLinkGroup } from '../index';

// export const NavCustomGroupHeadersExample: React.StatelessComponent = () => {
//   return (
//     <Nav
//       onRenderGroupHeader={_onRenderGroupHeader}
//       groups={[
//         {
//           name: 'Pages',
//           links: [
//             // prettier-ignore
//             { name: 'Activity', url: 'http://msn.com', key: 'key1', target: '_blank' },
//             { name: 'News', url: 'http://msn.com', key: 'key2', target: '_blank' }
//           ]
//         },
//         {
//           name: 'More pages',
//           links: [
//             // prettier-ignore
//             { name: 'Settings', url: 'http://msn.com', key: 'key3', target: '_blank' },
//             { name: 'Notes', url: 'http://msn.com', key: 'key4', target: '_blank' }
//           ]
//         }
//       ]}
//     />
//   );
// };

function _onRenderGroupHeader(group: INavLinkGroup): JSX.Element {
  return <h3>{group.name}</h3>;
}