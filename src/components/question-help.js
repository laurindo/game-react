import React, { Component } from 'react';
import GeneralConstant from '../constants/general_constant';
import Button from './button';
import Dialog from './dialog';

class QuestionHelp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showDialog: false,
            helpType: '',
            message: '',
            boardEnable: true,
            deckEnable: true,
            guessEnable: true,
            showDialogQuit: false,
            showDialogExitedGame: false,
            showScore: false
        };
    }

    getHelp(type) {
        switch (type) {
            case "board":
                this.setState({helpType: type, message: 'Placas', showDialog: true, boardEnable: false});
                break;
            case "deck":
                this.setState({helpType: type, message: 'Cartas', showDialog: true, deckEnable: false});
                break;
            case "guess":
                this.setState({helpType: type, message: 'Convidados', showDialog: true, guessEnable: false});
                break;
        }
    };

    renderIcon(icon, index) {
        let that = this;
        let renderNormalIcon = () => {
            return (
                <div key={index} className="helpIcons" onClick={ (type) => that.getHelp(icon.type) }>
                    <img src={"/images/" + icon.img} />
                    {icon.title}
                </div>
            );
        };
        let renderIconDisabled = () => {
            return (
                <div key={index} className="helpIcons disabled">
                    <img src="/images/disabled.png" width="50" />
                    {icon.title}
                </div>
            );
        };
        if (icon.type === 'board') {
            if (this.state.boardEnable) {
                return renderNormalIcon();
            } else {
                return renderIconDisabled();
            }
        }

        if (icon.type === 'deck') {
            if (this.state.deckEnable) {
                return renderNormalIcon();
            } else {
                return renderIconDisabled();
            }
        }
        
        if (icon.type === 'guess') {
            if (this.state.guessEnable) {
                return renderNormalIcon();
            } else {
                return renderIconDisabled();
            }
        }
        
    }

    iconsHelp() {
        let that = this;
        let icons = GeneralConstant.icons.map(function(icon, index) {
            return (
                that.renderIcon(icon, index)
            );
        });
        return icons;
    }

    closeDialog(opt) {
        this.setState({showDialog: false, showDialogQuit: false});
        if (opt) {
            this.props.onDisableQuestions(opt);
        }
    }

    closeDialogQuitGame() {
        location.reload();
    }

    askedExit() {
        this.setState({showDialogQuit: true});
    }

    render() {
        return (
            <div className="questionHelp col-xs-12 col-sm-12 col-md-6 col-lg-6">
                { (this.state.showScore) ? <Dialog type="score" message={GeneralConstant.SCORE} /> : '' }
                { (this.state.showDialogExitedGame) ? <Dialog type="lose" message={GeneralConstant.YOU_LOSE} /> : '' }
                { (this.state.showDialogQuit) ? <Dialog type="prompt" message={GeneralConstant.WANT_TO_QUIT} callbackYes={() => { this.closeDialogQuitGame()}} callbackNo={() => { this.closeDialog()}} /> : '' }
                { (this.state.showDialog) ? <Dialog message={this.state.message} type={this.state.helpType} callback={(opt) => { this.closeDialog(opt)}} questions={this.props.questions} correctAnswer={this.props.correctAnswer} selectedQuestion={this.props.selectedQuestion} /> : '' }
                <div className="card">
                    <h6 className="helpTitle">
                        {GeneralConstant.HELP}
                    </h6>
                    <div>{ this.iconsHelp() }</div>
                    <Button title={GeneralConstant.QUIT} btnType="btnQuit" clickCallback={ () => {this.askedExit()} } />
                </div>
            </div>
        );
    }

}

export default QuestionHelp;