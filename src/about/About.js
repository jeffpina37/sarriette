import React from 'react';
import './about.css';


export const About = () => {
    return (
        <div className='about-container'>
            <div className='about-photo'>
                <img src='./Sarrietti.jpg' alt='banner'/>
            </div>
            <div className='about-container-inner'>
                <div className='about-info-container'>
                    <h1>ABOUT</h1>
                    <br/> <br/>
                    <h3>After taking the Parisian dining scene by storm, internationally acclaimed chef Jeff Alexander Piña returns to his home soil with Sarrietti, his New York City collaboration with restaurateur Blake Rashad.  Updating classical French cuisine with charm and verve, Piña shrinks the intercontinental divide separating the City of Light and the Big Apple, proving that the true essence of fine French dining can thrive in any time zone.</h3>
                </div>
                <div className='about-info-container2'>
                    <img src='./photo2.jpg' alt='photo2'/>
                    <img src='./photo3.jpg' alt='photo3'/>
                </div>
                <div className='about-info-container3'>
                    <h1>Chef Jeff Alexander Piña</h1>
                    <br/> <br/>
                    <h3>Jeff Alexander Piña began cooking simply because he liked eating. Before heading into the kitchen, dreamed of kayaking from Texas to Guatemala. He has been privileged to learn alongside many talented cooks: as an apprentice as well as from many members of his own team.
                    Jeff decided to settle down and open a small restaurant. In 2006 he launched Winter, where there is no set menu, and the food is focused on seasonal ingredients. Winter is Jeff Alexander Piña’s vision of a classic French meal: abundant and excellent products from all over France.
                    In 2015 Jeff opened his second Paris restaurant, Cent Jours, an ode to the bistro. Here, he applies his experience and skilled precision to the most comforting of French dishes such as pot au feu and artichoke salad with foie gras; his favorites from his time in Lyon. Sarrietti is his first stateside establishment in collaboration with acclaimed restaurateur Blake Rashad.</h3>
                </div>
                <div className='about-info-container4'>
                    <img src='./photo4-3.jpg' alt='photo4'/>
                    <img src='./photo82.jpg' alt='photo8'/>
                </div>
            </div>
        </div>
    )
}


