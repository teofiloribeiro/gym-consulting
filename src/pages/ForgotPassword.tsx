import  React , { useState, useEffect ,ChangeEvent} from 'react';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Card , Typography, ClickAwayListenerProps} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import SubdirectoryArrowLeftIcon from '@material-ui/icons/SubdirectoryArrowLeft';
import CancelIcon from '@material-ui/icons/Cancel';
import { Link } from 'react-router-dom';

import { firestore,auth } from "../firebase";
import { USERS } from "../data/collections";
import { User } from "../interfaces/User";

import { Snackbar } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

function ForgotPassword () {

    const [email,setEmail] = useState('');
    const [openSucess, setOpenSucess] = useState(false);
    const [openError, setOpenError] = useState(false);

    function Alert(props: AlertProps) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

      const handleClose = () => {
        setOpenSucess(false);
        setOpenError(false);
      };

    const handleGetPassword = (event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) =>{
        let field = event.target.value;
        setEmail(field);
    }

    const cleanEmail = () => { 
        setEmail('');
    }

    const findByEmail = async (email: string) => {
       
        console.log("tring to retrive data")
        let users :User [] = [];
        
        const UsersRef = firestore.collection(USERS);
        let query = await UsersRef.where('email','==',email).get()
        query.forEach(obj => {
           console.log( obj.data());
           users.push(obj.data() as User)
        })
        
        if(users[0] === undefined){
            setOpenError(true);
        } else {
            setOpenSucess(true);
            auth.sendPasswordResetEmail(email).then(function(){
            }).catch(function(erro){
                console.log("deu ruim")
            });
            cleanEmail()
        }
    }

    return (
        <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                className="cardContainer">
                <Grid item xs={12} md={6} lg={5} >
                    <Card>
                        <div style={{margin:"40px"}}>
                            <Typography variant="h4" component="h2" align="center">
                                Recuperando senha
                            </Typography>  
                        </div>
                        <div>
                            <Snackbar open={openSucess} autoHideDuration={6000} onClose={handleClose}>
                                <Alert color="success">
                                    Foi encaminhado um email para redefinir sua senha
                                </Alert>
                            </Snackbar>
                            <Snackbar open={openError} autoHideDuration={6000} onClose={handleClose}>
                                <Alert color="error">
                                    Email não encontrado
                                </Alert>
                            </Snackbar>
                        </div>
                        <form>
                        <div style={{display:"flex" , flexDirection:"column"}}>
                            <TextField id="email_field" label="Digite seu email" value={email}  variant="outlined" onChange={handleGetPassword} style={{margin:"5px 50px 5px"}}/>
                        </div>
                        <Grid style={{display:'flex' ,width:'100%' ,justifyContent:'center' ,alignItems:'center',flexDirection:'row', marginTop:'20px',marginBottom:'10px' }}>
                                <Link to='/' style={{textDecoration:'none'}}> 
                                    <Button variant="contained" endIcon={<SubdirectoryArrowLeftIcon/>}>
                                        Voltar
                                    </Button>
                                </Link>
                            <Button variant="contained" color="primary" onClick={()=>findByEmail(email)} style={{margin:"0px 10px 0px"}} endIcon={<SendIcon/>}>
                                Enviar solicitação
                            </Button>
                            <Button variant="contained" color="secondary" onClick={cleanEmail}  endIcon={<CancelIcon/>}>
                                Cancelar
                            </Button>
                        </Grid>
                        </form>
                    </Card>
                </Grid>
        </Grid>
    )
}

export default ForgotPassword;