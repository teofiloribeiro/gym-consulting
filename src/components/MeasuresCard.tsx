import React from 'react';
import { Card, CardContent, Typography, Grid, 
        TextField} from '@material-ui/core';

import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import manBodyMeasuresImg from './assets/man_body_measures.png';
import weightIcon from './assets/weight_icon.png';
import heightIcon from './assets/height_icon.png';
import waistIcon from './assets/waist_icon.png';
        
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import "./LoginCard.scss";
import "./Measures.scss";

import Modal from '@material-ui/core/Modal';
import SplineChart from './Spline Chart';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

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
        < SplineChart/>
        </div>
    );

     return(
        <Card> 
            <CardContent >
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    {body}
                </Modal>
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
                                                title="teste" />
                            </CardActionArea>
                        </Grid>
                        <Grid item>
                            <TextField id="input-with-icon-grid" label="Peso"  
                            InputProps={{ disableUnderline: true}}  />
                        </Grid> 
                    </Grid>

                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                        <CardMedia className={classes.iconSize}
                                        component="img"
                                        image={heightIcon}
                                        title="teste" />
                        </Grid>
                        <Grid item>
                            <TextField id="input-with-icon-grid" label="Altura"
                             InputProps={{ disableUnderline: true}} />
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
                </Grid>
            </CardContent>
        </Card>
    )
}

export default MeasuresCard;

