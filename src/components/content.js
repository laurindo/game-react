import React, { Component } from 'react';
import QuestionTitle from './question-title';
import QuestionList from './question-list';
import QuestionHelp from './question-help';
import CoreGame from '../core/brain';
import Toolbar from './toolbar';
import QuestionMoney from './question-money';
import ProgressBar from './progress-bar';

export default class Content extends Component {

    constructor(props) {
        super(props);
        
        const START_POSITION = 0;
        this.state = {
            questions: CoreGame.brainQuestions,
            selectedQuestion: CoreGame.brainQuestions[START_POSITION],
            position: START_POSITION,
            correctAnswer: CoreGame.brainQuestions[START_POSITION].correct.position,
            questionsDisabled: null,
            valueSuccess: 0,
            valueError: 0,
            point: 0
        };
    }

    onInputChange (selectedQuestion, pos, valueSuccess, valueError, isPointGained) {
        let ranking = localStorage.getItem('ranking.quizz.game');
        let temporarilyPoint = this.state.point;
        if (isPointGained) {
            temporarilyPoint = temporarilyPoint + 50;
        }
        
        if (ranking) {
            ranking = JSON.parse(ranking);
            ranking[ranking.length-1].value = temporarilyPoint;
            localStorage.setItem('ranking.quizz.game', JSON.stringify(ranking));
        }
        this.setState({
            selectedQuestion: selectedQuestion, 
            position: pos,
            correctAnswer: selectedQuestion.correct.position,
            questionsDisabled: null,
            valueSuccess: valueSuccess,
            valueError: valueError,
            point: temporarilyPoint
        });
    }

    onItemSelectHelp(type) {}

    onDisableQuestions(optChosen) {
        this.setState({questionsDisabled: optChosen});
    }

    render() {

        return (
            <div>
                <Toolbar />
                <div className="content">
                    <QuestionTitle position={this.state.position} questionData={this.state.selectedQuestion} nextQuestion={this.nextQuestion} />
                    <ProgressBar valueSuccess={this.state.valueSuccess} valueError={this.state.valueError} />
                    <QuestionList 
                        onItemSelect={ (selectedQuestion, pos, valueSuccess, valueError, isGainedPoint) => this.onInputChange(selectedQuestion, pos, valueSuccess, valueError, isGainedPoint) } 
                        questions={this.state.questions}
                        position={this.state.position}
                        correctAnswer={this.state.correctAnswer}
                        questionData={this.state.selectedQuestion}
                        point={this.state.point}
                        valueSuccess={this.state.valueSuccess}
                        valueError={this.state.valueError}
                        questionsDisabled={this.state.questionsDisabled} />
                    <QuestionHelp
                        onItemSelectHelp={ (type) => this.onItemSelectHelp(type) } 
                        questions={this.state.questions}
                        correctAnswer={this.state.correctAnswer} 
                        selectedQuestion={this.state.selectedQuestion}
                        onDisableQuestions={ (optChosen) => this.onDisableQuestions(optChosen) } />
                    <QuestionMoney point={this.state.point} />
                </div>
            </div>
        );
    }

}