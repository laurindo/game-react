import React from 'react';
import Button from './button';
import GeneralConstant from '../constants/general_constant';

const MenuStart = (props) => {

    return (
        <div className="menuStart">
            <img src="" />
            <Button title={GeneralConstant.button.START} 
                btnType="btnStart" 
                clickCallback={props.showMenuStart} />
        </div>
    );

};

export default MenuStart;