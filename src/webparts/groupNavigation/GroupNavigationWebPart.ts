import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import * as strings from 'GroupNavigationWebPartStrings';
import GroupNavigation from './components/GroupNavigation';
import { IGroupNavigationProps } from './components/IGroupNavigationProps';

import { sp } from "@pnp/sp";

export interface IGroupNavigationWebPartProps {
  description: string;
}




export default class GroupNavigationWebPart extends BaseClientSideWebPart<IGroupNavigationWebPartProps> {

  //Add PNP JS
  public onInit(): Promise<void> {

    return super.onInit().then(_ => {
      sp.setup({
        spfxContext: this.context
      });
    });
  }


  public render(): void {
    const element: React.ReactElement<IGroupNavigationProps> = React.createElement(
      GroupNavigation,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
