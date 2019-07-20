import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styles from '../GroupNavigation.module.scss';
import INavItem from './INavItem';



const testData: INavItem[] = [{ title: "Google", entity: "sanitarium.com.au", navGroup: "Do", linkUrl: "https://google.com" },
{ title: "Google", entity: "sanitarium.com.au", navGroup: "Do", linkUrl: "https://google.com" }];


export default function useNavState(selectedEntity: string) {
    const [isLoading, setLoading] = React.useState(false);
    //set a default entity
    const [entity, setEntity] = React.useState(selectedEntity);
    //init state to null for nav items
    const [navItems, setNavItems] = React.useState<INavItem[] | null>(null);


    //Load the data
    const loadNavItems = () => {
        setLoading(true);
        setTimeout(() => {
            //Populate the navItems from the test data
            setNavItems(testData);
            setLoading(false);
        }, 500);
    }

    //When the entity changes, reload the nav items
    React.useEffect(() => {
        loadNavItems();
    }, [selectedEntity])

    return { navItems, isLoading };
}
