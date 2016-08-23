var React = require('react');
var Nav = require('Nav');

var Main = React.createClass({
	render: function(){
		return(
			<div>
				<Nav/> 
				<h2>Main Component</h2>
				{this.props.children}
				<h3>This is the index/main.</h3>
			</div>
		);
	}
});

module.exports = Main;