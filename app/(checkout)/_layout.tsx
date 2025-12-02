import { Stack } from 'expo-router';


const CheckoutScreen = () => {
  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='order'
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='payment'
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='success'
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='checkout-products'
        options={{
          headerShown: false
        }}
      />
    </Stack>
  )
}

export default CheckoutScreen
