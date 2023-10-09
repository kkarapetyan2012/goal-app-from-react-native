import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  // const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const startGoallHundler = () => {
    setIsVisible(true)
  }

  const endModalHundler = () => {
    setIsVisible(false)
  }

  // const goalInputHandler = (enteredText) => {
  //   setEnteredGoalText(enteredText)
  // }
  const addGoalHundler = (enteredGoalText) => {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, 
      {text: enteredGoalText, id: Math.random().toString()}
      // {text: enteredGoalText, key: Math.random().toString()}
    ]);
    // setEnteredGoalText('');
    endModalHundler()
  }

  function deleteGoalHundler (id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals = currentCourseGoals.filter(goal => goal.id !== id)
    })
  }
  return (
    <>
    <StatusBar style='light' />
    <View style={styles.appContainer}>
      {/* <View style={styles.inputContainer}>
        <TextInput style={styles.inputText} placeholder='Your app goals' onChangeText={goalInputHandler} value={enteredGoalText} />
        <Button title='Add goal' onPress={addGoalHundler} />
      </View> */}
      <Button title='Add a new goal' color='black' onPress={startGoallHundler} />
      <GoalInput visible={isVisible} addGoalHundler={addGoalHundler} onCancel={endModalHundler} />
      <View style={styles.goalsContainer}>
        {/*  alwaysBounceVertical={false} this propert for IOS when we have 1 item in components */}

        {/* {courseGoals.map(goal => <Text style={styles.goalItem} key={goal}>{goal}</Text>)} */}
        {/* <ScrollView alwaysBounceVertical={false}> 
          {courseGoals.map(goal => 
              <View style={styles.goalItem} key={goal}>
                <Text style={styles.goalText}>{goal}</Text>
              </View>
          )}
        </ScrollView> */}
        <FlatList
          data={courseGoals}
          // renderItem={(itemData) => 
          //   <View style={styles.goalItem} >
          //     <Text style={styles.goalText}>{itemData.item.text}</Text>
          //   </View>
          // }
          renderItem={(itemData) => {
            return <GoalItem 
                    text={itemData.item.text} 
                    id={itemData.item.id}
                    onDeleteItem={deleteGoalHundler} 
                  />
          }}
          // keyExtractor={(item, index) => {
          //   return item.id
          // }}
          alwaysBounceVertical={false}
        >

        </FlatList>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
