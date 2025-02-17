import { View, Text } from "react-native"
import {colors} from "@/styles/colors"

export default function Search() {
    return (
        <View>
            <Text style={{ flex: 1, color: colors.white, justifyContent: "center", alignItems: "center" }}>
                Search
            </Text>
        </View>
    )
}