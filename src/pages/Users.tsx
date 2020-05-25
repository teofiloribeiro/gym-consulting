import React from 'react';
import { UsersList } from '../components/UserList';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { withRouter, Redirect } from 'react-router-dom';

export const Users = withRouter(({history}) => {
    const classes = useStyles();
    
    const onDietHandler = () => history.push('/diet');

    return (
        <div className = {classes.listContainer}>
            <UsersList onDiet = {onDietHandler}/>
        </div>
    ) 
})

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        listContainer: {
            width: '90%',
            alignItems: 'center',
            minHeight: '100%',
            marginTop: 40
        }
    }),
);