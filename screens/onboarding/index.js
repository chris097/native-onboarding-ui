import { View, Text} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Onboarding from 'react-native-onboarding-swiper';


const OnboardingScreen = () => {
  return (
    <View className="flex-1 bg-white">
      <Onboarding
        pages={[
          {
            backgroundColor: '#fff',
            image: (
              <View>
                <Text>Hello World</Text>
              </View>
            ),
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#fff',
            image: (
              <View>
                <Text>Hello World</Text>
              </View>
            ),
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#fff',
            image: (
              <View>
                <Text>Hello World</Text>
              </View>
            ),
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
        ]}
      />
    </View>
  );
};

export default OnboardingScreen;