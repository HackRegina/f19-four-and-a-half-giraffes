import React from 'react';
import { InputFormFields, InputForm } from '../Components/InputForm';
import './dashboard.css';

export class Dashboard extends React.Component<any, any> {
    // constructor(props: any, state: any) {
    //     super(props, state);
    // }

    public render(): JSX.Element {
        return (
            <>
                <div className="App-content">
                    <img src="/transparent-logo.png" className="App-logo" alt="logo" />

                    <InputForm 
                        onSubmit={(inputFields: InputFormFields) => {
                            console.log(inputFields);
                        }}
                    />
                </div>
            </>
        )
    }
}