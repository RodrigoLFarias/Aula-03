import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import MinhaImagem from './src/components/Minhaimagem';
import Estados from './src/components/Estados';
import React, { useState } from 'react';
import EstadosCont from './src/components/EstadoCont';
import calculoSomar from './src/components/EstadosCalculo';
import EstadosCalculo from './src/components/EstadosCalculo'



export default function App() {
  const [nome, setNome] = useState('')
  function Entrar(){
    setNome('Rodrigo')
  }
  return (
    <View style={styles.container}>
     <MinhaImagem largura ={500} altura={250} texto=" Este texto é dinâmico!"/>
     <Estados />
      <Text style=  {{fontSize:36}}>
        {nome}
      </Text>
      <Button 
      title = 'Entrar'
      onPress ={() => Entrar()}
      />
      <EstadosCont />
      <EstadosCalculo />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
