


import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },
    taskWrapper: {
        paddingTop: 30,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    items: {
        marginTop: 30,
    },
    writeTaskWrapper: {
        position: 'absolute',
        padding: 5,
        bottom: 2,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: '85%',
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    addText: {
        fontSize: 25,
        color: '#555',
        fontWeight: 'bold',
    },
    dateButton: {
        backgroundColor: 'lightblue',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 120,
    },
    dateButtonText: {
        fontSize: 16,
        color: 'black',
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 40,
        paddingHorizontal: 10,
    },
    priorityText: {
        backgroundColor: 'lightblue',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginHorizontal: 5,
        marginTop: 15,
        minWidth: 120,
        textAlign: 'center'
,        alignItems: 'center',
        justifyContent: 'center',
    },
    deleteButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    sortButton: {
        alignSelf: 'flex-end',
        marginBottom: 10,
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 5,
    },
    sortButtonText: {
        color: '#55BCF6',
        fontWeight: 'bold',
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: '70%',
        height: '40%',
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        marginBottom: 15,
        fontWeight: 'bold',
    },
    modalOptionButton: {
        backgroundColor: '#EEE',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 10,
        width: '80%',
        alignItems: 'center',
    },
    modalOptionText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    modalCloseButton: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#55BCF6',
        borderRadius: 5,
        alignItems: 'center',
    },
    modalCloseText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    picker: {
        width: '80%',
    },
    pickerItem: {
        backgroundColor: 'lightblue',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginHorizontal: 5,
        marginTop: 15,
        minWidth: 120, 
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default styles;
