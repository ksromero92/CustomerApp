import React, { Component } from 'react'
import {  withRouter } from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import CustomerActions from '../components/CustomerActions';

class HomeContainer extends Component {
    handleOnClick = () => {
        this.props.history.push('/customers')
    }
    render() {
        return (
            <div>
                <AppFrame
                    header="Home"
                    body={
                        <div>
                            Esta es la Pantalla inicial
                            <CustomerActions>
                                <button onClick={this.handleOnClick}>Listado de clientes</button>
                            </CustomerActions>
                        </div>
                    }></AppFrame>
            </div>
        )
    }
}
export default withRouter(HomeContainer); 