import { View, Text, Dimensions} from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get('window');

const OnboardingScreen = () => {
  return (
    <View className="flex-1 bg-white">
      <Onboarding
        pages={[
          {
            backgroundColor: '#fff',
            image: (
              <View className="w-40 h-56">
                <LottieView style={{width: "300px", height: "400px"}} source={require('../../assets/animations/achieve.json')} autoPlay loop />
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