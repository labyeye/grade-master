import LottieView from "lottie-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
const HomeScreen = ({navigation}) => {
    return (
        <View style={{flex:1,flexDirection:'column',alignItems:'center',backgroundColor:'#1a659e'}}>
            <LottieView style={{ width: "100%", height: "55%"}} source={require('../../Animations/grade.json')} autoPlay loop />
            <Text style={{fontSize:40,marginTop:30,fontWeight:'bold',color:'white'}}>Grade Master Pro</Text>
            <TouchableOpacity onPress={() => navigation.navigate('CalculateScreen')}
            style={{width:"80%",borderRadius:90,height:"7%",alignItems:'center',justifyContent:'center',backgroundColor:'#1b4965',marginTop:30}}>
                <Text style={{fontFamily:'JosefinSans-VariableFont_wght',color:'white'}}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
}
export default HomeScreen;