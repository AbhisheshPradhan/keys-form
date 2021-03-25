import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';
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
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { createMuiTheme } from '@material-ui/core/styles';

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

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
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
              <Paper style={{ padding: 16 }}>
                <Stepper activeStep={0} alternativeLabel>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
                <div align='center'>
                  <img src='./assets/about_family.png' />
                </div>
                <Grid container alignItems='flex-start' spacing={2}>
                  <Grid item xs={12} md={12}>
                    <FormControl component='fieldset'>
                      <FormGroup col>
                        <FormControlLabel
                          label='Eligibility criteria met'
                          control={
                            <Field
                              name='sauces'
                              component={Checkbox}
                              type='checkbox'
                              value='Eligibility criteria met'
                            />
                          }
                        />
                        <FormControlLabel
                          label='Family agrees to be engaged in KEYS'
                          control={
                            <Field
                              name='sauces'
                              component={Checkbox}
                              type='checkbox'
                              value='Family agrees to be engaged in KEYS'
                            />
                          }
                        />
                      </FormGroup>
                    </FormControl>
                  </Grid>

                  <Accordion
                    expanded={adultExpanded === 'panel1'}
                    onChange={handleChange('panel1')}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls='panel1d-content'
                      id='panel1d-header'
                    >
                      <Typography>Adult 1:</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container alignItems='flex-start' spacing={2}>
                        <Grid item xs={12} md={6}>
                          <FormControl component='fieldset'>
                            <FormLabel>
                              <Typography variant='h5' component='h5'>
                                Primary
                              </Typography>
                            </FormLabel>
                            <RadioGroup row>
                              <FormControlLabel
                                label='Parent'
                                control={
                                  <Field
                                    name='primary'
                                    component={Radio}
                                    type='radio'
                                    value='parent'
                                  />
                                }
                              />
                              <FormControlLabel
                                label='Carer'
                                control={
                                  <Field
                                    name='primary'
                                    component={Radio}
                                    type='radio'
                                    value='carer'
                                  />
                                }
                              />
                              <FormControlLabel
                                label='Guardian'
                                control={
                                  <Field
                                    name='primary'
                                    component={Radio}
                                    type='radio'
                                    value='guardian'
                                  />
                                }
                              />
                            </RadioGroup>
                          </FormControl>
                        </Grid>

                        <Grid item xs={12} md={6}>
                          <div align='right'>
                            <Button
                              variant='contained'
                              color='default'
                              type='button'
                              disabled={submitting}
                              // endIcon={<ChevronRight />}
                            >
                              Remove adult
                            </Button>
                          </div>
                        </Grid>

                        <Grid item xs={12} md={12}>
                          <Field
                            fullWidth
                            name='Role in the family '
                            component={TextField}
                            type='text'
                            label='Role in the family'
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

                        <Grid item xs={12} md={6}>
                          <FormControl component='fieldset'>
                            <FormLabel component='legend'>Gender</FormLabel>
                            <RadioGroup row>
                              <FormControlLabel
                                label='F'
                                control={
                                  <Field name='gender' component={Radio} type='radio' value='F' />
                                }
                              />
                              <FormControlLabel
                                label='M'
                                control={
                                  <Field name='gender' component={Radio} type='radio' value='M' />
                                }
                              />
                              <FormControlLabel
                                label='Other'
                                control={
                                  <Field
                                    name='gender'
                                    component={Radio}
                                    type='radio'
                                    value='Other'
                                  />
                                }
                              />
                            </RadioGroup>
                          </FormControl>
                        </Grid>

                        <Grid item xs={12} md={6}>
                          <MTextField
                            fullWidth
                            id='date'
                            label='Date of birth'
                            type='date'
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </Grid>

                        <Grid item xs={12} md={12}>
                          <FormControl component='fieldset'>
                            <FormGroup col>
                              <FormLabel component='legend'>
                                Do you identify as Aboriginal and/or Torres Strait Islander?
                              </FormLabel>
                              <FormControlLabel
                                label='Aboriginal'
                                control={
                                  <Field
                                    name='Aboriginal'
                                    component={Checkbox}
                                    type='checkbox'
                                    value='Aboriginal'
                                  />
                                }
                              />
                              <FormControlLabel
                                label='Torres Strait Islander'
                                control={
                                  <Field
                                    name='Aboriginal'
                                    component={Checkbox}
                                    type='checkbox'
                                    value='Torres Strait Islander'
                                  />
                                }
                              />
                            </FormGroup>
                          </FormControl>
                        </Grid>

                        <Grid item xs={12} md={12}>
                          <Field
                            fullWidth
                            name='Cultural identity'
                            component={TextField}
                            type='text'
                            label='Cultural identity'
                          />
                        </Grid>

                        <Grid item xs={12} md={8}>
                          <Field
                            fullWidth
                            name='Language spoken at home'
                            component={TextField}
                            type='text'
                            label='Language spoken at home'
                          />
                        </Grid>

                        <Grid item xs={12} md={4}>
                          <FormControlLabel
                            label='Needs interpreter'
                            control={
                              <Field
                                name='Needs interpreter'
                                component={Checkbox}
                                type='checkbox'
                              />
                            }
                          />
                        </Grid>

                        <Grid item xs={12} md={8}>
                          <Field
                            fullWidth
                            name='Medicare number'
                            component={TextField}
                            type='text'
                            label={
                              <span>
                                Medicare number <em>(if available)</em>
                              </span>
                            }
                          />
                        </Grid>

                        <Grid item xs={12} md={4}>
                          <Field
                            fullWidth
                            name='Ref'
                            component={TextField}
                            type='text'
                            label='Ref'
                          />
                        </Grid>

                        <Grid item xs={12} md={12}>
                          <Field
                            fullWidth
                            name='Centrelink'
                            component={TextField}
                            type='text'
                            label={
                              <span>
                                Centrelink number <em>(CRN, if available)</em>
                              </span>
                            }
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
                            name='home-phone'
                            component={TextField}
                            label='Home phone'
                          />
                        </Grid>

                        <Grid item xs={12} md={6}>
                          <Field
                            fullWidth
                            name='mobile-phone'
                            component={TextField}
                            label='Mobile'
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
                          />
                        </Grid>

                        <Grid item xs={12} md={12}>
                          <FormControlLabel
                            label='Wish to receive a copy of this form via email'
                            control={
                              <Field
                                name='Wish to receive a copy of this form via email'
                                component={Checkbox}
                                type='checkbox'
                              />
                            }
                          />
                        </Grid>

                        <Grid item xs={12} md={12}>
                          <Field
                            fullWidth
                            name='address'
                            component={TextField}
                            label='Mailing address'
                          />
                        </Grid>

                        <Grid item xs={12} md={6}>
                          <Field fullWidth name='Suburb' component={TextField} label='Suburb' />
                        </Grid>

                        <Grid item xs={12} md={3}>
                          <Field
                            fullWidth
                            name='State'
                            component={Select}
                            label='Select a State'
                            formControlProps={{ fullWidth: true }}
                          >
                            <MenuItem value='NSW'>NSW</MenuItem>
                            <MenuItem value='VIC'>VIC</MenuItem>
                            <MenuItem value='SA'>SA</MenuItem>
                            <MenuItem value='WA'>WA</MenuItem>
                            <MenuItem value='TAS'>TAS</MenuItem>
                            <MenuItem value='QLD'>QLD</MenuItem>
                          </Field>
                        </Grid>

                        <Grid item xs={12} md={3}>
                          <Field fullWidth name='Postcode' component={TextField} label='Postcode' />
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>

                  <Grid item xs={12} md={12} style={{ marginTop: 10, marginBottom: 20 }}>
                    <div align='right'>
                      <Button
                        variant='contained'
                        color='primary'
                        type='button'
                        disabled={submitting}
                        // endIcon={<ChevronRight />}
                      >
                        Add adult
                      </Button>
                    </div>
                  </Grid>

                  <Accordion
                    expanded={adultExpanded === 'panel2'}
                    onChange={handleChange('panel2')}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls='panel2d-content'
                      id='panel2d-header'
                    >
                      <Typography>Child 1:</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Grid container alignItems='flex-start' spacing={2}>
                        <Grid item xs={12} md={12}>
                          <div align='right'>
                            <Button
                              variant='contained'
                              color='default'
                              type='button'
                              disabled={submitting}
                              // endIcon={<ChevronRight />}
                            >
                              Remove child
                            </Button>
                          </div>
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

                        <Grid item xs={12} md={6}>
                          <FormControl component='fieldset'>
                            <FormLabel component='legend'>Gender</FormLabel>
                            <RadioGroup row>
                              <FormControlLabel
                                label='F'
                                control={
                                  <Field name='gender' component={Radio} type='radio' value='F' />
                                }
                              />
                              <FormControlLabel
                                label='M'
                                control={
                                  <Field name='gender' component={Radio} type='radio' value='M' />
                                }
                              />
                              <FormControlLabel
                                label='Other'
                                control={
                                  <Field
                                    name='gender'
                                    component={Radio}
                                    type='radio'
                                    value='Other'
                                  />
                                }
                              />
                            </RadioGroup>
                          </FormControl>
                        </Grid>

                        <Grid item xs={12} md={6}>
                          <MTextField
                            fullWidth
                            id='date'
                            label='Date of birth'
                            type='date'
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </Grid>

                        <Grid item xs={12} md={12}>
                          <FormControl component='fieldset'>
                            <FormGroup col>
                              <FormLabel component='legend'>
                                Do they identify as Aboriginal and/or Torres Strait Islander?
                              </FormLabel>
                              <FormControlLabel
                                label='Aboriginal'
                                control={
                                  <Field
                                    name='Aboriginal'
                                    component={Checkbox}
                                    type='checkbox'
                                    value='Aboriginal'
                                  />
                                }
                              />
                              <FormControlLabel
                                label='Torres Strait Islander'
                                control={
                                  <Field
                                    name='Aboriginal'
                                    component={Checkbox}
                                    type='checkbox'
                                    value='Torres Strait Islander'
                                  />
                                }
                              />
                            </FormGroup>
                          </FormControl>
                        </Grid>

                        <Grid item xs={12} md={12}>
                          <Field
                            fullWidth
                            name='Cultural identity'
                            component={TextField}
                            type='text'
                            label='Cultural identity'
                          />
                        </Grid>

                        <Grid item xs={12} md={8}>
                          <Field
                            fullWidth
                            name='Medicare number'
                            component={TextField}
                            type='text'
                            label={
                              <span>
                                Medicare number <em>(if available)</em>
                              </span>
                            }
                          />
                        </Grid>

                        <Grid item xs={12} md={4}>
                          <Field
                            fullWidth
                            name='Ref'
                            component={TextField}
                            type='text'
                            label='Ref'
                          />
                        </Grid>

                        <Grid item xs={12} md={12}>
                          <Field
                            fullWidth
                            name='Centrelink'
                            component={TextField}
                            type='text'
                            label={
                              <span>
                                Centrelink number <em>(CRN, if available)</em>
                              </span>
                            }
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
                            name='home-phone'
                            component={TextField}
                            label='Home phone'
                          />
                        </Grid>

                        <Grid item xs={12} md={6}>
                          <Field
                            fullWidth
                            name='mobile-phone'
                            component={TextField}
                            label='Mobile'
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
                          />
                        </Grid>

                        <Grid item xs={12} md={12}>
                          <FormControlLabel
                            label='Wish to receive a copy of this form via email'
                            control={
                              <Field
                                name='Wish to receive a copy of this form via email'
                                component={Checkbox}
                                type='checkbox'
                              />
                            }
                          />
                        </Grid>

                        <Grid item xs={12} md={12}>
                          <Field
                            fullWidth
                            name='address'
                            component={TextField}
                            label='Mailing address'
                          />
                        </Grid>

                        <Grid item xs={12} md={6}>
                          <Field fullWidth name='Suburb' component={TextField} label='Suburb' />
                        </Grid>

                        <Grid item xs={12} md={3}>
                          <Field
                            fullWidth
                            name='State'
                            component={Select}
                            label='Select a State'
                            formControlProps={{ fullWidth: true }}
                          >
                            <MenuItem value='NSW'>NSW</MenuItem>
                            <MenuItem value='VIC'>VIC</MenuItem>
                            <MenuItem value='SA'>SA</MenuItem>
                            <MenuItem value='WA'>WA</MenuItem>
                            <MenuItem value='TAS'>TAS</MenuItem>
                            <MenuItem value='QLD'>QLD</MenuItem>
                          </Field>
                        </Grid>

                        <Grid item xs={12} md={3}>
                          <Field fullWidth name='Postcode' component={TextField} label='Postcode' />
                        </Grid>
                      </Grid>
                    </AccordionDetails>
                  </Accordion>

                  <Grid item xs={12} md={12} style={{ marginTop: 10, marginBottom: 20 }}>
                    <div align='right'>
                      <Button
                        variant='contained'
                        color='primary'
                        type='button'
                        disabled={submitting}
                        // endIcon={<ChevronRight />}
                      >
                        Add child
                      </Button>
                    </div>
                  </Grid>

                  <Grid item xs={12} md={12} style={{ marginTop: 20 }}>
                    <div align='right'>
                      <Button
                        variant='contained'
                        color='primary'
                        type='button'
                        disabled={submitting}
                        // endIcon={<ChevronRight />}
                      >
                        Next step
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
