import * as React from 'react';
import { Link } from 'react-router-dom';

import Drawer from '@material-ui/core/Drawer';
import MenuOpen from '@material-ui/icons/MenuOpen';
import Typography from '@material-ui/core/Typography';

import './app-drawer.css';

interface IDrawerState {
    drawerOpen: boolean;
}

export class AppDrawer extends React.Component<any, IDrawerState> {
    constructor(p: any, s: IDrawerState) {
        super(p,s);

        this.state = {
            drawerOpen: false,
        };
    }

    private _toggleDrawer = (): void => {
        this.setState({
            drawerOpen: !this.state.drawerOpen,
        });
    }

    public render(): JSX.Element {
        return (
            <>
                <MenuOpen
                    fontSize="large"
                    className="drawer-icon"
                    onClick={this._toggleDrawer}
                />
                <Drawer open={this.state.drawerOpen} onClose={this._toggleDrawer}>
                    <div className="drawer">
                        <Typography
                            variant="h3"
                        >
                            <Link onClick={this._toggleDrawer} to="/">Dashboard</Link>
                        </Typography>

                        <Typography
                            variant="h3"
                        >
                            <Link onClick={this._toggleDrawer} to="/records">Records</Link>
                        </Typography>

                        <Typography
                            variant="h3"
                        >
                            <Link onClick={this._toggleDrawer} to="/reports">Reports</Link>
                        </Typography>
                    </div>
                </Drawer>
            </>
        );
    }
}