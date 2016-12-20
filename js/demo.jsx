// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var Nhat = React.createClass({
  getPay(){
    this.state.money = parseInt(this.state.money) + 1;
    this.state.salary = parseInt(this.state.money - this.props.money);
    this.setState(this.state);
  },
  getInf: function(){
    alert(this.props.ten);
  },
  getInitialState(){
    return {
      money: this.props.money,
      salary: this.props.salary
    };
  },
  render: function(){
    return (
      <div>
        <h1>Nhatnkv {this.props.ten}</h1>
        <h4>Money : {this.state.money}</h4>
        <h4>Added : {this.state.salary}</h4>
        <button onClick={this.getPay}>Receive money</button>
      </div>
    );
  }
});

var InputTag = React.createClass({
  show(){
    var text = this.refs.txt.value;
    alert(text);
  },
  render(){
    return (
      <div>
        <input type='text' ref='txt'/>
        <button onClick={this.show}>Show</button>
      </div>
    );
  }
});

ReactDOM.render(
  <div>
    <InputTag />
    <Nhat ten='ReactJS' money='10'/>
    <Nhat ten='NodeJS' money='20'/>
  </div>
  , document.getElementById('root')
);

console.log('yolo');
