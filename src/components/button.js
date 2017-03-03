import React from 'react';
import GeneralConstant from '../constants/general_constant';

const Button = (props) => {

    const getButtonMenu = () => {
        return (
            <button className="btnStart" onClick={props.clickCallback}>
                {GeneralConstant.button.START}
            </button>
        );
    }

    const getButtonYes = () => {
        return (
            <div>
                <button className="btnYes" onClick={props.clickCallback}>
                    {GeneralConstant.button.YES}
                </button>
            </div>  
        );
    }

    const getButtonNo = () => {
        return (
            <div>
                <button className="btnNo" onClick={props.clickCallback}>
                    {GeneralConstant.button.NO}
                </button>
            </div>  
        );
    }

    const getButtonQuit = () => {
        return (
            <div className="btn">
                <button className="btnQuit" onClick={props.clickCallback}>
                    {props.title}
                </button>
            </div>  
        );
    }

    const getButtonNormal = () => {
        return (
            <div className="btn">
                <button className="btnNormal" onClick={props.clickCallback}>
                    {props.title}
                </button>
            </div>  
        );
    }

    return (
        <div>
            <div>
                { props.btnType == 'btnStart' ?  getButtonMenu() : '' }
            </div>
            <div className="centerButton centerPromptButtons">
                { props.btnType == 'btnYes' ? getButtonYes() : '' }
                { props.btnType == 'btnNo' ? getButtonNo() : '' }
            </div>
            <div>
                { props.btnType == 'btnQuit' ? getButtonQuit() : '' }
            </div>
            <div>
                { props.btnType == 'btn' ? getButtonNormal() : '' }
            </div>
        </div>
    );

};

export default Button;