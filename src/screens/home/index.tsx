import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Button, FlatList, StyleSheet, View} from 'react-native';
import ListItem from '../../components/listItem/listItem';

function Home({navigation}: any): React.JSX.Element {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPostData = async () => {
      const postData = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      );
      setPosts(postData?.data);
    };
    getPostData();
  }, []);

  return (
    <View>
      <Button
        title="Üye ol!"
        onPress={() => navigation.navigate('Register', {name: 'serkan'})}
      />
      <FlatList
        data={posts}
        renderItem={({item}) => <ListItem item={item} />}
        keyExtractor={item => String(item.id)}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default Home;
