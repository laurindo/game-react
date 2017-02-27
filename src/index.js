import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MenuStart from './components/menu-start';
import Content from './components/content';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showMenuStart: true
    };
  }

  render() {
    return (
      <div>
        {this.state.showMenuStart ? <MenuStart showMenuStart={ () => { this.setState({showMenuStart: false}) } } /> : ''}
        <Content />
      </div>
    );
  }

}

ReactDOM.render(<App />, document.getElementById("container"));