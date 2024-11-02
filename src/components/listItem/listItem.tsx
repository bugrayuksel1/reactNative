import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

type ItemType = {userId: string; id: number; title: string; body: string};

type ListItemPropsType = {
  item: ItemType;
};

function ListItem(props: ListItemPropsType): React.JSX.Element {
  const navigation = useNavigation();
  const {isLoggedIn} = useSelector(state => state.user);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('PostDetail', {id: props.item.id})}>
      <Text>{props.item.title}</Text>
    </TouchableOpacity>
  );
}

export default ListItem;
