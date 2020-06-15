import React, { useState, useContext } from "react";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Grid, TextField, FormControl, InputLabel, MenuItem, Select, Menu, IconButton, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@material-ui/core";
import AddIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper'
import { AuthContext } from "../../auth/AuthContext";
import { UserRole } from "../../interfaces/User";

import { Training, Exercise, ChargeType, Level } from "../../interfaces/training";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            width: '80%'
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 160,
        },
        table: {
            minWidth: 650,
        },
        tableContainer: {
            height: 350,
        },
        headerText: {
            fontWeight: 'bold',
            fontSize: 20
        },
        emptyTableText: {
            textAlign: "center",
            marginTop: 100
        }
    }),
);

export const AddTrainingModal = (props: any) => {
    const { newTrainingHandler, trainingData } = props;
    
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const authUser = useContext (AuthContext);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            {authUser?.role != UserRole.STUDENT ? <Button variant="contained" color="primary" onClick={handleOpen}> Alterar / ADICIONAR NOVA FICHA </Button> : null}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}>

                <Form open={open} newTrainingHandler={newTrainingHandler} trainingData = {trainingData} user = {props.user}/>
            </Modal>
        </div>
    );
}

const Form = (props: any) => {
    const { open, newTrainingHandler, trainingData} = props;

    const classes = useStyles();

    const [chargeType, setChargeType] = useState<ChargeType>();
    const [set, setSet] = useState<number>(1);
    const [rep, setRep] = useState<number>(1);
    const [desc, setDesc] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [title, setTitle] = useState<string>(trainingData.title||'');
    
    const [exerciseItens, setExerciseItens] = useState<Exercise[]>(trainingData.itens || []);

    const chargeTypeHandleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setChargeType(event.target.value as ChargeType);
    };

    const setHandleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSet(event.target.value as number);
    };

    const repHandleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setRep(event.target.value as number);
    };

    const descHandleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setDesc(event.target.value as string);
    };

    const nameHandleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setName(event.target.value as string);
    };

    const titleHandleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setTitle(event.target.value as string);
    };

    const removeItem = (index: number) => {
        exerciseItens.splice(index, 1);
        setExerciseItens(exerciseItens);
    }

    const saveHandle = () => {
        const newTraining: Training = {
            userId: props.user,
            title: title,
            itens: exerciseItens,
            level : Level.INICIANTE,
            id: trainingData.id
        }
        console.log(newTraining);
        newTrainingHandler(newTraining);
    }

    const addItemHandle = () => {
        if(!(name && chargeType && rep >= 0 && set >= 0 && desc)) return;
        const newExerciseItem: Exercise = {
            name: name,
            charge: chargeType || ChargeType.LEVE,
            rep: rep,
            set:set,
            desc:desc 
        }

        setExerciseItens([... exerciseItens, newExerciseItem]);
        setName('');
        setChargeType(ChargeType.LEVE);
        setRep(1);
        setSet(1);
        setDesc('');
    };

    return (
        <Fade in={props.open}>
            <Grid container
                direction="column"
                justify="center"
                className={classes.paper}>
                <h2>Nova Ficha</h2>
                <FormControl fullWidth >
                    <TextField
                        id="title"
                        error={false}
                        label="Titulo"
                        helperText="*"
                        onChange={titleHandleChange}
                        value={title}
                    />
                </FormControl>
                <div>
                    <FormControl className={classes.formControl}>
                        <TextField
                            error={false}
                            id="name"
                            label="Name"
                            helperText="*"
                            onChange={nameHandleChange}
                            value={name}
                        />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <TextField
                            error={false}
                            id="desc"
                            label="Descrição"
                            helperText="*"
                            onChange={descHandleChange}
                            value={desc}
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="nutrient-select">Carga</InputLabel>
                        <Select
                            required
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={chargeType}
                            onChange={chargeTypeHandleChange}
                        >
                            {chargeTypeList()} 
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <TextField
                            required
                            error={false}
                            id="set"
                            label="Series"
                            helperText="*"
                            onChange={setHandleChange}
                            value={set}
                        />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <TextField
                            required
                            error={false}
                            id="rep"
                            label="Repetições"
                            helperText="*"
                            onChange={repHandleChange}
                            value={rep}
                        />
                    </FormControl>
                    <IconButton onClick={addItemHandle}>
                        <AddIcon fontSize="large" />
                    </IconButton>
                </div>
                <TrainingItensTable trainingData={exerciseItens} onRemove={removeItem} />
                <FormControl className={classes.formControl}>
                    <Button variant="contained" color="primary" onClick={saveHandle}>
                        Salvar
                    </Button>
                </FormControl>
            </Grid>
        </Fade>
    )
}

export const TrainingItensTable = (props: any) => {
    const classes = useStyles();
    const { trainingData, onRemove } = props;
    console.log('from Training', trainingData)
    return (
        <TableContainer component={Paper} className={classes.tableContainer}>
            {Array.isArray(trainingData) && trainingData.length ? <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" className={classes.headerText}>Nome</TableCell>
                        <TableCell align="center" className={classes.headerText}>Descrição</TableCell>
                        <TableCell align="center" className={classes.headerText}>Carga</TableCell>
                        <TableCell align="center" className={classes.headerText}>Series</TableCell>
                        <TableCell align="center" className={classes.headerText}>Repetições</TableCell>
                        {onRemove ? <TableCell align="center" className={classes.headerText}>Remover</TableCell> : null}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableRows(trainingData, onRemove)}
                </TableBody>
            </Table> : <EmptyTable/> }
        </TableContainer>
    );
}

const EmptyTable = () => {
    const classes = useStyles();
    return <h2 className={classes.emptyTableText}> Nenhuma Ficha por aqui ainda...</h2>
}

const tableRows = (exerciseItens: Exercise[], removeFunc: any) => {
    const rows: any[] = [];
    exerciseItens.forEach((row: Exercise, index: number) => rows.push(
        <TableRow key={index}>
            <TableCell component="th" scope="row">
                {row.name}
            </TableCell> 
            <TableCell align="center">{row.desc}</TableCell>
            <TableCell align="center">{row.rep}</TableCell>
            <TableCell align="center">{row.set}</TableCell>
            <TableCell align="center">{row.charge}</TableCell>
            {removeFunc ? <TableCell  align="center">
                <IconButton onClick={ () => removeFunc(index) }>
                    <DeleteIcon fontSize="large" />
                </IconButton>
            </TableCell> : null}
        </TableRow>
    ))
    return rows;
}


const chargeTypeList = () => {
    const itens = [];
    for (let item in ChargeType) {
        if (isNaN(Number(item))) {
            itens.push(
                <MenuItem value={item}>{item}</MenuItem>
            )
        }
    }
    return itens;
}

const LevelList = () => {
    const itens = [];
    for (let item in Level) {
        if (isNaN(Number(item))) {
            itens.push(
                <MenuItem value={item}>{item}</MenuItem>
            )
        }
    }
    return itens;
}