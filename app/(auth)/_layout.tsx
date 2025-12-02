import { Stack } from 'expo-router';



const AuthScreen = () => {
  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='login'
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='signup'
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='forget-password'
        options={{
          headerShown: false
        }}
      />
    </Stack>
  )
}

export default AuthScreen
