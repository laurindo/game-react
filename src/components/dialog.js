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
                <Button btnType="btnYes" clickCallback={this.props.callbackYes} /> 
                <Button btnType="btnNo" clickCallback={this.props.callbackNo} />
            </div>
        );
    }

    choiceBoard(event) {
        let opt = event.target.parentElement.getAttribute('target');
        event.target.innerHTML = opt;
        this.props.callback(opt);
    }

    closeDialog() {
        this.props.callback();
    }

    getBoardSuggestion() {
        let that = this;
        let optionsToDisable = [1,2,3]; //options that deck will disable
        let shuffleChoices = CoreBrain.shuffleList(optionsToDisable);
        let choices = shuffleChoices.map(function(item, index) {
            return (
                <div key={index} className="col-xs-12 col-sm-4 col-md-4 col-xl-4 col-lg-4">
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

    getDeckSuggestion() {
        let that = this;
        let wrongOrCorrect = CoreBrain.wrongOrCorrect(this.props);
        let itemsQuestion = ['a', 'b', 'c', 'd'];
        let choices = [0,1,2,3].map(function(item, index) {
            return (
                <div key={index} className="col-xs-12 col-sm-3 col-md-3 col-xl-3 col-lg-3">
                    <div>
                        <img src="/images/deck-option.png" />
                    </div>
                </div>
            );
        });
        let getAnswerFinal = () => {
            return wrongOrCorrect.answerPercent + "% optaram pelo item (" + itemsQuestion[wrongOrCorrect.answerChosen] + ")";
        };
        return (
            <div>
                <div>
                    <Button btnType="btnQuit" title={getAnswerFinal()} />
                </div>
                {choices}
                <div>
                    <Button btnType="btn" title="OK" clickCallback={ () => that.closeDialog() } />
                </div>
            </div>
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
                    <div>{ this.getDeckSuggestion() }</div>
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