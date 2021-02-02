import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
    TouchableOpacity,
    ScrollView,
	TextInput
} from 'react-native';

import CustomHeader from '../../navigation/CustomHeader'

import Icon from 'react-native-vector-icons/Feather';

const image = { uri: "https://cms.coppercolorado.com/sites/copper/files/2020-04/Copper%20Mountain%20Mobile%20Background%20-%20Resolution_1.jpg" };


import TodoList from './TodoList';

export default function App() {
	const [value, setValue] = useState('');
	const [todos, setTodos] = useState([]);

	addTodo = () => {
		if (value.length > 0) {
			setTodos([...todos, { text: value, key: Date.now(), checked: false }]);
			setValue('');
		}
	};

	checkTodo = id => {
		setTodos(
			todos.map(todo => {
				if (todo.key === id) todo.checked = !todo.checked;
				return todo;
			})
		);
	};

	deleteTodo = id => {
		setTodos(
			todos.filter(todo => {
				if (todo.key !== id) return true;
			})
		);
	};

	return (
        // <ImageBackground source={image} style={styles.MainContainer}>
             <View style={styles.container}> 
                    <View style={styles.header}>
                        <CustomHeader />
                        </View>
                        <View >
                            <Text style={styles.headerText}>My Day</Text>
                        </View>
                    <View style={styles.textInputContainer}>
                        <TextInput
                            style={styles.textInput}
                            multiline={true}
                            placeholder="What do you want to do today?"
                            placeholderTextColor="#abbabb"
                            value={value}
                            onChangeText={value => setValue(value)}
                        />
                        <TouchableOpacity onPress={() => addTodo()}>
                            <Icon name="plus" size={20} color="white" style={{ marginLeft: 15 }} />
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={{ width: '100%' }}>
                        {todos.map(item => (
                            <TodoList
                                text={item.text}
                                key={item.key}
                                checked={item.checked}
                                setChecked={() => checkTodo(item.key)}
                                deleteTodo={() => deleteTodo(item.key)}
                            />
                        ))}
                    </ScrollView>
            </View>
		// </ImageBackground>
	);
}

const styles = StyleSheet.create({
	MainContainer: {
		flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#455A64',
    },
	header: {
        marginTop: '20%',
		fontSize: 20,
		color: 'red',
		paddingBottom: 10
    },
    headerText:{
        color: '#abbabb',
        paddingHorizontal: 10,
        fontSize: 30,
        fontWeight: 'bold',
    },
	textInputContainer: {
		flexDirection: 'row',
		alignItems: 'baseline',
        backgroundColor: '#37474F',
        padding:10,
        borderRadius: 10,
        margin: 5,
		paddingRight: 10,
		paddingBottom: 10
	},
	textInput: {
		flex: 1,
		height: 20,
		fontSize: 20,
		color: '#abbabb',
		paddingLeft: 10,
		minHeight: '3%'
	}
});
