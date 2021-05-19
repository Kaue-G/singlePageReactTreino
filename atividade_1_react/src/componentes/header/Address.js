import React from 'react';
import '../../styles/Address/style.css';

export default class Address extends React.Component{
    render(){
        return(
            <div className="address">
                <img src="/img/whatsapp.png" alt="Whatsapp para apartamentos no litoral"/>
                <p><strong>(XX) XXXXX-XXXX</strong> <br/> Endereço</p>
            </div>
        );
    }
}