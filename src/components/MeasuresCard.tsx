import React, { useCallback, useEffect, useState }  from 'react';
import { Card, CardContent, Button, Typography, Grid, 
        TextField} from '@material-ui/core';

import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import manBodyMeasuresImg from './assets/man_body_measures.png';
import weightIcon from './assets/weight_icon.png';
import heightIcon from './assets/height_icon.png';
import waistIcon from './assets/waist_icon.png';
        
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


import { auth} from "../firebase";

import "./LoginCard.scss";
import "./Measures.scss";

import Modal from '@material-ui/core/Modal';
import SplineChart from './SplineChart';

import UserMeasuresData from '../data/UserMeasuresData';
import  DataPoints  from '../util/DataPoints';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({

    paper: {
        position: 'absolute',
        width: 700,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 2, 3),
    },
    imgSize: {
        margin: theme.spacing(0),
        width: 70,
        minWidth: 50,
    },
    iconSize: {
        width: 30,
        minWidth: 10,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

const MeasuresCard = (props: any) => {

    const [dataPoints, setDataPoints] = useState<DataPoints[]>([])
       
    useEffect(() => {
        const userMeasuresData = new UserMeasuresData();
        const getUserMeasures = async () => {
            let response =  await userMeasuresData.getDataPoints(auth.currentUser?.uid);
            setDataPoints(response)
        }
        getUserMeasures();
        
    }, [])

    const classes = useStyles();

    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
        < SplineChart dataPoints={dataPoints} />
        </div>
    );

     return(
        <Card> 
            <CardContent >
                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    {body}
                </Modal>
                <form className="registerForm" onSubmit= {props.onSubmit}>
                <Grid container
                    direction="column"
                    justify="center"
                    alignItems="center">

                    <Typography variant="h4" component="h2">
                        Medidas
                    </Typography>

                    <CardMedia className={classes.imgSize}
                        component="img"
                        image={manBodyMeasuresImg}
                        title="teste" />

                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <CardActionArea  onClick={handleOpen}>
                                <CardMedia className={classes.iconSize}
                                                component="img"
                                                image={weightIcon}
                                                title="Histórico de peso" />
                            </CardActionArea>
                        </Grid>
                        <Grid item>
                            <TextField id="input-with-icon-grid" name="weight" label="Peso"  InputProps={{ disableUnderline: true}}
                               value={props.weight} onChange={props.weightHandleChange}/>
                        </Grid> 
                    </Grid>

                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                        <CardMedia className={classes.iconSize}
                                        component="img"
                                        image={heightIcon}
                                        title="Histórico de altura" />
                        </Grid>
                        <Grid item>
                            <TextField id="input-with-icon-grid" name="height" label="Altura" InputProps={{ disableUnderline: true}} 
                            value={props.height} onChange={props.heightHandleChange} />
                        </Grid>
                    </Grid>

                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                        <CardMedia className={classes.iconSize}
                                        component="img"
                                        image={waistIcon}
                                        title="teste" />
                        </Grid>
                        <Grid item>
                            <TextField id="input-with-icon-grid" label="Cintura"
                             InputProps={{ disableUnderline: true}} />
                        </Grid>
                    </Grid>
                    <Button variant="outlined" type="submit">Salvar</Button>
                </Grid>
                </form>
            </CardContent>
        </Card>
    )
}

export default MeasuresCard;

