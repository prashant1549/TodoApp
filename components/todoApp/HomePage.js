import React, {useState} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import plus from '../../assets/plus.png';
import ModalPage from './ModalPage';

export default function HomePage() {
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };

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
