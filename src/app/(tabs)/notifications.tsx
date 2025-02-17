import { View, Text } from "react-native"
import {colors} from "@/styles/colors"

export default function Notifications() {
    return (
        <View>
            <Text style={{ flex: 1, color: colors.white, justifyContent: "center", alignItems: "center" }}>
                Notifications
            </Text>
        </View>
    )
}