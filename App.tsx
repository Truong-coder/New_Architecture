import {StyleSheet, View, Text, Image, FlatList} from 'react-native';

import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function HomeScreen() {
  const [data, setData] = useState([]); //an array which contains the fetched API data.
  // console.log('data: ', data);

  useEffect(() => {
    GetData();
  }, []);

  const options = {
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/photos',
  };
  const GetData = async () => {
    axios
      .request(options)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          return (
            <View style={styles.container}>
              <Text style={styles.text}>
                {' '}
                ID: {item.id} - title: {item.title}
              </Text>
              <Image
                style={styles.image}
                source={{
                  uri: item.url,
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 500,
    backgroundColor: 'white',
    // justifyContent: 'space-between',
  },

  title: {
    fontSize: 18,
    color: 'black',
    width: 250,
    Top: 0,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
    color: 'black',
    marginLeft: 10,
  },
  image: {
    borderColor: 'black',
    borderWidth: 1,
    height: 150,
    width: 100,
    marginTop: 7,
    marginLeft: 10,
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});

