import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { AppDrawer } from './Components/AppDrawer';
import { DashboardScreen } from './Screens/Dashboard';
import { RecordsScreen } from './Screens/Records';

export default class NEDRouter extends React.Component<any, any> {
    public render(): JSX.Element {
        return (
            <Router>
                <AppDrawer />
                
                <Route path="/" exact={true} component={DashboardScreen} />
                <Route path="/records" exact={true} component={RecordsScreen} />
                {/* <Route path="/reports" exact={true} component={ReportsScreen} /> */}
            </Router>
        );
    }
}