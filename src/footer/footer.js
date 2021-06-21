import React from 'react';
import './footer.css';

export const Footer = () => {

  const submit = () => {
      alert('Thank You for Subscribing!')
  }

    return (
        <div>
            <footer className='footer-div'>
                <div className='info-footer-div'>
                    <h2>VISIT US</h2>
                    <h4>54 Noll St Brooklyn, NY 11206 </h4>
                    <h2>Dinner:</h2>
                    <h4>Sunday - Thursday 4pm - 9pm</h4>
                    <h4>Friday - Saturday 4pm - 10pm</h4>
                </div>
                <div className='info-footer-div'>
                    <h2>CONTACT US</h2>
                    <h4>Bonjour@Sarriette.NY</h4>
                </div>
                <div className='info-footer-div'>
                    <h2>STAY UPDATED</h2>
                    <h4>Get the latest news, offers, and event information.</h4>
                    <form className='footer-form-div'>
                        <input  type='email' placeholder='EMAIL ADDRESS'/>
                    </form>
                    <button onClick={submit} className='subscribe-button'>SUBSCRIBE</button>
                </div>
            </footer> 
        </div>
    )
}


