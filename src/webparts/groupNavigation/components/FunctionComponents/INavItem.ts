export default interface ISPNavItem {
    "odata.type": string;
    "odata.id": string;
    "odata.etag": string;
    "odata.editLink": string;
    Id: number;
    Title: string;
    Entity: ISPManMeta[];
    NavigationGroup: string;
    LinkURL: string;
    Target: string;
}

export interface ISPManMeta {
    Label: string;
    TermGuid: string;
    WssId: number;
}

export interface INavGroup {
    name: string;
    links: IGroupLink[];
}

export interface IGroupLink {
    name: string;
    url: string;
    key: string;
    target: string;
}
