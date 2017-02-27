import React, { Component } from 'react';
import QuestionTitle from './question-title';
import QuestionList from './question-list';
import QuestionHelp from './question-help';
import CoreGame from '../core/brain';
import Toolbar from './toolbar';

export default class Content extends Component {

    constructor(props) {
        super(props);
        
        const START_POSITION = 0;
        this.state = {
            questions: CoreGame.brainQuestions,
            selectedQuestion: CoreGame.brainQuestions[START_POSITION],
            position: START_POSITION,
            correctAnswer: CoreGame.brainQuestions[START_POSITION].correct.position
        };
    }

    onInputChange (selectedQuestion, pos) {
        this.setState({
            selectedQuestion: selectedQuestion, 
            position: pos,
            correctAnswer: selectedQuestion.correct.position
        });
    }

    render() {

        return (
            <div>
                <Toolbar />
                <div className="content">
                    <QuestionTitle questionData={this.state.selectedQuestion} nextQuestion={this.nextQuestion} />
                    <QuestionList 
                        onItemSelect={ (selectedQuestion, pos) => this.onInputChange(selectedQuestion, pos) } 
                        questions={this.state.questions}
                        position={this.state.position}
                        correctAnswer={this.state.correctAnswer}
                        questionData={this.state.selectedQuestion} />
                    <QuestionHelp />
                </div>
            </div>
        );
    }

}