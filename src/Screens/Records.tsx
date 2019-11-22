import React from 'react';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { NEDStorageController } from '../Controllers/NEDStorageController';
import { InputFormFields } from '../Components/InputForm';

interface IRecordsState {
    records: InputFormFields[];
}

class RecordsComponent extends React.Component<any, IRecordsState> {
    private dbController = new NEDStorageController();
    
    constructor(p: any, s: IRecordsState) {
        super(p, s);

        this.state = {
            records: [],
        };
    }

    public componentWillMount() {
        this.setState({
            records: this.dbController.loadAllRecords(),
        });
    }
    
    private _fullYearForLastDigits = (digits: string): number | undefined => {
        const match = digits.match(/(?<=\d\d)\d\d$/);
        if (!match) {
            return undefined;
        }
        const lastTwo = parseInt(match[0]);

        // const lastTwo = typeof digits === 'string' ? parseInt(digits) : digits;
        const fullYear = lastTwo > 19 ? `19${match[0]}` : `20${match[0]}`;
        
        return parseInt(fullYear);
    }

    private _renderTableData = (records: InputFormFields[]) => {
        if (!records || !records.length) {
            return <div>No records</div>;
        }

        return (
            <Paper>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Birth Year</TableCell>
                            <TableCell>Gender</TableCell>
                            <TableCell>Ethnicity</TableCell>
                            <TableCell>Other Qualities</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                    records.map((record: InputFormFields, idx) => (
                        <TableRow key={`${record.initials}_${idx}`}>
                            <TableCell component="th" scope="row">
                                {record.initials}{record.monthAndYearOfBirth}
                            </TableCell>
                            <TableCell>
                                { record.monthAndYearOfBirth && this._fullYearForLastDigits(record.monthAndYearOfBirth) }
                            </TableCell>
                            <TableCell>{record.gender}</TableCell>
                            <TableCell>{record.ethnicity}</TableCell>
                            <TableCell>
                                { record.otherQualities.inhalationDrugUser && <><span>Inhalation Drug User</span><br/></> }
                                { record.otherQualities.injectionDrugUser  && <><span>Injection Drug User</span><br/></> }
                                { record.otherQualities.sexWorker  && <><span>Sex Worker</span><br/></> }
                                { record.otherQualities.naloxoneTrained && <><span>Naloxone Trained</span><br/></> }
                            </TableCell>
                        </TableRow>
                    ))
                    }
              </TableBody>
            </Table>
          </Paper>
        )
    }

    public render(): JSX.Element {
        const { records } = this.state;

        return (
            <>
                <div className="App-content">
                    <img src="/transparent-logo.png" className="App-logo" alt="logo" />
                    <p>{ records.length } records loaded.</p>
                    { this._renderTableData(records) }
                </div>
            </>
        );
    }
}

export const RecordsScreen = RecordsComponent;