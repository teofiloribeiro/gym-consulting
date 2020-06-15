import React, { useCallback, useEffect, useState }  from 'react';
import { Card, CardContent, Button, Typography, Grid, 
        TextField} from '@material-ui/core';

import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import manBodyMeasuresImg from './assets/man_body_measures.png';
import weightIcon from './assets/weight_icon.png';
import heightIcon from './assets/height_icon.png';
import waistIcon from './assets/waist_icon.png';
import armIcon from './assets/arm_icon.png';
import chestIcon from './assets/chest_icon.png';
import thighIcon from './assets/thigh_icon.png';
import calfIcon from './assets/calf_icon.png';


import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


import { auth} from "../firebase";

import "./LoginCard.scss";
import "./Measures.scss";

import Modal from '@material-ui/core/Modal';
import SplineChart from './SplineChart';

import UserMeasuresData from '../data/UserMeasuresData';
import  DataPoints  from '../util/DataPoints';
import {MeasuresType} from '../interfaces/UserMeasures'

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
        width: 100,
        minWidth: 20,
    },
    iconSize: {
        width: 38,
        minWidth: 10,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

const MeasuresCard = (props: any) => {

    const [weightDataPoints, setWeightDataPoints] = useState<DataPoints[]>([])
    const [heightDataPoints, setHeightDataPoints] = useState<DataPoints[]>([])
    const [waistDataPoints, setWaistDataPoints] = useState<DataPoints[]>([])
    const [armtDataPoints, setArmDataPoints] = useState<DataPoints[]>([])
    const [chestDataPoints, setChestDataPoints] = useState<DataPoints[]>([])
    const [thighDataPoints, setThighDataPoints] = useState<DataPoints[]>([])
    const [calfDataPoints, setCalfDataPoints] = useState<DataPoints[]>([])

    useEffect(() => {
        const userMeasuresData = new UserMeasuresData();
        const getUserMeasures = async () => {
            setWeightDataPoints( await userMeasuresData.getDataPoints(auth.currentUser?.uid, MeasuresType.WEIGHT));
            setHeightDataPoints( await userMeasuresData.getDataPoints(auth.currentUser?.uid,  MeasuresType.HEIGHT));
            setWaistDataPoints( await userMeasuresData.getDataPoints(auth.currentUser?.uid,  MeasuresType.WAIST));
            setArmDataPoints( await userMeasuresData.getDataPoints(auth.currentUser?.uid,  MeasuresType.ARM));
            setChestDataPoints( await userMeasuresData.getDataPoints(auth.currentUser?.uid,  MeasuresType.CHEST));
            setThighDataPoints( await userMeasuresData.getDataPoints(auth.currentUser?.uid,  MeasuresType.THIGH));
            setCalfDataPoints( await userMeasuresData.getDataPoints(auth.currentUser?.uid,  MeasuresType.CALF));

        }
        getUserMeasures();
    }, [])

    const classes = useStyles();

    const [modalStyle] = React.useState(getModalStyle);
    const [openWeightModal, setOpenWeightModal] = React.useState(false);
    const [openHeightModal, setOpenHeightModal] = React.useState(false);
    const [openWaistModal, setOpenWaistModal] = React.useState(false);
    const [openArmModal, setOpenArmModal] = React.useState(false);
    const [openChestModal, setOpenChestModal] = React.useState(false);
    const [openThighModal, setOpenThighModal] = React.useState(false);
    const [openCalfModal, setOpenCalfModal] = React.useState(false);

    const [measuresType, setMeasuresType] = useState<string>()

    const handleOpenWeightModal = () => {
        setOpenWeightModal(true);
    };

    const handleCloseWeightModal = () => {
        setOpenWeightModal(false);
    };

    const handleOpenHeightModal = () => {
        setOpenHeightModal(true);
    };

    const handleCloseHeightModal = () => {
        setOpenHeightModal(false);
    };

    const handleOpenWaistModal = () => {
        setOpenWaistModal(true);
    };

    const handleCloseWaistModal = () => {
        setOpenWaistModal(false);
    };

    const handleOpenArmModal = () => {
        setOpenArmModal(true);
    };

    const handleCloseArmModal = () => {
        setOpenArmModal(false);
    };

    const handleOpenChestModal = () => {
        setOpenChestModal(true);
    };

    const handleCloseChestModal = () => {
        setOpenChestModal(false);
    };
    
    const handleOpenThighModal = () => {
        setOpenThighModal(true);
    };

    const handleCloseThighModal = () => {
        setOpenThighModal(false);
    };

    const handleOpenCalfModal = () => {
        setOpenCalfModal(true);
    };

    const handleCloseCalfModal = () => {
        setOpenCalfModal(false);
    };

    const bodyWeightModal = (
        <div style={modalStyle} className={classes.paper}>
        < SplineChart titleText={'Histórico do peso'} axisYsuffix={'Kg'} 
            yValueFormatString={'#,###Kg'} dataPoints={weightDataPoints} />
        </div>
    );

    const bodyHeightModal = (
        <div style={modalStyle} className={classes.paper}>
        < SplineChart titleText={'Histórico da altura'}  axisYsuffix={'cm'}
            yValueFormatString={'#,###cm'} dataPoints={heightDataPoints} />
        </div>
    );

    const bodyWaistModal = (
        <div style={modalStyle} className={classes.paper}>
        < SplineChart titleText={'Histórico da cintura'}  axisYsuffix={'cm'}
            yValueFormatString={'#,###cm'} dataPoints={waistDataPoints} />
        </div>
    );

    const bodyArmModal = (
        <div style={modalStyle} className={classes.paper}>
        < SplineChart titleText={'Histórico do braço'}  axisYsuffix={'cm'}
            yValueFormatString={'#,###cm'} dataPoints={armtDataPoints} />
        </div>
    );

    const bodyChestModal = (
        <div style={modalStyle} className={classes.paper}>
        < SplineChart titleText={'Histórico do peito'}  axisYsuffix={'cm'}
            yValueFormatString={'#,###cm'} dataPoints={chestDataPoints} />
        </div>
    );

    const bodyThighModal = (
        <div style={modalStyle} className={classes.paper}>
        < SplineChart titleText={'Histórico da coxa'}  axisYsuffix={'cm'}
            yValueFormatString={'#,###cm'} dataPoints={thighDataPoints} />
        </div>
    );

    const bodyCalfModal = (
        <div style={modalStyle} className={classes.paper}>
        < SplineChart titleText={'Histórico da panturrilha'}  axisYsuffix={'cm'}
            yValueFormatString={'#,###cm'} dataPoints={calfDataPoints} />
        </div>
    );

     return(
        <Card> 
            <CardContent >
                <Modal open={openWeightModal} onClose={handleCloseWeightModal}>
                    {bodyWeightModal}
                </Modal>

                <Modal open={openHeightModal} onClose={handleCloseHeightModal}>
                    {bodyHeightModal}
                </Modal>

                <Modal open={openWaistModal} onClose={handleCloseWaistModal}>
                    {bodyWaistModal}
                </Modal>

                <Modal open={openArmModal} onClose={handleCloseArmModal}>
                    {bodyArmModal}
                </Modal>

                <Modal open={openChestModal} onClose={handleCloseChestModal}>
                    {bodyChestModal}
                </Modal>

                <Modal open={openThighModal} onClose={handleCloseThighModal}>
                    {bodyThighModal}
                </Modal>

                <Modal open={openCalfModal} onClose={handleCloseCalfModal}>
                    {bodyCalfModal}
                </Modal>

                <form className="registerForm" onSubmit= {props.onSubmit}>
                <Grid container
                    direction="column"
                    justify="center"
                    alignItems="center">

                    <Typography variant="h4" component="h2">
                        Medidas
                    </Typography>

                    
               
                    <Grid container
                    direction="column"
                    justify="center"
                    alignItems="center">

                   
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <CardActionArea  onClick={handleOpenWeightModal}>
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
                        <CardActionArea  onClick={handleOpenHeightModal}>
                            <CardMedia className={classes.iconSize}
                                        component="img"
                                        image={heightIcon}
                                        title="Histórico de altura" />
                            </CardActionArea>
                        </Grid>
                        <Grid item>
                            <TextField id="input-with-icon-grid" name="height" label="Altura" InputProps={{ disableUnderline: true}} 
                            value={props.height} onChange={props.heightHandleChange} />
                        </Grid>
                    </Grid>

                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <CardActionArea  onClick={handleOpenWaistModal}>
                                <CardMedia className={classes.iconSize}
                                                component="img"
                                                image={waistIcon}
                                                title="Histórico de cintura" />
                            </CardActionArea>
                        </Grid>          
                        <Grid item>
                            <TextField id="input-with-icon-grid" name="waist" label="Cintura" InputProps={{ disableUnderline: true}}
                            value={props.waist} onChange={props.waistHandleChange} />
                        </Grid>
                    </Grid>

                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <CardActionArea  onClick={handleOpenArmModal}>
                                <CardMedia className={classes.iconSize}
                                                component="img"
                                                image={armIcon}
                                                title="Histórico de braço" />
                            </CardActionArea>
                        </Grid>          
                        <Grid item>
                            <TextField id="input-with-icon-grid" name="arm" label="Braço" InputProps={{ disableUnderline: true}} 
                             value={props.arm} onChange={props.armHandleChange} />
                        </Grid>
                    </Grid>

                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <CardActionArea  onClick={handleOpenChestModal}>
                                <CardMedia className={classes.iconSize}
                                                component="img"
                                                image={chestIcon}
                                                title="Histórico do peito" />
                            </CardActionArea>
                        </Grid>          
                        <Grid item>
                            <TextField id="input-with-icon-grid" name="chest" label="Peito" InputProps={{ disableUnderline: true}}
                             value={props.chest} onChange={props.chestHandleChange} />
                        </Grid>
                    </Grid>

                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <CardActionArea  onClick={handleOpenThighModal}>
                                <CardMedia className={classes.iconSize}
                                                component="img"
                                                image={thighIcon}
                                                title="Histórico da coxa" />
                            </CardActionArea>
                        </Grid>          
                        <Grid item>
                            <TextField id="input-with-icon-grid" name="thigh" label="Coxa" InputProps={{ disableUnderline: true}}
                            value={props.thigh} onChange={props.thighHandleChange} />
                        </Grid>
                    </Grid>

                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <CardActionArea  onClick={handleOpenCalfModal}>
                                <CardMedia className={classes.iconSize}
                                                component="img"
                                                image={calfIcon}
                                                title="Histórico da panturrilha" />
                            </CardActionArea>
                        </Grid>          
                        <Grid item>
                            <TextField id="input-with-icon-grid" name="calf" label="Panturrilha" InputProps={{ disableUnderline: true}} 
                             value={props.calf} onChange={props.calfHandleChange} />
                        </Grid>
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

