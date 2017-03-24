import React, {Component} from 'react';

export default class AboutGame extends Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <p className="closeAboutGame" onClick={ () => { this.props.closeDialog() }}>Fechar</p>
                <div className={"aboutGame " + this.props.classTutorial}>
                    {this.props.message}
                </div>
            </div>
        );
    }

}