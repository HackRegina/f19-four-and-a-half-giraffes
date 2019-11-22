import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Drawer from '@material-ui/core/Drawer';
import MenuOpen from '@material-ui/icons/MenuOpen';
import Typography from '@material-ui/core/Typography';

import './app-drawer.css';

interface IDrawerState {
    drawerOpen: boolean;
}

class AppDrawerComponent extends React.Component<any, IDrawerState> {

    constructor(p: any, s: IDrawerState) {
        super(p,s);

        this.state = {
            drawerOpen: false,
        };

        window.onkeypress = (e: KeyboardEvent) => {
            if (e.ctrlKey) {
                const { history } = this.props;

                switch (e.key) {
                    case 'd':
                        history.push('/');
                        break;
                    case 'r':
                        history.push('/records');
                        break;
                    case 'p':
                        history.push('/reports');
                        break;
                    default:
                        return false;
                }
            }
        }
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
                            <Link onClick={this._toggleDrawer} to="/">Dashboard</Link><br/>
                            <span className="shortcut-key">CTRL</span><span className="shortcut-plus">+</span><span className="shortcut-key">D</span>
                        </Typography>

                        <Typography
                            variant="h3"
                        >
                            <Link onClick={this._toggleDrawer} to="/records">Records</Link><br/>
                            <span className="shortcut-key">CTRL</span><span className="shortcut-plus">+</span><span className="shortcut-key">R</span>
                        </Typography>

                        <Typography
                            variant="h3"
                        >
                            <Link onClick={this._toggleDrawer} to="/reports">Reports</Link><br/>
                            <span className="shortcut-key">CTRL</span><span className="shortcut-plus">+</span><span className="shortcut-key">P</span>
                        </Typography>
                    </div>
                </Drawer>
            </>
        );
    }
}

export const AppDrawer = withRouter(AppDrawerComponent);
