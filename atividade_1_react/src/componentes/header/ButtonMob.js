import React from 'react';
import '../../styles/ButtonMob/style.css'


export default class ButtonMob extends React.Component {
    
    constructor(){
        super();
        this.state={
            showNav: 'flex'
        }
    }


    clickMe(){
        if(this.state.showNav ==='flex'){
            this.setState({
                showNav: 'none'
            });
        }else{
            this.setState({
                showNav: 'flex'
            });
        }
        document.querySelector(".nav").style.display=this.state.showNav;
    }
    

    render(){
        return(
            <div className="hamburguer" onClick={this.clickMe.bind(this)}>
                <div class="line" ></div>
                <div class="line" ></div>
                <div class="line" ></div>
            </div>
        );
    }
}