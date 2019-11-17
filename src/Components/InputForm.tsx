import React from 'react';

import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import './input-form.css';

interface IInputFormProps {
    onSubmit: (inputFields: InputFormFields) => void;
}

export enum Gender {
    Male = 'm',
    Female = 'f',
    NonBinary = 'nb',
}

export type InputFormFields = {
    initials: string;
    monthAndYearOfBirth: string;
    gender: Gender,
    location: string;
    ethnicity: string;
    otherQualities: {
        injectionDrugUser: boolean,
        sexWorker: boolean;
        inhalationDrugUser: boolean;
        naloxoneTrained: boolean;
    }
};

export const InputForm: React.FC<IInputFormProps> = (props) => {
    const [ initials, setInitials ] = React.useState('');
    const [ monthAndYearOfBirth, setMonthAndYearOfBirth] = React.useState();
    const [ gender, setGender ] = React.useState(Gender.Male);
    const [ location, setLocation ] = React.useState('Regina');
    const [ ethnicity, setEthnicity ] = React.useState('');
    const [ otherQualities, setOtherQualities ] = React.useState({
        injectionDrugUser: false,
        sexWorker: false,
        inhalationDrugUser: false,
        naloxoneTrained: false,
    });

    return (
        <div className="form-container">
            <div className="form-fields">
                <Grid container spacing={3}>
                    <Grid item xs={3} className="entry-label">
                    <Typography variant="h4">
                        Initials
                    </Typography>
                    </Grid>
                    <Grid item xs={9} className="entry-input">
                    <TextField
                        variant="outlined"
                        fullWidth
                        placeholder="abc or ab"
                        onChange={(e) => setInitials(e.target.value)}
                    />
                    </Grid>

                    <Grid item xs={3} className="entry-label">
                    <Typography variant="h4">
                        Month &amp; Year of Birth
                    </Typography>
                    </Grid>
                    <Grid item xs={9} className="entry-input">
                    <TextField
                        variant="outlined"
                        fullWidth
                        placeholder="xxyy, 2-digit month, 2-digit year"
                        onChange={(e) => setMonthAndYearOfBirth(e.target.value)}
                    />
                    </Grid>

                    <Grid item xs={3} className="entry-label">
                    <Typography variant="h4">
                        Gender
                    </Typography>
                    </Grid>
                    <Grid item xs={9} className="entry-input">
                    <FormControl variant="outlined" fullWidth>
                        <Select
                            value={gender}
                            onChange={(e) => {
                                const { value } = e.target;
                                switch (value) {
                                    case 'm':
                                        setGender(Gender.Male);
                                        break;
                                    case 'f':
                                        setGender(Gender.Female);
                                        break;
                                    case 'nb':
                                        setGender(Gender.NonBinary);
                                        break;
                                }
                            }}
                        >
                            <MenuItem value={Gender.Male}>
                                Male
                            </MenuItem>
                            <MenuItem value={Gender.Female}>
                                Female
                            </MenuItem>
                            <MenuItem value={Gender.NonBinary}>
                                Non-binary
                            </MenuItem>
                        </Select>
                    </FormControl>
                    </Grid>

                    <Grid item xs={3} className="entry-label">
                    <Typography variant="h4">
                        Location
                    </Typography>
                    </Grid>
                    <Grid item xs={9} className="entry-input">
                    <FormControl variant="outlined" fullWidth>
                        <Select
                            value={location}
                            onChange={(e) => {
                                const { value } = e.target;

                                switch(value) {
                                    case 'Regina':
                                        setLocation('Regina');
                                        break;
                                    case 'Saskatoon':
                                        setLocation('Saskatoon');
                                        break;
                                    case 'Other':
                                        setLocation('Other');
                                        break;
                                    default:
                                        setLocation('');
                                }
                            }}
                        >
                        <MenuItem value="Regina">
                            Regina
                        </MenuItem>
                        <MenuItem value="Saskatoon">
                            Saskatoon
                        </MenuItem>
                        <MenuItem value="Other">
                            Others...
                        </MenuItem>
                        </Select>
                    </FormControl>
                    </Grid>

                    <Grid item xs={3} className="entry-label">
                    <Typography variant="h4">
                        Ethnicity
                    </Typography>
                    </Grid>
                    <Grid item xs={9} className="entry-input">
                    <FormControl variant="outlined" fullWidth>
                        <Select
                            value={ethnicity}
                            onChange={(e) => {
                                const { value } = e.target;
                                if (value && typeof(value) === 'string') {
                                    setEthnicity(value)}
                                }
                            }
                        >
                        <MenuItem value="Caucasian">
                            Caucasian
                        </MenuItem>
                        <MenuItem value="Aboriginal">
                            Aboriginal
                        </MenuItem>
                        <MenuItem value="Other">
                            Others...
                        </MenuItem>
                        </Select>
                    </FormControl>
                    </Grid>

                    <Grid item xs={3} className="entry-label">
                    <Typography variant="h4">
                        Other Qualities
                    </Typography>
                    </Grid>
                    <Grid item xs={9} className="entry-input">
                    <FormControlLabel
                        control={
                        <Checkbox
                            onChange={(e) => {
                                setOtherQualities({
                                    ...otherQualities,
                                    injectionDrugUser: e.target.checked,
                                });
                            }}
                            value=""
                        />
                        }
                        label="Injection Drug User"
                    />

                    <FormControlLabel
                        control={
                        <Checkbox
                            onChange={(e) => {
                                setOtherQualities({
                                    ...otherQualities,
                                    sexWorker: e.target.checked,
                                });
                            }}
                            value=""
                        />
                        }
                        label="Sex Worker"
                    />

                    <FormControlLabel
                        control={
                        <Checkbox
                            onChange={(e) => {
                                setOtherQualities({
                                    ...otherQualities,
                                    inhalationDrugUser: e.target.checked,
                                });
                            }}
                            value=""
                        />
                        }
                        label="Inhalation Drug User"
                    />

                    <FormControlLabel
                        control={
                        <Checkbox
                            onChange={(e) => {
                                setOtherQualities({
                                    ...otherQualities,
                                    naloxoneTrained: e.target.checked,
                                });
                            }}
                            value="checkedG"
                        />
                        }
                        label="Naloxone Trained"
                    />
                    </Grid>
                </Grid>
            </div>

            <div className="form-submit">
                <Grid item xs={12}>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={() => {
                            props.onSubmit({
                                initials,
                                monthAndYearOfBirth,
                                gender,
                                location,
                                ethnicity,
                                otherQualities,
                            });
                        }}
                        disabled={
                            !(initials && monthAndYearOfBirth && gender && location && ethnicity)
                        }
                    >
                        Add to Database
                    </Button>
                </Grid>
            </div>
        </div>
    );
}