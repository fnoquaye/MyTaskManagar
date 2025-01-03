


import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

const Task = ({ text, dueDate, priority, onDelete }) => {
    const renderRightActions = () => (
        <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
    );
    return (
        <Swipeable renderRightActions={renderRightActions} >
            <View style={styles.item}>
                <View style={styles.itemLeft}>
                    <View style={styles.square}></View>
                    <Text style={styles.itemText}>{text}</Text>
                <View style={styles.taskDetailsParent}> 
                    <Text style={styles.taskDetails}>{dueDate}</Text>
                    <Text style={styles.taskDetails}>{priority}</Text>
                </View>
                </View>
                <View style={styles.circular}></View>
            </View>
        </Swipeable>

    );
};
const styles = StyleSheet.create({
taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    gap: 7,
    // backgroundColor: 'red',
    marginBottom: 5
},
taskDetailsParent:{
    flexDirection: 'column',

},

    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },

    taskDetails:{
        marginRight: 5,
        textAlign: 'right',
        fontSize: 11,
    },

    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemText: {
        maxWidth: '80%',
        marginLeft: 5,
        marginRight: 10,
        minWidth: 160,
        maxWidth: 160,
    
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 5,
    },
    deleteButton: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: '69%',
        borderRadius: 10,
    },
    deleteButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },

});

export default Task;
