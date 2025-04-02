import { Text, View } from "react-native";
import Recommend from "./recommend";

export default function Manage(){
    return(
        <View style={{height:'100%',backgroundColor:"rgb(29, 26, 26)"}}>
            <View style={{paddingHorizontal:20,marginVertical:25}}>
                <Text style={{color:"#E5E5E5",fontSize:18}}>our recommendations work best when you let us know these things:</Text>
            </View>
            <View>
            <Recommend heading="YOU DIFFICULTY ✨" sub="you decide the level of challenge you want!" />
            <Recommend heading="INTERESTS YOU LIKE ✨" sub="we'll use these to show you cool builds" />
            <Recommend heading="TOOLS USED 🛠" sub="we'll suggest better using these picks" />
            </View>
        </View>
    )
}