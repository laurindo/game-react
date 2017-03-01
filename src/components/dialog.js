import React, {Component} from 'react';
import Button from './button';
import CoreBrain from '../core/brain';

class Dialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boardItemChosen: ''
        };
    }

    getButtons() {
        return (
            <div>
                <Button btnType="btnYes" clickCallback={props.callbackYes} /> 
                <Button btnType="btnNo" clickCallback={props.callbackNo} />
            </div>
        );
    }

    choiceBoard(event) {
        let opt = event.target.parentElement.getAttribute('target');
        event.target.innerHTML = opt;
        this.props.callback(opt);
    }

    getBoardSuggestion() {
        let that = this;
        let optionsToDisable = [1,2,3]; //options that deck will disable
        let shuffleChoices = CoreBrain.shuffleList(optionsToDisable);
        let choices = shuffleChoices.map(function(item, index) {
            return (
                <div key={index} className="col-xs-12 col-sm-3 col-md-3 col-xl-3 col-lg-3">
                    <div className="helpOptions" target={item} onClick={ (event) => that.choiceBoard(event) }>
                        <p>?</p>
                    </div>
                </div>
            );
        });
        return (
            <div>{choices}</div>
        );
    };

    getContent() {
        switch (this.props.type) {
            case "board":
                return (
                    <div>{ this.getBoardSuggestion() }</div>
                );
                break;
            case "deck":
                return (
                    <div>Deck</div>
                );
                break;
            case "guess":
                return (
                    <div>Guess</div>
                );
                break;
        }    
    };

    render() {
        return (
            <div className="card dialog">
                <h4>{this.props.message}</h4>
                <div>{ (this.props.type) ? this.getContent() : '' }</div>
                <div>{this.props.type === 'prompt' ? this.getButtons() : ''}</div>
            </div>
        );
    };
}



export default Dialog;