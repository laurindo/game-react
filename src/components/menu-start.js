import React, {Component} from 'react';
import Button from './button';
import GeneralConstant from '../constants/general_constant';
import AboutGame from './about-game';

export default class MenuStart extends Component {
    constructor(props) {
        super();
        this.state = {
            aboutGame: false,
            tutorial: false
        };
    }
    
    showDialog() {
        this.setState({
            aboutGame: true
        }); 
    }

    showDialogTutorial() {
        this.setState({
            tutorial: true
        }); 
    }

    hideDialog() {
        this.setState({
            aboutGame: false,
            tutorial: false
        }); 
    }

    tutorial() {
        return (
            <div className="tutorialStep">
                <ul>
                    <ol>1. Digite seu nome e clique em COMEÇAR</ol>
                    <ol><img src="/images/tutorial/01.png" /></ol>
                    <ol>2. Escolha a resposta ou peça ajuda</ol>
                    <ol><img src="/images/tutorial/02.png" /></ol>
                    <ol>3. Placas é uma opção de ajuda </ol>
                    <ol><img src="/images/tutorial/03.png" /></ol>
                    <ol>4. Outras opções de ajuda podem ser escolhidas </ol>
                    <ol><img src="/images/tutorial/04.png" /></ol>
                    <ol>5. Toda vez que você acerta, você ganha 50 pontos </ol>
                    <ol><img src="/images/tutorial/05.png" /></ol>
                    <ol>6. Área que mostra os items que você acertou e errou </ol>
                    <ol><img src="/images/tutorial/06.png" /></ol>
                    <ol>8. Se você errar, um dialog com a resposta correta irá aparecer </ol>
                    <ol><img src="/images/tutorial/07.png" /></ol>
                    <ol>9. Caso você não acerte o minimo de 85% do total de perguntas, tente outra vez. </ol>
                    <ol><img src="/images/tutorial/08.png" /></ol>
                    <ol>10. Caso você acerte o minimo de 85%, você ganha! </ol>
                    <ol><img src="/images/tutorial/09.png" /></ol>
                </ul>
            </div>
        );
    }

    render() {
        return (
            <div className="startPage">
                <div className="menuStart">
                    <div>
                        <img src="/images/olhe-suas-maos3.png" />
                    </div>
                    <div>
                        <input type="text" name="" placeholder="Digite seu nome" onChange={this.props.changeName} />
                        <Button title={GeneralConstant.button.START} 
                            btnType="btnStart" 
                            clickCallback={this.props.showMenuStart} />
                    </div>
                </div>
                <a className="aboutGameLink" onClick={ () => { this.showDialog() } } href="#">{GeneralConstant.ABOUT_GAME_TITLE}</a>
                <a className="tutorial" onClick={ () => { this.showDialogTutorial() } } href="#">{GeneralConstant.TUTORIAL}</a>
                {this.state.aboutGame ? <AboutGame closeDialog={() => { this.hideDialog() }} message={GeneralConstant.ABOUT_GAME} /> : ''}
                {this.state.tutorial ? <AboutGame classTutorial="areaTutorialStep" closeDialog={() => { this.hideDialog() }} message={this.tutorial()} /> : ''}
            </div>
        );
    }

}