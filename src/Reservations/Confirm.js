import React, { Component } from 'react';
import './Reservations.css';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep()
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep()
    }
    
    render() {
        const { values: { firstName, lastName, email, phone, party} } = this.props;
        return (
            <div className='form-card'>
                <div className='form-form-card'>
                    <h3>First Name:</h3>
                    <h4 className='form-card-confirm'>{firstName}</h4>
                </div>
                <div className='form-form-card'>
                    <h3>Last Name:</h3>
                    <h4 className='form-card-confirm'>{lastName}</h4>
                </div>
                <div className='form-form-card'>
                    <h3>Email:</h3>
                    <h4  className='form-card-confirm'>{email}</h4>
                </div>
                <div className='form-form-card'>
                    <h3>Phone:</h3>
                    <h4  className='form-card-confirm'>{phone}</h4>
                </div>
                <div className='form-form-card'>
                    <h3>Party:</h3>
                    <h4  className='form-card-confirm'>{party}</h4>
                </div>
                <button className='form-btn' 
                        label='Coutinue' 
                        onClick={this.continue}>
                        Confirm & Continue 
                </button>
                <button className='form-btn'
                         label='Back' 
                         onClick={this.back}>
                         Back 
                </button>
            </div>
        )
    }
}

export default Confirm
