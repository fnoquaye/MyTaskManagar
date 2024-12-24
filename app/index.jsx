


import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Modal, FlatList, Alert } from 'react-native';
import Task from '../components/task';
import styles from '../components/styles';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
// import { Picker } from '@react-native-picker/picker';
import { Swipeable } from 'react-native-gesture-handler';

export default function HomeScreen() {
    const [task, setTask] = useState('');
    const [taskItems, setTaskItems] = useState([]);
    const [showOptions, setShowOptions] = useState(false);
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('Priority');
    const [datePickerVisible, setDatePickerVisible] = useState(false);
    // const [priorityPickerVisible, setPriorityPickerVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [sortCriteria, setSortCriteria] = useState('none');
    const [sortModalVisible, setSortModalVisible] = useState(false);

    const [priorityPickerVisible, setPriorityPickerVisible] = useState(false);

    const handlePriorityClick = (priorityValue) => {
        setPriority(priorityValue);
        setPriorityPickerVisible(false); // Hide the picker after selection
    };







    const handleAddTask = () => {
        if (task.trim()) {
            setShowOptions(true); // Show the modal with due date and priority options
        }
    };

    const handleSaveTask = () => {
        if ((priority === "Low" || priority === "Medium" || priority === "High") && dueDate) {
            const newTask = { text: task, dueDate, priority };
            setTaskItems([...taskItems, newTask]);
            setTask('');
            setDueDate('');
            setPriority('Priority'); // Reset to default priority
            setShowOptions(false); // Hide the modal after saving the task
        } else {
            Alert.alert("Invalid Input", "Please select a valid priority and due date.");
        }
    };
    

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || new Date();
        setDatePickerVisible(false); // Close date picker after selection
        setSelectedDate(currentDate);
        setDueDate(currentDate.toDateString());
    };

    const handleDelete = (index) => {
        Alert.alert(
            "Delete Task",
            "Are you sure you want to delete this task?",
            [
                { text: "Cancel", style: "cancel" },
                { text: "OK", onPress: () => {
                    setTaskItems((prevTasks) => prevTasks.filter((_, i) => i !== index));
                }},
            ]
        );
    };

    const sortTasks = (tasks, criteria) => {
        switch (criteria) {
            case 'dueDate':
                return tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
            case 'priority':
                const priorityOrder = { High: 1, Medium: 2, Low: 3 };
                return tasks.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
            default:
                return tasks;
        }
    };

    const sortedTasks = sortTasks(taskItems, sortCriteria);

    const renderRightActions = (index) => (
        <TouchableOpacity onPress={() => handleDelete(index)} style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
    );

    return (
        <GestureHandlerRootView style={{flex: 1}}>
        <View style={styles.container}>
            <View style={styles.taskWrapper}>
                <Text style={styles.sectionTitle}>Tasks To Complete</Text>
                <TouchableOpacity onPress={() => setSortModalVisible(true)} style={styles.sortButton}>
                    <Text style={styles.sortButtonText}>Sort By</Text>
                </TouchableOpacity>
                <FlatList
    data={sortedTasks}
    renderItem={({ item, index }) => (
        <Swipeable renderRightActions={() => renderRightActions(index)}>
            <TouchableOpacity style={styles.taskItem}>
                <Task
                    text={item.text}
                    dueDate={item.dueDate}
                    priority={item.priority}
                    onDelete={() => handleDelete(index)}
                />
            </TouchableOpacity>
        </Swipeable>
    )}
    keyExtractor={(item, index) => index.toString()}
/>

            </View>
            <View style={styles.writeTaskWrapper}>
                <TextInput
                    style={styles.input}
                    placeholder="Write a Task"
                    value={task}
                    onChangeText={setTask}
                />
                <TouchableOpacity onPress={handleAddTask} style={styles.addWrapper}>
                    <Text style={styles.addText}>+</Text>
                </TouchableOpacity>
            </View>

            {/* Options Modal */}
            <Modal
                visible={showOptions}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setShowOptions(false)}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Task Options</Text>

                        {/* Date Picker Button */}
                        <TouchableOpacity
                            onPress={() => setDatePickerVisible(true)}
                            style={styles.dateButton}
                        >
                            <Text>{dueDate ? dueDate : "Select Due Date"}</Text>
                        </TouchableOpacity>

                        {/* Date Picker Modal */}
                        {datePickerVisible && (
                            <DateTimePicker
                                value={selectedDate}
                                mode="date"
                                display="default"
                                onChange={handleDateChange}
                            />
                        )}

                        {/* Priority Picker */}
                        <TouchableOpacity onPress={() => setPriorityPickerVisible(true)} style={styles.priorityTextWrapper}>
                <Text style={styles.priorityText}>{priority}</Text>
            </TouchableOpacity>
            

            <Modal
                transparent={true}
                visible={priorityPickerVisible}
                animationType="slide"
                onRequestClose={() => setPriorityPickerVisible(false)}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Select Priority</Text>

                        {/* Options as Touchable Elements */}
                        <TouchableOpacity
                            style={styles.pickerItem}
                            onPress={() => handlePriorityClick('High')}
                        >
                            <Text style={styles.pickerText}>High</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.pickerItem}
                            onPress={() => handlePriorityClick('Medium')}
                        >
                            <Text style={styles.pickerText}>Medium</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.pickerItem}
                            onPress={() => handlePriorityClick('Low')}
                        >
                            <Text style={styles.pickerText}>Low</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

                        <TouchableOpacity
                            onPress={handleSaveTask}
                            style={styles.modalCloseButton}
                        >
                            <Text style={styles.modalCloseText}>Save Task</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Sorting Modal */}
            <Modal
                visible={sortModalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setSortModalVisible(false)}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Sort Tasks</Text>
                        <TouchableOpacity
                            style={styles.modalOptionButton}
                            onPress={() => { setSortCriteria('dueDate'); setSortModalVisible(false); }}
                        >
                            <Text style={styles.modalOptionText}>Sort by Due Date</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.modalOptionButton}
                            onPress={() => { setSortCriteria('priority'); setSortModalVisible(false); }}
                        >
                            <Text style={styles.modalOptionText}>Sort by Priority</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.modalOptionButton}
                            onPress={() => { setSortCriteria('none'); setSortModalVisible(false); }}
                        >
                            <Text style={styles.modalOptionText}>Clear Sorting</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.modalCloseButton}
                            onPress={() => setSortModalVisible(false)}
                        >
                            <Text style={styles.modalCloseText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
        </GestureHandlerRootView>
    );
}
