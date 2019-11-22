import React from 'react';
import { InputFormFields, InputForm } from '../Components/InputForm';

import './dashboard.css';
import { NEDStorageController } from '../Controllers/NEDStorageController';

export class DashboardScreen extends React.Component<any, any> {
    private dbController = new NEDStorageController();

    private _handleSubmitted = (inputFields: InputFormFields): void => {
        this.dbController.addRecord(inputFields);
    }

    public render(): JSX.Element {
        return (
            <>
                <div className="App-content">
                    <img src="/transparent-logo.png" className="App-logo" alt="logo" />
                    <InputForm onSubmit={this._handleSubmitted} />
                </div>
            </>
        )
    }
}