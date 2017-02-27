import React, { Component } from 'react';

const QuestionTitle = ({questionData}) => {

    return (
        <div className="card">
            <h5>{questionData.question}</h5>
        </div>    
    );

};

export default QuestionTitle;