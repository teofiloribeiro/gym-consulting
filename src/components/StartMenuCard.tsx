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

const useStyle = makeStyles({
    root: {
        maxWidth: 300,
        flexGrow: 1,
        marginRight: 0

    },
    botton: {
        marginBottom: 5,
    }
})


const StartMenuCard = (props: any) => {
    const classes = useStyle();
    return (
    
            <Grid item xs={3} md={6} lg={4}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={props.img}
                            title={props.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="p">
                                {props.title}
                            </Typography >

                            <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                                {props.description}
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
    );
}


export default StartMenuCard;