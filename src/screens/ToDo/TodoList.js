import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function TodoList(props) {
	return (
		<View style={styles.listContainer}>
			<Icon
				name={props.checked ? 'check' : 'square'}
				size={30}
				color="black"
				style={{ marginLeft: 15 }}
				onPress={props.setChecked}
			/>
			<View>
				{props.checked && <View style={styles.verticalLine} />}
				<Text style={styles.listItem}>{props.text}</Text>
			</View>
			<Icon
				name="trash-2"
				size={20}
				color="white"
				style={{ marginLeft: 'auto', marginRight: 10 }}
				onPress={props.deleteTodo}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	listContainer: {
		marginTop: '5%',
		flexDirection: 'row',
		borderColor: '#aaaaaa',
		borderBottomWidth: 0.5,
		width: '100%',
        alignItems: 'stretch',
        // opacity: 0.5,
		minHeight: 40
	},
	listItem: {
		paddingBottom: 20,
		paddingLeft: 10,
		// marginTop: 6,
		borderColor: 'green',
		fontSize: 17,
		fontWeight: 'bold',
		color: 'black'
	},
	verticalLine: {
		borderBottomColor: 'green',
		borderBottomWidth: 4,
		marginLeft: 10,
		width: '100%',
		position: 'absolute',
		marginTop: 15,
		fontWeight: 'bold'
	}
});