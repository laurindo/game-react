import React, { Component } from 'react';
import GeneralConstant from '../constants/general_constant';

export default class QuestionHelp extends Component {

    render() {
        return (
            <div className="card col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <h6 className="helpTitle">
                    {GeneralConstant.HELP}
                </h6>
            </div>
        );
    }

}