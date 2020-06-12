import React, { useState, useContext } from "react";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Grid, TextField, FormControl, InputLabel, MenuItem, Select, Menu, IconButton, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@material-ui/core";
import { Nutrient, Measure, DietItem, Diet } from "../../interfaces/Diet";
import AddIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper'
import { AuthContext } from "../../auth/AuthContext";
import { UserRole } from "../../interfaces/User";

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

export const AddDietModal = (props: any) => {
    const { newDietHandler, dietData } = props;
    
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
            {authUser?.role != UserRole.STUDENT ? <Button variant="contained" color="primary" onClick={handleOpen}> Alterar / Adicionar Dieta </Button> : null}
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

                <Form open={open} newDietHandler={newDietHandler} dietData = {dietData} user = {props.user}/>
            </Modal>
        </div>
    );
}

const Form = (props: any) => {
    const { open, newDietHandler, dietData} = props;

    const classes = useStyles();
    const [nutrient, setNutrient] = useState<Nutrient>();
    const [measure, setMeasure] = useState<Measure>();
    const [title, setTitle] = useState<string>(dietData.title || '');
    const [time, setTime] = useState<string>('');
    const [item, setItem] = useState<string>('');
    const [qty, setQty] = useState<number>(0);

    const [dietItens, setDietItens] = useState<DietItem[]>(dietData.itens || []);

    const nutrientHandleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setNutrient(event.target.value as Nutrient);
    };

    const measureHandleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setMeasure(event.target.value as Measure);
    };

    const titleHandleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setTitle(event.target.value as string);
    };

    const timeHandleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setTime(event.target.value as string);
    };

    const itemHandleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setItem(event.target.value as string);
    };

    const qtyHandleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setQty(event.target.value as number);
    };

    const removeItem = (index: number) => {
        dietItens.splice(index, 1);
        setDietItens(dietItens);
    }

    const saveHandle = () => {
        const newDiet: Diet = {
            userId: props.user,
            title: title,
            itens: dietItens,
            id: dietData.id
        }
        console.log(newDiet);
        newDietHandler(newDiet)
    }

    const addItemHandle = () => {
        if(!(item && nutrient && qty < 1 && time && measure)) return;
        const newDietItem: DietItem = {
            desc: item,
            nutrient: nutrient || Nutrient.CARBOIDRATO,
            qty: qty,
            time: time,
            measure: measure || Measure.KG
        }

        setDietItens([...dietItens, newDietItem]);
        setItem('');
        setTime('');
        setQty(1);
    };

    return (
        <Fade in={props.open}>
            <Grid container
                direction="column"
                justify="center"
                className={classes.paper}>
                <h2>Nova Dieta</h2>
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
                            id="time"
                            label="Horario"
                            helperText="*"
                            onChange={timeHandleChange}
                            value={time}
                        />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <TextField
                            error={false}
                            id="item"
                            label="Item"
                            helperText="*"
                            onChange={itemHandleChange}
                            value={item}
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="nutrient-select">Nutriente</InputLabel>
                        <Select
                            required
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={nutrient}
                            onChange={nutrientHandleChange}
                        >
                            {nutrientList()}
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <TextField
                            required
                            error={false}
                            id="qty"
                            label="Quantidade"
                            helperText="*"
                            onChange={qtyHandleChange}
                            value={qty}
                        />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="nutrient-select">Medida</InputLabel>
                        <Select
                            required
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={measure}
                            onChange={measureHandleChange}
                        >
                            {measureList()}
                        </Select>
                    </FormControl>
                    <IconButton onClick={addItemHandle}>
                        <AddIcon fontSize="large" />
                    </IconButton>
                </div>
                <DietItensTable dietData={dietItens} onRemove={removeItem} />
                <FormControl className={classes.formControl}>
                    <Button variant="contained" color="primary" onClick={saveHandle}>
                        Salvar
                    </Button>
                </FormControl>
            </Grid>
        </Fade>
    )
}

export const DietItensTable = (props: any) => {
    const classes = useStyles();
    const { dietData, onRemove } = props;
    console.log('from diet', dietData)
    return (
        <TableContainer component={Paper} className={classes.tableContainer}>
            {Array.isArray(dietData) && dietData.length ? <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.headerText}>Horario</TableCell>
                        <TableCell align="center" className={classes.headerText}>Item</TableCell>
                        <TableCell align="center" className={classes.headerText}> Tipo de Nutriente</TableCell>
                        <TableCell align="center" className={classes.headerText}>Quantidade</TableCell>
                        <TableCell align="center" className={classes.headerText}>Medida</TableCell>
                        {onRemove ? <TableCell align="center" className={classes.headerText}>Remover</TableCell> : null}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableRows(dietData, onRemove)}
                </TableBody>
            </Table> : <EmptyTable/> }
        </TableContainer>
    );
}

const EmptyTable = () => {
    const classes = useStyles();
    return <h2 className={classes.emptyTableText}> Nenhuma dieta por aqui ainda...</h2>
}

const tableRows = (dietItens: DietItem[], removeFunc: any) => {
    const rows: any[] = [];
    dietItens.forEach((row: DietItem, index: number) => rows.push(
        <TableRow key={index}>
            <TableCell component="th" scope="row">
                {row.time}
            </TableCell>
            <TableCell align="center">{row.desc}</TableCell>
            <TableCell align="center">{row.nutrient}</TableCell>
            <TableCell align="center">{row.qty}</TableCell>
            <TableCell align="center">{row.measure}</TableCell>
            {removeFunc ? <TableCell  align="center">
                <IconButton onClick={ () => removeFunc(index) }>
                    <DeleteIcon fontSize="large" />
                </IconButton>
            </TableCell> : null}
        </TableRow>
    ))
    return rows;
}


const nutrientList = () => {
    const itens = [];
    for (let item in Nutrient) {
        if (isNaN(Number(item))) {
            itens.push(
                <MenuItem value={item}>{item}</MenuItem>
            )
        }
    }
    return itens;
}

const measureList = () => {
    const itens = [];
    for (let item in Measure) {
        if (isNaN(Number(item))) {
            itens.push(
                <MenuItem value={item}>{item}</MenuItem>
            )
        }
    }
    return itens;
}