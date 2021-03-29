import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {
  Typography,
  Paper,
  Link,
  Grid,
  Button,
  CssBaseline,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel,
  TextField as MTextField,
  ThemeProvider,
  Card,
  CardContent,
  Stepper,
  Step,
  StepLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextareaAutosize,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRight from '@material-ui/icons/ChevronRight';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import Check from '@material-ui/icons/Check';
import Add from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import StepConnector from '@material-ui/core/StepConnector';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

import { createMuiTheme } from '@material-ui/core/styles';

import './index.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#EB5846',
      main: '#DE633A',
      dark: '#9F3B2F',
      contrastText: '#fff',
    },
    secondary: {
      light: '#EB5846',
      main: '#DE633A',
      dark: '#9F3B2F',
      contrastText: '#F9B220',
    },
  },
});

const onSubmit = async (values) => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  console.log('form submitted');
};

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  }
  return errors;
};

function getSteps() {
  return ['ABOUT FAMILY', 'STRENGTHS AND NEEDS', 'SUPPORT AND SERVICES', 'ADVOCATE PROFILE'];
}

function App() {
  const steps = getSteps();

  const [adultExpanded, setExpanded] = React.useState('panel1');

  const [showForm, setForm] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: 700 }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Form
          onSubmit={onSubmit}
          initialValues={{ employed: true, stooge: 'larry' }}
          validate={validate}
          render={({ handleSubmit, reset, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit} noValidate>
              <Paper style={{ padding: 16, boxShadow: 'none' }}>
                <Stepper activeStep={3} alternativeLabel>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
                <Typography variant='h5' component='h4'>
                  ADVOCATE PROFILE
                </Typography>

                <Grid container alignItems='flex-start' spacing={2}>
                  <Grid item xs={12} md={12}>
                    <Field
                      fullWidth
                      name='Organisation'
                      component={TextField}
                      type='text'
                      label='Organisation'
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Field
                      fullWidth
                      name='Role'
                      component={TextField}
                      type='text'
                      label='Role'
                      required
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Field
                      fullWidth
                      required
                      name='firstName'
                      component={TextField}
                      type='text'
                      label='First Name'
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Field
                      fullWidth
                      required
                      name='lastName'
                      component={TextField}
                      type='text'
                      label='Last Name'
                    />
                  </Grid>

                  <Grid item xs={12} md={12} style={{ marginTop: 20 }}>
                    <Typography variant='h5' component='h5'>
                      Contact details
                    </Typography>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Field
                      fullWidth
                      name='office-phone'
                      component={TextField}
                      label='Office phone'
                      required
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Field
                      fullWidth
                      name='mobile-phone'
                      component={TextField}
                      label='Mobile'
                      required
                    />
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <Field
                      name='email'
                      fullWidth
                      required
                      component={TextField}
                      type='email'
                      label='Email'
                      required
                    />
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <Field
                      name='Best time and day(s) to contact you '
                      fullWidth
                      required
                      component={TextField}
                      label='Best time and day(s) to contact you '
                      required
                    />
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <FormControl component='fieldset'>
                      <FormGroup row>
                        <FormLabel component='legend' style={{ width: '100%' }}>
                          Do you have capacity to be a Lead Service Provider (LSP)? *
                        </FormLabel>
                        <FormControlLabel
                          label='Yes'
                          control={
                            <Field
                              name='Aboriginal-2'
                              component={Checkbox}
                              type='checkbox'
                              value='AborYesiginal'
                              required
                            />
                          }
                        />
                        <FormControlLabel
                          label='No'
                          control={
                            <Field
                              name='Aboriginal-2'
                              component={Checkbox}
                              type='checkbox'
                              value='No'
                              required
                            />
                          }
                        />
                        <FormControlLabel
                          label='I want to know more'
                          control={
                            <Field
                              name='Aboriginal-2'
                              component={Checkbox}
                              type='checkbox'
                              value='I want to know more'
                              required
                            />
                          }
                        />
                      </FormGroup>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <FormControl component='fieldset'>
                      <FormGroup col>
                        <FormLabel component='legend' style={{ width: '100%' }}>
                          One or more children in this family aged 0-5 years has/have experienced
                          one or more of the following ACEs
                        </FormLabel>
                        <FormControlLabel
                          label='Physical abuse'
                          control={
                            <Field name='ace' component={Checkbox} type='checkbox' value='' />
                          }
                        />
                        <FormControlLabel
                          label='Sexual abuse'
                          control={
                            <Field name='ace' component={Checkbox} type='checkbox' value='' />
                          }
                        />
                        <FormControlLabel
                          label='Emotional abuse'
                          control={
                            <Field name='ace' component={Checkbox} type='checkbox' value='' />
                          }
                        />
                        <FormControlLabel
                          label='Parent in custody'
                          control={
                            <Field name='ace' component={Checkbox} type='checkbox' value='' />
                          }
                        />
                        <FormControlLabel
                          label='Parental separation'
                          control={
                            <Field name='ace' component={Checkbox} type='checkbox' value='' />
                          }
                        />
                        <FormControlLabel
                          label='Parental mental health'
                          control={
                            <Field name='ace' component={Checkbox} type='checkbox' value='' />
                          }
                        />
                        <FormControlLabel
                          label='Householder substance use'
                          control={
                            <Field name='ace' component={Checkbox} type='checkbox' value='' />
                          }
                        />
                        <FormControlLabel
                          label='Exposure to domestic violence
                          '
                          control={
                            <Field name='ace' component={Checkbox} type='checkbox' value='' />
                          }
                        />
                        <FormControlLabel
                          label='Physical, emotional and/or medical neglect'
                          control={
                            <Field name='ace' component={Checkbox} type='checkbox' value='' />
                          }
                        />
                      </FormGroup>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <Field
                      fullWidth
                      name='comments-2'
                      component={TextField}
                      multiline={true}
                      type='text'
                      label='Advocate’s additional comments'
                      rows={6}
                    />
                  </Grid>

                  <Grid item xs={12} md={12} style={{ marginTop: 20 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Button
                        variant='contained'
                        color='primary'
                        type='button'
                        disabled={submitting}
                        startIcon={<ChevronLeft />}
                        size='large'
                      >
                        Previous step
                      </Button>
                      <Button
                        variant='contained'
                        color='primary'
                        type='button'
                        disabled={submitting}
                        startIcon={<Check />}
                        size='large'
                      >
                        SUBMIT
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </Paper>
            </form>
          )}
        />
      </ThemeProvider>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
