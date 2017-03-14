import React, {Component} from 'react';
import Button from './button';
import GeneralConstant from '../constants/general_constant';
import Dialog from './dialog';

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

    render() {
        return (
            <div className="startPage">
                <div className="menuStart">
                    <img src="images/logo.png" />
                    <Button title={GeneralConstant.button.START} 
                        btnType="btnStart" 
                        clickCallback={this.props.showMenuStart} />
                </div>
                <a onClick={ () => { this.showDialog() } } href="#">Sobre o game</a>
                {this.state.aboutGame ? <Dialog type="normal" message={GeneralConstant.ABOUT_GAME} /> : ''}
            </div>
        );
    }

}