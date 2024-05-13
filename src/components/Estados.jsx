import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useState } from 'react';



export default function Estados(){
    const [valor, setValor] = useState(0)
    return(
        <View>

        <Text>
            Valor atual: {valor}
        </Text>
        <Button 
        title= 'Clique aqui'
        onPress={() => setValor(valor+1)}
        />

        </View> 
    )
}