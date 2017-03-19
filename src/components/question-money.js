import React, { Component } from 'react';
import GeneralConstant from '../constants/general_constant';
import Button from './button';
import Dialog from './dialog';

const QuestionMoney = (props) => {

    return (
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="card points">
                <h6>{GeneralConstant.POINTS}</h6>
                <p>{props.point}</p>
            </div>
        </div>
    );
}

export default QuestionMoney;