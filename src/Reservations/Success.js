import React, { Component } from 'react';
import './Reservations.css';

export class Success extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep()
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep()
    }
    
    render() {
        return (
            <div className='form-card'>
                <div className='success'>
                    <h1>Thanks</h1>
                    <h3>Thank you very much for making the reservation and we look forward to being of service to you and your (guest) this evening. Please expect a call from us to comfirm</h3>
                </div>
            </div>
        )
    }
}

export default Success