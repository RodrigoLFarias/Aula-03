import { StyleSheet, Text, View, Image } from 'react-native';

export default  function MinhaImagem(props){

const linkImagem = "https://th.bing.com/th/id/OIP.cYbF89HwioIdgeYGSrrrEgHaE7?rs=1&pid=ImgDetMain"

return(
  <View style= {styles.container}>
  <Text style ={{ color: "purple", fontSize: 25}}>
      Imagem importada de um componente.
      {props.texto}
  </Text>
<Image 
 source={{ uri: linkImagem}}
 style={{width: props.largura, height: props.altura }}
 />

  </View>
   )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

});