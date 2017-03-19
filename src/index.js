import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MenuStart from './components/menu-start';
import Content from './components/content';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showMenuStart: true,
      name: ''
    };
  }

  hideMenuStart(){
    this.setState({
      showMenuStart: false
    });
    let rankingData = {
      name: this.state.name,
      value: 0
    };
    let ranking = localStorage.getItem('ranking.quizz.game');
    if (ranking) {
      ranking = JSON.parse(ranking);
      ranking.push(rankingData);
    } else {
      ranking = [];
      ranking.push(rankingData);
    }
    localStorage.setItem('ranking.quizz.game', JSON.stringify(ranking));
  }

  changeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  render() {
    return (
      <div>
        {this.state.showMenuStart ? <MenuStart changeName={(e) => { this.changeName(e) }} showMenuStart={ () => { this.hideMenuStart() } } /> : ''}
        <Content />
      </div>
    );
  }

}

ReactDOM.render(<App />, document.getElementById("container"));