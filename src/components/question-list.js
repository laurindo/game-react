import React, { Component } from 'react';
import QuestionItem from './question-item';

const QuestionList = (props) => {

    let countQuestionDisabled = 0;

    const renderQuestion = (item, index) => {
        return (
            <QuestionItem 
                onItemSelect={props.onItemSelect}
                questions={props.questions}
                position={props.position}
                correctAnswer={props.correctAnswer}
                questionsDisabled={props.questionsDisabled}
                valueError={props.valueError}
                valueSuccess={props.valueSuccess}
                point={props.point}
                key={item} 
                target={index}
                item={item} />
        );
    };

    const renderQuestionDisabled = (questionsDisabled, item, index) => {
        questionsDisabled = parseInt(props.questionsDisabled, 10);
        if (countQuestionDisabled < questionsDisabled && index !== props.correctAnswer) {
            countQuestionDisabled++;
            return (
                <QuestionItem 
                    disabled={true}
                    onItemSelect={props.onItemSelect}
                    questions={props.questions}
                    position={props.position}
                    correctAnswer={props.correctAnswer}
                    questionsDisabled={props.questionsDisabled}
                    key={item} 
                    valueError={props.valueError}
                    valueSuccess={props.valueSuccess}
                    point={props.point}
                    target={index}
                    item={item} />
            );
        } else {
            return (
                <QuestionItem 
                    disabled={(index === props.correctAnswer || countQuestionDisabled === questionsDisabled) ? false : true}
                    onItemSelect={props.onItemSelect}
                    questions={props.questions}
                    position={props.position}
                    correctAnswer={props.correctAnswer}
                    questionsDisabled={props.questionsDisabled}
                    valueError={props.valueError}
                    valueSuccess={props.valueSuccess}
                    point={props.point}
                    key={item} 
                    target={index}
                    item={item} />
            );
        }
    };

    const questionAnswers = props.questionData.choice.map(function(item, index) {
        return ( !props.questionsDisabled ? renderQuestion(item, index) : renderQuestionDisabled(props.questionsDisabled, item, index) );
    });

    /*const incrementPos = () => {
        let newPos = props.position + 1;
        props.onItemSelect(props.questions[newPos], newPos);
    };*/

    return (
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="card">
                <ul className="list">
                    {questionAnswers}
                </ul>
            </div>
        </div>
    );
};

export default QuestionList;