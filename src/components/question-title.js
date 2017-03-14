import React, { Component } from 'react';

const QuestionTitle = ({questionData, position}) => {

    let pos = position + 1;

    return (
        <div className="col-xs-12 col-md-12 col-sm-12 col-lg-12">
            <div className="card">
                <h5>{pos + ". " + questionData.question}</h5>
            </div>
        </div>    
    );

};

export default QuestionTitle;