import React, { Component } from 'react';
import QuestionItem from './question-item';

const QuestionList = (props) => {

    const questionAnswers = props.questionData.choice.map(function(item, index) {
        return (
            <QuestionItem 
                onItemSelect={props.onItemSelect}
                questions={props.questions}
                position={props.position}
                correctAnswer={props.correctAnswer}
                key={item} 
                target={index}
                item={item} />
        );
    });

    const incrementPos = () => {
        let newPos = props.position + 1;
        props.onItemSelect(props.questions[newPos], newPos);
    };

    return (
        <div className="card col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <ul className="list">
                {questionAnswers}
            </ul>
        </div>
    );
};

export default QuestionList;