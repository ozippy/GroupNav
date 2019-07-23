import * as React from 'react';
import { ChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';

export const EntitySelector = (props) => {

    const _onChange = (ev: React.FormEvent<HTMLInputElement>, option: any): void => {
        props.updateEntity(option.key);
    };

    return (
        <div>
            <ChoiceGroup
                className="defaultChoiceGroup"
                defaultSelectedKey="companya.com"
                options={[
                    {
                        key: 'companya.com',
                        text: 'Company A',
                        'data-automation-id': 'companya'
                    } as IChoiceGroupOption,
                    {
                        key: 'companyb.com',
                        text: 'Company B'
                    },
                    {
                        key: 'companyc.com',
                        text: 'Company C'
                    },
                    {
                        key: 'companyd.com',
                        text: 'Company D'
                    }
                ]}
                onChange={_onChange}
                label="Pick a company to display the navigation for that entity"
                required={true}
            />
        </div>
    );
};