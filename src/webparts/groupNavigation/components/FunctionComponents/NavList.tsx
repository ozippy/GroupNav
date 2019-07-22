import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styles from '../GroupNavigation.module.scss';
import LinkElement from './LinkElement';
import EntitySelector from './EntitySelector';
import ISPNavItem from './INavItem';
import useNavState from './NavState';
import { Nav, INavLinkGroup } from 'office-ui-fabric-react/lib/Nav';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';
import { INavGroup, IGroupLink } from './INavItem'


const initialEntity = "companyb.com";

export default function NavList() {

  const { navItems, isLoading } = useNavState(initialEntity);

  let groupItems: INavGroup[] = [];
  let groupItem: INavGroup = null;
  let currentGroup: string = "";


  //convert the sharepoint items to the format needed by the office ui fabric Nav control
  if (navItems.length > 0) {
    for (let i = 0; i < navItems.length; i++) {
      if (navItems[i].NavigationGroup !== currentGroup) {
        if (currentGroup !== "") {
          groupItems.push(groupItem);
        }
        currentGroup = navItems[i].NavigationGroup;
        groupItem = { name: navItems[i].NavigationGroup, links: [] };
      }
      let currentLink: IGroupLink = { name: navItems[i].Title, url: navItems[i].LinkURL, key: navItems[i].Id.toString(), target: navItems[i].Target };
      groupItem.links.push(currentLink);
      if (i === navItems.length - 1) {
        groupItems.push(groupItem);
      }
    }
    console.log(JSON.stringify(groupItems));
  };



  return (
    <div className={styles.groupNavigation}>
      <p>List</p>
      <EntitySelector />
      {isLoading ? <Spinner size={SpinnerSize.medium} /> : ''}

      <div>
        <Nav
          onRenderGroupHeader={_onRenderGroupHeader}
          groups={groupItems}
        />
      </div>
    </div>




  );

}


// [
//   {
//     name: 'Pages',
//     links: [
//       // prettier-ignore
//       { name: 'Activity', url: 'http://msn.com', key: 'key1', target: '_blank' },
//       { name: 'News', url: 'http://msn.com', key: 'key2', target: '_blank' }
//     ]
//   },
//   {
//     name: 'More pages',
//     links: [
//       // prettier-ignore
//       { name: 'Settings', url: 'http://msn.com', key: 'key3', target: '_blank' },
//       { name: 'Notes', url: 'http://msn.com', key: 'key4', target: '_blank' }
//     ]
//   }
// ]

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