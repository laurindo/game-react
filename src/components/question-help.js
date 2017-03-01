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
            message: ''
        };
    }

    getHelp(type) {
        switch (type) {
            case "board":
                this.setState({helpType: type, message: 'Placas', showDialog: true});
                break;
            case "deck":
                this.setState({helpType: type, message: 'Cartas', showDialog: true});
                break;
            case "guess":
                this.setState({helpType: type, message: 'Convidados', showDialog: true});
                break;
        }
    };

    iconsHelp() {
        let that = this;
        let icons = GeneralConstant.icons.map(function(icon, index) {
            return (
                <div key={index} className="helpIcons" onClick={ (type) => that.getHelp(icon.type) }>
                    <img src={"/images/" + icon.img} />
                    {icon.title}
                </div>
            );        
        });
        return icons;
    }

    closeDialog(opt) {
        this.setState({showDialog: false});
        alert(opt);
    }

    render() {
        return (
            <div className="questionHelp col-xs-12 col-sm-12 col-md-6 col-lg-6">
                { (this.state.showDialog) ? <Dialog message={this.state.message} type={this.state.helpType} callback={(opt) => { this.closeDialog(opt)}} questions={this.props.questions} correctAnswer={this.props.correctAnswer} selectedQuestion={this.props.selectedQuestion} /> : '' }
                <div className="card">
                    <h6 className="helpTitle">
                        {GeneralConstant.HELP}
                    </h6>
                    <div>{ this.iconsHelp() }</div>
                    <Button title={GeneralConstant.QUIT} btnType="btnQuit" />
                </div>
            </div>
        );
    }

}

export default QuestionHelp;