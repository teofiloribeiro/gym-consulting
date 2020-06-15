import React, { useCallback, useState } from 'react'
import "./Login.scss"

import { Grid, Snackbar } from '@material-ui/core';
import RegisterCard from '../components/RegisterCard';
import { withRouter } from 'react-router-dom';
import { register, logout } from '../auth/AuthService';
import { User, UserRole } from '../interfaces/User';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

export const Register = withRouter (({ history })=>{
    const [openError, setOpenError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const onSubmit = useCallback(
        async (event:any) => {
            event.preventDefault();
            const { name, email, role, birth, password } = event.target.elements;
            
            const user: User = {
                name: name.value,
                email: email.value,
                birth: parseDate(birth.value),
                role: role.value as UserRole       
            }
            try{
                await register(user, password.value);
                logout();
                history.push('/');
            }catch(error){
                if(error.code === "auth/email-already-in-use"){
                    setErrorMessage("Email já em uso!");
                }else if(error.code === "auth/weak-password"){
                    setErrorMessage("Senha muito fraca!");
                }
                setOpenError(true);
            }
        },[history]
    )

    function Alert(props: AlertProps) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const handleClose = () => {
        setOpenError(false);
    };

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className="cardContainer">
            <Grid item xs={12} md={6} lg={4} >
                <div>
                    <Snackbar open={openError} autoHideDuration={6000} onClose={handleClose}>
                        <Alert color="error">
                            {errorMessage}
                        </Alert>
                    </Snackbar>
                </div>
                <RegisterCard onSubmit={(event: Event) => onSubmit(event)} />
            </Grid>
        </Grid>
    );
   
})

const parseDate = (date:string) => {
    const dateVet = date.split("/").map((date)=>  parseInt(date))
    return new Date (dateVet[2], dateVet[1]-1, dateVet[0] );
}
export default Register;