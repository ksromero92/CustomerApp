import React from 'react';
import PropTypes from 'prop-types';
//import CustomersListItem from './CustomerListItem';
import CustomerGrid from './CustomerGrid';
import { CUSTOMER_LIST } from '../constants/permissions';
import { accessControl } from './../helpers/accessControl';

const CustomersList = ({ customers, urlPath }) => {
    return (
        <div className="customers-list">
            {
                <CustomerGrid rows={customers} urlPath={urlPath}/>                
            }
        </div>
    );
};

CustomersList.propTypes = {
    customers: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default accessControl([CUSTOMER_LIST])(CustomersList);