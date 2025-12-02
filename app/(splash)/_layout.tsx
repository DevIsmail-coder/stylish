import { Stack } from 'expo-router';



const SplashScreen = () => {
  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='splash-screenhq1'
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='splash-screenhq2'
        options={{
          headerShown: false
        }}
      />
    </Stack>
  )
}

export default SplashScreen
