import React, { Component } from 'react';
import { View, Text, Animated, TouchableWithoutFeedback } from 'react-native';
import Dimensions from 'Dimensions';


class Ball extends Component{

	componentWillMount(){
		let width = Math.floor(Math.random() * (Dimensions.get('window').width - 50 * 3) + 50);
		let height = Math.floor(Math.random() * (Dimensions.get('window').height - 50 * 3) + 50);
		this.position = new Animated.ValueXY({
			"x": width,
			"y": height
		});
	}

	startAnimated = () => {
		let randX = Math.floor(Math.random() * (Dimensions.get('window').width - 50 * 3) + 50);
		let randY = Math.floor(Math.random() * (Dimensions.get('window').height - 50 * 3) + 50);
		Animated.spring(this.position, {
			toValue: { x: randX, y: randY }
		}).start();
	}

	render(){
		return(
			<Animated.View style={this.position.getLayout()}>
				<TouchableWithoutFeedback onPress={this.startAnimated}>
					<View style={styles.ball} />
				</TouchableWithoutFeedback>
			</Animated.View>
		);
	};
}


const styles = {
	ball: {
		width: 60,
		height: 60,
		borderRadius: 50,
		backgroundColor: '#0f0',
		elevation: 4 
	}
};


export default Ball;