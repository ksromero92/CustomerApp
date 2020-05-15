import React from 'react';
import PropTypes from 'prop-types';
import CustomersListItem from './CustomerListItem';
import { CUSTOMER_LIST } from '../constants/permissions';
import { accessControl } from './../helpers/accessControl';

const CustomersList = ({ customers, urlPath }) => {
    return (
        <div className="customers-list">
            {
                customers.map(c =>
                    <CustomersListItem
                        key={c.dni}
                        dni={c.dni}
                        name={c.name}
                        editAction={'Editar'}
                        delAction={'Eliiminar'}
                        urlPath={urlPath}>
                    </CustomersListItem>)
            }
        </div>
    );
};

CustomersList.propTypes = {
    customers: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default accessControl([CUSTOMER_LIST])(CustomersList);