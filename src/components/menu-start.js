import React from 'react';
import Button from './button';

const MenuStart = (props) => {

    return (
        <div className="menuStart">
            <img src="" />
            <Button title="Começar" btnType="btnStart" clickCallback={props.showMenuStart} />
        </div>
    );

};

export default MenuStart;