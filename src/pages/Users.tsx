import React, { useEffect, useState } from 'react';
import { UsersList } from '../components/UserList';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { User } from '../interfaces/User';
import { findAllStudents } from "../data/UserData";

export const Users = withRouter(({history}) => {
    const classes = useStyles();
    const [users, setUsers] = useState<User[]>([]);
    const onDietHandler = (userId: string) => history.push({pathname: '/diet', state: userId });
    const onTrainingHandler = (userId: string) => history.push({pathname: '/Training', state: userId });
    
    useEffect(() => {
        const getStudents = async () => {
            let response = await findAllStudents();
            setUsers(response)
        }   
        
        getStudents();
    },[]); 

    return (
        <div className = {classes.listContainer}>
            <UsersList onDiet = {onDietHandler} onTraining={onTrainingHandler} users = {users}  />
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
)