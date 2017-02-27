import React, { Component } from 'react';
import Dialog from './dialog';
import ConstantGeneral from '../constants/general_constant';

class QuestionItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPromptDialog: false,
            showDialog: false,
            message: '',
            isAnswerOk: false
        };
    }
    checkAnswer (answerClicked, correctAnswer) {
        return (answerClicked == correctAnswer) ? true : false;
    }
    openConfirmationDialog() {
        this.setState({showPromptDialog: true, message: ConstantGeneral.DO_YOU_HAVE_SURE_THE_ANSWER});
    }
    incrementPos(event) {
        let answerClicked = parseInt(event.target.getAttribute('target'), 10);
        let correctAnswer = this.props.correctAnswer;
        let isAnswerOk = this.checkAnswer(answerClicked, correctAnswer);
        this.setState({isAnswerOk: isAnswerOk});
        this.openConfirmationDialog();
    }
    callbackYes() {
        let newPos = this.props.position + 1;
        this.props.onItemSelect(this.props.questions[newPos], newPos);
    }
    callbackNo() {
        this.setState({showPromptDialog: false});
    }
    callbackGameOver() {
        this.setState({showDialog: true, message: ConstantGeneral.YOU_LOSE});
    }
    processAnswer() {
        this.state.isAnswerOk ? this.callbackYes() : this.callbackGameOver()
    }
    renderDialogNormal() {
        return (
            <Dialog type={ConstantGeneral.dialog.NORMAL} message={this.state.message} />
        );
    }
    renderDialogPrompt() {
        return (
            <Dialog type={ConstantGeneral.dialog.PROMPT} 
                callbackYes={ () => { this.processAnswer() } } 
                callbackNo={ () => { this.callbackNo() } } 
                message={this.state.message} />
        );
    }
    render() {
        return (
            <div>
                {this.state.showPromptDialog ? this.renderDialogPrompt() : ''}
                {this.state.showDialog ? this.renderDialogNormal() : ''}
                <li onClick={ (event) => this.incrementPos(event) } 
                    target={this.props.target}
                    className="listItem">
                        {this.props.item}
                </li>
            </div>    
        );
    }
}

export default QuestionItem;