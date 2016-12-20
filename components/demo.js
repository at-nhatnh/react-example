// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var Nhat = React.createClass({displayName: "Nhat",
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
      React.createElement("div", null, 
        React.createElement("h1", null, "Nhatnkv ", this.props.ten), 
        React.createElement("h4", null, "Money : ", this.state.money), 
        React.createElement("h4", null, "Added : ", this.state.salary), 
        React.createElement("button", {onClick: this.getPay}, "Receive money")
      )
    );
  }
});

var InputTag = React.createClass({displayName: "InputTag",
  show(){
    var text = this.refs.txt.value;
    alert(text);
  },
  render(){
    return (
      React.createElement("div", null, 
        React.createElement("input", {type: "text", ref: "txt"}), 
        React.createElement("button", {onClick: this.show}, "Show")
      )
    );
  }
});

ReactDOM.render(
  React.createElement("div", null, 
    React.createElement(InputTag, null), 
    React.createElement(Nhat, {ten: "ReactJS", money: "10"}), 
    React.createElement(Nhat, {ten: "NodeJS", money: "20"})
  )
  , document.getElementById('root')
);

console.log('yolo');
