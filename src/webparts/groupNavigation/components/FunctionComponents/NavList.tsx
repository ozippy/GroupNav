import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styles from '../GroupNavigation.module.scss';
import LinkElement from './LinkElement';
import EntitySelector from './EntitySelector';

interface NavItem {
  title: string,
  entity: string,
  navGroup: string,
  linkUrl: string
}

const testData: NavItem[] = [{ title: "Google", entity: "sanitarium.com.au", navGroup: "Do", linkUrl: "https://google.com" },
{ title: "Google", entity: "sanitarium.com.au", navGroup: "Do", linkUrl: "https://google.com" }];

const initialEntity = "sanitarium.com.au";

export default function NavList() {

  const [isLoading, setLoading] = React.useState(false);
  //set a default entity
  const [entity, setEntity] = React.useState(initialEntity);
  //init state to null for nav items
  const [navItems, setNavItems] = React.useState<NavItem[] | null>(null);


  //Load the data
  const loadNavItems = () => {
    setLoading(true);
    setTimeout(() => {
      //Populate the navItems from the test data
      setNavItems(testData);
      setLoading(false);
    }, 500);
  };

  //When the entity changes, reload the nav items
  React.useEffect(() => {
    loadNavItems();
  }, [entity]);

  return (
    <div className={styles.groupNavigation}>
      <div className={styles.container}>
        <EntitySelector />
        <div className={styles.row}>
          <div className={styles.column}>
            <span className={styles.title}>Welcome to SharePoint!</span>
            <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
            <LinkElement />
          </div>
        </div>
      </div>
    </div>
  );

}


