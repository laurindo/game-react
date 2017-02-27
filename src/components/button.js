import React from 'react';
import GeneralConstant from '../constants/general_constant';

const Button = (props) => {

    const getButtonMenu = () => {
        return (
            <div className="centerMenu">
                <button className="btnStart" onClick={props.clickCallback}>
                    {GeneralConstant.button.START}
                </button>
            </div>    
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

    return (
        <div>
            <div className="centerMenu">
                { props.btnType == 'btnStart' ?  getButtonMenu() : '' }
            </div>
            <div className="centerButton">
                { props.btnType == 'btnYes' ? getButtonYes() : '' }
                { props.btnType == 'btnNo' ? getButtonNo() : '' }
            </div>
        </div>
    );

};

export default Button;