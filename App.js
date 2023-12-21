import { View, Text } from 'react-native'
import React from 'react'
import Main from './Main.jsx';
import { Provider } from 'react-redux'
import { store } from './redux/store.js';
import { StripeProvider } from '@stripe/stripe-react-native';


const stripeKey = "pk_test_51MP5oPSC7de4UHnWJpZHtLjvOf8LPVXwUeAW55DRp9zvaq465uhOkHmGOviFCsuaOuj1JWElKVyFDeid6oevcJK600BSVqVt0O";


export default function App() {
  return (
    <StripeProvider
      threeDSecureParams={{
        backgroundColor: '#fff',
        timeout: 5,
      }}
      merchantIdentifier='kumar-eCommerce.com'
      publishableKey={stripeKey}
    >
      <Provider store={store}>
        <Main />
      </Provider>
    </StripeProvider>

  );
}