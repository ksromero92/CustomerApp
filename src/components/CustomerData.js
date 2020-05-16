import React from 'react';
import PropTypes from 'prop-types';
import CustomersActions from './CustomerActions';
import { CUSTOMER_VIEW } from '../constants/permissions';
import { accessControl } from './../helpers/accessControl';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const CustomerData = ({ id, name, dni, age, onBack, isDeleteAllow, onDelete }) => {
    const classes = useStyles();
    return (
        <div>
            <h2>Datos del cliente</h2>
            <form className={classes.root}>
                <TextField id={id} label="Nombre" defaultValue={name} 
                InputProps={{ readOnly: true, }} />
                <TextField id={id} label="DNI" defaultValue={dni} 
                InputProps={{readOnly: true,}} />
                <TextField id={id} label="Edad" defaultValue={age} 
                 InputProps={{ readOnly: true, }} />
            </form><CustomersActions>
                <button onClick={onBack}>Volver</button>
                {isDeleteAllow && <button onClick={() => onDelete(id)}>Eliminar</button>}
            </CustomersActions>
        </div>
    );
};

CustomerData.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
    isDeleteAllow: PropTypes.bool,
    onDelete: PropTypes.func,
};

export default accessControl([CUSTOMER_VIEW])(CustomerData);