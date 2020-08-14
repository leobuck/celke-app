import React, { Component } from 'react';
import { ScrollView, Text, Image } from 'react-native';
import api from './service/api';

export default class Portifolio extends Component {

  state = {
    pageHome: "",
  }

  async componentDidMount() {
    const response = await api.get();
    
    this.setState({ pageHome: response.data.home });
  }

  render() {
    const { portUmTitulo, portUmSubtitulo } = this.state;
    return (
      <ScrollView>
        <Image
        source={{ uri: 'http://192.168.0.104/file/home/portolio_um.jpg'}}
        style={{width: 400, height: 400}}
        />
        <Text>{ portUmTitulo }</Text>
        <Text>{ portUmSubtitulo }</Text>
      </ScrollView>            
    );
  }
};
