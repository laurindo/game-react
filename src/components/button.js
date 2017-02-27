import React from 'react';

const Button = (props) => {

    const getButtonMenu = () => {
        return (
            <div className="centerMenu">
                <button className="btnStart" onClick={props.clickCallback}>Começar</button>
            </div>    
        );
    }

    const getButtonYes = () => {
        return (
            <div>
                <button className="btnYes" onClick={props.clickCallback}>Sim</button>
            </div>  
        );
    }

    const getButtonNo = () => {
        return (
            <div>
                <button className="btnNo" onClick={props.clickCallback}>Não</button>
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