import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import "./StartMenuCard.scss";

const useStyle = makeStyles({
    root: {
        maxWidth: 300,
        marginRight: 0,
        maxHeight: 400,
        minHeight: 400,
        marginBottom: 5
    },
    botton: {
        marginBottom: 5,
    }
})


const StartMenuCard = (props: any) => {
    const classes = useStyle();
    return (

        <Card className={classes.root}>
            <CardActionArea   onClick={props.onSubmit}>
                <CardContent>
                    <CardMedia className="imgSize"
                        component="img"
                        image={props.img}
                        title={props.title}
                    />
                    <Typography gutterBottom variant="h5" component="p">
                        {props.title}
                    </Typography >

                    <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}


export default StartMenuCard;