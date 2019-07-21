// export default interface INavItem {
//     id: number;
//     title: string;
//     entity: string;
//     navGroup: string;
//     linkUrl: string;
//     target: string;
// }

// export interface INavGroup {
//     name: string;
//     links: INavLink[];
// }

export interface INavLink {
    name: string;
    url: string;
    key: string;
    target: string;
}

export default interface ISPNavItem {
    "odata.type": string;
    "odata.id": string;
    "odata.etag": string;
    "odata.editLink": string;
    Id: number;
    Title: string;
    Entity: ISPManMeta[];
    NavigationGroup: ISPManMeta[];
    LinkURL: string;
    Target: string;
}

export interface ISPManMeta {
    Label: string;
    TermGuid: string;
    WssId: number;
}
