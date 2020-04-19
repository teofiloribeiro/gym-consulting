import React from 'react';
import { Card, CardContent, Typography, Grid, 
        TextField,  Button, FormControl,  InputLabel, 
        MenuItem, Select } from '@material-ui/core';
        
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import { ptBR } from "date-fns/locale";
import DateFnsUtils from '@date-io/date-fns';

import "./LoginCard.scss";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(0),
      minWidth: 250,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

const RegisterCard = (props: any) => {

    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date('1995-08-18T21:11:54'),
    );

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    const classes = useStyles();
    const [profile, setProfile] = React.useState('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setProfile(event.target.value as string);
    };

    return(
        <Card>
            <CardContent >
                <Grid container
                    direction="column"
                    justify="center"
                    alignItems="center">
                    <Typography variant="h4" component="h2">
                        Cadastre-se
                    </Typography>

                    <form className="registerForm" onSubmit= {props.onSubmit}>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center">
  
                            <TextField id="standard-basic" label="Nome" className="input" value={props.name} onChange={props.onNameHandleChange}/>
                            
                            <MuiPickersUtilsProvider locale={ptBR} utils={DateFnsUtils}>
                                <Grid container justify="space-around">
                                    <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="dd/MM/yyyy"
                                    invalidDateMessage="Formato inválido."
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Data de nascimento"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',    
                                    }}
                                    />
                                </Grid>
                                </MuiPickersUtilsProvider>

                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-label">Perfil</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={profile}
                                    onChange={handleChange}
                                    >
                                    <MenuItem value={10}>Aluno</MenuItem>
                                    <MenuItem value={20}>Instrutor</MenuItem>
                                    <MenuItem value={30}>Nutricionista</MenuItem>
                                    <MenuItem value={30}>Fisioterapeuta</MenuItem>
                                    </Select>
                                </FormControl>
                            
                            <TextField id="standard-basic" label="E-mail" className="input" value={props.email} onChange={props.onEmailHandleChange}/>
                            <TextField id="standard-basic" label="Usuário" className="input" value={props.user} onChange={props.onUserHandleChange}/>
                            <TextField id="standard-basic" label="Senha" className="input" type="password" value={props.password} onChange={props.onPasswordHandleChange} />                           
                            <Button variant="outlined" onClick = {props.onSubmit}>Cadastrar</Button>
                        </Grid>
                    </form>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default RegisterCard;
