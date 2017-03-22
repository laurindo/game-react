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
                    <div>
                        <img src="/images/olhe-suas-maos2.png" />
                    </div>
                    <div>
                        <input type="text" name="" placeholder="Digite seu nome" onChange={this.props.changeName} />
                        <Button title={GeneralConstant.button.START} 
                            btnType="btnStart" 
                            clickCallback={this.props.showMenuStart} />
                    </div>
                </div>
                <a onClick={ () => { this.showDialog() } } href="#">{GeneralConstant.ABOUT_GAME_TITLE}</a>
                {this.state.aboutGame ? <AboutGame closeDialog={() => { this.hideDialog() }} message={GeneralConstant.ABOUT_GAME} /> : ''}
            </div>
        );
    }

}