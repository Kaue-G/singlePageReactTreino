import React from 'react';
import '../../styles/Logo/style.css';

export default class Logo extends React.Component {
    render(){
        return(
            <div className="logo">
                <img src="/img/logoHouse.png" alt="Logo de uma casa"/>
            </div>
        );
    }
}