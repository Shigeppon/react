var MainComponent = React.createClass({
  render: function() {
    return (
      <MyForm />
    );
  }
});

var MyForm = React.createClass({
  getInitialState: function() {
    return {
      textValue: "initial",
      checked: false
    };
  },
  handleChangeText: function(e) {
    this.setState({
      textValue: e.target.value
    });
  },
  handleChangeCheckBox: function(e) {
    this.setState({
      checked: e.target.checked
    });
  },
  render: function() {
    return (
      <form>
      <input
      type="text"
      value={this.state.textValue}
      onChange={this.handleChangeText}
      />
      <input
      type="checkbox"
      value={this.state.textValue}
      checked={this.state.checked}
      onChange={this.handleChangeCheckBox}
      />

      </form>);
  }
});


ReactDOM.render(
  <MainComponent />,
  document.getElementById('content')
);
