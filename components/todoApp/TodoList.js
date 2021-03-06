import React from 'react';
import {FlatList, Text, View} from 'react-native';
import ListItem from './ListItem';

export default function TodoList({Data, onEdit, onCheckBox, totalItem}) {
  return (
    <View style={{marginTop: 30}}>
      {Data.length <= 0 ? (
        <View
          style={{
            marginTop: 200,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#000'}}>No Data available</Text>
        </View>
      ) : (
        <View>
          <FlatList
            style={{height: 520}}
            data={Data}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <ListItem
                item={item}
                oneditIndex={onEdit}
                onIndexCheckBox={onCheckBox}
              />
            )}
          />
        </View>
      )}
    </View>
  );
}
