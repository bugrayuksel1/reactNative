import React from 'react';
import {Text, View} from 'react-native';

type ItemType = {userId: string; id: number; title: string; body: string};

type ListItemPropsType = {
  item: ItemType;
};

function ListItem(props: ListItemPropsType): React.JSX.Element {
  console.log('props.item: ', props.item);

  return (
    <View>
      <Text>{props.item.title}</Text>
    </View>
  );
}

export default ListItem;
