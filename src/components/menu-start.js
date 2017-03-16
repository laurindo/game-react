import React, {Component} from 'react';
import Button from './button';
import GeneralConstant from '../constants/general_constant';
import AboutGame from './about-game';

export default class MenuStart extends Component {
    constructor(props) {
        super();
        this.state = {
            aboutGame: false
        };
    }
    
    showDialog() {
        this.setState({
            aboutGame: true
        }); 
    }

    hideDialog() {
        this.setState({
            aboutGame: false
        }); 
    }

    render() {
        return (
            <div className="startPage">
                <div className="menuStart">
                    <img src="/images/logo.png" />
                    <Button title={GeneralConstant.button.START} 
                        btnType="btnStart" 
                        clickCallback={this.props.showMenuStart} />
                </div>
                <a onClick={ () => { this.showDialog() } } href="#">Sobre o game</a>
                {this.state.aboutGame ? <AboutGame closeDialog={() => { this.hideDialog() }} message={GeneralConstant.ABOUT_GAME} /> : ''}
            </div>
        );
    }

}