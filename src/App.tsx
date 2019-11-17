import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        Needle Exchange Database
      </header>
      <div className="App-content">
        <img src="/transparent-logo.png" className="App-logo" alt="logo" />
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
              />
            </Grid>

            <Grid item xs={3} className="entry-label">
              <Typography variant="h4">
                Year of Birth
              </Typography>
            </Grid>
            <Grid item xs={9} className="entry-input">
              <TextField
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={3} className="entry-label">
              <Typography variant="h4">
                Gender
              </Typography>
            </Grid>
            <Grid item xs={9} className="entry-input">
              <FormControl variant="outlined" fullWidth>
                <Select>
                  <MenuItem value="M">
                    Male
                  </MenuItem>
                  <MenuItem value={10}>
                    Female
                  </MenuItem>
                  <MenuItem value={20}>
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
                <Select>
                  <MenuItem value="M">
                    Regina
                  </MenuItem>
                  <MenuItem value={10}>
                    Saskatoon
                  </MenuItem>
                  <MenuItem value={20}>
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
                <Select>
                  <MenuItem value="M">
                    Caucasian
                  </MenuItem>
                  <MenuItem value={10}>
                    Aboriginal
                  </MenuItem>
                  <MenuItem value={20}>
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
                    onChange={() => {}}
                    value=""
                  />
                }
                label="Injection Drug User"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    onChange={() => {}}
                    value=""
                  />
                }
                label="Sex Worker"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    onChange={() => {}}
                    value="checkedG"
                  />
                }
                label="Inhalation Drug User"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    onChange={() => {}}
                    value="checkedG"
                  />
                }
                label="Naloxone Trained"
              />
            </Grid>

          </Grid>
      </div>

    </div>
  );
}

export default App;
