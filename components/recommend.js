import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Recommend(props){
    return(
        <TouchableOpacity>
        <View style={{flexDirection:'row', justifyContent:"space-between",borderColor:"rgba(255, 242, 242, 0.2)",borderBottomWidth:2,paddingHorizontal:20,paddingVertical:25}}>
            <View>
                <Text style={{color:"#D4D4D4",fontSize:14,marginBottom:10}}>{props.heading}</Text>
                <Text style={{color:"#A3A3A3",fontSize:14}}>{props.sub}</Text>
            </View>
            <View style={{flex:1,justifyContent:"center",alignItems:"flex-end"}}>
                <Image height={7} width={13.33} style={{height:16.33,width:7.33}} source={require("../assets/arrow.png")} />
            </View>
        </View>
        </TouchableOpacity>
    )
}