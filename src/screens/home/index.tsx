import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import ListItem from '../../components/listItem/listItem';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../redux/reducers/userSlice';

function Home({navigation}: any): React.JSX.Element {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const {userInfo, isLoggedIn} = useSelector(state => state.user);

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
      {!isLoggedIn ? (
        <>
          <Button
            title="Üye ol!"
            onPress={() => navigation.navigate('Register', {name: 'serkan'})}
          />
          <Button
            title="Giriş Yap"
            onPress={() => navigation.navigate('Login')}
          />
        </>
      ) : (
        <View style={styles.loginHeader}>
          <Text style={styles.welcome}>Hoşgeldin {userInfo.name}</Text>
          <Button title="Çıkış Yap" onPress={() => dispatch(logout())} />
        </View>
      )}
      <FlatList
        data={posts}
        renderItem={({item}) => <ListItem item={item} />}
        keyExtractor={item => String(item.id)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 30,
  },
  loginHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
});

export default Home;
