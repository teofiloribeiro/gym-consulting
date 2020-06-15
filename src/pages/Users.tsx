import React, { useEffect, useState, useContext } from 'react';
import { UsersList } from '../components/UserList';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { withRouter, Redirect } from 'react-router-dom';
import { User, UserRole } from '../interfaces/User';
import { findAllStudents } from "../data/UserData";
import { AuthContext } from '../auth/AuthContext';

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

    const user = useContext(AuthContext);

    if(user && user.role == UserRole.STUDENT){
        return <Redirect to="/" push={true}/>
    }

    return (
        <div className = {classes.listContainer}>
            <UsersList onDiet = {onDietHandler} onTraining={onTrainingHandler} users = {users}  />
        </div>
    ) 
})

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        listContainer: {
            marginRight: 20,
            marginLeft: 20,
            minHeight: '100%',
            marginTop: 40
        }
    }),
)