var React = require('react');
var Results = require('../components/results');
var githubHelpers = require('../utils/githubHelpers');

var ResultContainer = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true,
      scores: []
    }
  },
  componentDidMount : function(){
    githubHelpers.battle(this.props.location.state.playersInfo)
      .then(function(scores){
        this.setState({
          isLoading: false,
          scores: scores
        });
      }.bind(this));
  },
  render: function() {
    return (
      <Results 
        isLoading={this.state.isLoading}
        scores={this.state.scores}
        playersInfo = {this.props.location.state.playersInfo}
        />
    )
  }
});

module.exports = ResultContainer;