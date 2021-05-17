import React from 'react';

import Slide from './main/Slide';
import Information from './main/Information';
import Contact from './main/Contact';
import Maps from './main/Maps';

export default class Main extends React.Component {
    render(){
        return(
            <div>
                <Slide></Slide>
                <Information></Information>
                <Contact></Contact>
                <Maps></Maps>
            </div>
        );
    }
}