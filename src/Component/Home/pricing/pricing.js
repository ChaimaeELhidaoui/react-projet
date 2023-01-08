import React from 'react';
import Data from '../../../Data';
import './pricing.css'


const Pricing = () =>{

    const item = Data.pricing.map((itemBox)=>{
        return(
            <div className="col-md-4">
               <div className='box'>
                <h6>{itemBox.title}</h6>
                 <h4>{itemBox.price}</h4>
                <span>{itemBox.time}</span>
                
                 <ul>
               
                <li>
                    <span>Bandwidth :</span>
                    {itemBox.Bandwith}</li>
                <li><span>OnlineSpace :</span>
                    {itemBox.onlinespace}</li>
                
                <li><span>Support :</span>
                    {itemBox.Support}</li>
                
                <li><span>Doamin :</span>{itemBox.Domain}</li>
                <li><span>Hadden Fees :</span>{itemBox.HiddenFees}</li>
                 </ul>
               </div>
               <button>Join now</button>

            </div>
        )
    })
    return(
        <div className="pricing">
            <div className='container'>
                <div className='row'>
                    <div className="col-md-12 col-lg-12">
                        <h2>Our pricing</h2>
                        <p>Most digital designers should be able to carry out the tasks of a graphic designer,
                            <br/> and a lot of graphic designers consider themselves digital designers</p>
                    </div>
                </div>
                <div className='row'>
                    
                     {item}
                    
                </div>
            </div>
        </div>
    )
}
export default Pricing;