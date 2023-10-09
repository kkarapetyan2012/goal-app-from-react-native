import { useState } from "react";
import { Button, Image, Modal, Pressable, StyleSheet, TextInput, View, Dimensions, useWindowDimensions } from "react-native";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    const { width, height } = useWindowDimensions();

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText)
    }

    const onAdd = () => {
        props.addGoalHundler(enteredGoalText);
        setEnteredGoalText('');
        console.log('width', deviceWidth);
        console.log('height', deviceHeight);
    }

   let content = (
    <>
        <Image style={styles.img} source={require('../assets/images/goal.png')} />
        <TextInput style={styles.inputText} placeholderTextColor='#fff' placeholder='Your app goals' onChangeText={goalInputHandler} value={enteredGoalText} />
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
                <Button title='Add goal' onPress={onAdd} />
            </View>
            <View style={styles.button}>
                <Button title='Cancel' onPress={props.onCancel} />
            </View>
        </View>
    </>
   )

   if(width > 500) {
    content = (
        <>
            <TextInput style={styles.inputText} placeholderTextColor='#fff' placeholder='Your app goals' onChangeText={goalInputHandler} value={enteredGoalText} />
            <View style={styles.landscapeContainer}>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add goal' onPress={onAdd} />
                    </View>
                </View>
                <Image style={styles.img} source={require('../assets/images/goal.png')} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.onCancel} />
                    </View>
                </View>
            </View>
        </>
       )
   }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                {/* <Image style={styles.img} source={require('../assets/images/goal.png')} />
                <TextInput style={styles.inputText} placeholderTextColor='#fff' placeholder='Your app goals' onChangeText={goalInputHandler} value={enteredGoalText} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add goal' onPress={onAdd} />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.onCancel} />
                    </View>
                </View> */}
                {content}
            </View>
           
        </Modal>
    )
}

export default GoalInput;

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom: 24,
        padding: 16,
        backgroundColor: '#1e085a',
    },
    landscapeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    img: {
        // width: 100,
        width: deviceHeight < 400 ? 100 : 150,
        // height: 100,
        height: deviceHeight < 400 ? 100 : 150,
        margin: 20,
    },
    inputText: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '100%',
        padding: deviceHeight < 400 ? 24 : 16,
        // color: '#fff',
        color: deviceHeight < 400 ? 'red' : 'yellow',
        borderRadius: 4,
        fontSize: deviceHeight < 400 ? 16 : 24,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: deviceHeight < 400 ? 'red' : 'yellow',
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    }
})