import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  return (
<SafeAreaView className=' bg-red-500 h-full'>
    <View></View>
    <Text className='text-4xl font-bold'>Home Screen</Text>
</SafeAreaView>
  )
}

export default HomeScreen