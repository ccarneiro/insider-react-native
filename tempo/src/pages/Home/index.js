import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList, View } from 'react-native';
import * as Location from 'expo-location';

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Conditions from '../../components/Conditions';
import Forecast from '../../components/Forecast';
import api, { key } from '../../services/api';


export default function Home() {

  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState([]);
  const [icon, SetIcon] = useState({ name: 'cloud', color: '#FFF' });
  const [background, setBackground] = useState(['#1ed6ff', '#97c1ff']);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();

      console.log('status', status);
      if ( status !== 'granted' ) {
        setErrorMsg('Permissão negada para acessar localização');
        setLoading(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log('location: ', location);

      const response = await api.get(`/weather?key=${key}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`);
      
      setWeather(response.data);
      console.log('Nome da cidade', response.data.results.city_name);

      if ( response.data.results.currently === 'noite' ) {
        setBackground(['#0c3741', '#0f2f61']);
      }

      switch(response.data.results.condition_slug) {
        case 'clear_day':
          SetIcon({ name: 'partly-sunny', color: '#FFB300' });
          break;
          case 'rain':
            SetIcon({ name: 'rainy', color: '#FFF' });
            break;
          case 'storm':
            SetIcon({ name: 'rainy', color: '#FFF' });
            break;
      }
      setLoading(false);
      
    })();
  }, []);

  if ( loading ) {
    return(
      <View style={styles.container}>
        <Text style={{ fontSize: 17, fontStyle: 'italic' }}>Carregando dados...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Menu />
      <Header background={background} weather={weather} icon={icon}/>
      <Conditions weather={weather}/>
      <FlatList
        style={styles.list}
        data={weather.results.forecast}
        keyExtractor={item => item.date}
        renderItem={({item}) => <Forecast data={item}/>}
        horizontal={ true}
        contentContainerStyle={{paddingBottom: '5%'}}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8f0ff',
    paddingTop: '5%',
  },
  list: {
      marginTop: 10,
      marginBottom: 10,
  }
});
