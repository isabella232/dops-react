var React = require('react'),
	Radium = require('radium');

var Col = React.createClass({
	styles: {
		half: { 
			width: '50%',
			'@media all and (max-width: 590px)': {
				width: '100%'
			}
		},
		right: { 
			float: 'right',
			'@media all and (max-width: 590px)': {
				float: 'none'
			}
		},
		left: { 
			float: 'left',
			paddingRight: 10,
			'@media all and (max-width: 590px)': {
				paddingRight: 0,
				float: 'none'
			}
		}
	},

	render: function() {
		return (
			<div key="" style={[this.styles.half, this.props.left && this.styles.left, this.props.right && this.styles.right]}>
				{this.props.children}
			</div>
		);
	}
});

module.exports = Radium(Col);
