import React, { useEffect } from 'react';
import { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Pressable,
} from 'react-native';
import Item from './components/Item';
import NewItem from './components/NewItem';
import Calendar from 'react-native-calendars/src/calendar';

const App = () => {
  interface Food {
    name: string;
    exp: string;
    hasExp: boolean;
  };

  const [items, setItems] = useState<Food[]>([]);

  useEffect(() => {
    console.log("testing")
  }, [])

  return (
    <ScrollView
      style={{
        padding: 10,
        backgroundColor: 'whitesmoke'
      }}
    >
      {items.map((item, i) => (
        <View key={i}>
          {Item(item.name, item.exp, item.hasExp, () => (
            setItems(items.filter((_, index) => index !== i))
            ))}
        </View>
      ))}

      {NewItem(items, setItems)}
      {/* <Calendar/> */}
    </ScrollView>
  )
}

export default App;
