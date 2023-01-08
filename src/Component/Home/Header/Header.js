import React from 'react';
import './Header.css'

const Header = () =>{
    return(
        <header>
            <div className="header-overlay">
           <div className="container">
            <div className ='row'>
                <div className='col-lg-12'>
                    <h2>We helps startups launch their <br/> products</h2>
                    <p>L'intérêt pour les start-up a été une constante de l'histoire des bourses
                         de valeurs, <br/>constatée en particulier dans les années 1920 à Wall Street, 
                         lors de la radiomania entourant .</p>
                    <form>
                        <input type="text" placeholder="Email"/>
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
          </div>

            </div>
         
        </header>
    )
}

export default Header;