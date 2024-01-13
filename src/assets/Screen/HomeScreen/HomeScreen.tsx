import LottieView from "lottie-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
const HomeScreen = ({navigation}) => {
    return (
        <View style={{flex:1,flexDirection:'column',alignItems:'center',backgroundColor:'#62b6cb'}}>
            <LottieView style={{ width: "100%", height: "70%"}} source={require('../../Animations/grade.json')} autoPlay loop />
            <TouchableOpacity onPress={() => navigation.navigate('CalculateScreen')}
            style={{width:"80%",borderRadius:90,height:"7%",alignItems:'center',justifyContent:'center',borderWidth:2,backgroundColor:'#1b4965'}}>
                <Text style={{fontFamily:'Salina-Trial-Book.ttf',color:'white'}}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
}
export default HomeScreen;