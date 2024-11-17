import { StyleSheet, SafeAreaView, View, StatusBar, Text, TouchableOpacity } from 'react-native';
import { CalendarView } from '../components/Calendar';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content"></StatusBar>
      <CalendarView />
      <View style={styles.buttonContainer}>
      <HomeButton title="Copy"></HomeButton>
      <HomeButton title="Delete"></HomeButton>
      </View>
    </SafeAreaView>
  );
}

const HomeButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
    width: '90%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#1c1c1e', // 다크 그레이 색상으로 버튼 배경 설정
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#e5e5e5',  // 연한 회색 텍스트로 검은색 배경과 조화롭게 설정
    fontSize: 16,
  },
});
