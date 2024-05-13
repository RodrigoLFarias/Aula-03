import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';


export default function EstadosCalculo(){
        // let valor = 0;
        const [valor, setValor] = useState(0)
     
                function Somar(){
                    setValor(valor + 1)
                    }   
                function Subtrair(){
                setValor(valor - 1);
                    }

        return(
            <View>
                <Text>
                     valor atual: {valor}
                </Text>
                <Button 
                title = 'Clica aqui'
                // onPress={() => {valor = valor+1, console.log(valor) }}
                onPress = {() => {Somar()}}
                />

               <Button 
                title = 'Subtrair'
                // onPress={() => {valor = valor+1, console.log(valor) }}
                onPress = {() => {Subtrair()}}
                />
              </View>
        )
    }

