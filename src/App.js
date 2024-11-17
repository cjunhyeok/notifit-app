import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen'; // 가정한 HomeScreen 파일

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'black', // BottomTab 배경을 검은색으로 설정
        },
        tabBarActiveTintColor: 'white', // 활성화된 아이콘 색상
        tabBarInactiveTintColor: 'gray', // 비활성화된 아이콘 색상
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="MyPage" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Bottom" component={BottomTabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}