import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';




import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';





const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 400,
            maxHeight: "60%"
        },
        media: {
            height: 0,
            paddingTop: '56%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: blue[500],
        },
    }),
);

export const AdviceCard = (props: any) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    return (
        <Card className={classes.root}>
            <CardHeader
                title={props.title}
            />

            <CardContent>
                <CardMedia
                    className={classes.media}
                    image={props.img}
                    title={props.title}
                />
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.descriptions}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="leia mais"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        {props.paragraph}
                    </Typography>
                    <Typography paragraph>
                        {props.paragraph2}
                    </Typography>
                    <Typography paragraph>
                        {props.paragraph3}
                    </Typography>
                    <Typography paragraph>
                        {props.paragraph4}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>

    )
}

const useStyles2 = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
        inline: {
            display: 'inline',
        },
    }),
);

export const NutricionistList = (props: any) => {
    const classes2 = useStyles2();
    return (

        <ListItem key={props.index} button className={classes2.nested}>
            <ListItemText
                primary={`Nutri ${props.name}`}
                secondary={
                    <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes2.inline}
                            color="textPrimary"
                        >
                            {props.name}
                            <br />  </Typography>
                        {props.email}
                    </React.Fragment>
                }
            />
        </ListItem>


    );
}