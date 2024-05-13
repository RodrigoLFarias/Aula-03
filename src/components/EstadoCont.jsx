import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function EstadosCont(){
    // let valor = 0;
    const [valor, setValor] = useState(0)
    return(
        <View>
            <Text>
                 valor atual: {valor}
            </Text>
            <Button 
            title = 'Clique aqui'
            // onPress={() => {valor = valor+1, console.log(valor) }}
            onPress = {() => {setValor(valor + 1), console.log(valor)}}
            />
        </View>
    )
}