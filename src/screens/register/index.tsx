import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setUserData} from '../../redux/reducers/userSlice';

function Register({route, navigation}): React.JSX.Element {
  const dispatch = useDispatch();
  const {userInfo, isLoggedIn} = useSelector(state => state.user);

  return (
    <View>
      <View>
        <Text>Kullanıcı Adı: {userInfo.userName}</Text>
      </View>
      <View>
        <Text>Adı: {userInfo.name}</Text>
      </View>
      <View>
        <Text>Soyadı: {userInfo.surName}</Text>
      </View>
      <View>
        <Text>Cinsiyet: {userInfo.gender}</Text>
      </View>
      <View>
        <Text>Yaş: {userInfo.age}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

export default Register;
