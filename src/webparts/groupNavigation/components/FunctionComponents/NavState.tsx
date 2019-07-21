import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styles from '../GroupNavigation.module.scss';
import ISPNavItem from './INavItem';
import { sp } from "@pnp/sp";
import { find } from '@microsoft/sp-lodash-subset';

// const testData: INavItem[] = [{ id: 1, title: "Google", entity: "sanitarium.com.au", navGroup: "Do", linkUrl: "https://google.com", target: '_blank' },
// { id: 2, title: "Microsoft", entity: "sanitarium.com.au", navGroup: "Discover", linkUrl: "https://microsoft.com", target: '_blank' }];


export default function useNavState(selectedEntity: string) {
    const [isLoading, setLoading] = React.useState(false);
    //set a default entity
    const [entity, setEntity] = React.useState(selectedEntity);
    //init state to empty array for nav items
    const [navItems, setNavItems] = React.useState<ISPNavItem[]>([]);


    //Load the data and filter out items for only the selectede entity
    const loadNavItems = () => {
        setLoading(true);
        sp.web.lists.getByTitle("NavigationList").items.select("Id", "Title", "Entity", "NavigationGroup", "LinkURL", "Target").get().then((items: ISPNavItem[]) => {

            let filteredItems = items.filter(item => {
                let includeFlag: boolean = false;
                if (find(item.Entity, { Label: selectedEntity })) includeFlag = true;
                if (includeFlag) return item;
            });

            filteredItems.forEach(element => {
                console.log(element.Id);
                console.log(element.Title);
                console.log(element.Entity);
                console.log(element.NavigationGroup[0].Label);
                console.log(element.LinkURL);
            });
            //Populate the navItems from the SharePoint list
            setNavItems(filteredItems);
            setLoading(false);
        });
    }

    //When the entity changes, reload the nav items
    React.useEffect(() => {
        loadNavItems();
    }, [selectedEntity])

    return { navItems, isLoading };
}
