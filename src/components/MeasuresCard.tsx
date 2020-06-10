import React from 'react';
import { Card, CardContent, Typography, Grid, 
        TextField} from '@material-ui/core';


import CardMedia from '@material-ui/core/CardMedia';
import manBodyMeasuresImg from './assets/man_body_measures.png';
import weightIcon from './assets/weight_icon.png';
import heightIcon from './assets/height_icon.png';
import waistIcon from './assets/waist_icon.png';
        
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import "./LoginCard.scss";
import "./Measures.scss";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({

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

     return(
        <Card> 
            <CardContent >
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
                        <CardMedia className={classes.iconSize}
                                        component="img"
                                        image={weightIcon}
                                        title="teste" />
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

