import React from 'react';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Card , Typography} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import SubdirectoryArrowLeftIcon from '@material-ui/icons/SubdirectoryArrowLeft';
import CancelIcon from '@material-ui/icons/Cancel';

const ForgotPassword = () => {
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
                        <div style={{display:"flex" , flexDirection:"column"}}>
                            <TextField id="user_field" label="Digite o nome do seu usuário"  variant="outlined" style={{margin:"5px 50px 5px"}} />
                            <TextField id="email_field" label="Digite seu email"  variant="outlined" style={{margin:"5px 50px 5px"}}/>
                        </div>
                        <div style={{margin:"20px 90px 20px"}}>
                            <Button variant="contained" endIcon={<SubdirectoryArrowLeftIcon/>}>
                                Voltar
                            </Button>
                            <Button variant="contained" color="primary" style={{margin:"0px 10px 0px"}} endIcon={<SendIcon/>}>
                                Enviar solicitação
                            </Button>
                            <Button variant="contained" color="secondary" endIcon={<CancelIcon/>}>
                                Cancelar
                            </Button>
                        </div>
                    </Card>
                </Grid>
        </Grid>
    )
}

export default ForgotPassword;