import React from 'react';

import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class Nav extends React.Component {
    render(){
        return(
            <div className="nav">
                <AnchorLink href="home" offset="50">home</AnchorLink>
                <AnchorLink href="photo" offset="50">photos</AnchorLink>
                <AnchorLink href="information" offset="50">information</AnchorLink>
                <AnchorLink href="contact" offset="50">contact</AnchorLink>
            </div>
        );
    }
}