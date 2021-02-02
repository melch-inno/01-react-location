import React, { useState } from 'react'
import { Text, View } from 'react-native'

function HooksTest() {
    const [count, setCount] = useState(0);
        return (
            <View>
              <Text>You clicked {count} times</Text>
              <button onClick={() => setCount(count + 1)}>
                Click me
              </button>
            </View>
          );
}

export default HooksTest;

