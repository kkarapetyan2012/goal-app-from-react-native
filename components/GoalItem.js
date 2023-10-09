import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem(props) {
    // console.log('props', props)
    return (
      <View style={styles.goalItem} onPress={props.onDeleteItem.bind(this, props.id)}>
        <Pressable 
          android_ripple={{color: '#210644'}} 
          onPress={props.onDeleteItem.bind(this, props.id)} 
          style={({pressed}) => pressed && styles.pressItem}
        >
            <Text style={styles.goalText}>{props.text}</Text>
        </Pressable>
      </View>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6, // not working in ios
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
})