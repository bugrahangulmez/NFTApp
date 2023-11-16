import React from 'react';
import {Onboarding} from './screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import TabBarNav from './navigation/TabBarNav';

const App = () => {
  const [onboardingStatus, setOnboardingStatus] = React.useState<
    'active' | 'done'
  >('active');
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        {onboardingStatus === 'active' ? (
          <Onboarding setOnboardingStatus={setOnboardingStatus} />
        ) : (
          <TabBarNav />
        )}
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
