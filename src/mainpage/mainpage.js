import React from 'react';
import './mainpage.css';

export const Mainpage = () => {
    return (
        <div className='mainpage'>
            <div className='header-photo' >
                <img src='./food1.jpg' alt=''/>    
            </div>
            <div className='main-body'>
                <div className='text-main'>
                    <h1>FRENCH CUISINE IN A CHIC YET APPROACHABLE SETTING IN WILLIAMSBURG OF BROOKLYN NEW YORK</h1>
                </div>
                <div className='photo-photo-main'>
                    <img src='./food4.jpg' alt=''/>
                    <img src='./food-3.jpg' alt=''/>
                </div>
                <div className='text-main'>
                    <h1>SARRIETTE IS OPEN FOR OUTDOOR AND INDOOR DINING</h1>
                    <br/> <br/>
                    <h3>SARRIETTE is offering a selection of dishes that will satisfy your craving for elevated food. Menu items will change when fresh and exciting ingredients come available, allowing you to explore new dishes while enjoying the beautiful dining rooms.</h3>
                </div>
                <div className='photo-photo-main2'>
                    <img src='./photo6.jpg' alt=''/>
                </div>
                <div className='text-main'>
                    <h1>SAFETY AT SARRIETTE</h1>
                    <br/> <br/>
                    <h3>We take our health and our customer’s health very seriously. We’ll be taking many safety measures to keep everybody safe. We guarantee a minimum distance of 6 feet or more between waiting parties. All staff will go through a thorough wellness check ahead of each shift and will be trained to self check before each shift and in order to spot the early signs. All staff will wear masks and gloves and be trained on the proper handling of masks and changing of gloves. Staff is required to wash hands every 30 minutes and between customer interactions. Sanitation of shared surfaces and bathrooms will occur every 30 minutes and at table turns.</h3>
                </div>
            </div>
        </div>
    )
}


