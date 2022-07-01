import React from 'react';
import {View, Image, Text, StyleSheet, SafeAreaView, StatusBar, Pressable, Linking} from 'react-native';

const colorGit = '#0A0C10';
const colorFont = '#C9D1D9';
const colorDarkFont = '#4F565E';

const urlGithub = 'https://github.com/JuliaInoscencia';
const imgPerfil= 'https://media-exp2.licdn.com/dms/image/C5603AQFenjFH08rkog/profile-displayphoto-shrink_800_800/0/1647958772076?e=1661990400&v=beta&t=1xui8sAESomDaswqU-5OboUiDhNAGU7pAm2xWnvCkzs';

const App = () =>{
  const handlePressGoToGithub = async () =>{
    console.log('verificando link');
    const res = await Linking.canOpenURL(urlGithub);
    if(res){
      console.log('link aprovado. Abrindo link!');
      await Linking.openURL(urlGithub);
    }
};  
    return(
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGit} barStyle='light-content'/>
      <View style={style.content}>
        <Image accessibilityLabel='Júlia com camiseta e fundo da Generation Brasil.' style={style.avatar} source={{uri: imgPerfil}}/>
        <Text accessibilityLabel='Júlia dos Santos' style={[style.defaultText, style.name]}>Júlia dos Santos</Text>
        <Text accessibilityLabel='JuliaInoscencia' style={[style.defaultText, style.nickname]}>JuliaInoscencia</Text>
        <Text accessibilityLabel='Dev. Java Jr. Full Stack | Monitora - nPeriferias, IEA-USP' style={[style.defaultText, style.descricao]}>Dev. Java Jr. Full Stack | Monitora - nPeriferias, IEA-USP
        </Text>
        <Pressable onPress={() => console.log('Github')}>
          <View style={style.button}>
            <Text style={[style.defaultText,style.textButton]}>Open in Github
            </Text>
          </View>
        </Pressable>
        
      </View>
    </SafeAreaView>
    
    
  ); 
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGit,
    //Expande para a tela toda
    flex: 1,
    justifyContent: 'center',
  },
  content:{
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: colorFont,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  nickname: {
    fontSize: 18,
    color: colorDarkFont,
  },
  descricao: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    backgroundColor: colorDarkFont,
    borderRadius: 50,
    padding: 20,
  },
  textButton : {
    fontSize: 16,
    fontWeight: 'bold',
  },
})