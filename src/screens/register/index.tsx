import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Register({route, navigation}): React.JSX.Element {
  const {name} = route.params;
  console.log('params: ', name);

  return (
    <View>
      <View>
        <Text>Adı:</Text>
      </View>
      <View>
        <Text>Soyadı:</Text>
      </View>
      <View>
        <Text>E-mail</Text>
      </View>
      <View>
        <Text>Password</Text>
      </View>
      <View>
        <Text>Password</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

export default Register;
