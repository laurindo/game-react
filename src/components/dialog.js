import React from 'react';
import Button from './button';

const Dialog = (props) => {

    const getButtons = () => {
        return (
            <div>
                <Button btnType="btnYes" clickCallback={props.callbackYes} /> 
                <Button btnType="btnNo" clickCallback={props.callbackNo} />
            </div>
        );
        
    }

    return (
        <div className="card dialog">
            <h4>{props.message}</h4>
            <div>{props.type === 'prompt' ? getButtons() : ''}</div>
        </div>
    );

};

export default Dialog;