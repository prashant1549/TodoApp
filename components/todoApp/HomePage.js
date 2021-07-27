import React, {useState} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import plus from '../../assets/plus.png';
import ModalPage from './ModalPage';

export default function HomePage() {
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };

  // const handleChange = value => {
  //   setTitle(value);
  // };
  // const handleDate = value => {
  //   setSelectDate(value.dateString);
  // };
  // const handleTime = value => {
  //   setSelectTime(value);
  // };

  // const handleFilterAll = () => {
  //   const data = [...storage];
  //   setData(data);
  // };
  // const handleFilterDue = () => {
  //   const data = [...storage];
  //   const filterData = data.filter(item => {
  //     const leftTime = moment(item.date + item.time, 'YYYY-MM-DDLT');
  //     const pastTime = moment(leftTime);
  //     const presentTime = moment(new Date());
  //     const duration = moment.duration(pastTime.diff(presentTime));
  //     return Math.ceil(duration.asMinutes()) <= 0;
  //   });
  //   setData(filterData);
  // };
  // const handleFilterComplete = async () => {
  //   const todoData = JSON.parse(
  //     (await AsyncStorage.getItem('TodoData')) || '[]',
  //   );
  //   console.log('AsyncStorage :', todoData);
  //   const filterData = todoData.filter(n1 => n1.isSelected === true);
  //   setData(filterData);
  // };
  // const handleFilterNotComplete = () => {
  //   const data = [...storage];
  //   const filterData = data.filter(n1 => n1.isSelected === false);
  //   setData(filterData);
  // };
  return (
    <View>
      <View style={styles.row}>
        <View style={{flex: 1}}>
          <Text style={styles.title}>Today</Text>
        </View>
        <View style={styles.end}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Image source={plus} style={styles.image}></Image>
          </TouchableOpacity>
        </View>
      </View>
      <ModalPage modalVisible={modalVisible} callBack={closeModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingTop: 30,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  image: {
    width: 30,
    height: 30,
  },
  end: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
