import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

import dietImg from './assets/diet.jpg';
import traningImg from './assets/training.jpg';
import nutricionistaImg from './assets/nutricionista.jpg';
import medidaImg from './assets/medidas.jpg';


const useStyle = makeStyles({
    root: {
        maxWidth: 300,
        flexGrow: 1,

    },
    botton: {
        marginBottom: 5,
    }
})


const StartMenuCard = (props: any) => {
    const classes = useStyle();
    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <Grid item xs={3} md={6} lg={4}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={dietImg}
                            title="Treino"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="p">
                                Dieta
                    </Typography >
                            <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                                Uma boa dieta e treinos trazem melhores resultados, além de fazer bem a saúde.
                    </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" onClick={props.onSubmit}>
                            Acessar
                </Button>
                    </CardActions>
                </Card>
            </Grid> <br />

            <Grid item xs={3} md={6} lg={4}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={traningImg}
                            title="Treino"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="p">
                                Treino
                    </Typography >
                            <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                                Os treinos são essenciais para a saúde,perda de gordura e o guanho de massa magra.
                    </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" onClick={props.onSubmit}>
                            Acessar
                </Button>
                    </CardActions>
                </Card>
            </Grid> <br />
            <Grid item xs={3} md={6} lg={4}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={nutricionistaImg}
                            title="Nutritionista"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="p">
                                Nutricionista
                    </Typography >
                            <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                                O nutricionista elabora uma dieta que atenda a sua necessidade. Para resultados mais rápido e seguro.
                    </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" onClick={props.onSubmit}>
                            Acessar
                        </Button>
                    </CardActions>
                </Card>
            </Grid>

            <Grid
                container
                justify="flex-start"
                alignItems="flex-end"
            >
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={medidaImg}
                            title="Medidas"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="p">
                                Medidas
                    </Typography >
                            <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                                Para saber sua evolução, é importante saber as suas medidas e seu peso.
                    </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" onClick={props.onSubmit}>
                            Acessar
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
}



export default StartMenuCard;