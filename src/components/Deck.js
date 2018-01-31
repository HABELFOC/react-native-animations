import React, { Component } from 'react';
import { View, Text, Animated, ScrollView } from 'react-native';


class Deck extends Component{
	renderCards(){
		return this.props.data.map(item => {
			return this.props.renderCard(item);
		});
	}

	render(){
		return(
			<ScrollView>
				{this.renderCards()}
			</ScrollView>
		);
	};
}


export default Deck;