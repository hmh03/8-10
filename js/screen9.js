import { View, Text, TextInput,Image,ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const screen9 = ()=>{
    const navigation = useNavigation();
    return(
        <View style={{ marginVertical: 44,marginHorizontal: 18}}>
            <View style={{  flexDirection: "row" , justifyContent: "space-between"  }}>
                <Image source={require('../assets/favicon.png')} />
                <Text style={{fontSize: 30}}> Shop</Text>
                <Image source={require('../assets/favicon.png')} />
            </View>
            <ScrollView >
                <View style={{marginVertical: 10}} >
                    <Image source={require('../assets/1.png')} 
                    style={{height: 100, borderRadius: 20,opacity: 1.2 }} />
                    <Text
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: [{ translate: [-30, -20] }],
                        color: "black",
                        fontSize: 20,
                        fontWeight: "bold",
                    }}> SHOES</Text>
                </View>
                <View style={{marginVertical: 10}} >
                    <Image source={require('../assets/2.png')} 
                    style={{height: 100, borderRadius: 20,opacity: 1.2, alignSelf: "center", resizeMode: "contain" }} />
                    <Text
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: [{ translate: [-70, -20] }],
                        color: "black",
                        fontSize: 20,
                        fontWeight: "bold",
                    }}> ACCESSORIES</Text>
                </View>
                <View style={{marginVertical: 10}} >
                    <Image source={require('../assets/6.png')} 
                    style={{height: 100, borderRadius: 20,opacity: 1.2 ,alignSelf: "center" ,resizeMode: "contain"}} />
                    <Text
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: [{ translate: [-50, -20] }],
                        color: "white",
                        fontSize: 20,
                        fontWeight: "bold",
                    }}> WATCHES</Text>
                </View>
                <View style={{marginVertical: 10}} >
                    <Image source={require('../assets/7.png')} 
                    style={{height: 100, borderRadius: 20,opacity: 1.2 ,resizeMode: "contain"}} />
                    <Text
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: [{ translate: [-30, -20] }],
                        color: "black",
                        fontSize: 20,
                        fontWeight: "bold",
                    }}> BANGS</Text>
                </View>
                <View style={{marginVertical: 10}} >
                    <Image source={require('../assets/9.png')} 
                    style={{height: 100, borderRadius: 20,opacity: 1.2 ,alignSelf: "center" }} />
                    <Text
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: [{ translate: [-50, -20] }],
                        color: "black",
                        fontSize: 20,
                        fontWeight: "bold",
                    }}> DRESSES</Text>
                </View>
                <View style={{marginVertical: 10}} >
                    <Image source={require('../assets/8.png')} 
                    style={{height: 100, borderRadius: 20,opacity: 1.2 ,alignSelf: "center" }} />
                    <Text
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: [{ translate: [-50, -20] }],
                        color: "white",
                        fontSize: 20,
                        fontWeight: "bold",
                    }}> WATCHES</Text>
                </View>
            </ScrollView>
        </View>
    );
};
export default screen9;