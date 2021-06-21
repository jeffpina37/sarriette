import React, { Component } from 'react';
import './Reservations.css'


export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep()
    }
    render() {
        const { values, handleChange } = this.props;
        
        return (
            <div className='form-card'>
                <input
                    className='form-form-card'
                    placeholder='First Name'
                    floatingLabelText='First Name'
                    onChange={handleChange('firstName')}
                    defaultValue={values.firstName}
                />
                <br/>
                <input
                    className='form-form-card'
                    placeholder='Last Name'
                    floatingLabelText='Last Name'
                    onChange={handleChange('lastName')}
                    defaultValue={values.lastName}
                />
                <br/>
                <input
                    className='form-form-card'
                    placeholder='Email'
                    floatingLabelText='Email'
                    type='email'
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                />
                <br/>
                <input
                    className='form-form-card'
                    placeholder='Phone'
                    floatingLabelText='Phone'
                    type='Phone'
                    onChange={handleChange('phone')}
                    defaultValue={values.phone}
                />
                <br/>
                <input
                    className='form-form-card'
                    placeholder='Party Size'
                    floatingLabelText='party'
                    type='party'
                    onChange={handleChange('party')}
                    defaultValue={values.party}
                />
                <br/>
                <button className='form-btn' label='Coutinue' onClick={this.continue}>Continue </button>
            </div>
        )
    }
}

export default FormUserDetails
