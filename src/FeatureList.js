import React, { Component } from 'react';



class FeatureList extends Component {
	render() {
		var {title, details} = this.props;
		return (
            <div className="Features">
                <h2>{title}</h2>
                <hr/>
                <p>{details}</p>
            </div>
		);
	}
}

export default FeatureList;