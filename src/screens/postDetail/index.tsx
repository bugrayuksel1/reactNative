import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

function PostDetail({route, navigation}): React.JSX.Element {
  const {id} = route.params;
  const [postDetail, setPostDetail] = useState({title: '', body: ''});

  useEffect(() => {
    const getPostData = async () => {
      console.log('render oldu ve tekar istek atılacak.');
      const postData = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
      );
      setPostDetail(postData?.data);
    };
    getPostData();
    // bu kısım sadece ilk render olduğu anda çalışır.
  }, []); // component did mount

  // useEffect(() => {
  //   // component postDetail değiştiği için her render olduğunda burası çalışır.
  //   const getPostData = async () => {
  //     console.log('render oldu ve tekar istek atılacak.');

  //     const postData = await axios.get(
  //       `https://jsonplaceholder.typicode.com/posts/${id}`,
  //     );
  //     setPostDetail(postData?.data);
  //   };
  //   getPostData();
  // }, [postDetail]);

  return (
    <View>
      <View>
        <Text>title: {postDetail.title}</Text>
      </View>
      <View>
        <Text>body: {postDetail.body}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

export default PostDetail;
