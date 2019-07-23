import { find } from '@microsoft/sp-lodash-subset';
import { sp } from "@pnp/sp";
import * as React from 'react';
import ISPNavItem, { IGroupLink, INavGroup } from './INavItem';

export default function useNavState(initialEntity: string) {
    //Flag to say if the data is loading
    const [isLoading, setLoading] = React.useState(false);
    //set a default entity
    const [selectedEntity, setSelectedEntity] = React.useState(initialEntity);
    //init state to empty array for nav items
    const [navItemsGroup, setNavItemsGroup] = React.useState<INavGroup[]>([]);

    let groupItems: INavGroup[] = [];
    let groupItem: INavGroup = null;
    let currentGroup: string = "";

    //Load the data and filter out items for only the selectede entity
    const loadNavItems = () => {
        setLoading(true);
        sp.web.lists.getByTitle("NavigationList").items.select("Id", "Title", "Entity", "NavigationGroup", "LinkURL", "Target").orderBy("NavigationGroup").get().then((items: ISPNavItem[]) => {

            let filteredItems = items.filter(item => {
                let includeFlag: boolean = false;
                if (find(item.Entity, { Label: selectedEntity })) includeFlag = true;
                if (includeFlag) return item;
            });


            //convert the sharepoint items to the format needed by the office ui fabric Nav control
            if (filteredItems.length > 0) {
                for (let i = 0; i < filteredItems.length; i++) {
                    if (filteredItems[i].NavigationGroup !== currentGroup) {
                        if (currentGroup !== "") {
                            groupItems.push(groupItem);
                        }
                        currentGroup = filteredItems[i].NavigationGroup;
                        groupItem = { name: filteredItems[i].NavigationGroup, links: [] };
                    }
                    let currentLink: IGroupLink = { name: filteredItems[i].Title, url: filteredItems[i].LinkURL, key: filteredItems[i].Id.toString(), target: filteredItems[i].Target };
                    groupItem.links.push(currentLink);
                    if (i === filteredItems.length - 1) {
                        groupItems.push(groupItem);
                    }
                }
            }
            //Populate the navItems from the SharePoint list
            setNavItemsGroup(groupItems);
            setLoading(false);
        });
    };

    //When the entity changes, reload the nav items
    React.useEffect(() => {
        loadNavItems();
    }, [selectedEntity]);

    return { navItemsGroup, isLoading, selectedEntity, setSelectedEntity };
}
