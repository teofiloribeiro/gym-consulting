import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { User, UserRole } from "../interfaces/User";
import AssignmentIcon from "@material-ui/icons/Assignment";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		table: {
		},
		container: {
			height: '90%',
		},
		body: {
			padding: 100,
		},
		headText: {
			fontSize: 20,
			fontWeight: "bold",
		},
		rowText: {
			fontWeight: "bold",
		},
	})
);

export const UsersList = (props: any) => {
	const classes = useStyles();

	return (
		<TableContainer component={Paper} className={classes.container}>
			<Table className={classes.table}>
				<TableHead>
					<TableRow>
						<TableCell className={classes.headText} align="center">
							Nome
            			</TableCell>
						<TableCell className={classes.headText} align="center">
							Ações
            			</TableCell>
					</TableRow>
				</TableHead>
				<TableBody className={classes.body}>
					<TableRows users={props.users} onDiet={props.onDiet}/>
				</TableBody>
			</Table>
		</TableContainer>
	);
};

const TableRows = (props: any) => {
	const classes = useStyles();
	const rows: any = [];
	const users = props.users as User[];
	users.forEach((user, index) =>
		rows.push(
			<TableRow key={index}>
				<TableCell className={classes.headText} component="th" scope="row">
					{user.name}
				</TableCell>
				<TableCell align="center">
					<IconButton title="Dieta" onClick= {() => props.onDiet(user.id)}>
						<AssignmentIcon fontSize="large" />
					</IconButton>
					<IconButton title="Treino">
						<DirectionsRunIcon fontSize="large" />
					</IconButton>
				</TableCell>
			</TableRow>
		)
	);
	return rows;
};

const users: User[] = [
	{
		name: "Carlos Silva",
		email: "carlos@silva",
		id: "E4lDKSSGLdYD5mbzgGlxNYTrKXs1",
		birth: new Date(),
		role: UserRole.STUDENT,
	},
	{
		name: "Carlos Silva",
		email: "carlos@silva",
		id: "1",
		birth: new Date(),
		role: UserRole.STUDENT,
	},
	{
		name: "Carlos Silva",
		email: "carlos@silva",
		id: "1",
		birth: new Date(),
		role: UserRole.STUDENT,
	},
	{
		name: "Carlos Silva",
		email: "carlos@silva",
		id: "1",
		birth: new Date(),
		role: UserRole.STUDENT,
	},
	{
		name: "Carlos Silva",
		email: "carlos@silva",
		id: "1",
		birth: new Date(),
		role: UserRole.STUDENT,
	},
	{
		name: "Carlos Silva",
		email: "carlos@silva",
		id: "1",
		birth: new Date(),
		role: UserRole.STUDENT,
	},
	{
		name: "Carlos Silva",
		email: "carlos@silva",
		id: "1",
		birth: new Date(),
		role: UserRole.STUDENT,
	},{
		name: "Carlos Silva",
		email: "carlos@silva",
		id: "1",
		birth: new Date(),
		role: UserRole.STUDENT,
	},{
		name: "Carlos Silva",
		email: "carlos@silva",
		id: "1",
		birth: new Date(),
		role: UserRole.STUDENT,
	},
];
