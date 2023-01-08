import React from'react';
import Data from '../../../Data';
import Servitem from './servItem';
import './services.css';
import freepick from '../../../assets/freepick.jpg';


const Services = () => {

    const item = Data.service.map((itemBox) => {
        return(
            <div className='col-md-4'>
                <Servitem title={itemBox.title} text={itemBox.text} icons={itemBox.icons}/>
                
                
            </div>

        )
    })
    return(
     <section className='services'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-md-12'>
                    <h2>Our Services</h2>
                    <p>We craft digital,graphic and dimensionel thinking,
                        to create category leading brand experiences that meaning and add a value foe our clients
                    </p>
                </div>

            </div>
            <div className="row">
              {item}
            </div>
            <div className='row last'>
                <div className='col-md-6'>
                    <h3>adigital web design studio creating modern and engaging online experience</h3>
                    <p>Digital design is an umbrella term that includes a variety of different design 
                        types you may be familiar with. With the way the world is heading, 
                        digital design is key to the success of your marketing and advertising endeavors.</p>
                        <ul>
                            <li>We put a lot of effort in design</li>
                            <li>The most important ingredient od successful website</li>
                            <li> sed ut perstipita error design</li>
                            <li>Submit your organisation</li>
                        </ul>
                        <button>learn More -></button>
                </div>
               <div className='col-md-6'>
                 <img src={freepick} width="500px" height="500px"/>
                </div> 
            </div>
        </div>
    
     </section>

    )
}

export default Services;