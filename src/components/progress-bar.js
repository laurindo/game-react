import React, { Component } from 'react';

class ProgressBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showDialog: false
        };
    }

    render() {
        return (
            <div className="col-xs-12">
                <div className="col-xs-12 progressbar">
                    <div className="percent" style={{width: 100 + '%'}}>
                        Corretas: <span className="success">{this.props.valueSuccess}</span> &nbsp;
                        Erradas: <span className="error">{this.props.valueError}</span>
                    </div>
                </div>
            </div>
        );
    }

}

export default ProgressBar;